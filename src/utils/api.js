import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': "c7be67301bmsh6491d7720b76fa8p13fd85jsnc73f7b7fffc7" || "Your_API_Key",
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}