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

const CreatePrefectureModal = lazy(() =>
  import("./Pages/Owner/prefeitura/create/index")
);

const UpdatePrefectureModal = lazy(() =>
  import("./Pages/Owner/prefeitura/update/index")
);

const CreateBoxModal = lazy(() => import("./Pages/Owner/box/create"));
const UpdateBoxModal = lazy(() => import("./Pages/Owner/box/update"));

const ListGroupFamiliar = lazy(() => import("./Pages/Owner/family/list"));
const CreateGroupFamiliar = lazy(() => import("./Pages/Owner/family/create"));
const UpdateGroupFamiliar = lazy(() => import("./Pages/Owner/family/update"));

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
  const CreatePrefecture = () =>
    create(<CreatePrefectureModal />, "create-prefecture-portal");
  const UpdatePrefecture = () =>
    create(<UpdatePrefectureModal />, "update-prefecture-portal");

  const CreateBox = () => create(<CreateBoxModal />, "create-box-portal");
  const UpdateBox = () => create(<UpdateBoxModal />, "update-box-portal");

  const ListFamiliar = () =>
    create(<ListGroupFamiliar />, "list-familiar-portal");
  const CreateFamiliar = () =>
    create(<CreateGroupFamiliar />, "create-familiar-portal");
  const UpdateFamiliar = () =>
    create(<UpdateGroupFamiliar />, "update-familiar-portal");

  return (
    <Suspense fallback={<Loader />}>
      <LogModal />
      <ListUsers />
      <CreateUsers />
      <UpdateUsers />

      <ListDistrict />
      <CreateDistrict />
      <UpdateDistrict />

      <CreatePrefecture />
      <UpdatePrefecture />

      <CreateBox />
      <UpdateBox />

      <ListFamiliar />
      <CreateFamiliar />
      <UpdateFamiliar />
    </Suspense>
  );
};

const create = (Component, id) =>
  ReactDOM.createPortal(Component, document.getElementById(id));

export default Main;
