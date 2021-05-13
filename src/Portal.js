import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Loader from "~/components/Loader";

const Log = lazy(() => import("./pages/Owner/log"));

const ListUsersModal = lazy(() => import("./pages/Owner/user/list"));
const CreateUserModal = lazy(() => import("./pages/Owner/user/create"));
const UpdateUserModal = lazy(() => import("./pages/Owner/user/update"));

const ListDistrictModal = lazy(() => import("./pages/Owner/district/list"));
const CreateDistrictModal = lazy(() => import("./pages/Owner/district/create"));
const UpdateDistrictModal = lazy(() => import("./pages/Owner/district/update"));

const CreatePrefectureModal = lazy(() =>
  import("./pages/Owner/prefeitura/create/index")
);

const UpdatePrefectureModal = lazy(() =>
  import("./pages/Owner/prefeitura/update/index")
);

const CreateBoxModal = lazy(() => import("./pages/Owner/box/create"));
const UpdateBoxModal = lazy(() => import("./pages/Owner/box/update"));

const ListGroupFamiliar = lazy(() => import("./pages/Owner/family/list"));
const CreateGroupFamiliar = lazy(() => import("./pages/Owner/family/create"));
const UpdateGroupFamiliar = lazy(() => import("./pages/Owner/family/update"));

const FilterBoxModal = lazy(() => import("./pages/Owner/pdf/box-filter"));
const ModalGeneretePdf = lazy(() => import("./pages/Owner/pdf/index"));

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

  const FilterBox = () =>
    create(<FilterBoxModal />, "generete-filter-box-portal");

  const GeneretePdf = () => create(<ModalGeneretePdf />, "generete-pdf-modal");

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

      <FilterBox />
      <GeneretePdf />
    </Suspense>
  );
};

const create = (Component, id) =>
  ReactDOM.createPortal(Component, document.getElementById(id));

export default Main;
