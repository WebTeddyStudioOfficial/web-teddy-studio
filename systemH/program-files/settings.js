function changeHint() {
	hint = "Hint: " + document.getElementById('changeHintInput').value;
	if (hint == "Hint: " + document.getElementById('changeHintInput').value) {
		noti('Hint Changed', 'Settings', 'systemH/thumbnails/settings.png');
		document.getElementById('changeHintInput').value = "";
	} else  {
		noti('There was a problem changing the hint', 'Settings', 'systemH/thumbnails/settings.png');
		document.getElementById('changeHintInput').value = "";
	}
}

function changePassword() {
	if (document.getElementById('changePasswordInput3').value == publicPassword) {
	if (document.getElementById('changePasswordInput').value == document.getElementById('changePasswordInput2').value) {
		publicPassword = document.getElementById('changePasswordInput').value;
		if (publicPassword == document.getElementById('changePasswordInput').value) {
			noti('Password Changed', 'Settings', 'systemH/thumbnails/settings.png');
			document.getElementById('changePasswordInput').value = ""; 
			document.getElementById('changePasswordInput2').value = "";
			} else {
			noti('There was a problem changing your password', 'Settings', 'systemH/thumbnails/settings.png');
		}
	} else {
		noti('Passwords are not the same', 'Settings', 'systemH/thumbnails/settings.png');
	}
	} else {
		noti('Old password incorrect', 'Settings', 'systemH/thumbnails/settings.png');
	}
}

function changeUsername() {
	username = document.getElementById('changeUsernameInput').value;
	if (username == document.getElementById('changeUsernameInput').value) {
		noti('Username has been changed', 'Settings', 'systemH/thumbnails/settings.png');
		document.getElementById('changeUsernameInput').value = "";
		document.getElementById('usernameOutput').innerHTML = username;
	} else {
		document.getElementById('changeUsernameInput').value = "";
		noti('There was a problem changing your password', 'Settings', 'systemH/thumbnails/settings.png');
	}
}

function settingsFn(fn) {
	if (fn == "deletePassword") {
		if (document.getElementById('changePasswordInput3').value == publicPassword) {
			publicPassword = "";
			noti('Password has been deleted', 'Settings', 'systemH/thumbnails/settings.png');
			document.getElementById('changePasswordInput3').value = "";
		} else {
			noti('Please enter your old password', 'Settings', 'systemH/thumbnails/settings.png');
			document.getElementById('changePasswordInput3').value = "";
		}
	} else if (fn == "deleteUsername") {
		username = "";
		noti('Username has been deleted', 'Settings', 'systemH/thumbnails/settings.png');
	} else if (fn == "deleteHint") {
		hint = "";
		noti('Hint has been deleted', 'Settings', 'systemH/thumbnails/settings.png');
	}
}

function changeBg(url) {
	localStorage.setItem('bgtype', 'image');
	document.body.style.backgroundImage = `url('${url}')`;
	localStorage.setItem('bg', url);
}

function changeCol(special) {
	const colselect = document.getElementById('settingscolorbg');
	localStorage.setItem('bgtype', 'color');
	document.body.style.backgroundImage = "none";
	if (special == 'default') {
		document.body.style.backgroundColor = "aliceblue";
		localStorage.setItem('bg', 'aliceblue');
	} else {
		document.body.style.backgroundColor = colselect.value;
		localStorage.setItem('bg', colselect.value);
	}
}

function applyNewTimeout(variable) {
	if (variable == "noti") {
		notiTimeout = getEBD('settingsNewTimeout').value * 1000;
		setLS('notiTimeout', getEBD('settingsNewTimeout').value * 1000);
		noti("Successfully changed", 'Settings', 'systemH/thumbnails/settings.png')
	}
}