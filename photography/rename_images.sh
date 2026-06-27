#!/bin/bash

# Navigate to the folder containing the images
#cd /path/to/your/folder

# Initialize a counter variable
counter=100

# Loop through all .jpg files in the folder
for img in *.jpg; do
    # Format the counter to be 3 digits, padding with leading zeros
    new_name=$(printf "%03d.jpg" $counter)

    # Rename the file
    mv "$img" "$new_name"

    # Increment the counter
    ((counter++))
done

echo "Renaming complete!"

