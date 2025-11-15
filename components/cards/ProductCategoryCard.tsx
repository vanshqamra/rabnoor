import { smallLabel } from '@/components/layout/styles';

interface Props {
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}

export const ProductCategoryCard = ({ title, description, active, onClick }: Props) => (
  <button
    onClick={onClick}
    className={`w-full rounded-full border px-6 py-4 text-left text-sm font-semibold tracking-wide transition ${
      active
        ? 'border-slate-900 bg-slate-900/5 text-slate-900 shadow-sm'
        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
    }`}
  >
    <span className={smallLabel}>{description}</span>
    <span className="block text-base text-slate-900">{title}</span>
  </button>
);
