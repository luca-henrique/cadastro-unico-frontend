import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Loader from "./components/loader";

const Log = lazy(() => import("./Pages/Owner/log"));

const ListUsersModal = lazy(() => import("./Pages/Owner/user/list"));
const CreateUserModal = lazy(() => import("./Pages/Owner/user/create"));
const UpdateUserModal = lazy(() => import("./Pages/Owner/user/update"));

const ListDistrictModal = lazy(() => import("./Pages/Owner/district/list"));
const CreateDistrictModal = lazy(() => import("./Pages/Owner/district/create"));
const UpdateDistrictModal = lazy(() => import("./Pages/Owner/district/update"));

const Main = () => {
  const LogModal = () => create(<Log />, "log-portal");

  const ListUsers = () => create(<ListUsersModal />, "list-user-portal");
  const CreateUsers = () => create(<CreateUserModal />, "create-user-portal");
  const UpdateUsers = () => create(<UpdateUserModal />, "update-user-portal");

  const ListDistrict = () =>
    create(<ListDistrictModal />, "list-district-portal");
  const CreateDistrict = () =>
    create(<CreateDistrictModal />, "create-district-portal");
  const UpdateDistrict = () =>
    create(<UpdateDistrictModal />, "update-district-portal");

  return (
    <Suspense fallback={<Loader />}>
      <LogModal />
      <ListUsers />
      <CreateUsers />
      <UpdateUsers />

      <ListDistrict />
      <CreateDistrict />
      <UpdateDistrict />
    </Suspense>
  );
};

const create = (Component, id) =>
  ReactDOM.createPortal(Component, document.getElementById(id));

export default Main;
