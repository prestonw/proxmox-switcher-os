// Log that the content script has loaded
console.log('Proxmox Switcher Tools content script loaded.');

// Immediately-invoked function to encapsulate our logic
(function () {
  /**
   * Execute callback with the Proxmox iframe document once it is available.
   * Proxmox loads its UI inside an iframe#content, so we need to inject
   * our UI into that iframe rather than the top-level document.
   * @param {function(Document): void} cb
   * @returns {boolean} true if iframe is ready, false otherwise
   */
  function withProxmoxIframe(cb) {
    const iframe = document.querySelector('iframe#content');
    if (!iframe) return false;
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
    if (!doc || !doc.body) return false;
    cb(doc);
    return true;
  }

  /**
   * Poll until the Proxmox UI iframe is ready, then run the callback.
   * This avoids errors if the iframe hasn't been created yet.
   * @param {function(Document): void} cb
   */
  function waitForIframe(cb) {
    const timer = setInterval(() => {
      if (withProxmoxIframe(cb)) {
        clearInterval(timer);
      }
    }, 500);
  }

  // Inject our button once the iframe is available
  waitForIframe((doc) => {
    // Prevent injecting multiple buttons if the script runs more than once
    if (doc.getElementById('proxmox-switcher-btn')) return;

    const btn = doc.createElement('button');
    btn.id = 'proxmox-switcher-btn';
    btn.textContent = 'Switcher';
    // Basic styling to keep the button visible
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      zIndex: '10000',
      padding: '8px 12px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    });
    btn.onclick = () => {
      // Notify background/popup that the switcher button was clicked
      chrome.runtime.sendMessage({ action: 'open_popup' });
    };
    doc.body.appendChild(btn);
  });
})();
// Log that the content script has loaded
console.log('Proxmox Switcher Tools content script loaded.');

// Immediately-invoked function to encapsulate our logic
(function () {
  /**
   * Execute callback with the Proxmox iframe document once it is available.
   * Proxmox loads its UI inside an iframe#content, so we need to inject
   * our UI into that iframe rather than the top-level document.
   * @param {function(Document): void} cb
   * @returns {boolean} true if iframe is ready, false otherwise
   */
  function withProxmoxIframe(cb) {
    const iframe = document.querySelector('iframe#content');
    if (!iframe) return false;
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
    if (!doc || !doc.body) return false;
    cb(doc);
    return true;
  }

  /**
   * Poll until the Proxmox UI iframe is ready, then run the callback.
   * This avoids errors if the iframe hasn't been created yet.
   * @param {function(Document): void} cb
   */
  function waitForIframe(cb) {
    const timer = setInterval(() => {
      if (withProxmoxIframe(cb)) {
        clearInterval(timer);
      }
    }, 500);
  }

  // Inject our button once the iframe is available
  waitForIframe((doc) => {
    // Prevent injecting multiple buttons if the script runs more than once
    if (doc.getElementById('proxmox-switcher-btn')) return;

    const btn = doc.createElement('button');
    btn.id = 'proxmox-switcher-btn';
    btn.textContent = 'Switcher';
    // Basic styling to keep the button visible
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      zIndex: '10000',
      padding: '8px 12px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    });
    btn.onclick = () => {
      // Notify background/popup that the switcher button was clicked
      chrome.runtime.sendMessage({ action: 'open_popup' });
    };
    doc.body.appendChild(btn);
  });
})();
// Log that the content script has loaded
console.log('Proxmox Switcher Tools content script loaded.');

// Immediately-invoked function to encapsulate our logic
(function () {
  /**
   * Execute callback with the Proxmox iframe document once it is available.
   * Proxmox loads its UI inside an iframe#content, so we need to inject
   * our UI into that iframe rather than the top-level document.
   * @param {function(Document): void} cb
   * @returns {boolean} true if iframe is ready, false otherwise
   */
  function withProxmoxIframe(cb) {
    const iframe = document.querySelector('iframe#content');
    if (!iframe) return false;
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
    if (!doc || !doc.body) return false;
    cb(doc);
    return true;
  }

  /**
   * Poll until the Proxmox UI iframe is ready, then run the callback.
   * This avoids errors if the iframe hasn't been created yet.
   * @param {function(Document): void} cb
   */
  function waitForIframe(cb) {
    const timer = setInterval(() => {
      if (withProxmoxIframe(cb)) {
        clearInterval(timer);
      }
    }, 500);
  }

  // Inject our button once the iframe is available
  waitForIframe((doc) => {
    // Prevent injecting multiple buttons if the script runs more than once
    if (doc.getElementById('proxmox-switcher-btn')) return;

    const btn = doc.createElement('button');
    btn.id = 'proxmox-switcher-btn';
    btn.textContent = 'Switcher';
    // Basic styling to keep the button visible
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      zIndex: '10000',
      padding: '8px 12px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    });
    btn.onclick = () => {
      // Notify background/popup that the switcher button was clicked
      chrome.runtime.sendMessage({ action: 'open_popup' });
    };
    doc.body.appendChild(btn);
  });
})();
// Log that the content script has loaded
console.log('Proxmox Switcher Tools content script loaded.');

// Immediately-invoked function to encapsulate our logic
(function () {
  /**
   * Execute callback with the Proxmox iframe document once it is available.
   * Proxmox loads its UI inside an iframe#content, so we need to inject
   * our UI into that iframe rather than the top-level document.
   * @param {function(Document): void} cb
   * @returns {boolean} true if iframe is ready, false otherwise
   */
  function withProxmoxIframe(cb) {
    const iframe = document.querySelector('iframe#content');
    if (!iframe) return false;
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
    if (!doc || !doc.body) return false;
    cb(doc);
    return true;
  }

  /**
   * Poll until the Proxmox UI iframe is ready, then run the callback.
   * This avoids errors if the iframe hasn't been created yet.
   * @param {function(Document): void} cb
   */
  function waitForIframe(cb) {
    const timer = setInterval(() => {
      if (withProxmoxIframe(cb)) {
        clearInterval(timer);
      }
    }, 500);
  }

  // Inject our button once the iframe is available
  waitForIframe((doc) => {
    // Prevent injecting multiple buttons if the script runs more than once
    if (doc.getElementById('proxmox-switcher-btn')) return;

    const btn = doc.createElement('button');
    btn.id = 'proxmox-switcher-btn';
    btn.textContent = 'Switcher';
    // Basic styling to keep the button visible
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      zIndex: '10000',
      padding: '8px 12px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    });
    btn.onclick = () => {
      // Notify background/popup that the switcher button was clicked
      chrome.runtime.sendMessage({ action: 'open_popup' });
    };
    doc.body.appendChild(btn);
  });
})();
.