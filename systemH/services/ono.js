let notificationQueue = [];
let isDisplaying = false;
let currentTimeout;

function noti(message, appName = "???", appIcon = "systemH/accessibility/noti.png") {
    if (focusMode == false) {
        notificationQueue.push({ message, appName, appIcon });

        if (!isDisplaying) {
            isDisplaying = true;
            displayNotification();
        }
    } else if (focusMode == true) {
        return;
    } else {
        console.error('Focus Mode Error');
    }
}

function displayNotification() {
    if (notificationQueue.length === 0) {
        isDisplaying = false;
        return;
    }

    var noti = document.getElementById('notification');
    var p = document.getElementById('p');
    var notiAppName = document.getElementById('noti-app-name');
    var notiIcon = document.getElementById('noti-icon');

    var currentNotification = notificationQueue.shift();
    
    notiIcon.src = currentNotification.appIcon || "systemH/accessibility/noti.png";
    notiAppName.innerHTML = currentNotification.appName || "???";
    p.innerHTML = currentNotification.message;

    noti.style.display = "block";
    nfx.play();

    addNotificationToHistory(currentNotification.message);

    currentTimeout = setTimeout(function() {
        if (noti.style.display === "block") {
            noti.style.display = "none";
            displayNotification();
        }
    }, notiTimeout);
}

function closeNotification() {
    var noti = document.getElementById('notification');
    noti.style.display = "none";
    clearTimeout(currentTimeout);
    displayNotification();
}

function addNotificationToHistory(message) {
    let output2 = getEBD('notiAppOutput');
    let output = document.getElementById('notiPanelOutput');
    output.innerHTML += message;
    output.innerHTML += "<br>";
    output2.innerHTML += message;
    output2.innerHTML += "<br>";
}

function clearNotis() {
    let output2 = getEBD('notiAppOutput');
    let output = document.getElementById('notiPanelOutput');
    output.innerHTML = "";
    output2.innerHTML = "";
}