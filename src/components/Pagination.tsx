import React from "react";

export const Pagination = ({
  actualPage,
  totalPages,
  onChange,
}: {
  actualPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}) => {
  const generarNumeros = () => {
    const paginas = [];

    for (let i = 1; i <= totalPages; i++) {
      paginas.push(
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`mx-1  rounded-lg text-sm font-medium transition-all duration-100 ${
            i === actualPage
              ? "bg-slate-600 text-white shadow-md px-3 py-1.5"
              : "bg-white text-gray-700 px-3.5 py-2"
          }`}
        >
          {i}
        </button>
      );
    }

    return paginas;
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={() => onChange(actualPage - 1)}
        disabled={actualPage === 1}
        className="flex gap-2 items-center justify-center rounded-lg px-2 py-2 text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-800 text-white hover:bg-slate-700 border border-slate-700  focus:ring-blue-500 disabled:bg-gray-200 shadow-sm"
      >
        <span>Anterior</span>
      </button>
      {generarNumeros()}
      <button
        onClick={() => onChange(actualPage + 1)}
        disabled={actualPage === totalPages}
        className="flex gap-2 items-center justify-center rounded-lg px-2 py-2 text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-800 text-white hover:bg-slate-700 border border-slate-700  focus:ring-blue-500 disabled:bg-gray-200 shadow-sm"
      >
        <span>Siguiente</span>
      </button>
    </div>
  );
};
