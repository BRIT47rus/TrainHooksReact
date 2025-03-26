import { RowProps } from "./RowTable";

// export type HeavyProps = {
//     max_number: number;
//     max_pow: number;
// }
export const heavePow = ( max_number:number, max_pow:number) => {
    const data = [];


    for (let i = 0; i < max_number; i++) {
        const record:RowProps = {};

        for (let pow = 1; pow <= max_pow; pow++) {
            record[pow] = Math.pow(i, pow)
        }
        data.push(record)

    }


    return data;
}