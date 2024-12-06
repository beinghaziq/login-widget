export default function LoginWidget(containerId, callback) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID '${containerId}' not found.`);
      return;
    }
  
    // Widget HTML
    container.innerHTML = `
      <div class="login-widget">
        <form id="login-form">
          <input type="text" id="username" placeholder="Username" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    `;
  
    // Event Listener
    const form = container.querySelector('#login-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = form.querySelector('#username').value;
      const password = form.querySelector('#password').value;
      console.log({ username, password });
    });
  }
  