console.log('[Proxmox Switcher] content script loaded');

(function () {
  function injectButton(doc) {
    if (doc.getElementById('proxmox-switcher-btn')) return;

    const btn = doc.createElement('button');
    btn.id = 'proxmox-switcher-btn';
    btn.textContent = 'Switcher';

    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '12px',
      right: '12px',
      zIndex: '99999',
      padding: '10px 14px',
      fontSize: '14px',
      background: '#1e88e5',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    });

    btn.onclick = () => {
      chrome.runtime.sendMessage({ type: 'OPEN_POPUP' });
    };

    doc.body.appendChild(btn);
  }

  function tryInject() {
    const iframe = document.querySelector('iframe#content');
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc || !doc.body) return;

    injectButton(doc);
  }

  // Poll until Proxmox iframe exists
  const timer = setInterval(() => {
    tryInject();
  }, 500);
})();
