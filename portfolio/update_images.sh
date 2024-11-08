#!/bin/bash

# Navigate to the images directory
cd "$(dirname "$0")/images" || exit 1

# Valid image extensions
VALID_EXTENSIONS=("jpg" "jpeg" "png" "gif")

# Function to generate JSON file in each folder
generate_json() {
  local folder="$1"
  local json_file="$folder/images.json"

  # Start the JSON array
  echo "[" > "$json_file"

  # Loop over files with valid image extensions
  first=true
  for img in "$folder"/*; do
    # Get the file extension and convert it to lowercase
    extension="${img##*.}"
    extension="$(echo "$extension" | tr '[:upper:]' '[:lower:]')"

    # Check if it's a valid image file
    if [[ " ${VALID_EXTENSIONS[*]} " == *" $extension "* ]]; then
      # Add a comma before each entry except the first
      if [ "$first" = true ]; then
        first=false
      else
        echo "," >> "$json_file"
      fi
      # Add the filename to the JSON array
      echo "    \"$(basename "$img")\"" >> "$json_file"
    fi
  done

  # End the JSON array
  echo "]" >> "$json_file"

  echo "Generated $json_file with image list."
}

# Loop over each subdirectory in the images directory
for folder in */; do
  if [ -d "$folder" ]; then
    generate_json "$folder"
  fi
done
