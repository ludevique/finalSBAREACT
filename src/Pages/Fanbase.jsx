import React, { useEffect } from "react";
//------import axios to use my api-----------------
import axios from "axios";
import { useState } from "react";


//--------------------------------------------------------------------------------------------------------

// const Fanbase = () => {
//   const [teams, setTeams] = useState('')
//   // -------------get my data from the api using the axios library------------
//   // const axios = require('axios');

//   const options = {
//     method: "GET",
//     url: "https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5",
//     params: { page: "2" },
//     headers: {
//       "x-rapidapi-key": "b194ff4cc6mshecfd3a283881b9fp17d310jsnd57951efcf74",
//       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//     },
//   };

//   async function callApi(){
//     try {
//       const response = await axios.request(options);
//       console.log(JSON.stringify(response.data));
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   callApi()

function Fanbase () {
  const [news, setNews] = useState('');

  let key = import.meta.env.API_KEY
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`

  //----using useffect hook to render the data only once-----------------
  useEffect(() => {
    async function infoNew() {
      try {
        let res = await axios.get(url)

        setNews(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    // axios.get('').then((res) => {
    //   setNews(res.data)
    // })
    infoNew()
  }, []);
  

  return (
    <>
    <h1>FANBASE PAGE</h1>
      <button>Enter your team</button>
    </>
  );
};

export default Fanbase;
