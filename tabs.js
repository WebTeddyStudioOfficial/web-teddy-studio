function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    }
	document.getElementById(tabName).style.display = "block";
}
  
  function openApp(appName) {
	if (logStatus == true) {
    hideAllWindows();
      document.getElementById(appName).style.display = "block";
      document.getElementById('deskpad').style.display = "none";
	  if (appName == "files") {
		displayLocalStorage();
		  document.getElementById('filesearch').value = "";
		  document.getElementById('editor').value = "";
	  } else if (appName == "appstore") {
		renderAppstore();
		append();
	  }
	} else if (logStatus == false) {
		noti('You must login to open this app');
	} else {
		noti('Corrupt');
	}
  }
  
  function closeApp(appName) {
	if (logStatus == true) {
		if (appName == "textEditor") {
			if (textSaved == false) {
			alertSaveText = document.getElementById('editor').value;
			ask('Save?', function() {
				document.getElementById('editor').value = alertSaveText;
				saveText();
			});
				document.getElementById('editor').value = "";
				hideAllWindows();
				document.getElementById('deskpad').style.display = "flex";
		  } else {
			  document.getElementById('editor').value = "";
			  hideAllWindows();
				document.getElementById('deskpad').style.display = "flex";
		  }
		} else {
				hideAllWindows();
				document.getElementById('deskpad').style.display = "flex";
		}
		} else if (logStatus == false) {
			noti('You must login to close this app');
		} else {
			noti('Corrupt');
		}
  }

	function miniApp(appName) {
		hideAllWindows();
		document.getElementById('deskpad').style.display = "flex";
	}

	function closeApps() {
		if (logStatus == true) {
		hideAllWindows();
		document.getElementById('deskpad').style.display = "flex";
		} else if (logStatus == false) {
			noti('You must login to close this app');
		} else {
			noti('Corrupt');
		}
	}