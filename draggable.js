let draggingImg;

function onMouseDown (event) {
    event.preventDefault();
    if ([...event.target.classList][0] === 'draggable-item') {
        draggingImg = event.target;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
}

function onMouseMove (event) {
    draggingImg.style.left = `${event.clientX}px`;
    draggingImg.style.top = `${event.clientY}px`;
}

function onMouseUp (event) {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

document.addEventListener('mousedown', onMouseDown);

