import { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful'; // You'll need to install this package

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popover = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popover.current && !popover.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <button
          className="w-full flex items-center px-3 py-2 border rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <div
            className="w-6 h-6 rounded-md mr-2"
            style={{ backgroundColor: value }}
          />
          <span>{value}</span>
        </button>

        {isOpen && (
          <div
            ref={popover}
            className="absolute z-10 mt-2 p-3 bg-white rounded-md shadow-lg"
          >
            <HexColorPicker color={value} onChange={onChange} />
          </div>
        )}
      </div>
    </div>
  );
} 