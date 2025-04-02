import { useWindowSize } from '../../CastomHooks';
import { styles } from './style';
const INIT_width = 200;

interface Styles {
    preview: (width: number, height: number) => React.CSSProperties;
    widtText: (width: number) => React.CSSProperties;
    heightText: (height: number) => React.CSSProperties;
}
const importedStyles = styles as Styles;
export const BoxResize = () => {
    const [screenWidth, screenHeigth] = useWindowSize();
    const previewHeight = (INIT_width * screenHeigth) / screenWidth;

    return (
        <>
            <h2>Вау - это ресайз!</h2>
            <div style={importedStyles.preview(INIT_width, previewHeight)}>
                <div style={importedStyles.widtText(INIT_width)}>
                    {screenWidth}
                </div>
                <div style={importedStyles.heightText(previewHeight)}>
                    {screenHeigth}
                </div>
            </div>
        </>
    );
};
