interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {/* Pros Box */}
      <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
        <h4 className="text-emerald-800 font-bold text-sm flex items-center gap-2 mb-3">
          <span className="bg-emerald-500 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">✓</span>
          Pros
        </h4>
        <ul className="space-y-2 text-xs text-emerald-950">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Box */}
      <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5">
        <h4 className="text-rose-800 font-bold text-sm flex items-center gap-2 mb-3">
          <span className="bg-rose-500 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">✕</span>
          Cons
        </h4>
        <ul className="space-y-2 text-xs text-rose-950">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-rose-600 font-bold">•</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}