import React from 'react';

export default function TableRow({
  user,
  setSelectedUser,
  selectedUser,
  removeUser
}) {
  return (
    <tr
      style={{
        backgroundColor: user.idUser == selectedUser.idUser ? 'yellow' : 'white'
      }}
      onClick={() => setSelectedUser(user)}
    >
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td onClick={() => removeUser(user.idUser)}>
        <a
          style={{
            fontWeight: 'bold',
            color: 'red',
            cursor: 'pointer'
          }}
        >
          X
        </a>
      </td>
    </tr>
  );
}
