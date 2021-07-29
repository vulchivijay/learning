import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([
    {
      title: 'Declarative',
      description:
        'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
    },
    {
      title: 'Component-Based',
      description:
        'Build encapsulated components that manage their own state, then compose them to make complex UIs.'
    },
    {
      title: 'Declarative',
      description:
        'Declarative views make your code more predictable and easier to debug.'
    },
    {
      title: 'Component-Based',
      description:
        'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'
    },
    {
      title: 'Learn Once, Write Anywhere',
      description:
        'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'
    },
    {
      title: 'Learn Once, Write Anywhere',
      description:
        'React can also render on the server using Node and power mobile apps using React Native.'
    }
  ]);

  const [searchResult, setSearchResult] = useState(false);

  const [result, setResults] = useState([]);

  const handleSearch = event => {
    const keyword = event.target.value;
    if (keyword) {
      const result = [];
      data.map((item, index) => {
        if (item.title.toLowerCase().includes(keyword)) {
          result.push(item.title);
        }
        if (item.description.toLowerCase().includes(keyword)) {
          result.push(item.description);
        }
      });
      setResults([...result]);
      setSearchResult(true);
    } else {
      setResults([]);
      setSearchResult(false);
    }
  };

  return (
    <div>
      <div className="search">
        <input type="search" placeholder="Search" onChange={() => handleSearch(event)} />
      </div>
      {searchResult
        ? result.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        : data.map((item, index) => {
            return (
              <div className="row" key={index}>
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
              </div>
            );
          })}
    </div>
  );
}


h1,
p {
  font-family: Lato;
}

p {
  margin: 5px 0;
  padding: 10px;
}

.row {
  background-color: #e6e6e6;
}

.title {
  background-color: #333;
  color: #fff;
}

.description {
  background-color: #444;
  color: #fff;
}

