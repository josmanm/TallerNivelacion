const URL = 'https://myplayers-miniback.onrender.com/';
const endPoints = {
    products : `${URL}products`,
    productTitle: (title)=>`${URL}products?title=${title}`,
    userByEmailAndPassword: (email, password) => `${URL}users?email=${email}&&password=${password}`,
    users: `${URL}users`,
    findUserByEmail: (email) => `${URL}users?email=${email}`,
}

export default endPoints;