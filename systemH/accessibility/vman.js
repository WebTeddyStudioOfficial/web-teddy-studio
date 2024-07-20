document.addEventListener('DOMContentLoaded', function() {
    var brightnessContainer = document.getElementById('brightnessContainer');
    var brightnessRange = document.querySelector('.brightnessSlider');

    brightnessRange.addEventListener("input", function() {
        const brightnessValue = this.value / 100;
        brightnessContainer.style.backgroundColor = `rgba(0, 0, 0, ${1 - brightnessValue})`;
    });
});

document.getElementById('askValueButton2').addEventListener('click', closeAskValue);
document.getElementById('askValueButton').addEventListener('click', closeAskValue);
document.getElementById('askButton2').addEventListener('click', closeAsk);
document.getElementById('askButton').addEventListener('click', closeAsk);

function askValue(text, onclick) {
    let p2 = document.getElementById('p2');
    let askValueContainer = document.getElementById('askValue');
    
    askValueContainer.style.display = "block";
    p2.innerHTML = text;
    document.getElementById('askValueInput').value = "";
    document.getElementById('askValueButton').onclick = onclick;
}


function closeAskValue() {
    let p2 = document.getElementById('p2');
    let askValueContainer = document.getElementById('askValue');

    askValueContainer.style.display = "none";
    p2.innerHTML = "No Message";
    document.getElementById('saveFilesOutput').style.display = "none";
}

function ask(text, onclick) {
	let p3 = document.getElementById('p3');
	let askContainer = document.getElementById('ask');

	askContainer.style.display = "block";
	p3.innerHTML = text;
	document.getElementById('askButton').onclick = onclick;
}

function closeAsk() {
	let p3 = document.getElementById('p3');
    let askContainer = document.getElementById('ask');

    askContainer.style.display = "none";
    p3.innerHTML = "No Message";
}

function msgBox(text) {
	let msgContent = document.getElementById('msgBoxContent');
	msgContent.innerHTML = text;
	document.getElementById('msgBox').style.display = "block";
}

function closeMsgBox() {
	let msgContent = document.getElementById('msgBoxContent');
	msgContent.innerHTML = "Loading..";
	document.getElementById('msgBox').style.display = "none";
}

function sMsgBox(text) {
	let msgContent = document.getElementById('sMsgBoxContent');
	msgContent.innerHTML = text;
	document.getElementById('sMsgBox').style.display = "block";
}

function closeSMsgBox() {
	let msgContent = document.getElementById('sMsgBoxContent');
	msgContent.innerHTML = "Loading..";
	document.getElementById('sMsgBox').style.display = "none";
}

function togglefullscreen() {
    let windows = document.querySelectorAll('.window');
    let docks = document.querySelectorAll('.dock');

    if (fillmode === "fill") {
        fillmode = "nofill";
        docks.forEach(function(dock) {
            let dockHeight = dock.clientHeight;
            windows.forEach(function(window) {
                window.style.height = 'calc(100% - ' + dockHeight + 'px)';
            });
            dock.style.display = "block";
        });
    } else if (fillmode === "nofill") {
        fillmode = "fill";
        windows.forEach(function(window) {
            window.style.height = "100%";
		});
		
        docks.forEach(function(dock) {
            dock.style.display = "none";
        });
    }
	updateWindowSize();
}

function togglefocus() {
	if (focusMode == true) {
	focusMode = false;
	noti('Focus mode is off.');	
	} else if (focusMode == false) {
		noti('Focus mode is on.');
		focusMode = true;
	}
}