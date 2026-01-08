#!/usr/bin/env bash
set -euo pipefail

echo "[*] proxmox-switcher-os: removing kiosk UI packages..."

systemctl disable --now lightdm 2>/dev/null || true

# Remove config (leave user by default)
rm -f /etc/lightdm/lightdm.conf
rm -f /home/kiosk/.config/openbox/autostart 2>/dev/null || true

apt purge -y \
  lightdm \
  openbox \
  chromium \
  xserver-xorg \
  xinit \
  dbus-x11 || true

apt autoremove -y || true

echo "[*] Done. Reboot recommended."
