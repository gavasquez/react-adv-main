import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProdctArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
}

export const useProduct = ({ onChange, product }: useProdctArgs) => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        if (onChange) {
            onChange({ count: newValue, product });
        }
    }

    return {
        counter,
        increaseBy
    }
}
