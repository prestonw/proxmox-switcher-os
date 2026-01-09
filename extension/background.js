// Background script for Proxmox Switcher extension
chrome.runtime.onInstalled.addListener(() => {
  // Initialize storage with empty vmKeys object if not present
  chrome.storage.local.get('vmKeys', (data) => {
    if (!data.vmKeys) {
      chrome.storage.local.set({ vmKeys: {} });
    }
  });
});

// Handle messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getVmKeys') {
    chrome.storage.local.get('vmKeys', (data) => {
      sendResponse(data.vmKeys || {});
    });
    return true; // Keep channel open for async response
  }
  if (message.type === 'setVmKey') {
    const { vmid, key } = message;
    chrome.storage.local.get('vmKeys', (data) => {
      const vmKeys = data.vmKeys || {};
      // Check for duplicate key assignment
      let conflict = null;
      for (const id in vmKeys) {
        if (vmKeys[id] === key && id !== vmid) {
          conflict = id;
          break;
        }
      }
      if (conflict) {
        sendResponse({ success: false, conflict });
      } else {
        vmKeys[vmid] = key;
        chrome.storage.local.set({ vmKeys }, () => {
          sendResponse({ success: true });
        });
      }
    });
    return true;
  }
  if (message.type === 'removeVmKey') {
    const { vmid } = message;
    chrome.storage.local.get('vmKeys', (data) => {
      const vmKeys = data.vmKeys || {};
      delete vmKeys[vmid];
      chrome.storage.local.set({ vmKeys }, () => {
        sendResponse({ success: true });
      });
    });
    return true;
  }
});
