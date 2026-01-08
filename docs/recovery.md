# Recovery / Failsafe

If the kiosk UI misbehaves:

1. Switch to a TTY: press Ctrl+Alt+F2 (or F3/F4) to get a console.
2. Log in as root or a sudo user.
3. Stop the LightDM service:
   ```bash
   sudo systemctl disable --now lightdm
   ```
4. Remove the kiosk UI packages and config:
   ```bash
   sudo ./uninstall.sh
   ```
   or manually remove the packages if you have deleted the repository.
5. Reboot the host:
   ```bash
   sudo reboot
   ```
