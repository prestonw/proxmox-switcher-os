document.addEventListener('DOMContentLoaded', async () => {
  const vmList = document.getElementById('vmList');
  const refreshBtn = document.getElementById('refreshBtn');
  const errorDiv = document.getElementById('error');

  async function loadAndRender() {
    const response = await chrome.runtime.sendMessage({ type: 'getVmKeys' });
    render(response.vmKeys || {});
  }

  function render(vmKeys) {
    vmList.innerHTML = '';
    Object.entries(vmKeys).forEach(([vmId, key]) => {
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `
        <span>${vmId}</span>
        <input type="text" value="${key}" data-vmid="${vmId}" class="key-input" maxlength="10">
        <button data-vmid="${vmId}" class="remove-btn">\u2715</button>
      `;
      vmList.appendChild(row);
    });
    const addRow = document.createElement('div');
    addRow.className = 'row';
    addRow.innerHTML = `
      <input type="text" placeholder="VM ID" id="newVmId">
      <input type="text" placeholder="Hotkey" id="newHotkey" maxlength="10">
      <button id="addBtn">\uFF0B</button>
    `;
    vmList.appendChild(addRow);
  }

  async function saveKey(vmId, newKey) {
    const response = await chrome.runtime.sendMessage({ type: 'setVmKey', vmId, key: newKey });
    if (response.success) {
      errorDiv.textContent = '';
    } else {
      errorDiv.textContent = response.error || 'Error saving key.';
    }
    loadAndRender();
  }

  async function removeKey(vmId) {
    await chrome.runtime.sendMessage({ type: 'removeVmKey', vmId });
    loadAndRender();
  }

  async function addNew() {
    const vmId = document.getElementById('newVmId').value.trim();
    const newKey = document.getElementById('newHotkey').value.trim();
    if (vmId && newKey) {
      await saveKey(vmId, newKey);
    }
  }

  vmList.addEventListener('change', async (e) => {
    if (e.target.matches('.key-input')) {
      const vmId = e.target.getAttribute('data-vmid');
      await saveKey(vmId, e.target.value.trim());
    }
  });

  vmList.addEventListener('click', async (e) => {
    if (e.target.matches('.remove-btn')) {
      const vmId = e.target.getAttribute('data-vmid');
      await removeKey(vmId);
    } else if (e.target.id === 'addBtn') {
      await addNew();
    }
  });

  refreshBtn.addEventListener('click', loadAndRender);

  loadAndRender();
});
