# proxmox-switcher-os

Minimal kiosk-style local UI for a Proxmox host.
Boots straight into the Proxmox Web UI on the attached monitor.

## What it does
- Installs: Xorg, Openbox, LightDM and Chromium
- Creates a `kiosk` user
- Automatically logs into Openbox and launches Chromium in kiosk mode at https://127.0.0.1:8006/

## Installation
Run the installer and reboot:

```
sudo ./install.sh
sudo reboot
```

## Uninstallation / rollback
Run the uninstaller and reboot:

```
sudo ./uninstall.sh
sudo reboot
```
