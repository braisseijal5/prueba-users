import { useEffect } from "react";
import { User } from "../types/entities";
import { Header, RowAction } from "../types/types";

interface TableProps {
  headers: Header[];
  items: User[];
  actions?: RowAction[];
}

export const Table = ({ headers, items, actions }: TableProps) => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-md bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-slate-800 text-xs uppercase text-white">
          <tr>
            {headers.map((header) => (
              <th key={header.key as string} className={`px-6 py-3`}>
                {header.label}
              </th>
            ))}
            {actions && actions.length > 0 && (
              <th key={"Actions"} className={`px-6 py-3`}>
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={item.email}
              className={`${
                i % 2 === 0 ? "bg-white " : "bg-gray-100 "
              } hover:bg-gray-200 transition-colors cursor-pointer`}
            >
              {headers.map((header) => {
                const value = item[header.key as keyof User];
                return (
                  <td key={header.key as string} className="px-6 py-4">
                    <span>{value as string}</span>
                  </td>
                );
              })}
              <td key="Actions" className="px-6 py-4">
                {actions &&
                  actions.length > 0 &&
                  actions.map((action) => (
                    <button
                      className="flex gap-2 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed bg-slate-800 text-white hover:bg-slate-700 border border-slate-700  focus:ring-blue-500 disabled:bg-gray-200 shadow-sm"
                      onClick={() => action.onClick(item.email)}
                    >
                      {action.label}
                    </button>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
