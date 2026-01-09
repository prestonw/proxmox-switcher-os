#!/usr/bin/env bash
set -euo pipefail

echo "[*] proxmox-switcher-os: installing kiosk UI packages..."

export DEBIAN_FRONTEND=noninteractive

apt update
apt install -y --no-install-recommends \
  xserver-xorg \
  xinit \
  openbox \
  lightdm \
  chromium \
  dbus-x11 \
  polkitd \
  ca-certificates \
  fonts-dejavu-core \
  sxhkd \
  xdg-utils

echo "[*] Creating kiosk user (if missing)..."
if ! id kiosk >/dev/null 2>&1; then
  adduser --disabled-password --gecos "" kiosk
fi

echo "[*] Installing LightDM autologin config..."
install -m 644 config/lightdm.conf /etc/lightdm/lightdm.conf

echo "[*] Installing Openbox autostart..."
mkdir -p /home/kiosk/.config/openbox
install -m 755 config/openbox-autostart /home/kiosk/.config/openbox/autostart
chown -R kiosk:kiosk /home/kiosk/.config

echo "[*] Installing sxhkd configuration..."
mkdir -p /home/kiosk/.config/sxhkd
install -m 644 config/sxhkdrc /home/kiosk/.config/sxhkd/sxhkdrc
chown -R kiosk:kiosk /home/kiosk/.config/sxhkd

echo "[*] Installing vm_switcher helper..."
install -m 755 vm_switcher.sh /usr/local/bin/vm_switcher.sh

echo "[*] Installing Chrome extension..."
# copy extension directory into kiosk home
mkdir -p /home/kiosk/proxmox-switcher-os
cp -r extension /home/kiosk/proxmox-switcher-os/extension
chown -R kiosk:kiosk /home/kiosk/proxmox-switcher-os/extension

echo "[*] Enabling LightDM..."
systemctl enable lightdm

echo "[*] Done. Reboot to enter kiosk mode."
