import { ElementResize } from '../ElementResize/ElementResize';
import { RowResize } from '../RowResize/RowResize';
import { styles } from '../styles';
export const ResizeElements = () => {
    return (
        <>
            <RowResize>
                <ElementResize />
                <ElementResize />
                <ElementResize />
            </RowResize>
            <RowResize>
                <ElementResize />
            </RowResize>
            <RowResize>
                <ElementResize />
                <ElementResize />
            </RowResize>
        </>
    );
};
