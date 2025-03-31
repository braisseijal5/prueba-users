import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { useStore } from "../hooks/useStore";
import { User } from "../types/entities";
import { Pagination } from "../components/Pagination";

export const HomePage = () => {
  const { usersData: users } = useStore();

  const [usersToShow, setUsersToShow] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (users.length > 0) {
      setUsersToShow(users.slice(0 + (page - 1) * 5, 5 + (page - 1) * 5));
    }
  }, [users]);

  return (
    users &&
    usersToShow &&
    usersToShow.length > 0 &&
    users.length > 0 && (
      <div className="flex flex-col gap-4">
        <Table
          headers={[
            { label: "Nombre", key: "firstName" },
            { label: "Apellido", key: "lastName" },
            { label: "Correo", key: "email" },
            { label: "Ciudad", key: "city" },
          ]}
          items={usersToShow}
        ></Table>
        <div className="flex justify-end">
          <Pagination
            actualPage={page}
            totalPages={users.length / 5}
            onChange={(val) => setPage(val)}
          ></Pagination>
        </div>
      </div>
    )
  );
};
