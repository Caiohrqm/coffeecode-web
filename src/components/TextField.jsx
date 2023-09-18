export default function TextField({ label, id, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-slate-100">
        {label}
      </label>
      <input
        type="text"
        id={id}
        {...props}
        className="bg-stone-900 rounded px-3 py-1 outline-none focus:ring-1 focus:ring-amber-200"
      />
    </div>
  );
}
