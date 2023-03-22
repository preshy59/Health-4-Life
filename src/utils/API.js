import axios from "axios";
const BASEURL = "https://dietagram.p.rapidapi.com/apiFood.php";


 const API = {
  searchTerms: async(query) =>{ 

    const options = {
      method: 'GET',
      url: BASEURL,
      params: {name: query},
      headers: {
        'X-RapidAPI-Key': '565b910ef1msh5378420bcc0f262p1a4229jsnb6c6b7e6740d',
        'X-RapidAPI-Host': 'dietagram.p.rapidapi.com'
      }
    };

    const result = await axios.request(options);
    return result;
  }
};

export default API;