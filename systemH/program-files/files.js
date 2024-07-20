function displayLocalStorage() {
    document.getElementById("localStorageContents").innerHTML = loadSC;
    displayAmounts();
    var localStorageContents = "";
	localStorageContents += "User Files";

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if (systemFiles.includes(key) || trashcan.includes(key)) {
            continue;
        }

        var value = localStorage.getItem(key);
        var fileSize = formatBytes((key.length + value.length) * 2); // Calculate size

        localStorageContents += `<div ondblclick="openFile('${key}')" class="files-section">
            <span class="files-span">S:/Users/${username}/</span>${key}
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Delete')" onclick="deleteItem('${key}')"><img src="systemH/accessibility/delete.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Rename')" onclick="renameFile('${key}')"><img src="systemH/accessibility/rename.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Copy')" onclick="copyFile('${key}')"><img src="systemH/accessibility/copy.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Download')" onClick="downloadFile('${key}')"><img src="systemH/accessibility/download.png"></button>
           <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Edit')" onClick="loadText('${localStorage.key(i)}', event)"><img src="systemH/accessibility/edit.png"></button>
           <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Run')" onClick="filesExecute('${localStorage.key(i)}', event)"><img src="systemH/accessibility/run.png"></button>
           <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('HTML Run')" onClick="executeCode('${localStorage.key(i)}', event)"><img src="systemH/accessibility/htmlrun.png"></button>
            <span class="filesizespan"><b>${fileSize}</b>&nbsp;</span>
        </div>`;
    }

    document.getElementById("localStorageContents").innerHTML = localStorageContents;

    if (localStorageContents === "") {
        document.getElementById('localStorageContents').innerHTML = "No Files";
    }
    toggletheme();
    toggletheme();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('filesearch').addEventListener('input', searchFiles);
});

function searchFiles(prefix) {
    document.getElementById("localStorageContents").innerHTML = loadSC;

    var matchingItemsHTML = "";
	localStorageContents += "Search";
    let search = document.getElementById('filesearch').value;

    if (String(search).trim() === "") {
        displayLocalStorage(); // Display all files when prefix is empty
        return;
    }

    prefix = String(search).toLowerCase().trim(); // Convert prefix to lowercase and trim whitespace

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i).toLowerCase();

        if (key.indexOf(prefix) === -1) {
            continue; // Skip to the next iteration if prefix is not found
        }

        if (systemFiles.includes(key) || trashcan.includes(key)) {
            continue; // Skip 'quickLoadData' and other system files
        }

        var value = localStorage.getItem(localStorage.key(i));
        var fileSize = formatBytes((key.length + value.length) * 2); // Calculate size

        matchingItemsHTML += `<div ondblclick="openFile('${localStorage.key(i)}')" class="files-section">
            <span class="files-span">S:/Users/${username}/</span>${localStorage.key(i)}
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Delete')" onclick="deleteItem('${localStorage.key(i)}')"><img src="systemH/accessibility/delete.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Rename')" onclick="renameFile('${localStorage.key(i)}')"><img src="systemH/accessibility/rename.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Copy')" onclick="copyFile('${localStorage.key(i)}')"><img src="systemH/accessibility/copy.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Download')" onClick="downloadFile('${localStorage.key(i)}')"><img src="systemH/accessibility/download.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Edit')" onClick="loadText('${localStorage.key(i)}', event)"><img src="systemH/accessibility/edit.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Run')" onClick="filesExecute('${localStorage.key(i)}', event)"><img src="systemH/accessibility/run.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('HTML Run')" onClick="executeCode('${localStorage.key(i)}', event)"><img src="systemH/accessibility/htmlrun.png"></button>
            <span class="filesizespan"><b>${fileSize}</b>&nbsp;</span>
        </div>`;
    }

    document.getElementById("localStorageContents").innerHTML = matchingItemsHTML;
    toggletheme();
    toggletheme();
}

function displaySystemFiles() {
    document.getElementById("localStorageContents").innerHTML = loadSC;
    displayAmounts();
    if (!publicPassword == "") {
        askValue('Enter your password to view system files.', function() {
            let ps = document.getElementById('askValueInput').value;
            if (ps == publicPassword) {
                var localStorageContents = "";
				localStorageContents += "System Files";

                for (var i = 0; i < localStorage.length; i++) {
                    var key = localStorage.key(i);
            
                    if (!systemFiles.includes(key) || trashcan.includes(key)) {
                        continue;
                    }
            
                    var value = localStorage.getItem(key);
                    var fileSize = formatBytes((key.length + value.length) * 2); // Calculate size
            
                    localStorageContents += `<div ondblclick="noti('Cant open system files', 'Files', 'systemH/thumbnails/files.png')" class="files-section">
                        <span class="files-span">S:/SystemH/</span>${key}
                        <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Download')" onClick="downloadFile('${key}')"><img src="systemH/accessibility/download.png"></button>
                        <span class="filesizespan"><b>${fileSize}</b>&nbsp;</span>
                    </div>`;
                }
            
                document.getElementById("localStorageContents").innerHTML = localStorageContents;
            
                if (localStorageContents === "") {
                    document.getElementById('localStorageContents').innerHTML = "No Files";
                }
                toggletheme();
                toggletheme();            
            } else {
                noti('Incorrect Password.', 'Files', 'systemH/thumbnails/files.png');
            }
        });
    } else {
        var localStorageContents = "";
		localStorageContents += "System Files";

        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
    
            if (!systemFiles.includes(key) || trashcan.includes(key)) {
                continue;
            }
    
            var value = localStorage.getItem(key);
            var fileSize = formatBytes((key.length + value.length) * 2); // Calculate size
    
            localStorageContents += `<div ondblclick="noti('Cant open system files', 'Files', 'systemH/thumbnails/files.png')" class="files-section">
                <span class="files-span">S:/RESTRICTED/</span>${key}
                <span class="filesizespan"><b>RESTRICTED</b>&nbsp;</span>
            </div>`;
        }
    
        document.getElementById("localStorageContents").innerHTML = localStorageContents;
    
        if (localStorageContents === "") {
            document.getElementById('localStorageContents').innerHTML = "No Files";
        }
        toggletheme();
        toggletheme();
        noti('Viewing as guest - Set a password', 'Files', 'systemH/thumbnails/files.png');
    }
}

function displayTrash() {
    document.getElementById("localStorageContents").innerHTML = loadSC;
    displayAmounts();
    var localStorageContents = "";
	localStorageContents += "Trash";

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if (!trashcan.includes(key)) {
            continue;
        }

        var value = localStorage.getItem(key);
        var fileSize = formatBytes((key.length + value.length) * 2); // Calculate size

        localStorageContents += `<div ondblclick="ask('Please restore this file before opening it.')" class="files-section">
            <span class="files-span">S:/Users/${username}/Trash/</span>${key}
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Delete Forever')" onclick="deleteForever('${key}')"><img src="systemH/accessibility/deleteall.png"></button>
            <button class="files-section-accIcon" onmouseout="resetPlaceholder()" onmouseover="filesfn('Restore')" onclick="restoreFile('${key}')"><img src="systemH/accessibility/restore.png"></button>
        </div>`;
    }
    document.getElementById("localStorageContents").innerHTML = localStorageContents;

    if (localStorageContents === "") {
        document.getElementById('localStorageContents').innerHTML = "No Trash";
    }
    toggletheme();
	toggletheme();
}

function restoreFile(key) {
	ask('Restore <b>' + key + '</b> to user files?', function() {
		let indexedItem = trashcan.indexOf(key);
        if (indexedItem !== -1) {
            trashcan.splice(indexedItem, 1);
            displayTrash();
        }
	});
}

function emptyTrash() {
    if (trashcan.length === 1) {
        ask('Are you sure you want to delete this file?', function() {
            let keysToDelete = trashcan.slice(); // Create a copy of trashcan
            keysToDelete.forEach(function(key) {
                let indexedItem = trashcan.indexOf(key);
                if (indexedItem !== -1) {
                    trashcan.splice(indexedItem, 1);
                    localStorage.removeItem(key);
                }
            });
            displayTrash();
        });
    } else if (trashcan.length === 0) {
        msgBox('No items in trash.');
    } else if (trashcan.length >= 2) {
        ask('Delete all <b>' + trashcan.length + '</b> items forever?', function() {
            let keysToDelete = trashcan.slice(); // Create a copy of trashcan
            keysToDelete.forEach(function(key) {
                let indexedItem = trashcan.indexOf(key);
                if (indexedItem !== -1) {
                    trashcan.splice(indexedItem, 1);
                    localStorage.removeItem(key);
                }
            });
            displayTrash();
        });
    }
}

function moveAllToTrash() {
    ask('Move all files to trash?', function() {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (systemFiles.includes(key)) {
                continue;
            }
			trashcan.push(key);
        }
        displayLocalStorage();
    });
}

function restoreAll() {
    trashcan.slice().forEach(function(key) {
        let indexedItem = trashcan.indexOf(key);
        if (indexedItem !== -1) {
            trashcan.splice(indexedItem, 1);
        }
		displayTrash();
    });
}

function deleteForever(key) {
    ask('Are you sure you want to delete <b>' + key + '</b> forever?', function() {
        let indexedItem = trashcan.indexOf(key);
        if (indexedItem !== -1) {
            trashcan.splice(indexedItem, 1);
            localStorage.removeItem(key);
            displayTrash();
        }
    });
}

function resetPlaceholder() {
    document.getElementById('filesPlaceholder').innerHTML = "...";
}

function filesfn(fn) {
    document.getElementById('filesPlaceholder').innerHTML = fn;
}

function deleteItem(key) {
 	ask('Move <b>' + key + '</b> to the trash can?', function() {
        trashcan.push(key);
    	displayLocalStorage();
    });
}

function downloadFile(key) {
    askValue('Please enter a filename for the download', function() {
        var textToDownload = localStorage.getItem(key);
        var filename = document.getElementById('askValueInput').value;
        
        if (!filename || !filename.trim()) {
            noti('Please enter a filename', 'Files', 'systemH/thumbnails/files.png');
            return;
        }
        
        var blob = new Blob([textToDownload], { type: 'text' });
        var link = document.createElement('a');
        link.download = filename;
        link.href = window.URL.createObjectURL(blob);
        link.click();
	});
}

function filesExecute(key) {
    const executableCode = localStorage.getItem(key);
    
    if (!executableCode) {
        noti('No File Contents', 'Files', 'systemH/thumbnails/files.png');
        return;
    }
    
    try {
        eval(executableCode);
        
        if (typeof runExecutable !== 'function') {
            noti('This executable is missing the run code. Is it for Universe?', 'Files', 'systemH/thumbnails/files.png');
            return;
        }
        
        runExecutable();
    } catch (error) {
        noti('This executable is corrupt', 'Files', 'systemH/thumbnails/files.png');
    }
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function displayAmounts() {
    var totalStorage = 0;
    var systemStorage = 0;
    var totalFiles = 0;

    // Count the total storage and system storage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        totalStorage += (key.length + value.length) * 2;

        if (systemFiles.includes(key)) {
            systemStorage += (key.length + value.length) * 2;
        } else {
            totalFiles++; // Increment totalFiles only if it's not a system file
        }
    }

    // Ensure totalFiles is not negative
    if (totalFiles < 0) {
        totalFiles = 0;
    }

    // Display the information
    document.getElementById("totalStorage").textContent = 'Total Size: ' + formatBytes(totalStorage);
    document.getElementById("totalFiles").textContent = 'Files: ' + totalFiles;

	document.getElementById("settingsfilesoutput").innerHTML = formatBytes(totalStorage) + ' /10 MB Used'

    document.getElementById("systemStorage").textContent = 'System Size: ' + formatBytes(systemStorage);
    document.getElementById("systemFiles").textContent = 'System Files: ' + systemFiles.length;
}

function executeCode(code) {
	var htmlContent = localStorage.getItem(code);

            if (htmlContent) {
                var blob = new Blob([htmlContent], { type: 'text/html' });
                var url = URL.createObjectURL(blob);

                window.open(url, '_blank');
            } else {
                noti('File not found', 'Files', 'systemH/thumbnails/files.png');
            }
}

function openFile(key) {
    const textFileTypes = ['txt', 'csv', 'plain', 'undefined'];
    const htmlFileTypes = ['html', 'xhtml', 'htm'];
    const uexFileTypes = ['uex'];
    
    const fileNameParts = key.split('.');
    const fileType = fileNameParts.length > 1 ? fileNameParts[fileNameParts.length - 1] : undefined;

    if (textFileTypes.includes(fileType)) {
        loadText(key);
    } else if (htmlFileTypes.includes(fileType)) {
        executeCode(key);
    } else if (uexFileTypes.includes(fileType)) {
        filesExecute(key);
    } else {
        loadText(key);
    }
}

function renameFile(oldKey) {
    askValue('Enter a new name for the file:', function() {
        const newKey = document.getElementById('askValueInput').value;
        if (!newKey.trim()) {
            noti("No filename provided. File not renamed", 'Files', 'systemH/thumbnails/files.png');
            return;
        }
        if (systemFiles.includes(newKey)) {
            noti('Cannot rename to a system or app file', 'Files', 'systemH/thumbnails/files.png');
            return;
        }
        if (localStorage.getItem(newKey)) {
            noti('A file with the new name already exists.', 'Files', 'systemH/thumbnails/files.png');
            return;
        }

        const fileContent = localStorage.getItem(oldKey);
        localStorage.removeItem(oldKey);
        localStorage.setItem(newKey, fileContent);
        displayLocalStorage();
        noti('<b>File renamed to: </b>' + newKey, 'Files', 'systemH/thumbnails/files.png');
    });
}

function copyFile(key) {
    askValue('Enter a new name for the copied file:', function() {
        const newKey = document.getElementById('askValueInput').value;
        if (!newKey.trim()) {
            noti("No filename provided. File not copied", 'Files', 'systemH/thumbnails/files.png');
            return;
        }
        if (systemFiles.includes(newKey)) {
            noti('Cannot copy as a system or app file', 'Files', 'systemH/thumbnails/files.png');
            return;
        }
        if (localStorage.getItem(newKey)) {
            noti('A file with the new name already exists.', 'Files', 'systemH/thumbnails/files.png');
            return;
        }

        const fileContent = localStorage.getItem(key);
        localStorage.setItem(newKey, fileContent);
        displayLocalStorage();
        noti('<b>Copied File: </b>' + newKey, 'Files', 'systemH/thumbnails/files.png');
    });
}