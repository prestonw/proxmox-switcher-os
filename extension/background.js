chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === 'OPEN_POPUP') {
    chrome.action.openPopup();
  }
});
