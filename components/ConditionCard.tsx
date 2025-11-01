import Link from 'next/link';
import { Condition } from '../data/conditions';
import { textContent } from '../data/strings';

interface ConditionCardProps {
  condition: Condition;
}

const ConditionCard = ({ condition }: ConditionCardProps) => (
  <article className="card" aria-labelledby={`${condition.slug}-title`}>
    <h3 id={`${condition.slug}-title`}>{condition.name}</h3>
    <p>{condition.summary}</p>
    <ul>
      {condition.symptoms.slice(0, 3).map((symptom) => (
        <li key={symptom}>{symptom}</li>
      ))}
    </ul>
    <Link href={`/conditions/${condition.slug}`} className="button secondary">
      {textContent.conditions.learnMore}
    </Link>
  </article>
);

export default ConditionCard;
