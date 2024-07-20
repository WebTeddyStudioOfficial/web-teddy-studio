document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.display = 'block';
});

document.addEventListener('click', function () {
    contextMenu.style.display = 'none';
});

function closeOM() {
    document.getElementById('optionMenuContent').innerHTML = "";
    document.getElementById('optionMenu').style.display = "none";
	toggletheme();
	toggletheme();
}

function openOM(content) {
    document.getElementById('optionMenuContent').innerHTML = content;
    document.getElementById('optionMenu').style.display = "block";
	toggletheme();
	toggletheme();
}