import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

//this will allow us to apply multiple class names to a single object