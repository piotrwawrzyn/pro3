import React, { useState } from 'react';
import Header from '../shared/Header';
import Table from '../shared/Table';

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: 'Jan', lastName: 'Kowalski' },
    { idUser: 2, firstName: 'Andrzej', lastName: 'Malewicz' },
    { idUser: 3, firstName: 'Anna', lastName: 'Andrzejewicz' },
    { idUser: 4, firstName: 'Marcin', lastName: 'Kwiatkowski' },
    { idUser: 5, firstName: 'Michał', lastName: 'Kowalski' }
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = e => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: 'AAA',
        lastName: 'BBB'
      }
    ]);
  };

  const setCurrentlySelectedUser = user => {
    setSelectedUser(user);
  };

  const numberSortByProp = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);

  const stringSortByProp = (arr, prop) =>
    arr.sort((a, b) => (a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0));

  const sortUsers = sortParam => {
    // Make a copy of users state - you should never modify the state and the .sort() funcion modifies the existing array
    const copyOfUsers = JSON.parse(JSON.stringify(users));

    // Check the type of column - each type sorts differently
    switch (sortParam) {
      case 'id user':
        return setUsers(numberSortByProp(copyOfUsers, 'idUser'));
      case 'first name':
        return setUsers(stringSortByProp(copyOfUsers, 'firstName'));
      case 'last name':
        return setUsers(stringSortByProp(copyOfUsers, 'lastName'));
    }
  };

  const removeUser = id => {
    setUsers(users.filter(user => user.idUser !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          removeUser={removeUser}
          sortUsers={sortUsers}
        />
      </div>
    </>
  );
}
