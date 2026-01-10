#!/usr/bin/env bash
# vm_switcher.sh
# Launch or start a VM by VMID and open its console in the browser.

VMID="$1"
if [ -z "$VMID" ]; then
  echo "Usage: $0 <vmid>"
  exit 1
fi

# Check if the VM is running; if not, start it
status=$(qm status "$VMID" 2>&1 || true)
if ! echo "$status" | grep -q "status: running"; then
  qm start "$VMID"
fi

# Small delay to ensure VM is booting
sleep 1

# Determine the node name (assumes single-node setup)
NODE=$(hostname)

# Launch the VM's noVNC console in the default browser
# NOTE: The user must already be authenticated in the kiosk Chromium session
URL="https://127.0.0.1:8006/?console=kvm&vmid=${VMID}&node=${NODE}&resize=off"
xdg-open "$URL" >/dev/null 2>&1 &

exit 0
