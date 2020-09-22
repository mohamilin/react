import React, { useEffect, useState }  from 'react'
import Axios from 'axios';
import "../App.css";


function Fetch() {
    const [data, setData] = useState("posts");
    const [render, setRender] = useState([]);
  
    // useEffect(() => {
    //   console.log("mounting")
    //   fetch(`https://jsonplaceholder.typicode.com/${data}`)
    //     .then((response) => response.json())
    //     .then((result) => setRender(result));
    // }, [data]);
  
    // pakai axios
    useEffect(() => {
      console.log("looping")
      Axios
      .get(`https://jsonplaceholder.typicode.com/${data}`)
        .then((response) => setRender(response.data))
    }, [data]);
  
    return (
      <div className="App">
        <h1>Fetching Data</h1>
        <div>
          <button onClick={() => setData("posts")}>Posts</button>
          <button onClick={() => setData("comments")}>Comments</button>
          <button onClick={() => setData("users")}>Users</button>
        </div>
        <div>
          {/* <div>{data}</div> */}
          {render.map((item, id) => (
      
              <div key={id}>
              <p>{JSON.stringify(item.name)}</p>
      
          </div>
            
            
          ))}
        </div>
      </div>
    );
}

export default Fetch
