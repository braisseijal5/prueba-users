import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { useStore } from "../hooks/useStore";
import { User } from "../types/entities";
import { Pagination } from "../components/Pagination";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useBackend } from "../hooks/useBackend";

export const HomePage = () => {
  const {
    usersData: users,
    initialUsersData: initialUsers,
    onChangeActualUsers,
    onGetInitialData,
  } = useStore();

  const [usersToShow, setUsersToShow] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [userToDelete, setuserToDelete] = useState<string | undefined>(
    undefined
  );

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (users.length > 0) {
      setUsersToShow(users.slice(0 + (page - 1) * 5, 5 + (page - 1) * 5));
    }
  }, [users, page]);

  const deleteUser = () => {
    let array = users.filter((user) => user.email !== userToDelete);
    console.log(array);
    onChangeActualUsers(array);
    setOpenModal(false);
  };

  return (
    users &&
    usersToShow &&
    usersToShow.length > 0 &&
    users.length > 0 && (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 w-full">
          <Button
            className="ml-auto"
            variant="primary"
            onClick={() => {
              onGetInitialData(initialUsers);
              setPage(1);
            }}
          >
            <span className="text-nowrap">RestablecerDatos</span>
          </Button>
        </div>
        <Table
          headers={[
            { label: "Nombre", key: "firstName" },
            { label: "Apellido", key: "lastName" },
            { label: "Correo", key: "email" },
            { label: "Ciudad", key: "city" },
          ]}
          items={usersToShow}
          actions={[
            {
              label: "Eliminar",
              onClick: (email: string) => {
                setuserToDelete(email);
                setOpenModal(true);
              },
            },
          ]}
        ></Table>
        <div className="flex justify-end">
          <Pagination
            actualPage={page}
            totalPages={Math.ceil(users.length / 5)}
            onChange={(val) => setPage(val)}
          ></Pagination>
        </div>
        <Modal
          open={openModal}
          onClose={() => {
            console.log("HOLA");
            setOpenModal(false);
          }}
          title="Eliminar Usuario"
          onConfirm={() => deleteUser()}
        >
          <div>
            Estás a punto de eliminar a este usuario. Deseas continuar?{" "}
          </div>
        </Modal>
      </div>
    )
  );
};
