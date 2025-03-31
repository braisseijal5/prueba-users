import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const getButtonClasses = (variant: string) => {
  const baseClasses =
    "flex gap-2 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";
  switch (variant) {
    case "primary":
      return `${baseClasses} bg-slate-800 text-white hover:bg-slate-700 border border-slate-700  focus:ring-blue-500 disabled:bg-gray-200 shadow-sm`;
    case "secondary":
      return `${baseClasses} bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 disabled:bg-gray-200`;
    case "danger":
      return `${baseClasses} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-400`;
  }
};

export const Button = (props: ButtonProps) => {
  const { onClick, variant = "primary", disabled, ...nativeProps } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClasses(variant)} ${nativeProps.className}`}
    >
      {props.children}
    </button>
  );
};
