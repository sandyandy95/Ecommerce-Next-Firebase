import { IconButton } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { Visibility } from '@material-ui/icons';
import ContainerResponsive from '../../components/Container';
import useUsers from '../../hooks/useUsers';

const columns = [
  {
    name: 'uid',
    label: 'Acciones',
    options: {
      customBodyRender: () => (
        <IconButton>
          <Visibility />
        </IconButton>
      ),
    },
  },
  {
    name: 'displayName',
    label: 'Nombre',
  },
];

const Users = () => {
  const { users } = useUsers();

  return (
    <ContainerResponsive>
      <h1>Administrar Usuarios</h1>

      <MUIDataTable
        title="Lista de usuarioss"
        data={users}
        columns={columns}
        options={{
          selectableRows: 'none',
          responsive: 'standard',
          serverSide: false,
          search: false,
          filter: false,
          rowsPerPageOptions: [],
          selectableRowsHeader: false,
        }}
      />
    </ContainerResponsive>
  );
};

export default Users;
