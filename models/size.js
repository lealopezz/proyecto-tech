module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define('size', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size: DataTypes.STRING(2),
        stock: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    Size.associate = (models) => {
        Size.belongsTo(models.product);
    };

    return Size;
}