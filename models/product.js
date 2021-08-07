module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(20),
        color: DataTypes.STRING(20),
        price: DataTypes.INTEGER,
        img: DataTypes.STRING(100)
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    Product.associate = (models) => {
        Product.hasMany(models.size);
    };

    return Product;
}