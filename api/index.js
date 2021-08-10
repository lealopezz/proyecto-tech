const { query } = require('express');
const { Op } = require('sequelize');
const db = require('../models');

const getProducts = async () => {
    const products = await db.product.findAll()
        .then(result => {
            return result;
        });

    return products;
};

const getProductById = async (id) => {
    const product = await db.product.findByPk(id,{
        include: db.size
    }).then(result => {
            return result;
        });
    return product;
};

const findProductBy = async (query) =>{
    const products = await db.product.findAll({
        where: {
            [Op.or]: [
                {
                    name:{
                        [Op.substring]: query
                    }
                },
                {
                    color:{
                        [Op.substring]: query
                    }
                }
                
            ]
        }
    }).then(result =>{
        return result;
    });
    return products
};


module.exports = {
    getProducts,
    getProductById,
    findProductBy
};

