import Head from 'next/head';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { textContent } from '../data/strings';

const ServicesPage = () => (
  <>
    <Head>
      <title>{textContent.seo.servicesTitle}</title>
      <meta name="description" content={textContent.services.intro} />
    </Head>
    <section className="section">
      <div className="container">
        <h1 className="section-title">{textContent.services.title}</h1>
        <p>{textContent.services.intro}</p>
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="service-note" role="note">
          {textContent.services.screeningNote}
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
