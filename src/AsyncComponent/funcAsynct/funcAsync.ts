export const randomNumberGenerate = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random() * 100;
            if (randomNumber > 50) {
                resolve(randomNumber);
            } else {
                reject('Цыфра ниже 50');
            }
        }, 3000);
    });
};
