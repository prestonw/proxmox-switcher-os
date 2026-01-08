#!/usr/bin/env bash
set -euo pipefail

# Run the installer
./install.sh

# Enable LightDM and set graphical target
systemctl enable lightdm
systemctl set-default graphical.target

printf '\nKiosk environment installed. Please reboot.\n'
