import { useCallback, useState } from 'react';

export const STATUS_FN = {
    IDDLE: 'idle',
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error',
};

export const useAsync = (funcAsync: any) => {
    const [statusFN, setStateFN] = useState(STATUS_FN.IDDLE);
    const [result, setResult] = useState();
    const [error, setError] = useState(null);

    const run = useCallback(() => {
        if (statusFN === STATUS_FN.PENDING) {
            console.log('Погоди братан, идет загрузка');
            return;
        }
        setStateFN(STATUS_FN.PENDING);
        funcAsync()
            .then((r: any) => {
                setResult(r);
                setError(null);
                setStateFN(STATUS_FN.SUCCESS);
            })
            .catch((e: any) => {
                setError(e);
                setStateFN(STATUS_FN.ERROR);
                console.log('возникла ошибка ' + e);
            });
    }, [statusFN, funcAsync]);
    return { run, error, result, statusFN };
};
