import AffiliateButton from '@/components/AffiliateButton';

interface VerdictBadgeProps {
  score: number; // e.g., 9.2
  verdictTitle: string;
  summary: string;
  slug: string;
}

export default function VerdictBadge({
  score,
  verdictTitle,
  summary,
  slug,
}: VerdictBadgeProps) {
  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 my-8 shadow-lg flex flex-col md:flex-row items-center gap-6 border border-slate-800">
      {/* Visual Score Circle */}
      <div className="flex flex-col items-center justify-center shrink-0">
        <div className="w-24 h-24 rounded-full border-4 border-amber-400 flex flex-col items-center justify-center bg-slate-800 shadow-inner">
          <span className="text-3xl font-black text-amber-400 leading-none">
            {score.toFixed(1)}
          </span>
          <span className="text-[10px] text-slate-400 font-semibold uppercase mt-1">
            out of 10
          </span>
        </div>
      </div>

      {/* Summary Content */}
      <div className="flex-1 text-center md:text-left space-y-2">
        <div className="inline-block bg-amber-400/10 text-amber-400 font-bold text-xs uppercase px-3 py-1 rounded-full border border-amber-400/20">
          Our Final Verdict
        </div>
        <h3 className="text-2xl font-bold text-white">{verdictTitle}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{summary}</p>
      </div>

      {/* Direct Buy Action */}
      <div className="shrink-0 w-full md:w-auto text-center">
        <AffiliateButton
          slug={slug}
          label="Check Best Price"
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl transition-colors block w-full text-center text-sm"
        />
      </div>
    </div>
  );
}