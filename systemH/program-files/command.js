document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("commandInput");
    var output = document.getElementById('commandOutput');

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            var inputValue = input.value.trim();
            var response = "";

            if (inputValue !== "") {
                if (inputValue === "exit") {
                    document.getElementById('command').style.display = "none";
                    document.getElementById('deskpad').style.display = "flex";
                    output.innerHTML = '';
                } else if (inputValue === "help") {
                    response = " exit - Close command <br> help:all - Show all help options <br> restart - restart Universe <br> shutdown - shutdown Universe <br> clear - clear the command prompt output";
                } else if (inputValue.startsWith("filesystem --open:")) {
    var filename = inputValue.split(':')[1].trim();

    if (systemFiles.includes(filename)) {
        response = "Can't open a system file";
    } else {
        openFile(filename);
        document.getElementById('command').style.display = "none";
        document.getElementById('textEditor').style.display = "block";
    }
                } else if (inputValue === "filesystem --list") {
                    listFiles();
                } else if (inputValue === "shutdown") {
                    saveStorage();
                    input.value = "";
                    window.close();
                } else if (inputValue === "restart") {
                    saveStorage();
                    location.reload();
                } else if (inputValue === "restart:bypass-save") {
                    location.reload();
                } else if (inputValue === "shutdown:bypass-save") {
                    input.value = "";
                    window.close();
                } else if (inputValue === "help:advanced") {
                    response = "restart:bypass-save <br> shutdown:bypass-save";
                } else if (inputValue === "clear") {
                    output.innerHTML = '';
                } else if (inputValue.startsWith("filesystem --create:")) {
                    var parts = inputValue.split(':');
                    if (parts.length === 2) {
                        var filename = parts[1].trim();
                        if (filename !== "") {
                            if (localStorage.getItem(filename) !== null) {
                                localStorage.removeItem(filename);
                            }
                            localStorage.setItem(filename, "Command Created File");
                            response = "Created file: " + filename;
                        } else {
                            response = "No filename specified.";
                        }
                    } else {
                        response = "Invalid command syntax. Please specify a filename.";
                    }
                } else if (inputValue === "help:filesystem") {
                    response = "filesystem --create:filename <br> filesystem --delete:-filename- <br> filesystem --list <br> filesystem --clear <br> filesystem --open:-filename-";
                } else if (inputValue.startsWith("filesystem --delete:")) {
                    var parts = inputValue.split(':');
                    if (parts.length === 2) {
                        var filename = parts[1].trim();
                        if (filename !== "") {
                            if (localStorage.getItem(filename) !== null) {
                                localStorage.removeItem(filename);
                                response = "Deleted File: " + filename;
                            } else {
                                response = "File not found: " + filename;
                            }
                        } else {
                            response = "No filename specified.";
                        }
                    } else {
                        response = "Invalid command syntax. Please specify a filename.";
                    }
                } else if (inputValue === "filesystem --clear") {
                    const allKeys = Object.keys(localStorage);
    
                    allKeys.forEach(key => {
                        if (!keysToKeep.includes(key)) {
                            localStorage.removeItem(key);
                        }
                    });
                    response = "Cleared";
                } else if (inputValue === "help:all") {
                    response = "help <br> help:advanced <br> help:filesystem <br> help:all <br> help:universeRoot";
                } else if (inputValue === "help:universeRoot") {
                    response = "universe --register <br> universe --powerwash <br> universe --powerwash /m= 'force' <br> universe --powerwash /m= 'minimal'";
                } else if (inputValue === "universe --powerwash /m= 'force'") {
                    response = "Forcing powerwash, this can't be undone";
                    localStorage.clear();
                    setTimeout(function() {
                        location.reload();
                    }, 500);
                } else if (inputValue === "universe --powerwash /m= 'minimal'") {
                    for (let i = 0; i < localStorage.length; i++) {
                        const key = localStorage.key(i);
                        if (!keysToKeep.includes(key)) {
                            localStorage.removeItem(key);
                            i--;
                        }
                    }
					location.reload();
                } else if (inputValue === "universe --register") {
                    if (publicPassword !== "") {
                        response = "You are already registered.";
                    } else {
                        register();
                    }
                } else if (inputValue === "universe --powerwash") {
                    powerwash();
                } else {
                    response = "That is not a command, please type help.";
                }
            }
            output.innerHTML += response + "<br>";
            input.value = "";
        }
    });

    function openFile(filename) {
        var content = localStorage.getItem(filename);
        if (content !== null) {
            document.getElementById('editor').value = content;
        } else {
            output.innerHTML += "File not found: " + filename + "<br>";
        }
    }

    function listFiles() {
        var filesInfo = "";
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var fileSize = formatBytes((key.length + value.length) * 2);
            filesInfo += key + " (" + fileSize + ")<br>";
        }
        output.innerHTML += filesInfo;
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
});