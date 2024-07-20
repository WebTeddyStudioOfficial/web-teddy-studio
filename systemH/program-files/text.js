function saveText() {
    document.getElementById('saveFilesOutput').style.display = "block";
    displaySaveFiles();
    askValue('<h4><b><i>Enter a save name or click above to overwrite a file</i></b><br>You will receive an <b>error</b> if the file is too big.</h4>', function() {
        let text = document.getElementById('editor').value;
        let filename = document.getElementById('askValueInput').value;
        
        if (systemFiles.includes(filename)) {
            noti('Cannot save as a system file', 'Text Editor', 'systemH/thumbnails/text.png');
        } else {
                if (getLS(filename)) {
                    ask(filename + ' is <b>already a file</b>, <b>replace</b> it?', function() {
                        setLS(filename, text);
                        noti('Overwritten as: ' + filename, 'Text Editor', 'systemH/thumbnails/text.png');
                        closeAskValue();
                    });
                } else {
                    setLS(filename, text);
                    noti('Saved as: ' + filename, 'Text Editor', 'systemH/thumbnails/text.png');
                    closeAskValue();
                }
            }
        });
}

function checkForTextSave() {
	let editor = document.getElementById('editor');
	if (editor.value == savedText) {
		textSaved = true;
	} else if (editor.value == "") {
		textSaved = true;
	} else {
		textSaved = false;
	}
}

function loadText(key) {
    openApp('textEditor');
	document.getElementById('editor').value = getLS(key) || "";
}

function downloadText() {
    askValue('Please enter a filename for the download', function() {
        var textToDownload = document.getElementById('editor').value;
        var filename = document.getElementById('askValueInput').value;
    
        if (!filename || !filename.trim()) {
            noti("Please enter a filename.", 'Text Editor', 'systemH/thumbnails/text.png');
            return;
        }
    
        var blob = new Blob([textToDownload], { type: 'text' });
        var link = document.createElement('a');
        link.download = filename;
        link.href = window.URL.createObjectURL(blob);
        link.click();
    });
}

function displaySaveFiles() {
        let localStorageContents = "";
    
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
    
            if (systemFiles.includes(key)) {
                continue;
            } else if (trashcan.includes(key)) {
                continue;
            }
    
            var value = localStorage.getItem(key);
            var fileSize = formatBytes((key.length + value.length) * 2);
    
            localStorageContents += '<p onClick="saveAsFile(\'' + key + '\')" class="files-section">' +
                '<span class="files-span">S:/Files/</span>' + key +
                '<span class="filesizespan"><b>(' + fileSize + ')</b>&nbsp;</span>' +
                '</p>';
        }
        document.getElementById('saveFilesOutput').innerHTML = localStorageContents;
}

function saveAsFile(key) {
    const value = document.getElementById('editor').value;
    ask(key + ' <b>Exists, do you want to overwrite it?</b>', function() {
        localStorage.setItem(key, value);
        noti('<b>File overwriteen as: </b>' + key, 'Text Editor', 'systemH/thumbnails/text.png');
    });
}