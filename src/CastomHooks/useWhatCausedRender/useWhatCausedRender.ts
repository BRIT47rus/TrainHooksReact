import { useEffect, useRef } from "react"
type PropChange<T> = {
    key: string;
    from: T | undefined;
    to: T
}

export const useRenderChanges = <T extends Record<string, any>>(name: string, props: T) => {

    const prevPropsRef: MutableRefObject<T | undefined> = useRef(undefined);

    useEffect(() => {
        const changes: PropChange<any>[] = [];
        const prevProps = prevPropsRef.current;

        if (prevProps) {
            const keysChanges = new Set([
                ...Object.keys(prevProps),
                ...Object.keys(props)
            ])

            keysChanges.forEach((key) => {
                if (prevProps[key] !== props[key]) {

                    changes.push({
                        key,
                        from: prevProps[key],
                        to: props[key]
                    })
                }

            })
        }
        console.log(`[${name} ] : rendered because`);
        
        changes.forEach((change) => {
          const { key, from, to } = change;
          console.log(`${key} : from ${from} \n  to : ${to}`);
        })
        prevPropsRef.current = props;
    })
}