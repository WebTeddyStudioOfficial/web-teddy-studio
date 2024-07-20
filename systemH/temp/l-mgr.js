function publicLogin() {
	var passwordInput = document.getElementById('passwordInput');

	if (passwordInput.value == publicPassword) {
		document.getElementById('login').style.display = "none";
		document.getElementById('deskpad').style.display = "flex";
		document.getElementById('hintOutput').innerHTML = "";
		passwordInput.value = "";
		logStatus = true;
		if (localStorage.getItem('inactiveAppName')) {
			logStatus = true;
			document.getElementById('login').style.display = 'none';
			document.getElementById('deskpad').style.display = 'flex';
			let apptoopen = localStorage.getItem('inactiveAppName');
			const donotopen = [
    			'login',
    			'register',
    			'loginMenu'
			];

			if (!donotopen.includes(apptoopen)) {
    			openApp(apptoopen);
				displayLocalStorage();
				noti('Continuing where you left off.', 'Login Service', 'systemH/accessibility/logout.png');
			}
			localStorage.removeItem('inactiveAppName');
			if (localStorage.getItem('TextEditorAutosave')) {
				noti('Text editor saved to file TextEditorAutosave', 'Login Service', 'systemH/accessibility/logout.png');
			}
			startupSound.play();
		}
	} else {
		document.getElementById('hintOutput').innerHTML = hint;
		passwordInput.value = "";
		noti('Sorry. Incorrect Password', 'Login Service', 'systemH/accessibility/logout.png');
		logStatus = false;
	}
}