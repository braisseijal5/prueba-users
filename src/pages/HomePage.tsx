import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { useStore } from "../hooks/useStore";
import { User } from "../types/entities";
import { Pagination } from "../components/Pagination";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useBackend } from "../hooks/useBackend";
import { Input } from "../components/Input";

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
  const [usersData, setUsersData] = useState<User[]>([]);

  const [countryFilter, setCountryFilter] = useState<string | undefined>(
    undefined
  );

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  useEffect(() => {
    if (usersData.length > 0) {
      setUsersToShow(usersData.slice(0 + (page - 1) * 5, 5 + (page - 1) * 5));
    }
  }, [usersData, page]);

  const deleteUser = () => {
    if (usersToShow.length <= 1) {
      setPage(page - 1);
    }
    let array = usersData.filter((user) => user.email !== userToDelete);
    onChangeActualUsers(array);
    setOpenModal(false);
  };

  useEffect(() => {
    let array: User[] = usersData;
    if (countryFilter) {
      array = array.filter((val) => val.country.includes(countryFilter));
    } else {
      array = users;
    }

    setUsersData(array);
  }, [countryFilter]);

  return (
    usersData &&
    usersToShow &&
    usersToShow.length > 0 &&
    usersData.length > 0 && (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 w-full">
          <Input
            value={countryFilter as string}
            onChange={(val) => setCountryFilter((val as string) || undefined)}
            placeholder="Buscar por País"
          ></Input>
          <Button
            className="ml-auto"
            variant="primary"
            onClick={() => {
              onGetInitialData(initialUsers);
              setPage(1);
            }}
          >
            <span className="text-nowrap">Restablecer Datos</span>
          </Button>
        </div>
        <Table
          headers={[
            { label: "Nombre", key: "firstName" },
            { label: "Apellido", key: "lastName" },
            { label: "Correo", key: "email" },
            { label: "Ciudad", key: "city" },
            { label: "Estado", key: "state" },
            { label: "País", key: "country" },
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
            totalPages={Math.ceil(usersData.length / 5)}
            onChange={(val) => setPage(val)}
          ></Pagination>
        </div>
        <Modal
          open={openModal}
          onClose={() => {
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
