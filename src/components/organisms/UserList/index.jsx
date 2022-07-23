/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import MaterialTable from 'material-table';

import './index.css';
import {readUserRequest} from 'src/store/modules/user/actions';

import {
  mockColumnsUserList,
  mockOptionsUserList,
  mockLocalizationUserList,
} from 'src/mock/mockUserList';

const View = () => {
  const dispatch = useDispatch();

  const {data, loading} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(readUserRequest());
  }, []);

  return (
    <MaterialTable
      data={data}
      isLoading={loading}
      title='Usuários'
      columns={mockColumnsUserList}
      options={mockOptionsUserList}
      localization={mockLocalizationUserList}
      actions={[
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
      ]}
    />
  );
};

export default View;
