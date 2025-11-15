import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { B2BLoginForm } from '@/components/forms/site/B2BLoginForm';
import { cardSurface, sectionHeading, sectionSubheading } from '@/components/layout/styles';

export const metadata: Metadata = {
  title: 'B2B Login | Rab Noor Pvt Ltd',
  description: 'Secure access for distributors to view stock, pricing, and logistics updates.',
  openGraph: {
    title: 'Rab Noor B2B Login',
    description: 'Sign in to view real-time marble availability and logistics status.'
  }
};

export default function B2BLoginPage() {
  return (
    <>
      <PageHeader title="B2B Login" description="Secure distributor access." />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-lg">
          <div className={cardSurface}>
            <h2 className={sectionHeading}>Sign in to continue</h2>
            <p className={`${sectionSubheading} mt-2`}>Need access? Email partnerships@marblesnearme.com.</p>
            <div className="mt-6">
              <B2BLoginForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
