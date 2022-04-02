import React from 'react';

import {Lock, LockOpenOutlined} from '@material-ui/icons/';

import Table from '~/components/Table';

const columns = [
  {
    title: 'Nome',
    field: 'nome',
  },
  {
    title: 'E-mail',
    field: 'email',
  },

  {
    title: 'Privilegio',
    field: 'role',

    render: (rowData) => (
      <>{rowData.role === true ? <LockOpenOutlined /> : <Lock />}</>
    ),
  },
];

const actions = [
  {
    icon: 'add',
    tooltip: 'Adicionar usuário',
    isFreeAction: true,
  },

  {
    icon: 'delete',
    tooltip: 'Deletar usuário',
  },

  {
    icon: 'edit',
    tooltip: 'Editar usuário',
  },
];

const TableUsers = () => {
  return (
    <Table
      title={'Usuários'}
      columns={columns}
      actions={actions}
      loader={false}
      data={[{nome: 'Lucas', email: 'lukas.paes18@gmail.com', role: true}]}
    />
  );
};

export default TableUsers;
