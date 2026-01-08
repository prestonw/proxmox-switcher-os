console.log('Proxmox Switcher Tools content script loaded.');

(function () {
  // Create floating button
  const btn = document.createElement('button');
  btn.textContent = 'Switcher';
  btn.style.position = 'fixed';
  btn.style.bottom = '10px';
  btn.style.right = '10px';
  btn.style.zIndex = '10000';
  btn.style.padding = '8px 12px';
  btn.style.backgroundColor = '#007bff';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.borderRadius = '4px';
  btn.style.cursor = 'pointer';
  btn.onclick = () => {
    // Example: send message to extension's background/popup
    chrome.runtime.sendMessage({ action: 'open_popup' });
  };
  document.body.appendChild(btn);
})();
