import axios from 'axios';

export const asyncSelectCat = async (): Promise<string> => {
    const fetchURL = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
    );
    return fetchURL.data[0].url;
};

export const asyncSelectDog = async (): Promise<string> => {
    const fetchURL = await axios.get('https://dog.ceo/api/breeds/image/random');
    return fetchURL.data.message;
};
