#!/bin/bash
# Find all image files
find ./public -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.svg" -o -iname "*.webp" -o -iname "*.gif" \) | while read img; do
  # Get just the filename and relative path variants
  filename=$(basename "$img")
  # Search for any reference to this image in source files
  if ! grep -r "$filename" --include="*.vue" --include="*.js" --include="*.ts" --include="*.json" --include="*.css" --include="*.scss" --include="*.md" --include="*.yml" -q .; then
    echo "UNUSED: $img"
  fi
done
