import React, { useState } from 'react';
import { TabAnimal } from '../TabAnimal/TabAnimal';
import {
    asyncSelectCat,
    asyncSelectDog,
} from '../asyncSelectAnimal/asyncSelectAnimal';
import { PictureAnimal } from '../PictureAnimal/PictureAnimal';

const catDog = {
    CAT: 'cat',
    DOG: 'dog',
};

type CatDogType = 'cat' | 'dog';

export const CatVsDog = () => {
    const [tab, setTab] = useState(catDog.CAT);

    const showCat = () => {
        setTab(catDog.CAT);
    };
    const showDog = () => {
        setTab(catDog.DOG);
    };

    return (
        <>
            <div>
                <TabAnimal
                    who={'CAT'}
                    selected={tab === catDog.CAT}
                    handleClick={showCat}
                />
                <TabAnimal
                    who={'DOG'}
                    selected={tab === catDog.DOG}
                    handleClick={showDog}
                />
            </div>
            {tab === catDog.CAT ? (
                <PictureAnimal
                    asyncGetURl={asyncSelectCat}
                    key={'animal_cat'}
                    alt="кот"
                />
            ) : (
                <PictureAnimal
                    asyncGetURl={asyncSelectDog}
                    key={'animal_dog'}
                    alt="собака"
                />
            )}
        </>
    );
};
