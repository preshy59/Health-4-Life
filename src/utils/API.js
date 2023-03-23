import axios from "axios";
const BASEURL = "https://dietagram.p.rapidapi.com/apiFood.php";


 const API = {
  searchTerms: async(query) =>{ 

    const options = {
      method: 'GET',
      url: BASEURL,
      params: {name: query},
      headers: {
        'X-RapidAPI-Key': '7986c133bemsh5ec2132fcc9184ep1df58fjsn993ce4ff363b',
        'X-RapidAPI-Host': 'dietagram.p.rapidapi.com'
      }
    };

    const result = await axios.request(options);
    return result;
  }
};

export default API;