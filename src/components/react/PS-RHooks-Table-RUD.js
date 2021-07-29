import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [showField, setshowField] = useState(-1);

  const fakeAPI = () => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result([
          {
            name: 'Vijay',
            empid: 'E001'
          },
          {
            name: 'Kumar',
            empid: 'E002'
          },
          {
            name: 'Raju',
            empid: 'E003'
          },
          {
            name: 'Vulchi',
            empid: 'E004'
          }
        ]);
      }, 1000);
    }).then(result => {
      setData([...result]);
      setLoading(true);
    });
  };

  useEffect(() => {
    fakeAPI();
  }, []);

  const handleEdit = (index, action) => {
    if (action === 'Update') {
      setshowField(-1);
    } else {
      setshowField(index);
    }
  };

  const changeName = (event, index) => {
    const newData = data.map((item, pos) => {
      if (index === pos) {
        item.name = event.target.value;
      }
      return item;
    });
    setData([...newData]);
  };

  const changeEmpId = (event, index) => {
    const newData = data.map((item, pos) => {
      if (index === pos) {
        item.empid = event.target.value;
      }
      return item;
    });
    setData([...newData]);
  };

  const handleDelete = index => {
    console.log(index);
    const name = data[index].name;
    const latestData = [...data].filter(item => item.name !== name);
    setData([...latestData]);
  };

  if (loading) {
    console.log('data', data);
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Emp ID</th>
              <th colSpan="2">Controllers</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={item.name}
                      disabled={showField === index ? false : true}
                      onChange={() => {
                        changeName(event, index);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.empid}
                      disabled={showField === index ? false : true}
                      onChange={() => {
                        changeEmpId(event, index);
                      }}
                    />
                  </td>
                  <td className="edit">
                    <button
                      onClick={() =>
                        handleEdit(
                          index,
                          showField === index ? 'Update' : 'Edit'
                        )
                      }
                    >
                      {showField === index ? 'Update' : 'Edit'}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  } else {
    return <p>Loading...</p>;
  }
}
