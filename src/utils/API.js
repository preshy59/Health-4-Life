import axios from "axios";
const BASEURL = "https://dietagram.p.rapidapi.com/apiFood.php";

// storing the API content in a const variable
 const API = {
  searchTerms: async(query) =>{ 

    const options = {
      method: 'GET',
      url: BASEURL,
      params: {name: query},
      headers: {
        'X-RapidAPI-Key': 'eec4f08858mshffc523f4d5741d9p1d9f43jsn46283578c81b',
        'X-RapidAPI-Host': 'dietagram.p.rapidapi.com'
      }
    };

    const result = await axios.request(options);
    return result;
  }
};

export default API;