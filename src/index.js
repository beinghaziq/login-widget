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
          <button type="submit">Login</button>
        </form>
      </div>
    `;
  
    // Event Listener
    const form = container.querySelector('#login-form');
    form.addEventListener('submit', (event) => {
        alert("clicked")
    });
  }
  