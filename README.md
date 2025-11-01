# Dr. Stavros Papadopoulos Gastroenterology Website

Production-ready Next.js website for a gastroenterologist and hepatologist based in Thessaloniki, Greece. The site highlights medical services, conditions treated, and provides patient tools such as online appointment requests, accessibility enhancements, and a self-service chatbot.

## Features

- Multi-page layout (Home, About/CV, Conditions, Services, Appointment, Contact, Blog)
- Dynamic data-driven sections for CV, conditions, services, and patient education
- Mock API endpoint for appointment requests with success feedback
- Floating chatbot answering common FAQs with graceful fallback messaging
- Accessibility controls (font scaling, high-contrast theme, dyslexia-friendly mode)
- SEO-friendly metadata, Open Graph tags, and Schema.org structured data
- Responsive design with semantic HTML structure and placeholder imagery

## Getting Started

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000). Update the placeholders in the `data/` directory to personalize the website content, including doctor details, conditions, services, and FAQ responses.

## Production Build

```bash
npm run build
npm start
```

## Project Structure

- `components/` – Reusable UI components, including layout, cards, chatbot, and accessibility panel
- `data/` – Centralized content objects for easy updates and future localization
- `pages/` – Next.js page routes and API endpoint for appointment requests
- `public/` – Static assets and image placeholders
- `styles/` – Global styling and design tokens

## Customization Tips

- Replace placeholder contact details (`+30 XXX XXX XXXX`, `info@example.com`, address) with real clinic information
- Swap the `public/doctor-placeholder.svg` with a professional portrait for the hero section
- Integrate the `/api/appointments` endpoint with your scheduling system, calendar, or CRM as needed
- Extend the chatbot FAQ entries in `data/faq.ts` to cover additional patient questions

## License

This project is provided as a starting point. Adapt and extend it to meet your clinic’s branding, compliance, and localization requirements.
