const ramTop = 3000;
let started = false;

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (started == false) {
            noti('Failed to Start Universe', 'Firmware', 'systemH/thumbnails/favicon.ico');
            forceCriticalError('Startup Failed', 'Firmware', 'systemH/thumbnails/favicon.ico');
        }
    }, 5000);
});

function forceCriticalError(message, activatedBy, activatedLogo) {
    hideAllWindows();
    getEBD('dock').style.display = "none";
    updateWindowSize();
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    windows = document.querySelectorAll('.window, .window2, .button');
    windows.forEach(function(window) {
        window.style.backgroundColor = "black";
        window.style.borderColor = "black";
        window.style.color = "white";
    });
    getEBD('critError').style.display = "block";
    var critErrorSound = new Audio('systemH/firmware/criticalError.mp3');
    critErrorSound.play();
    getEBD('criterrorlogo').src = activatedLogo;
    getEBD('criterrormessage').innerHTML = "Error Message: " + message;
    getEBD('criterrorby').innerHTML = "Error Initiated By: " + activatedBy;
}

function shutdown() {
    saveStorage();
    hideAllWindows();
    document.getElementById('dock').style.display = "none";
    document.getElementById('load').style.display = "block";
    updateWindowSize();
    clearInterval(apisInterval);
    clearInterval(constantInterval);
    setTimeout(function() {
        window.close();
    }, 750);
}

function restart() {
    saveStorage();
    hideAllWindows();
    document.getElementById('dock').style.display = "none";
    document.getElementById('load').style.display = "block";
    updateWindowSize();
    clearInterval(apisInterval);
    clearInterval(constantInterval);
    setTimeout(function() {
        location.reload();
    }, 750);
}

function logout() {
    logStatus = false;
    hideAllWindows();
    document.getElementById('loginMenu').style.display = 'block';
}

function finishLoad() {

    // Get estimated load time for system hardware
    function getLoadTime() {
        const minRequiredLoadTime = 1500;
        let loadTime = Math.random() * (ramTop - minRequiredLoadTime) + minRequiredLoadTime;
    
        return loadTime;
    }

    setTimeout(function() {
    loadStorage();
    apisInterval = setInterval(apisConstant, 500);
    constantInterval = setInterval(constantRunning, constantSpeed);
    setInterval(function() {
        window.onerror = function(message, source, lineno, colno, error) {
            if (message.includes('Failed to load')) {
                noti('Universe is running offline', 'Firmware', 'systemH/thumbnails/favicon.ico');
                return true;
            } else {
                console.error('An error occurred:', message);
                efx.play();
                noti('Error', 'Firmware', 'systemH/thumbnails/favicon.ico');
            }
        };
    }, 1);
    window.addEventListener('resize', updateWindowSize);
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keypress", handleActivity);
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], input[type="number"], input');
    
    inputs.forEach(function(input) {
        input.setAttribute('autocomplete', 'off');
    });
    
    inputs.forEach(function(input) {
        input.addEventListener('input', function(event) {
            let value = event.target.value;
            let blockedCharacters = ["'", '"'];
            
            blockedCharacters.forEach(function(character) {
                if (value.includes(character)) {
                    event.target.value = value.slice(0, -1);
                    msgBox(`You cannot use the characters: ' (call mark) or " (quotation mark) the used have been automatically removed.`);
                }
            });
        });
    });
    hideAllWindows();
    loadTheme();
    document.getElementById('dock').style.display = "block";
    logout();
    started = true;
    runVersioncheck();
    }, getLoadTime());
}

function apisConstant() {
    constantAPISupdate();
    constantAPIS();
    updateBatteryLevel();
}

function constantRunning() {
    saveStorage();
    loadStorage();
    displayAmounts();
    checkPassword();
    updateWindowSize();
    checkForTextSave();
}

function saveTheme() {
    setLS('theme', theme);
}

function loadTheme() {
    theme = getLS('theme') || 'dark';
    toggletheme();
    toggletheme();
    let bgtype = getLS('bgtype') || 'image';
    if (bgtype == "image") {
        let bg = getLS('bg') || 'systemH/firmware/bg.jpg';
        document.body.style.backgroundImage = `url('${bg}')`;
        document.body.style.backgroundColor = "aliceblue";
    } else if (bgtype == "color") {
        let bg = getLS('bg') || 'aliceblue';
        document.body.style.backgroundColor = bg;
    }
}

function checkPassword() {
    if (!publicPassword == "") {
        document.getElementById('passwordInput').style.display = "block";
        document.getElementById('h').style.display = "none";
    } else {
        document.getElementById('passwordInput').style.display = "none";
        document.getElementById('h').style.display = "block";
    }
}

function loadStorage() {
    publicPassword = localStorage.getItem('password') || "";
    hint = localStorage.getItem('hint') || "Hint: " + "There is no hint";
    username = localStorage.getItem('username') || "User";
    document.getElementById('usernameOutput').innerHTML = username;
    trashcan = JSON.parse(localStorage.getItem('trashcan')) || [];
}

function saveStorage() {
    localStorage.setItem('password', publicPassword);
    localStorage.setItem('hint', hint);
    localStorage.setItem('username', username);
    localStorage.setItem('trashcan', JSON.stringify(trashcan));
}

function hideAllWindows() {
    document.querySelectorAll('.window, .window2, .deskpad, .tabcontent').forEach(function (element) {
        element.style.display = 'none';
    });
}

// Function to update window size
function updateWindowSize() {
    var dockElements = document.querySelectorAll('.dock');
    var windowElements = document.querySelectorAll('.window, .notiPanel, .window2');

    dockElements.forEach(function(dockElement) {
        var dockHeight = dockElement.offsetHeight;
        windowElements.forEach(function(windowElement) {
            windowElement.style.height = 'calc(100% - ' + dockHeight + 'px)';
        });
    });
}

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(handleInactive, inactivityThreshold);
}

function handleInactive() {
    let windows = document.querySelectorAll('.window');
    let foundVisibleWindow = false;

    windows.forEach((window) => {
        let style = getComputedStyle(window);
        if (style.display === 'block') {
            foundVisibleWindow = true;
            systemFiles.push('inactiveAppName');
            localStorage.setItem('inactiveAppName', window.id);
        }
    });

    if (getEBD('editor').value !== "") {
        setLS('TextEditorAutosave', getEBD('editor').value);
    }

    if (!foundVisibleWindow || foundVisibleWindow) {
        clearInterval(apisInterval);
        clearInterval(constantInterval);
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
        windows = document.querySelectorAll('.window, .window2, .button');
        windows.forEach(function(window) {
            window.style.backgroundColor = "black";
            window.style.borderColor = "black";
            window.style.color = "white";
        });
        const newWindow = window.open("", "Screensaver", `width=${screen.width},height=${screen.height},top=0,left=0`);
    if (newWindow) {
        document.body.innerHTML = `
        <div class="window2">
            <div class="middleDiv">
                <h1>Screensaver active</h1>
                <button class="button" onClick="location.reload();">I'm Active</button>
            </div>
        </div>
        `;

        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Universe Screensaver</title>
                <style>
                    body, html {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #000;
                        font-family: Arial, sans-serif;
                        cursor: none;
                    }

                    .shape {
                        position: absolute;
                        width: 50px;
                        height: 50px;
                        animation: float 5s infinite;
                        opacity: 0;
                    }

                    .message {
                        width: auto;
                        height: auto;
                        padding: 10px;
                        background: rgba(0, 0, 0, 0.7);
                        color: white;
                        font-size: 20px;
                        text-align: center;
                        border-radius: 10px;
                        animation: floatMessage 5s infinite;
                        position: fixed;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .square { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); }
                    .circle { border-radius: 50%; }
                    .heart {
                        clip-path: polygon(50% 15%, 61% 8%, 75% 8%, 84% 15%, 84% 30%, 75% 45%, 50% 70%, 25% 45%, 16% 30%, 16% 15%, 25% 8%, 39% 8%);
                    }
                    .star {
                        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                    }
                    .diamond {
                        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                    }
                    .triangle {
                        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    }
                    .hexagon {
                        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                    }
                    .octagon {
                        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
                    }
                    .pentagon {
                        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
                    }

                    @keyframes float {
                        0% {
                            opacity: 0;
                            transform: translateY(0);
                        }
                        50% {
                            opacity: 1;
                            transform: translateY(-20px);
                        }
                        100% {
                            opacity: 0;
                            transform: translateY(0);
                        }
                    }

                    @keyframes floatMessage {
                        0% {
                            opacity: 0;
                            transform: translateY(0);
                        }
                        50% {
                            opacity: 1;
                            transform: translateY(-20px);
                        }
                        100% {
                            opacity: 0;
                            transform: translateY(0);
                        }
                    }
                </style>
            </head>
            <body>
                <script>
                    function getRandomColor() {
                        const letters = '0123456789ABCDEF';
                        let color = '#';
                        for (let i = 0; i < 6; i++) {
                            color += letters[Math.floor(Math.random() * 16)];
                        }
                        return color;
                    }
                
                    function getRandomGradient() {
                        const color1 = getRandomColor();
                        const color2 = getRandomColor();
                        return 'linear-gradient(45deg, ' + color1 + ', ' + color2 + ')';
                    }
                
                    function createShapes(numShapes) {
                        const shapes = document.querySelectorAll('.shape');
                        shapes.forEach(shape => shape.remove());

                        const shapeTypes = ['square', 'circle', 'heart', 'star', 'diamond', 'triangle', 'hexagon', 'octagon', 'pentagon'];
                        for (let i = 0; i < numShapes; i++) {
                            const shape = document.createElement('div');
                            shape.className = 'shape ' + shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
                            shape.style.left = Math.random() * 100 + 'vw';
                            shape.style.top = Math.random() * 100 + 'vh';
                            shape.style.background = Math.random() < 0.5 ? getRandomColor() : getRandomGradient();
                            shape.style.animationDuration = Math.random() * 3 + 2 + 's';

                            const floatKeyframe = 'float ' + (Math.random() * 5 + 2) + 's infinite';
                            shape.style.animation = floatKeyframe;

                            document.body.appendChild(shape);
                        }

                        createMessageShape();
                    }

                    function createMessageShape() {
                        let message = document.querySelector('.message');
                        if (!message) {
                            message = document.createElement('div');
                            message.className = 'message';
                            message.textContent = 'Click or Press a key to return to Universe';
                            document.body.appendChild(message);
                        }
                    }

                    function redirectToUniverse() {
                        window.close();
                        opener.location.reload();
                    }

                    document.addEventListener('click', redirectToUniverse);
                    document.addEventListener('keypress', redirectToUniverse);
                
                    createShapes(75);
                    setInterval(createShapes, 15000, 75);
                    setInterval(createMessageShape, 15000);
                </script>
            </body>
            </html>
        `);
    } else {
        alert("Pop-up blocked! Please allow pop-ups for this website.");
    }
    }
}

function handleActivity() {
    resetTimer();
}