# Dikshanta Acharya — Developer Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

Modern, high-performance, responsive developer portfolio for **Dikshanta Acharya**, built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🔗 Connect With Me

- **LinkedIn:** [https://www.linkedin.com/in/dikshanta-acharya-0097122a7/](https://www.linkedin.com/in/dikshanta-acharya-0097122a7/)
- **GitHub:** [https://github.com/dikshanta8080](https://github.com/dikshanta8080)
- **Email:** dikshantaacharya04@gmail.com

---

## 🛠️ Tech Stack & Skills

- **Backend:** Java 21, Spring Boot, Spring Security, Hibernate / JPA, Apache Kafka, REST APIs, Gradle, Maven
- **Databases:** PostgreSQL, MySQL, MongoDB
- **Tools & Automation:** Cloudflare Pages, Linux Servers, Git, GitHub, Postman, Swagger, IntelliJ IDEA, TypeScript

---

## 🚀 Deployment Options

### 1. Cloudflare Pages (Active Production)
1. Go to **Cloudflare Dashboard** → **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**.
2. Select your repository: `dikshanta8080/portfolio`.
3. Configure Build Settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add Environment Variables in Cloudflare Pages Settings:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Save and Deploy.
6. Connect Custom Domain:
   - Under **Custom domains** in your Cloudflare Pages project, click **Set up a custom domain**.
   - Enter `dikshantaacharya.com.np` (and `www.dikshantaacharya.com.np` if desired).
   - Cloudflare will automatically configure CNAME records and SSL/TLS certificates.

### 2. Vercel Deployment
1. Import repository on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### 3. Netlify Deployment
1. Connect repository on [Netlify](https://netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `dist`

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/dikshanta8080/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License
MIT License &copy; Dikshanta Acharya
