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
  fonts-dejavu-core

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

echo "[*] Enabling LightDM..."
systemctl enable lightdm

echo "[*] Done. Reboot to enter kiosk mode."
