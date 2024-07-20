let lastBatteryLevel = null;
let lastIsCharging = null;

function constantAPIS() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');
    let timePeriod;
    let currentTime;

    if (currentHour >= 12) {
        timePeriod = 'PM';
        currentTime = (currentHour === 12 ? currentHour : currentHour - 12) + ':' + currentMinute;
    } else {
        timePeriod = 'AM';
        currentTime = (currentHour === 0 ? 12 : currentHour) + ':' + currentMinute;
    }

    const currentDateStr = currentDate.toDateString();
    const formattedTime = currentTime + ' ' + timePeriod;

    document.getElementById('ltime').innerHTML = formattedTime;
    document.getElementById('ldate').innerHTML = currentDateStr;
    document.getElementById('dtime').innerHTML = formattedTime;
}

function constantAPISupdate() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            updateBatteryLevel(battery.level, battery.charging);
            battery.addEventListener('levelchange', function() {
                updateBatteryLevel(battery.level, battery.charging);
            });
            battery.addEventListener('chargingchange', function() {
                updateBatteryLevel(battery.level, battery.charging);
            });
        });
    } else {
        noti("Battery information not supported");
    }
}

function updateBatteryLevel(level, isCharging) {
    const batteryPercentage = Math.floor(level * 100);
    if (batteryPercentage !== lastBatteryLevel || isCharging !== lastIsCharging) {
        const batteryElement = document.getElementById('lbatteryIMG');
        const batteryElement2 = document.getElementById('dbatteryIMG');
        const batteryStatusElement = document.getElementById('lbattery');
        const batteryStatusElement2 = document.getElementById('dbattery');

        batteryStatusElement.innerHTML = batteryPercentage + '%';
        batteryStatusElement2.innerHTML = batteryPercentage + '%';

        if (isCharging) {
            batteryElement.src = "systemH/tdbApi/batteryCA.png";
            batteryElement2.src = "systemH/tdbApi/dockCA.png";
        } else if (batteryPercentage === 100) {
            batteryElement.src = "systemH/tdbApi/battery100.png";
            batteryElement2.src = "systemH/tdbApi/dock100.png";
        } else if (batteryPercentage >= 75) {
            batteryElement.src = "systemH/tdbApi/battery75.png";
            batteryElement2.src = "systemH/tdbApi/dock75.png";
        } else if (batteryPercentage >= 65) {
            batteryElement.src = "systemH/tdbApi/battery65.png";
            batteryElement2.src = "systemH/tdbApi/dock65.png";
        } else if (batteryPercentage >= 50) {
            batteryElement.src = "systemH/tdbApi/battery50.png";
            batteryElement2.src = "systemH/tdbApi/dock50.png";
        } else if (batteryPercentage >= 35) {
            batteryElement.src = "systemH/tdbApi/battery35.png";
            batteryElement2.src = "systemH/tdbApi/dock25.png";
        } else if (batteryPercentage >= 25) {
            batteryElement.src = "systemH/tdbApi/battery25.png";
            batteryElement2.src = "systemH/tdbApi/dock25.png";
        } else {
            batteryElement.src = "systemH/tdbApi/battery0.png";
            batteryElement2.src = "systemH/tdbApi/dock0.png";
        }

        lastBatteryLevel = batteryPercentage;
        lastIsCharging = isCharging;
    }
}