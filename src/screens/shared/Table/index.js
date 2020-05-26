import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

export default function Table({
  users,
  setSelectedUser,
  selectedUser,
  removeUser,
  sortUsers
}) {
  return (
    <table>
      <TableHeader
        columnsNames={['id user', 'first name', 'last name', '']}
        sortUsers={sortUsers}
      />
      <tbody>
        {users.map(u => (
          <TableRow
            key={u.idUser}
            user={u}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            removeUser={removeUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};
