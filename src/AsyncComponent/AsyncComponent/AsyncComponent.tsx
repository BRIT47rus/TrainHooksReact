import { useAsync } from '../../CastomHooks';
import { useAnimationText } from '../../CastomHooks/useAnimatedText/useAnimatedText';
import { STATUS_FN } from '../../CastomHooks/useAsync/useAsync';
import { randomNumberGenerate } from '../funcAsynct/funcAsync';

const AnimeTEXT = () => {
    const text = 'Крутим барабан ...';
    const animateText = useAnimationText(text, 100);
    return (
        <div>
            <span>{animateText}</span>
        </div>
    );
};

export const AsyncComponent = () => {
    const { result, run, error, statusFN } = useAsync(randomNumberGenerate);

    return (
        <div>
            {statusFN === STATUS_FN.IDDLE ? (
                <p>
                    Нажми кнопку: <button onClick={run}>испытать удачу</button>
                </p>
            ) : statusFN === STATUS_FN.PENDING ? (
                <div>
                    <AnimeTEXT />
                </div>
            ) : statusFN === STATUS_FN.SUCCESS ? (
                <div>{result}</div>
            ) : (
                <div>{error}</div>
            )}
        </div>
    );
};
