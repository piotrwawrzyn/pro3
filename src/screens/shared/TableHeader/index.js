import React from 'react';

function TableHeader({ columnsNames, sortUsers }) {
  return (
    <thead>
      <tr>
        {columnsNames.map(c => (
          <th key={c} onClick={() => sortUsers(c)}>
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
