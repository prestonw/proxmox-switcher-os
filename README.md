# proxmox-switcher-os

Minimal kiosk-style local UI for a Proxmox host. Boots straight into the Proxmox Web UI on the attached monitor and provides an overlay to assign hotkeys for quickly launching and switching VM consoles.

## What it does

- Installs: Xorg, Openbox, LightDM and Chromium
- Creates a `kiosk` user
- Automatically logs into Openbox and launches Chromium in kiosk mode at [https://127.0.0.1:8006/](https://127.0.0.1:8006/)
- Loads a custom Chrome extension (**Switcher Tools**) that injects a floating panel into the Proxmox UI to manage VM hotkeys

## Installation

Run the installer and reboot:

```bash
sudo ./install.sh
sudo reboot
```

This installs all required packages, copies configuration files, and enables LightDM.

## Bootstrap

To fully enable the kiosk environment and configure the host to boot into the LightDM session by default, run the `start.sh` helper. This wrapper will execute the installer, enable LightDM, set the default boot target to `graphical.target` and reboot the system.

```bash
sudo ./start.sh
```

After running `start.sh`, reboot the host. When it comes back up it will automatically log into the kiosk user and display the Proxmox UI with the Switcher Tools overlay.

## Update

To update to the latest version of proxmox-switcher-os after pulling new commits, run the `update.sh` helper. It performs a `git pull` and re-runs the installer.

```bash
sudo ./update.sh
```

## Switcher Tools extension

A Chrome/Chromium extension is included in the `extension/` directory and loaded automatically by the kiosk. It injects a small "Switcher Tools" button into the Proxmox interface. When clicked, it opens a popup that lets you assign keyboard shortcuts to VM IDs.

- **Assign a hotkey**: enter the VM ID and a key (e.g. `F2` or `Ctrl+Alt+1`) in the popup. The extension stores assignments and prevents duplicate keys.
- **Remove or change**: edit the key field or click the remove icon.
- **Reload**: use the refresh button in the popup to read back current assignments.

Pressing an assigned key will start the VM if necessary and open its console via your local helper script. The helper is installed at `/usr/local/bin/vm_switcher.sh` and is invoked by the extension through a local service or native messaging host.

## Uninstallation / rollback

To remove the kiosk environment and restore the host to a console-only setup, run the uninstall script and disable LightDM:

```bash
sudo ./uninstall.sh
sudo systemctl set-default multi-user.target
sudo systemctl disable lightdm
sudo reboot
```

## Creating a Manjaro VM

To create a desktop VM such as Manjaro, use the community Proxmox VE Helper Scripts. Follow the instructions on the [Helper Scripts website](https://github.com/community-scripts/ProxmoxVE) or run the relevant script to download and configure a prebuilt Manjaro image. Once the VM is created, note its VM ID and add a hotkey in the Switcher Tools popup.

## License

MIT
