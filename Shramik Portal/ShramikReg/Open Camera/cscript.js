

function openCameraPopup() {
    // Calculate the left and top positions for centering the popup
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const popupWidth = 600;
    const popupHeight = 600;
    const leftPosition = (screenWidth - popupWidth) / 2;
    const topPosition = (screenHeight - popupHeight) / 2;

    // Open a popup window with the camera stream
    cameraPopup = window.open('./Open Camera/camera.html', 'Camera', 'width=600,height=600,left=' + leftPosition + ',top=' + topPosition);
}

