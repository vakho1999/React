import React from "react";
import axios from 'axios';
function Home(props) {
  const token = '7e54fa3a81f3e5ce9f5e7b296e1cea49aa7307593a9631c9b034a3116886b168'
  axios.get(`https://gorest.co.in/public-api/posts?access-token=${token}`, {}
    ).then(result => {
      if (result.status === 200) {
        let data = JSON.parse(result)
      } else {
        console.log('error')
      }
    }).catch(e => {
      console.log('error')
    });
  
  //TODO render Response data
  return <div>Home Page</div>; 
}

export default Home;