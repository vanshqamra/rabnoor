interface Props {
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}

export const ProductCategoryCard = ({ title, description, active, onClick }: Props) => (
  <button
    onClick={onClick}
    className={`w-full rounded-2xl border px-6 py-5 text-left transition ${
      active ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-slate-200 bg-white'
    }`}
  >
    <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Category</p>
    <h3 className="mt-2 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </button>
);
