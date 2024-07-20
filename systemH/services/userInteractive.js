function userLogout(action) {
    if (action == "open") {
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
        getEBD('logoutMenu').style.display = "block";
    } else if (action == "close") {
        if (logStatus == true) {
            getEBD('dock').style.display = "block";
            hideAllWindows();
            loadTheme();
            getEBD('deskpad').style.display = "flex";
            updateWindowSize();
        } else if (logStatus == false) {
            getEBD('dock').style.display = "block";
            loadTheme();
            updateWindowSize();
            logout();
        }
    } else if (action == "confirm") {
        getEBD('dock').style.display = "block";
        loadTheme();
        updateWindowSize();
        logout();
    }
}

function userRestart(action) {
    if (action == "open") {
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
        getEBD('restartMenu').style.display = "block";
    } else if (action == "close") {
        if (logStatus == true) {
            getEBD('dock').style.display = "block";
            hideAllWindows();
            loadTheme();
            getEBD('deskpad').style.display = "flex";
            updateWindowSize();
        } else if (logStatus == false) {
            getEBD('dock').style.display = "block";
            loadTheme();
            updateWindowSize();
            logout();
        }
    } else if (action == "confirm") {
        restart();
    }
}

function userShutdown(action) {
    if (action == "open") {
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
        getEBD('shutdownMenu').style.display = "block";
    } else if (action == "close") {
        if (logStatus == true) {
            getEBD('dock').style.display = "block";
            hideAllWindows();
            loadTheme();
            getEBD('deskpad').style.display = "flex";
            updateWindowSize();
        } else if (logStatus == false) {
            getEBD('dock').style.display = "block";
            loadTheme();
            updateWindowSize();
            logout();
        }
    } else if (action == "confirm") {
        shutdown();
    }
}