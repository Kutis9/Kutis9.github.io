# 🔒 Security Guidelines

## ⚠️ IMPORTANT: Public Repository Safety

This repository is **PUBLIC** on GitHub. Follow these security guidelines:

## ❌ NEVER Commit These:

- Real email addresses
- Phone numbers  
- Personal home addresses
- API keys or tokens
- Passwords or secrets
- Private social media links
- Any personally identifiable information (PII)

## ✅ Safe to Commit:

- Display names (pseudonyms OK)
- Professional titles
- General location (country/city, not address)
- Public social media profiles
- Portfolio/website URLs
- Professional slogans/descriptions

## 📁 File Security:

- **`src/config/public.ts`** ✅ Safe for GitHub
- **`src/config/private.ts`** ❌ BLOCKED by .gitignore
- **`src/config/private.example.ts`** ✅ Template only

## 🛡️ Before You Commit:

1. Review all files for sensitive information
2. Check that `private.ts` is in `.gitignore`
3. Verify no real contact details in public files
4. Use generic/professional information only

## 🚨 If You Accidentally Commit Sensitive Data:

1. **NEVER** just delete and recommit
2. Use `git filter-branch` to remove from history
3. Consider the data compromised
4. Change any exposed passwords/tokens immediately

## 📞 Contact:

For security concerns about this repository, please create an issue or contact the maintainer.

---
**Remember: Once on GitHub, always on GitHub! Stay safe! 🛡️**