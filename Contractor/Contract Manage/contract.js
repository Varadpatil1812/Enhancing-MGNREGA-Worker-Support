let popup=document.getElementById("popup");
let pop=document.getElementById("pop");
let pop1=document.getElementById("pop1");
function openPopup() {
    // Calculate the left and top positions for centering the popup
    popup.classList.add("open-popup");

}
function send() {
    
    document.getElementById("contractForm").addEventListener("submit", async function(event) {
      const formData = new FormData(this);
      const response = await fetch("https://api-production-5b4f.up.railway.app/api/project/createProject", {
          method: "POST",
          body: formData
      });
      popup.classList.remove("open-popup");
        
  });
  
}
function redirect(){
    window.location.href = 'add.html';
}
function back(){
  window.location.href = 'contract.html';
}
function Pop() {
    // Calculate the left and top positions for centering the popup
    pop.classList.add("open-popup");

}
function popclose(){
    pop.classList.remove("open-popup");
}
function Pop2() {
    // Calculate the left and top positions for centering the popup
    pop1.classList.add("open-popup");
}
document.addEventListener("DOMContentLoaded",  function() {
  // Fetch worker data from API
   fetch('https://api-production-5b4f.up.railway.app/api/project/')
    .then(response => response.json())
    .then(data => {
      const workersDiv = document.getElementById('workers');
      const workers = data.data; 
      // Iterate through workers and create table rows
      workers.forEach(worker => {
        // Create card for each worker
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h1>Name: ${worker.name}</h1>
          <h2>ID: ${worker.sr_no}</h2>
          <h3>Altitude: ${worker.altitude}</h3>
          <h3>Latitude: ${worker.latitude}</h3>
          <p> Description: ${worker.description}</p>
          <button class="addBtn" data-workerid="${worker._id}">Add to Workers</button>
          
        `;
        workersDiv.appendChild(card);
        const addButton = card.querySelector('.addBtn');
        addButton.addEventListener('click', function() {
      // Redirect to another website with worker ID as parameter
        const workerId = worker._id;
        window.location.href = `add.html?workerId=${workerId}`;  
      });
    
  })

});
  
});


document.addEventListener("DOMContentLoaded",  function() {
  // Fetch worker data from API
    fetch('https://api-production-5b4f.up.railway.app/api/attendance/')
    .then(response => response.json())
    .then(data => {
      const workersDiv = document.getElementById('pop1');
      const workers = data.data; 
      // Iterate through workers and create table rows
      workers.forEach(worker => {
        // Create card for each worker
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h1>Name: ${worker.worker_name}</h1>
          <h1>Project: ${worker.project_name}</h1>
          <h2>Date: ${worker.date}</h2>
          <h2>Time: ${worker.time}</h2>
          <h3>Type: ${worker.type}</h3>

        `;
        workersDiv.appendChild(card);
      });
    
  })
.catch(error => console.error('Error fetching data:', error));

  
});


