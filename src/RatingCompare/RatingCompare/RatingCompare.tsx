import { useState } from 'react';
import { usePrev } from '../../CastomHooks';
import { RowRating } from '../RowRating/RowRating';
export const RatingCompare = () => {
    const [count, setCount] = useState(0);
    const lastCount = usePrev(count);

    return (
        <div>
            <RowRating scope={lastCount} />
            <RowRating scope={count} onChange={setCount} />
        </div>
    );
};
