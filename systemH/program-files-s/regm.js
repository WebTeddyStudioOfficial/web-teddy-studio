function register() {
    if (publicPassword) {
        hideAllWindows();
        document.getElementById('login').style.display = "block";
    } else {
        hideAllWindows();
        document.getElementById('register').style.display = "block";
        openTab('registerStart');
    }
}

function registerAction(arg) {
    if (arg == "userVerify") {
        let input1 = document.getElementById('registerPasswordInput');
        let input2 = document.getElementById('registerPasswordInput2');
        let input3 = document.getElementById('registerUsernameInput');
        if (input1.value === input2.value) {
            if (input1.value.length >= 6) {
                if (input3.value) {
                    openTab('regUserComplete');
                    setTimeout(function() {
                        hideAllWindows();
                        noti('Thanks for registering Universe', 'Register', 'systemH/thumbnails/favicon.ico');
                        loadStorage();
                        setTimeout(function() {
                            publicPassword = input2.value;
                            username = input3.value;
                            setTimeout(function () {
                                input1.value = "";
                                input2.value = "";
                                input3.value = "";
                            }, 1000);
                            noti('Universe will restart to finish applying updates<br><b><i>3s</i></b>', 'Register', 'systemH/thumbnails/favicon.ico');
                            setTimeout(function() {
                                restart();
                            }, 3000);
                        }, 3000);
                    }, 3000);		  
                } else {
                    noti('Please enter a username', 'Register', 'systemH/thumbnails/favicon.ico');
                }
            } else {
                input1.value = "";
                input2.value = "";
                noti('Password must be at least 6 characters long', 'Register', 'systemH/thumbnails/favicon.ico');
            }
        } else {
            input1.value = "";
            input2.value = "";
            noti('Passwords are not the same', 'Register', 'systemH/thumbnails/favicon.ico');
        }
    } else if (arg == "cancel") {
        location.reload();
    }
}