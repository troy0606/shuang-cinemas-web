#!/bin/sh

echo "forcing new pnpm"
npm install -g pnpm@8.5.0

echo "node: $(node --version)"
echo "pnpm: $(pnpm --version)"

pnpm install