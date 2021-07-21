import React, { useState, useEffect } from "react";

export default function RHTablewithSort() {
  const [table, setTable] = useState([{ id: 1, firstname: "vijay", lastname: "kumar" }]);

  useEffect(() => {
    console.log("test")
    fakeapi();
  }, []);

  const fakeapi = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result([
          { id: 2, firstname: "kumar", lastname: "vulchi"  },
          { id: 3, firstname: "vulchi", lastname: "vijay"  }
        ]);
      }, 3000);
    }).then((result) => {
      setTable([...table, ...result]);
    });
  };

  const sortTable = (key) => {
    const sorted = [...table].sort((a, b) => (a[key] - b[key] ? 1 : -1));
    setTable(sorted);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th onClick={() => sortTable('firstname')}>First Name</th>
          <th onClick={() => sortTable('lastname')}>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {table.map((item, index) => {
          return <Row data={item} key={index} />;
        })}
      </tbody>
    </table>
  );
}

const Row = ({data, key}) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.firstname}</td>
      <td>{data.lastname}</td>
    </tr>
  );
}
 