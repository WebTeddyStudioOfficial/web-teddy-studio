function powerwash() {
    ask('Everything will be lost!<br>Continue?', function() {
        clearInterval(constantInterval);
        clearInterval(apisInterval);
        noti('Powerwash will finish after restart', 'System', 'systemH/thumbnails/favicon.ico');
        setTimeout(function(){
            noti('Clearing', 'System', 'systemH/thumbnails/favicon.ico');
			publicPassword = "";
			hint = "Hint: There is no hint";
			username = "User";
            localStorage.clear();
			setTimeout(function() {
    			restart();
           	}, 2000);
        }, 3000);
    });
}