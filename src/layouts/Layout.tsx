import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(to left, #0f172a 25%, #1e293b 35%, #2563eb 75%)",
      }}
    >
      <div className="w-[70%] h-[80%] rounded-3xl  border border-white/5 bg-white/35 backdrop-blur-md shadow-2xl p-8 ">
        {children}
      </div>
    </div>
  );
};
