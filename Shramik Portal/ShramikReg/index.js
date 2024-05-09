document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoElement');
    const cameraPopup = document.getElementById('cameraPopup');
    const captureBtn = document.getElementById('captureBtn');
    const imageInput1 = document.getElementById('imageInput1');
    const imageForm = document.getElementById('form');

    let stream = null;

    // Function to open the camera popup
    function openCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(mediaStream => {
                stream = mediaStream;
                videoElement.srcObject = stream;
                cameraPopup.classList.remove('hidden');
            })
            .catch(error => console.error('getUserMedia error:', error));
    }

    // Function to close the camera popup
    function closeCamera() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
            cameraPopup.classList.add('hidden');
        }
    }

    // Function to capture an image
    function captureImage() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            const file = new File([blob], 'snap.png', { type: 'image/png' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            // Assign the captured image to the hidden file input
            imageInput1.files = dataTransfer.files;
            // You can submit the form or handle the file data as needed
            // For now, let's simulate form submission
            console.log('Image captured:', file);
            // Here, you can submit the form with the captured image data
            // imageForm.submit();
            // Close the camera popup
            closeCamera();
        }, 'image/png');
    }

    // Event listener for the capture button
    captureBtn.addEventListener('click', () => {
        // Ensure the stream is loaded before capturing the image
        if (stream) {
            captureImage();
        } else {
            console.error('Stream not available');
        }
    });
    openCamera();
});
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoElement');
    const cameraPopup = document.getElementById('cameraPopup');
    const captureBtn = document.getElementById('captureBtn');
    const imageInput2 = document.getElementById('imageInput2');
    const imageForm = document.getElementById('form');

    let stream = null;

    // Function to open the camera popup
    function openCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(mediaStream => {
                stream = mediaStream;
                videoElement.srcObject = stream;
                cameraPopup.classList.remove('hidden');
            })
            .catch(error => console.error('getUserMedia error:', error));
    }

    // Function to close the camera popup
    function closeCamera() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
            cameraPopup.classList.add('hidden');
        }
    }

    // Function to capture an image
    function captureImage() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            const file = new File([blob], 'snap1.png', { type: 'image/png' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            // Assign the captured image to the hidden file input
            imageInput2.files = dataTransfer.files;
            // You can submit the form or handle the file data as needed
            // For now, let's simulate form submission
            console.log('Image captured:', file);
            // Here, you can submit the form with the captured image data
            // imageForm.submit();
            // Close the camera popup
            closeCamera();
        }, 'image/png');
    }

    // Event listener for the capture button
    captureBtn.addEventListener('click', () => {
        // Ensure the stream is loaded before capturing the image
        if (stream) {
            captureImage();
        } else {
            console.error('Stream not available');
        }
    });
    openCamera();
});
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoElement');
    const cameraPopup = document.getElementById('cameraPopup');
    const captureBtn = document.getElementById('captureBtn');
    const imageInput3 = document.getElementById('imageInput3');
    const imageForm = document.getElementById('form');

    let stream = null;

    // Function to open the camera popup
    function openCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(mediaStream => {
                stream = mediaStream;
                videoElement.srcObject = stream;
                cameraPopup.classList.remove('hidden');
            })
            .catch(error => console.error('getUserMedia error:', error));
    }

    // Function to close the camera popup
    function closeCamera() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
            cameraPopup.classList.add('hidden');
        }
    }

    // Function to capture an image
    function captureImage() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            const file = new File([blob], 'snap2.png', { type: 'image/png' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            // Assign the captured image to the hidden file input
            imageInput3.files = dataTransfer.files;
            // You can submit the form or handle the file data as needed
            // For now, let's simulate form submission
            console.log('Image captured:', file);
            // Here, you can submit the form with the captured image data
            // imageForm.submit();
            // Close the camera popup
            closeCamera();
        }, 'image/png');
    }

    // Event listener for the capture button
    captureBtn.addEventListener('click', () => {
        // Ensure the stream is loaded before capturing the image
        if (stream) {
            captureImage();
        } else {
            console.error('Stream not available');
        }
    });

    openCamera();
});


  
function closePopup() {
    let popup=document.getElementById("popup");
  // Calculate the left and top positions for centering the popup
    popup.classList.remove("open-container1");

}

  function send() {
  let load = document.getElementById("load");
  load.classList.add("open-container1");
      document.getElementById("form").addEventListener("submit", async function() {
        const formData = new FormData(this);
        const response = await fetch("http://localhost:3000/api/worker/signup", {
            method: "POST",
            body: formData
        });
        
        
        if (response.ok) {
          const responseData = await response.json();
          if (responseData.message === 'Username and Password sent to mobile number') {
            let load = document.getElementById("load");
            load.classList.remove("open-container1");
              let popup = document.getElementById("popup");
              popup.classList.add("open-container1");
          } else {
            let load = document.getElementById("load");
            load.classList.remove("open-container1");
            alert(responseData.message)
              
          }
      } else {
        alert(responseData.message)

      }
  });
}