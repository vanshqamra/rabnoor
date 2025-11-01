import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { conditions, Condition, getConditionBySlug } from '../../data/conditions';
import { textContent } from '../../data/strings';

type ConditionPageProps = {
  condition: Condition;
};

const ConditionPage = ({ condition }: ConditionPageProps) => {
  if (!condition) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`${condition.name} | ${textContent.brand.name}`}</title>
        <meta name="description" content={condition.seoDescription} />
      </Head>
      <section className="section">
        <div className="container">
          <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link href="/conditions">{textContent.conditions.title}</Link> / {condition.name}
          </nav>
          <h1 className="section-title" style={{ textAlign: 'left' }}>
            {condition.name}
          </h1>
          <p>{condition.summary}</p>
          <div className="card">
            <h2>{textContent.conditions.symptoms}</h2>
            <ul>
              {condition.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
            <h2>{textContent.conditions.whenToSee}</h2>
            <p>{condition.whenToSeeDoctor}</p>
            <h2>{textContent.conditions.treatments}</h2>
            <ul>
              {condition.treatments.map((treatment) => (
                <li key={treatment}>{treatment}</li>
              ))}
            </ul>
            <Link href="/appointment" className="button">
              {textContent.hero.bookAppointment}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: conditions.map((condition) => ({ params: { slug: condition.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ConditionPageProps> = async (context) => {
  const slug = context.params?.slug as string;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return { notFound: true };
  }

  return {
    props: {
      condition,
    },
  };
};

export default ConditionPage;
