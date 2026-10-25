//your JS code here. If required.
function findDOMLevel() {
    const element = document.getElementById("level");
    let level = 0;
    let current = element;

    while (current && current.parentElement) {
        level++;
        current = current.parentElement;
    }

    alert("The level of the element is: " + level);
}

window.onload = function () {
    findDOMLevel();
};