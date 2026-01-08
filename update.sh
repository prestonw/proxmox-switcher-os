#!/usr/bin/env bash
set -euo pipefail

# Pull the latest changes from the repository
if [ -d .git ]; then
  git pull --ff-only
fi

# Run the installer to ensure dependencies are up to date
./install.sh

printf '\nUpdate complete.\n'
