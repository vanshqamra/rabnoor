import Head from 'next/head';
import { textContent } from '../data/strings';

const ContactPage = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: textContent.brand.name,
    medicalSpecialty: 'Gastroenterology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tsimiski Street',
      addressLocality: 'Thessaloniki',
      postalCode: '54624',
      addressCountry: 'GR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    telephone: '+30 XXX XXX XXXX',
  };

  return (
    <>
      <Head>
        <title>{textContent.seo.contactTitle}</title>
        <meta name="description" content={`${textContent.contact.addressLabel} Thessaloniki`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="section-title">{textContent.contact.title}</h1>
          <div className="card">
            <h2>{textContent.contact.addressLabel}</h2>
            <p>123 Tsimiski Street, Thessaloniki 54624</p>
            <h2>{textContent.contact.phoneLabel}</h2>
            <p>
              <a href="tel:+300000000000">+30 XXX XXX XXXX</a>
            </p>
            <h2>{textContent.contact.emailLabel}</h2>
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <h2>{textContent.contact.hoursLabel}</h2>
            <table className="table" aria-label="Clinic opening hours">
              <tbody>
                <tr>
                  <th>Monday - Friday</th>
                  <td>09:00 – 17:00</td>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <td>By appointment</td>
                </tr>
              </tbody>
            </table>
            <div className="map-placeholder" role="img" aria-label={textContent.contact.mapPlaceholder}>
              {textContent.contact.mapPlaceholder}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
