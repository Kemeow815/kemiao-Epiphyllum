#!/bin/bash
set -e

echo "Starting update process..."

# Build the project
echo "Running pnpm build..."
pnpm build

if [ $? -eq 0 ]; then
    echo "Build successful, proceeding with restart..."
    
    # Find and kill process running on port 3000
    echo "Finding process on port 3000..."
    PID=$(lsof -ti:3000 || true)
    
    if [ -n "$PID" ]; then
        echo "Killing process $PID..."
        kill -9 $PID
        echo "Process killed."
    else
        echo "No process found on port 3000."
    fi
    
    # Start the application
    echo "Starting application with pnpm start..."
    pnpm start &;
    echo "Application restarted successfully."
else
    echo "Build failed, aborting restart."
    exit 1
fi