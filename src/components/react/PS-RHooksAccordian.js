import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [active, setActive] = useState(-1);
  const accordian = [
    {
      title: 'tab 1',
      paras: ['paragraph 1', 'paragraph 2']
    },
    {
      title: 'tab 2',
      paras: ['paragraph 1']
    },
    {
      title: 'tab 3',
      paras: ['paragraph 1', 'paragraph 2']
    }
  ];

  const handleClick = index => {
    if (index === active) setActive(-1);
    else setActive(index);
  };

  return (
    <div>
      <ul className="accordian">
        {accordian.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={index === active ? 'active' : ''}
            >
              <div className="accordian-title">{item.title}</div>
              <div className="accordian-content">
                {item.paras.map(para => {
                  return <p>{para}</p>;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// another component to print paragraph.
// const Para = data => {
//   console.log(data.data);
//   return data.data.map(para => {
//     return <p>{para}</p>;
//   });
// };


// Styles

h1,
p {
  font-family: Lato;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin-bottom: 5px;
}

li div {
  padding: 5px 15px;
}

.accordian {
  max-width: 600px;
  margin: 0 auto;
}

.accordian-title {
  position: relative;
  text-transform: capitalize;
  margin-bottom: 1px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.accordian-title::after {
  content: '+';
  position: absolute;
  right: 15px;
}

.accordian-content {
  display: none;
  background-color: #333;
  color: #fff;
}

.accordian-content p {
  text-transform: capitalize;
  font-size: 14px;
}

li.active .accordian-title::after {
  content: '-';
}

li.active .accordian-content {
  display: block;
}
