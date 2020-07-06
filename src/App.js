import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  let [data,setData] = useState({});
  let [input,setInput] = useState('');

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      setInput(event.target.value);
      console.log(data);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.github.com/users/${input}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result)
      setData(result);
    }
    fetchData();
  }, [input]);


  return (
    <div>
      <div className='container'>
         <input onKeyPress={inputHandler} type='text' placeholder='username' name='text' id='text'></input>
          <img className='image' src={data.avatar_url} alt=''></img>
          <h1>{data.name}</h1>
          <p>Followers: {data.followers}</p>
          <p>Repositories: {data.public_repos}</p>
          <p>Following: {data.following}</p>
          </div>
    </div>
  )
}

export default App
