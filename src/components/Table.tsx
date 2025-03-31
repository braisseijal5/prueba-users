import { useEffect } from "react";
import { User } from "../types/entities";
import { Header } from "../types/types";

interface TableProps {
  headers: Header[];
  items: User[];
}

export const Table = ({ headers, items }: TableProps) => {
  useEffect(() => {
    console.log(headers);
  }, []);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
