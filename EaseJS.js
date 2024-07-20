// EaseJS Simple by GroupSSalt
// FOR VSCODE: Keep as an open tab to not get auto-corrected

const getEBD = document.getElementById.bind(document);
const getLS = localStorage.getItem.bind(localStorage);
const remLS = localStorage.removeItem.bind(localStorage);
const setLS = localStorage.setItem.bind(localStorage);
const log = console.log.bind(console);

function setHTML(id, text) {
    getEBD(id).innerHTML = text;
}

function saveArrayToLocalStorage(keyToSave, array) {
    const jsonString = JSON.stringify(array);
    setLS(keyToSave, jsonString);
}

function loadArrayFromLocalStorage(keyToLoad) {
    const jsonString = getLS(keyToLoad);
    if (jsonString) {
        return JSON.parse(jsonString);
    } else {
        return [];
    }
}