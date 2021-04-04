import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { Visibility } from '@material-ui/icons';
import PropTypes from 'prop-types';
import useUsers from '#hooks/useUsers';
import EditModal from './Modal';
import { OPTIONS_ROLES } from '#src/utils/constants';

const columns = ({ handleOpen }) => [
  {
    name: 'uid',
    label: 'Acciones',
    options: {
      customBodyRender: (uid) => (
        <IconButton onClick={() => handleOpen(uid)}>
          <Visibility />
        </IconButton>
      ),
    },
  },
  {
    name: 'displayName',
    label: 'Nombre',
    options: {
      customBodyRender: (value) => value || 'No definido',
    },
  },
  {
    name: 'email',
    label: 'Correo electrónico',
  },
  {
    name: 'role',
    label: 'Rol',
    options: {
      customBodyRender: (value) => OPTIONS_ROLES.find((item) => item.value === value)?.label || 'No definido',
    },
  },
];

const Users = ({ data }) => {
  const { users, updateUser } = useUsers(data.users);
  const [modal, setModal] = useState({
    open: false,
    selectedUser: {},
  });
  const handleOpen = (uid) => {
    setModal({ open: true, selectedUser: users.find((item) => item.uid === uid) });
  };
  const handleClose = () =>
    setModal({
      open: false,
      selectedUser: {},
    });
  const onSubmit = (values) => {
    updateUser({ ...modal.selectedUser, ...values });
  };
  return (
    <>
      <h1>Administrar Usuarios</h1>

      <MUIDataTable
        title="Lista de usuarioss"
        data={users}
        columns={columns({ handleOpen })}
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
      <EditModal data={modal} handleClose={handleClose} onSubmit={onSubmit} />
    </>
  );
};

Users.propTypes = {
  data: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Users.defaultProps = {
  data: {
    users: [],
  },
};

export default Users;
