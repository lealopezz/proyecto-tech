const db = require('../models');

const getProducts = async () => {
    const products = await db.product.findAll()
        .then(result => {
            return result;
        });

    return products;
};


module.exports = {
    getProducts
};

