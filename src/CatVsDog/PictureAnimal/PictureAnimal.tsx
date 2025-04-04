import React, { useEffect, useState, useRef } from 'react';
import { useMaunted } from '../../CastomHooks/useMaunted/useMunted';

interface PictureAnimalProps {
    alt: string;
    asyncGetURl: () => Promise<string>;
}

export const PictureAnimal: React.FC<PictureAnimalProps> = ({
    alt,
    asyncGetURl,
}) => {
    const [url, setUrl] = useState<string | undefined>();
    const [isLoading, setLoading] = useState(true);
    const mounter = useMaunted();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        asyncGetURl()
            .then((res) => {
                if (mounter.current) {
                    setUrl(res);
                }
            })
            .catch((err) => {
                console.error('Ошибка при загрузке URL:', err);
                if (mounter.current) {
                    setError('Не удалось загрузить изображение.');
                }
            })
            .finally(() => {
                if (mounter.current) {
                    setLoading(false);
                }
            });
    }, [mounter, asyncGetURl]);

    if (isLoading) {
        return <h1 style={{ color: 'red' }}>загрузка</h1>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <div
            style={{
                width: '500px',
                height: '500px',
                borderRadius: 150,
                border: '1px solid dashed',
                overflow: 'hidden',
            }}
        >
            <img
                src={url}
                alt={`фото ${alt}`}
                style={
                    {
                        // width: '100%',
                        // height: '100%',
                    }
                }
            />
        </div>
    );
};
