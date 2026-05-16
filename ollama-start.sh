#!/bin/bash
# Disable persistence — models unload after 5 minutes of inactivity
export OLLAMA_KEEP_ALIVE="5m"
# GPU offloading — all layers go to GPU (Metal on Apple Silicon)
export OLLAMA_NUM_GPU=99
exec /usr/local/bin/ollama serve
