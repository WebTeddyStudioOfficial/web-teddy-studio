function openNotiHistory() {
    openNotiPanel();
}

function fullscreenNoti() {
    closeNotiPanel();
    openApp('notiApp');
}

function miniNoti() {
    closeApp('notiApp');
    openNotiPanel();
}

function closeNotiPanel() {
    getEBD('notiPanel').style.display = "none";
}

function openNotiPanel() {
    getEBD('notiPanel').style.display = "block";
}

function openPowerPanel() {
    getEBD('powerPanel').style.display = "block";
}

function closePowerPanel() {
    getEBD('powerPanel').style.display = "none";
}