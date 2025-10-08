#!/usr/bin/env bash
# BMAD Education Pack Installation Script
# Installs education agents as Claude Code slash commands

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
COMMANDS_DIR="$PROJECT_ROOT/.claude/commands/bmad-ed"

echo "🎓 Installing BMAD Education Pack..."
echo ""

# Create command directory
echo "📁 Creating .claude/commands/bmad-ed directory..."
mkdir -p "$COMMANDS_DIR/agents"

# Install agents
echo "🤖 Installing education agents..."
for agent in "$SCRIPT_DIR/agents"/*.md; do
  basename=$(basename "$agent" .md)
  echo "  • Installing $basename..."
  
  cat > "$COMMANDS_DIR/agents/${basename}.md" << EOF
# /bmad-ed:${basename} Command

When this command is used, adopt the following agent persona:

$(cat "$agent")
EOF
done

echo ""
echo "✅ BMAD Education Pack installed successfully!"
echo ""
echo "Available commands:"
echo "  • /bmad-ed:curriculum-architect"
echo "  • /bmad-ed:instructional-designer"
echo "  • /bmad-ed:assessment-specialist"
echo "  • /bmad-ed:differentiation-expert"
echo "  • /bmad-ed:edtech-integrator"
echo ""
echo "Restart Claude Code to see the new commands."
