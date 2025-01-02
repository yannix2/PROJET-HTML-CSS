document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cin = document.getElementById('cin').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cin, password }),
      });
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('UserAuthenticated', data.user.cin);
        window.location.href = '/dashboard';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  