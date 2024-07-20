function rendersettings() {
    getEBD('settings').innerHTML = `
        <div class="tabs">
    <button class="tablink" onClick="openTab('account')">Account</button>
    <button class="tablink" onClick="openTab('personalize')">Personalize</button>
    <button class="tablink" onClick="openTab('storage')">Storage</button>
    <button class="tablink" onClick="openTab('notiSettings')">Notifications</button>

    <button class="tabaccIcon" onClick="closeApp('settings')"><img src="systemH/accessibility/close.png"></button>
    <button class="tabaccIcon" onClick="togglefullscreen()"><img src="systemH/accessibility/fullscreen.png"></button>
    <button class="tabaccIcon" onClick="miniApp('settings')"><img src="systemH/accessibility/minimize.png"></button>
</div>
<div class="tabcontent" id="account">
    <center>
        <p>Change Password</p>
        <button class="accIcon" onClick="openTab('changePassword')"><img src="systemH/accessibility/change.png"></button>
        <p>Change Hint</p>
        <button class="accIcon" onClick="openTab('changeHint')"><img src="systemH/accessibility/change.png"></button>
        <p>Change Username</p>
        <button class="accIcon" onClick="openTab('changeUsername')"><img src="systemH/accessibility/change.png"></button>
    </center>
</div>

<div class="tabcontent" id="changePassword">
    <center>
        <span>Old Password:</span><br>
        <input class="input" id="changePasswordInput3" type="password"><br><br>
        <span>New Password:</span><br>
        <input class="input" id="changePasswordInput" type="password"><br><br>
        <span>Confirm New Password:</span><br>
        <input class="input" id="changePasswordInput2" type="password"><br><br>
        <button class="accIcon" onClick="changePassword()"><img src="systemH/accessibility/accept.png"></button>
        <button class="accIcon" onClick="openTab('account')"><img src="systemH/accessibility/deny.png"></button>
        <button class="accIcon" onClick="settingsFn('deletePassword')"><img src="systemH/accessibility/delete.png"></button>
    </center>
</div>

<div class="tabcontent" id="changeHint">
    <center>
        <input class="input" id="changeHintInput" type="text"><br><br>
        <button class="accIcon" onClick="changeHint()"><img src="systemH/accessibility/accept.png"></button>
        <button class="accIcon" onClick="openTab('account')"><img src="systemH/accessibility/deny.png"></button>
        <button class="accIcon" onClick="settingsFn('deleteHint')"><img src="systemH/accessibility/delete.png"></button>
    </center>
</div>

<div class="tabcontent" id="changeUsername">
    <center>
        <input class="input" id="changeUsernameInput" type="text"><br><br>
        <button class="accIcon" onClick="changeUsername()"><img src="systemH/accessibility/accept.png"></button>
        <button class="accIcon" onClick="openTab('account')"><img src="systemH/accessibility/deny.png"></button>
        <button class="accIcon" onClick="settingsFn('deleteUsername')"><img src="systemH/accessibility/delete.png"></button>
    </center>
</div>

<div class="tabcontent" id="personalize">
    <center>
        <p>Background</p>
        <button class="button" onClick="openTab('useImage')">Use Image</button><br><br>
        <button class="button" onClick="openTab('useColor')">Use Color</button><br><br>
        <button class="warningbutton" onClick="changeBg('systemH/firmware/bg.jpg')">Use Default</button>
        <p>Theme</p>
        <img width="50" height="50" src="systemH/accessibility/brightness.png" onClick="toggletheme()"><br><br>
    </center>
</div>

<div class="tabcontent" id="useImage">
    <center>
        <h3>Click an Image</h3>
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/personalization/1.jpeg" onClick="changeBg('systemH/personalization/1.jpeg')">
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/personalization/2.jfif" onClick="changeBg('systemH/personalization/2.jfif')">
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/personalization/3.avif" onClick="changeBg('systemH/personalization/3.avif')">
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/personalization/4.jpg" onClick="changeBg('systemH/personalization/4.jpg')"><br><br>
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/firmware/bg.jpg" onClick="changeBg('systemH/firmware/bg.jpg')">
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/personalization/5.jpg" onClick="changeBg('systemH/personalization/5.jpg')">
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/personalization/6.jpg" onClick="changeBg('systemH/personalization/6.jpg')">
        <img width="200" style="aspect-ratio: 16 / 9" src="systemH/personalization/7.jpg" onClick="changeBg('systemH/personalization/7.jpg')"><br><br>
        <button class="button" onClick="openTab('personalize')">Back</button><br><br>
        <button class="button" onClick="changeBg('systemH/firmware/bg.jpg')">Use Default</button><br><br>
        <button class="button" onClick="openTab('useColor')">Use Color</button>
        <h4>Images by GroupSSalt</h4>
    </center>
</div>

<div class="tabcontent" id="useColor">
    <center>
        <h3>Choose a Color</h3>
        <input type="color" id="settingscolorbg">
        <button class="button" onClick="changeCol()">Apply</button><br><br>
        <button class="button" onClick="openTab('personalize')">Back</button><br><br>
        <button class="button" onClick="changeCol('default')">Use Default</button><br><br>
        <button class="button" onClick="openTab('useImage')">Use Image</button>
    </center>
</div>

<div class="tabcontent" id="storage">
    <center>
        <p id="settingsfilesoutput"><img width="25" height="25" src="systemH/firmware/loadsc.gif"><br>Getting drive size</p>
        <button class="button" onClick="openApp('files')">Manage</button><br><br>
        <button class="warningbutton" onClick="powerwash()">Powerwash</button>
    </center>
</div>

<div class="tabcontent" id="notiSettings">
    <center>
        <h3>Notification Settings</h3>
        <p>Timeout (How long it shows on the screen, seconds)</p>
        <input class="input" id="settingsNewTimeout" type="number" min="3" max="30"><button class="button" onClick="applyNewTimeout('noti')">Apply</button>
    </center>
</div>
    `;
}

rendersettings();