#!/bin/bash

# Kill any existing NX client
pkill nxplayer 2>/dev/null

# Small delay to ensure clean start
sleep 0.5

# Launch fullscreen
exec /usr/NX/bin/nxplayer --fullscreen
