const URL = 'https://myplayers-miniback.onrender.com/';
const endPoints = {
    products : `${URL}products`,
    productTitle: (title)=>`${URL}products?title=${title}`
}

export default endPoints;