import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': "f30c982db2mshf09514e9562df10p1d7de7jsn55f35d1160db" || "Your_API_Key",
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}