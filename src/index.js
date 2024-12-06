export default function LoginWidget(containerId, { clientId, redirectUrl, onError }) {
    const container = document.getElementById(containerId);
    
    // Check if the container is available in the DOM
    if (!container) {
      console.error(`Container with ID '${containerId}' not found.`);
      return;
    }
  
    // Validate input parameters
    if (!clientId || !redirectUrl) {
      console.error('Client ID and Redirect URL are required.');
      if (onError) onError('Client ID and Redirect URL are required.');
      return;
    }
  
    // Widget HTML - Adding Login with Amazon button
    container.innerHTML = `
      <div class="login-widget">
        <form id="login-form">
          <button type="submit">
            <img src="https://d1.awsstatic.com/logos/Amazon-Icon_22_32.22f7f978bfff37cc3b658fa24389a3f4b122fa8e.png" 
                 alt="Amazon Logo" style="width: 20px; height: 20px; margin-right: 8px;">
            Login with Amazon
          </button>
        </form>
      </div>
    `;
  
    // Event Listener for form submission
    const form = container.querySelector('#login-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Construct the Amazon login URL with clientId and redirectUrl
      const amazonLoginUrl = `http://localhost:5174/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=code&scope=profile`;
  
      // Redirect the user to the Amazon login page
      window.location.href = amazonLoginUrl;
  
      // Optionally, you can use the callback function to notify the login event
      if (callback) callback({ clientId, redirectUrl });
    });
  }
  