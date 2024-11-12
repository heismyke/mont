interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={`
          w-10 h-6 bg-gray-200 rounded-full 
          transition-colors duration-200 ease-in-out
          ${checked ? 'bg-indigo-600' : 'bg-gray-200'}
        `}>
          <div className={`
            absolute w-4 h-4 bg-white rounded-full 
            transition-transform duration-200 ease-in-out
            ${checked ? 'translate-x-5' : 'translate-x-1'} 
            top-1
          `} />
        </div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
    </label>
  );
} 