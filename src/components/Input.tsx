import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Input = (props: InputProps) => {
  const { value, onChange, placeholder, ...nativeProps } = props;
  return (
    <div
      className={`flex items-center gap-3 w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-gray-300 transition ${nativeProps.className}`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
      />
    </div>
  );
};
