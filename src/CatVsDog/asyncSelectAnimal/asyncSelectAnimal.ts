import axios from 'axios';

export const asyncSelectCat = async () => {
    const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
    );
    return response.data[0].url;
};
export const asyncSelectDog = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    return response.data.message;
};
