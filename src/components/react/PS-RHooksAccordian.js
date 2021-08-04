import React, { useState } from 'react';

export default function RHooksAccordian() {
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
                {item.paras.map( (para, index) => {
                  return <p key={index}>{para}</p>;
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
