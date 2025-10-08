#!/bin/bash

# Cleanup script for temporary files
# Run this to find and remove temporary debugging files

echo "🔍 Scanning for temporary files..."

TEMP_PATTERNS=(
    "*_test.sh"
    "*_fix.sh"
    "test_*.sh"
    "debug_*.sh"
    "temp_*"
    "*_temp.*"
    "testing_suite.ts"
    "quick_*.sh"
    "deploy-*.sh"
)

FOUND_FILES=()

for pattern in "${TEMP_PATTERNS[@]}"; do
    while IFS= read -r -d '' file; do
        # Exclude scripts/ directory itself and release.sh/install.sh
        if [[ ! "$file" =~ scripts/cleanup-temp-files.sh$ ]] &&
           [[ ! "$file" =~ release.sh$ ]] &&
           [[ ! "$file" =~ install.sh$ ]]; then
            FOUND_FILES+=("$file")
        fi
    done < <(find . -maxdepth 2 -name "$pattern" -type f -print0 2>/dev/null)
done

if [ ${#FOUND_FILES[@]} -eq 0 ]; then
    echo "✅ No temporary files found"
    exit 0
fi

echo "⚠️  Found ${#FOUND_FILES[@]} temporary file(s):"
echo ""
for file in "${FOUND_FILES[@]}"; do
    echo "  $file"
done

echo ""
read -p "Delete these files? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    for file in "${FOUND_FILES[@]}"; do
        rm "$file"
        echo "  🗑️  Deleted: $file"
    done
    echo ""
    echo "✅ Cleanup complete"
else
    echo "❌ Cleanup cancelled"
    exit 1
fi
