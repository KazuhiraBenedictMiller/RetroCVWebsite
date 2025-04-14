#!/bin/bash
# search_developer.sh: Recursively find all files that contain the word "Developer"
#
# Usage:
#   ./search_developer.sh [directory]
#
# If [directory] is not provided, the script searches in the current directory.

# Set the directory to search; default to current directory if no argument is provided
SEARCH_DIR="${1:-.}"

# Verify that the provided directory exists
if [ ! -d "$SEARCH_DIR" ]; then
  echo "Error: Directory '$SEARCH_DIR' does not exist." >&2
  exit 1
fi

echo "Searching for files containing the word 'Developer' in directory: $SEARCH_DIR"

# Use grep to recursively search (-R) in text files (-I to ignore binary files)
# -l prints only the file names containing the match, and -n includes line numbers in the output.
# Remove -n if you prefer to see only file names.
grep -RIl "Developer" "$SEARCH_DIR"

# Alternatively, if you wish to show each matching line with line numbers instead,
# you could use:
# grep -RI "Developer" "$SEARCH_DIR"
