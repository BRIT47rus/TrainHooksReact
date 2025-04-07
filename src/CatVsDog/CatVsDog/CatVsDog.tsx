import { useState } from 'react';
import { TabAnimal } from '../TabAnimal/TabAnimal';
import { PictureAnimal } from '../PictureAnimal/PictureAnimal';
import {
    asyncSelectCat,
    asyncSelectDog,
} from '../asyncSelectAnimal/asyncSelectAnimal';

enum CvDType {
    CAT = 'cat',
    DOG = 'dog',
}

export const CatVsDog = () => {
    const [tab, setTab] = useState(CvDType.CAT);

    const handleClickTabCat = () => {
        setTab(CvDType.CAT);
    };

    const handleClickTabDog = () => {
        setTab(CvDType.DOG);
    };

    return (
        <>
            <h1>Киски против собак</h1>
            <TabAnimal
                textName="CAT"
                handleClickTab={handleClickTabCat}
                select={tab === CvDType.CAT}
            />
            <TabAnimal
                textName="DOG"
                handleClickTab={handleClickTabDog}
                select={tab === CvDType.DOG}
            />
            {tab === CvDType.CAT ? (
                <PictureAnimal
                    key="animal_cat"
                    alt="CAT"
                    asyncGetAnimal={asyncSelectCat}
                />
            ) : tab === CvDType.DOG ? (
                <PictureAnimal
                    key="animal_dog"
                    alt="DOG"
                    asyncGetAnimal={asyncSelectDog}
                />
            ) : (
                <p>Запрос не найден</p>
            )}
        </>
    );
};
