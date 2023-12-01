import axios from "axios";
import endPoints from "./endPoints";

export const getProducts = async () => {
    try {
        const {data} = await axios.get(endPoints.products);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getProductByTitle = async (title) => {
    try {
        const {data} = await axios.get(endPoints.productTitle(title));
        return data.length ? data[0] : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}