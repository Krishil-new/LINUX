// Window Management
function openWindow(id) {
    const win = document.getElementById(id);
    win.style.display = "flex";
    // Bring to front
    moveToFront(win);
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}

function moveToFront(element) {
    const windows = document.querySelectorAll('.window');
    windows.forEach(w => w.style.zIndex = "10");
    element.style.zIndex = "20";
}

// Window Dragging Logic
function dragElement(element, event) {
    event.preventDefault();
    moveToFront(element);

    let pos1 = 0, pos2 = 0, pos3 = event.clientX, pos4 = event.clientY;
    
    document.onmousemove = (e) => {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    };

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

// Update Taskbar Clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
setInterval(updateClock, 1000);
updateClock();
