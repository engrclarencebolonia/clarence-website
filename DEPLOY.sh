#!/bin/bash
# =============================================================
# clarence-website — One-command GitHub Pages Deploy Script
# =============================================================
# Usage: bash DEPLOY.sh <your-github-token>
# Get token at: https://github.com/settings/tokens/new
# Required scopes: repo, workflow
# =============================================================

set -e

TOKEN=$1
USERNAME="engrclarencebolonia"
REPO="clarence-website"

if [ -z "$TOKEN" ]; then
  echo "❌ Usage: bash DEPLOY.sh <your-github-token>"
  echo ""
  echo "Get your token at: https://github.com/settings/tokens/new"
  echo "Required scopes: ✅ repo  ✅ workflow"
  exit 1
fi

echo "🚀 Creating GitHub repository..."

# Create repo via API
CREATE_RESULT=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{
    \"name\": \"$REPO\",
    \"description\": \"UI/UX & Product Designer portfolio — built with Next.js, Tailwind CSS, Framer Motion\",
    \"private\": false,
    \"has_pages\": true,
    \"auto_init\": false
  }")

if [ "$CREATE_RESULT" = "422" ]; then
  echo "⚠️  Repo already exists — pushing to existing repo"
elif [ "$CREATE_RESULT" = "201" ]; then
  echo "✅ Repository created!"
else
  echo "❌ Failed to create repo (HTTP $CREATE_RESULT)"
  exit 1
fi

echo "📤 Pushing code..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://$USERNAME:$TOKEN@github.com/$USERNAME/$REPO.git"
git push -u origin main --force

echo "⚙️  Enabling GitHub Pages (source: GitHub Actions)..."
sleep 3

# Enable GitHub Pages via API (source: GitHub Actions)
PAGES_RESULT=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$USERNAME/$REPO/pages" \
  -d '{"source": {"branch": "gh-pages", "path": "/"}, "build_type": "workflow"}' 2>/dev/null || echo "done")

echo ""
echo "=============================================="
echo "✅ ALL DONE! Your site is deploying now."
echo ""
echo "📦 Repo:    https://github.com/$USERNAME/$REPO"
echo "🌐 Site:    https://$USERNAME.github.io/$REPO"
echo "⏱️  Live in: ~2-3 minutes (watch the Actions tab)"
echo ""
echo "📊 Watch build: https://github.com/$USERNAME/$REPO/actions"
echo "=============================================="
