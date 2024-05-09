document.addEventListener("DOMContentLoaded", function() {
  // Get worker ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const workerId = urlParams.get('workerId');
  
  // Fill input box with worker ID
  const inputBox = document.getElementById('p_id'); // Replace 'inputBoxId' with the actual ID of your input box
  inputBox.value = workerId;
});
function back(){
  window.location.href = 'contract.html';
}
document.addEventListener("DOMContentLoaded", function() {
  // Fetch worker details from API
  fetch('https://api-production-5b4f.up.railway.app/api/worker/all')
    .then(response => response.json())
    .then(data => {
      const workersDiv = document.getElementById('workers');
      const workers = data.data;
      workers.forEach(worker => {
        // Create card for each worker
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h1>Name: ${worker.name}</h1>
          <h2>ID: ${worker.w_id}</h2>
          <h3>Mobile No.: ${worker.mobileNumber}</h3>
          <h3>Address: ${worker.address}</h3>
          <button class="addBtn" data-workerid="${worker._id}">Add to Project</button>
        `;
        workersDiv.appendChild(card);
      });
      const addButtons = document.querySelectorAll('.addBtn');
      addButtons.forEach(button => {
        button.addEventListener('click', function() {
          const workerId = this.getAttribute('data-workerid');
          console.log(workerId)
          // Assuming you have a function to add worker to project
          addWorkerToProject(workerId);
        });
      });
})
        .catch(error => console.error('Error fetching data:', error));

    
  

  async function addWorkerToProject(workerId) {
  const inputData = document.getElementById('p_id').value;
  console.log(JSON.stringify({ workerId: workerId , projectId: inputData}))
  
  // Example of sending a POST request using fetch
  event.preventDefault();
   await fetch('https://api-production-5b4f.up.railway.app/api/worker/addproject', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ projectId: inputData , workerId: workerId })
  })
  .then(response => response.json())
    .then(data => {
      alert((data.message));
      
      // You can update UI to reflect the addition if needed
    })
    .catch(error => console.error('Error adding worker to project:', error));
  }
});
