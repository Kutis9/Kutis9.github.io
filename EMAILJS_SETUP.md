# 📧 EmailJS Setup Guide

Tento guide ťa prevedie nastavením EmailJS pre kontaktný formulár na tvojej portfólio stránke.

## 🚀 Krok za krokom setup

### 1. **Vytvor EmailJS účet**
- Choď na [emailjs.com](https://www.emailjs.com/)
- Klikni "Sign Up" a vytvor účet
- Potvrď svoj email

### 2. **Pridaj Email Service**
- V dashboard klikni "Add New Service"
- Vyber svoj email provider (Gmail, Outlook, Yahoo, atď.)
- Sleduj inštrukcie pre pripojenie tvojho emailu
- **Poznámka**: Pre Gmail budeš možno potrebovať "App Password"

### 3. **Vytvor Email Template**
- Klikni "Email Templates" → "Create New Template"
- Použij tieto variables v tvojom template:
  ```
  From: {{from_name}} ({{from_email}})
  To: {{to_name}}
  
  Subject: New message from your portfolio
  
  Message:
  {{message}}
  
  ---
  Sent from your portfolio contact form
  ```

### 4. **Získaj konfiguračné údaje**
- **Service ID**: Nájdeš v "Email Services" sekcii
- **Template ID**: Nájdeš v "Email Templates" sekcii  
- **Public Key**: Account → API Keys

## 🔧 **Setup pre rôzne prostredia**

### 📱 **Lokálny development**
1. **Skopíruj `.env.example` na `.env`**:
   ```bash
   cp .env.example .env
   ```

2. **Vyplň svoje EmailJS údaje v `.env`**:
   ```bash
   VITE_EMAILJS_SERVICE_ID=service_tvoje_id
   VITE_EMAILJS_TEMPLATE_ID=template_tvoje_id  
   VITE_EMAILJS_PUBLIC_KEY=tvoj_public_key
   ```

3. **Spusti development server**:
   ```bash
   npm run dev
   ```

### 🌐 **GitHub Pages deployment**
1. **Choď do tvojho GitHub repo → Settings → Secrets and variables → Actions**
   
   Link: https://github.com/Kutis9/Kutis9.github.io/settings/secrets/actions

2. **Pridaj tieto 3 secrets** (klikni "New repository secret"):
   ```
   Name: VITE_EMAILJS_SERVICE_ID
   Value: service_tvoje_id
   
   Name: VITE_EMAILJS_TEMPLATE_ID  
   Value: template_tvoje_id
   
   Name: VITE_EMAILJS_PUBLIC_KEY
   Value: tvoj_public_key
   ```

3. **Push do main branch** - GitHub Actions automaticky nasadí s novými sekretmi

## ❓ **Prečo nie klasický `.env`?**

| Prístup | Lokálne | GitHub Pages | Bezpečnosť |
|---------|---------|-------------|------------|
| **`.env` súbor** | ✅ Funguje | ❌ Nefunguje* | ⚠️ Riziká |
| **GitHub Secrets** | ❌ Komplikované | ✅ Funguje | ✅ Bezpečné |

*GitHub Pages je statické hostovanie - nemá server na čítanie `.env` súborov

#### A) Choď do GitHub repo Settings:
🔗 **[Repository Secrets](https://github.com/Kutis9/Kutis9.github.io/settings/secrets/actions)**

#### B) Pridaj tieto 3 secrets (klikni "New repository secret"):

| **Name** | **Value** | **Popis** |
|----------|-----------|-----------|
| `VITE_EMAILJS_SERVICE_ID` | `service_xyz123` | Tvoje Service ID z EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_abc456` | Tvoje Template ID z EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | `user_def789` | Tvoj Public Key z EmailJS |

⚠️ **DÔLEŽITÉ**: 
- Názvy secrets musia byť **presne** ako vyššie
- **VITE_** prefix je potrebný pre Vite build
- Hodnoty získaš z EmailJS dashboard

### 6. **Test deployment**
Po nastavení secrets:
- Push ľubovoľnú zmenu do `main` branch
- GitHub Actions automaticky prebuilduje stránku
- Kontaktný formulár by mal fungovať na `kutis9.github.io`

## 🔧 Troubleshooting

### Problem: "User ID is required"
- Skontroluj **VITE_EMAILJS_PUBLIC_KEY** secret
- Uisti sa, že používaš Public Key (nie Service ID)

### Problem: "Template not found"  
- Skontroluj **VITE_EMAILJS_TEMPLATE_ID** secret
- Uisti sa, že template je "Active" v EmailJS dashboard

### Problem: "Service not found"
- Skontroluj **VITE_EMAILJS_SERVICE_ID** secret
- Uisti sa, že email service je pripojený a funguje

### Problem: Formulár sa nesnaží odoslať
- Otvor Developer Console (F12) v browseri
- Pozri sa na chyby v Console tab
- Skontroluj Network tab pre EmailJS requesty

## 🔒 Bezpečnosť

**✅ EmailJS Public Key je bezpečný pre frontend:**
- Je určený na client-side použitie
- Nie je to secret key
- Môže byť viditeľný v builded kóde

**❌ Nikdy nezdieľaj:**
- Private/Secret kľúče
- Hesla k emailovým účtom  
- API kľúče určené na server-side

## 📱 Testing Checklist

- [ ] EmailJS účet vytvorený a overený
- [ ] Email service pripojený (Gmail/Outlook/etc.)
- [ ] Email template vytvorený a aktívny
- [ ] GitHub Secrets nastavené (všetky 3)
- [ ] GitHub Actions deployment úspešný
- [ ] Test formulár na `kutis9.github.io`
- [ ] Email doručený do tvojej schránky

## 🔧 Troubleshooting

### Problem: "User ID is required"
- Uisti sa, že máš správny **Public Key** (nie Service ID)

### Problem: "Template not found"  
- Skontroluj **Template ID** v dashboard
- Uisti sa, že template je "Active"

### Problem: "Service not found"
- Skontroluj **Service ID** v dashboard
- Uisti sa, že service je pripojený a funguje

### Problem: Nedostávam emaily
- Skontroluj spam folder
- Uisti sa, že template obsahuje správne variables
- Skontroluj EmailJS dashboard pre error logy

## 💡 Tips

1. **Gmail setup**: Možno budeš potrebovať 2FA a App Password
2. **Testing**: Používaj svoj vlastný email pre testing
3. **Limits**: Free plan má 200 emailov/mesiac
4. **Security**: Public key je bezpečný pre frontend použitie

## 📱 Mobile testing
- Testuj formulár aj na mobile zariadeniach
- Skontroluj loading states a error messages

---

Po nastavení budeš dostávať všetky správy z kontaktného formulára priamo do tvojho emailu! 🎉