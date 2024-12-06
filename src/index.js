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
             <img border="0" alt="Login with Amazon"
            src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
            width="156" height="32" />
          </button>
        </form>
      </div>
    `;
  
    // Event Listener for form submission
    const form = container.querySelector('#login-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Construct the Amazon login URL with clientId and redirectUrl
      const amazonLoginUrl = `http://localhost:5174/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=code&scope=profile&request_uri=urn:request:e6079fb1-a117-4e02-9a22-a6ba80010085&nonce=NHO9SFs60dNWPDtbhZYhuA&state=774vgYnxyYRqNLGeFGOP5g`;
  
      // Redirect the user to the Amazon login page
      window.location.href = amazonLoginUrl;
  
      // Optionally, you can use the callback function to notify the login event
      if (callback) callback({ clientId, redirectUrl });
    });
  }
