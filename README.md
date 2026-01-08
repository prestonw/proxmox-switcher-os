# proxmox-switcher-os

Minimal kiosk-style local UI for a Proxmox host. Boots straight into the Proxmox Web UI on the attached monitor.

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

## Bootstrap

To fully enable the kiosk environment and configure the host to boot into the LightDM session by default, run the `start.sh` helper. This wrapper will execute the installer, enable LightDM and set the default boot target to `graphical.target`.

```
sudo ./start.sh
```

After running `start.sh`, reboot the host. When it comes back up it will automatically log into the kiosk user and display the Proxmox UI.

## Update

To update the switcher environment to the latest version and ensure dependencies are up to date, run the `update.sh` helper. This script performs a `git pull` from the repository and then re-runs the installer.

```
cd /path/to/proxmox-switcher-os
sudo ./update.sh
```

## Uninstallation / rollback

Run the uninstaller and reboot:

```
sudo ./uninstall.sh
sudo reboot
```

## Creating a Manjaro VM

If you would like a full desktop VM (for example, to run Manjaro) in addition to the kiosk, the community maintained [Proxmox VE Helper Scripts](https://community-scripts.github.io/ProxmoxVE) provide one line installers for many operating systems. Use the "VM" menu from that project and select the Manjaro script to automatically download and configure a Manjaro virtual machine on your Proxmox host.
