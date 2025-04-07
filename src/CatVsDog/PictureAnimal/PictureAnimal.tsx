import { useEffect, useState } from 'react';
import { useMaunted } from '../../CastomHooks/useMaunted/useMunted';

type PictureAnimalProps = {
    asyncGetAnimal: () => Promise<string>;
    alt: string;
};

export const PictureAnimal = ({ asyncGetAnimal, alt }: PictureAnimalProps) => {
    const [url, setUrl] = useState<string | undefined>();
    const [isLoading, setLoading] = useState(true);
    const mounter = useMaunted();
    const [errror, setEror] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        asyncGetAnimal()
            .then((result) => {
                if (mounter.current) {
                    setUrl(result);
                }
            })
            .catch((err) => {
                if (mounter.current) {
                    setEror(err);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [asyncGetAnimal, mounter]);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (errror) {
        return <h2 style={{ color: 'red' }}>Произошла ошибка :{errror} </h2>;
    }

    return (
        <div
            style={{
                width: 500,
                height: 500,
                borderRadius: '50%',
                border: '1px dashed gray',
                fontSize: 1,
                overflow: 'hidden',
            }}
        >
            <img
                src={url}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
};
