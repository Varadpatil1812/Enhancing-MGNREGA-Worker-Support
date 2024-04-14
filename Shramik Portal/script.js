function login() {
    document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    
    // Check if username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      // Redirect to another page
      window.location.href = './ShramikReg/index.html';
    } else {
      alert('Invalid username or password');
    }
  
});
}
