let localversion = "v2 Rocket";

function runVersioncheck() {
    if (!versionhandleconnected) {
        ask('VersionHandle server may be offline, retry?', runVersioncheck);
    } else {
        if (localversion !== serverversion) {
            ask('Universe is outdated, please update from <b>' + localversion + '</b> to <b>' + serverversion + '</b>');
        }
    }
}