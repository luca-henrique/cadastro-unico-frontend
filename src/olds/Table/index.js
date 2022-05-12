import React from 'react';
import MaterialTable from 'material-table';
import './index.css';

const Table = ({title, columns, actions, data, loader}) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      actions={actions}
      data={data}
      isLoading={loader}
      options={{
        headerStyle: {
          color: 'rgb(2,90,10)',
        },
        actionsCellStyle: {color: '#848484'},
      }}
      localization={{
        header: {
          actions: 'Ações',
        },

        body: {
          emptyDataSourceMessage: 'Não existe',
          filterRow: {
            filterTooltip: 'Procurar',
          },
        },
        toolbar: {
          searchTooltip: 'Procurar',
          searchPlaceholder: 'Procurar',
        },
      }}
    />
  );
};

export default Table;
