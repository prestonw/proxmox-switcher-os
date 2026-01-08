// Popup script for Proxmox Switcher Tools extension
// This basic version simply displays a message. Future versions will load VM data and allow key binding.
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('vmList');
  if (container) {
    container.textContent = 'Switcher Tools extension active. Configure VM hotkeys in future updates.';
  }
});
