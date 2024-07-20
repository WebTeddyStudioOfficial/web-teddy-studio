function toggletheme() {
    let padIcons = document.querySelectorAll('.padIcon');
    let buttons = document.querySelectorAll('.button, .input');
    let dockbs = document.querySelectorAll('.dock-accIcon, .dock-time-accIcon');
	let windows = document.querySelectorAll('.window, .window2');
	let docks = document.querySelectorAll('.dock');
	let tablinks = document.querySelectorAll('.tablink');
	let accicons = document.querySelectorAll('.accIcon');
	let filesaccicons = document.querySelectorAll('.files-accIcon');
	let filesections = document.querySelectorAll('.files-section');
	let notis = document.querySelectorAll('.notification, .notiPanel');
	let openOMs = document.querySelectorAll('.optionMenu');
	let asks = document.querySelectorAll('.ask');
	let askValues = document.querySelectorAll('.askValue');
	let editors = document.querySelectorAll('.textEditor');
	let tabs = document.querySelectorAll('.tabs');
	let contextMenus = document.querySelectorAll('.contextMenu');
	let sublists = document.querySelectorAll('.sublist');
	let filestextaccicons = document.querySelectorAll('.files-text-accIcon');

    if (theme == 'light') {
        theme = 'dark';
		notis.forEach(function(noti) {
			noti.style.backgroundColor = "rgb(97, 97, 97, 0.7)";
			noti.style.border = "3px solid rgb(97, 97, 97, 0.5)";
			noti.style.color = "white";
		});

		sublists.forEach(function(sublist) {
			sublist.style.backgroundColor = "rgb(97, 97, 97, 0.7)";
		});

		contextMenus.forEach(function(contextMenu) {
			contextMenu.style.backgroundColor = "rgb(97, 97, 97)";
			contextMenu.style.border = "1px solid rgb(97, 97, 97)";
		});

		tabs.forEach(function(tab) {
			tab.style.backgroundColor = "rgb(97, 97, 97, 0.7)"
			tab.style.border = "none";
		});

		editors.forEach(function(editor) {
			editor.style.backgroundColor = "rgb(97, 97, 97, 0.5)";
			editor.style.color = "white";
		});

		asks.forEach(function(ask) {
			ask.style.backgroundColor = "black";
			ask.style.border = "3px solid black";
		});

		askValues.forEach(function(askValue) {
			askValue.style.backgroundColor = "black";
			askValue.style.border = "3px solid black";
		});

		openOMs.forEach(function(openOM) {
			openOM.style.backgroundColor = "rgb(97, 97, 97, 0.7)";
			openOM.style.border = "3px solid rgb(97, 97, 97, 0.5)";
		});
		
        padIcons.forEach(function(padIcon) {
            padIcon.style.backgroundColor = "rgb(97, 97, 97, 0.7)";
            padIcon.style.border = "none";
        });

		windows.forEach(function(window) {
			window.style.backgroundColor = "rgb(97, 97, 97, 0.7)";
		});

		buttons.forEach(function(button) {
			button.style.backgroundColor = "rgb(97, 97, 97)";
			button.style.border = "4px solid rgb(97, 97, 97)";
		});

		docks.forEach(function(dock) {
			dock.style.backgroundColor = "rgb(97, 97, 97, 0.7)";
			dock.style.border = "3px solid rgb(97, 97, 97, 0.5)";
			dock.style.color = "white";
		});

		dockbs.forEach(function(dockb) {
    		dockb.style.backgroundColor = "rgb(97, 97, 97)";
    		dockb.style.border = "2px solid rgb(97, 97, 97)";
			dockb.style.color = "white";
		});

		tablinks.forEach(function(tablink) {
			tablink.style.backgroundColor = "rgb(97, 97, 97)";
			tablink.style.color = "white";
		});

		accicons.forEach(function(accicon) {
			accicon.style.backgroundColor = "rgb(97, 97, 97)";
    		accicon.style.border = "4px solid rgb(97, 97, 97)";
		});

		filesaccicons.forEach(function(filesaccicon) {
			filesaccicon.style.backgroundColor = "rgb(97, 97, 97)";
    		filesaccicon.style.border = "4px solid rgb(97, 97, 97)";
		});

		filestextaccicons.forEach(function(filestextaccicon) {
			filestextaccicon.style.backgroundColor = "rgb(97, 97, 97)";
    		filestextaccicon.style.border = "4px solid rgb(97, 97, 97)";
			filestextaccicon.style.color = "white";
		});

		filesections.forEach(function(section) {
			section.style.backgroundColor = "rgb(97, 97, 97)";
    		section.style.border = "2px solid rgb(97, 97, 97)";
			section.style.color = "white";
		});
		document.body.style.color = "white";
		saveTheme();
    } else if (theme == 'dark') {
        theme = 'light';
		notis.forEach(function(noti) {
			noti.style.backgroundColor = "rgb(194, 226, 255, 0.7)";
			noti.style.border = "3px solid rgb(194, 226, 255, 0.5)";
			noti.style.color = "black";
		});

		sublists.forEach(function(sublist) {
			sublist.style.backgroundColor = "rgb(194, 226, 225, 0.7)";
		});

		contextMenus.forEach(function(contextMenu) {
			contextMenu.style.backgroundColor = "rgb(194, 226, 255)";
			contextMenu.style.border = "1px solid rgb(194, 226, 225)";
		});

		tabs.forEach(function(tab) {
			tab.style.backgroundColor = "rgb(194, 226, 255, 0.7)"
			tab.style.border = "none";
		});

		editors.forEach(function(editor) {
			editor.style.backgroundColor = "rgb(194, 226, 255, 0.5)";
			editor.style.color = "black";
		});

		asks.forEach(function(ask) {
			ask.style.backgroundColor = "white";
			ask.style.border = "3px solid white";
		});

		askValues.forEach(function(askValue) {
			askValue.style.backgroundColor = "white";
			askValue.style.border = "3px solid white";
		});

		openOMs.forEach(function(openOM) {
			openOM.style.backgroundColor = "rgb(194, 226, 255, 0.7)";
			openOM.style.border = "3px solid rgb(194, 226, 255, 0.5)";
		});
		
        padIcons.forEach(function(padIcon) {
            padIcon.style.backgroundColor = "rgb(0, 142, 189, 0.7)";
            padIcon.style.border = "none";
        });

		windows.forEach(function(window) {
			window.style.backgroundColor = "rgb(240, 248, 255, 0.9)";
		});

		buttons.forEach(function(button) {
			button.style.backgroundColor = "rgb(0, 142, 189)";
			button.style.border = "4px solid rgb(0, 142, 189)";
		});

		docks.forEach(function(dock) {
			dock.style.backgroundColor = "rgb(194, 226, 255, 0.7)";
			dock.style.border = "3px solid rgb(194, 226, 255, 0.5)";
			dock.style.color = "black";
		});

		dockbs.forEach(function(dockb) {
			dockb.style.backgroundColor = "#85c6ff";
			dockb.style.border = "2px solid #85c6ff";
			dockb.style.color = "black";
		});

		tablinks.forEach(function(tablink) {
			tablink.style.backgroundColor = "aliceblue";
			tablink.style.color = "black";
		});

		accicons.forEach(function(accicon) {
			accicon.style.backgroundColor = "rgb(0, 142, 189)";
    		accicon.style.border = "4px solid rgb(0, 142, 189)";
		});

		filesaccicons.forEach(function(filesaccicon) {
			filesaccicon.style.backgroundColor = "rgb(0, 142, 189)";
    		filesaccicon.style.border = "4px solid rgb(0, 142, 189)";
		});

		filestextaccicons.forEach(function(filestextaccicon) {
			filestextaccicon.style.backgroundColor = "rgb(0, 142, 189)";
    		filestextaccicon.style.border = "4px solid rgb(0, 142, 189)";
			filestextaccicon.style.color = "black";
		});

		filesections.forEach(function(section) {
			section.style.backgroundColor = "lightblue";
    		section.style.border = "2px solid lightblue";
			section.style.color = "black";
		});
		document.body.style.color = "black";
		saveTheme();
    }
}