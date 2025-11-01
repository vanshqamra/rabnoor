import Head from 'next/head';
import ConditionCard from '../../components/ConditionCard';
import { conditions } from '../../data/conditions';
import { textContent } from '../../data/strings';

const ConditionsPage = () => (
  <>
    <Head>
      <title>{textContent.seo.conditionsTitle}</title>
      <meta name="description" content={textContent.conditions.intro} />
    </Head>
    <section className="section">
      <div className="container">
        <h1 className="section-title">{textContent.conditions.title}</h1>
        <p>{textContent.conditions.intro}</p>
        <div className="card-grid">
          {conditions.map((condition) => (
            <ConditionCard key={condition.slug} condition={condition} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ConditionsPage;
