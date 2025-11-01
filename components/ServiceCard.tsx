import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => (
  <article className="card" aria-labelledby={`${service.slug}-service`}>
    <h3 id={`${service.slug}-service`}>{service.name}</h3>
    <p>{service.description}</p>
    <ul>
      {service.highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  </article>
);

export default ServiceCard;
