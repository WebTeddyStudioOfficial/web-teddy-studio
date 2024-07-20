let textSaved = false;
let savedText;
var notiTimeout = JSON.parse(getLS('notiTimeout')) || 3000;
let logStatus = false;
var nfx = new Audio('systemH/sysfx/nfx.mp3');
var efx = new Audio('systemH/sysfx/efx.mp3');
var startupSound = new Audio('systemH/sysfx/startup.mp3');
let alertSaveText;
let hint;
let username;
let constantSpeed = 750;
let constantInterval;
let keysToKeep = [
	"username",
	"password",
	"hint",
	"theme",
	"bg",
	"bgtype",
	"trashcan",
	"notiTimeout"
];
let systemFiles = [
	"username",
	"password",
	"hint",
	"theme",
	"bg",
	"bgtype",
	"trashcan",
	"notiTimeout"
];
let trashcan = [
	
];

const contextMenu = document.getElementById('customContextMenu');
let currentTime;
let timePeriod;
let inactivityTimer;
const inactivityThreshold = 1200000;
let theme;
const loadSC = `<img width="50" height="50" src="systemH/firmware/loadsc.gif"><br><p>Please Wait</p>`;
let focusMode = false;
let fillmode = "nofill";