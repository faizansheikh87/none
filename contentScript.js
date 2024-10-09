// Injects the "Connect with All" button on LinkedIn page
const createConnectButton = () => {
    const connectButton = document.createElement('button');
    connectButton.innerText = 'Connect with All';
    connectButton.style.position = 'fixed';
    connectButton.style.bottom = '20px';
    connectButton.style.right = '20px';
    connectButton.style.padding = '10px 20px';
    connectButton.style.backgroundColor = '#0073b1'; // LinkedIn's blue color
    connectButton.style.color = '#fff';
    connectButton.style.border = 'none';
    connectButton.style.borderRadius = '5px';
    connectButton.style.cursor = 'pointer';
    connectButton.style.zIndex = '9999';
  
    document.body.appendChild(connectButton);
    return connectButton;
  };
  
  // Function to click all visible Connect buttons
  const clickAllConnectButtons = async () => {
    const connectButtons = document.querySelectorAll('button[aria-label^="Connect"]');
    if (connectButtons.length === 0) {
      alert('No connectable profiles found.');
      return;
    }
  
    for (let i = 0; i < connectButtons.length; i++) {
      connectButtons[i].click();
  
      // Adding a delay between each connection request to avoid being blocked
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
    }
  
    alert('All visible Connect requests sent.');
  };
  
  // Add the button and bind click event
  const connectButton = createConnectButton();
  connectButton.addEventListener('click', clickAllConnectButtons);
  