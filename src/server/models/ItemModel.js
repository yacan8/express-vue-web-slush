export default function(sequelize, DataTypes) {
    const Item = sequelize.define('Item', {
        recordId: {
            type: DataTypes.INTEGER,
            field: 'record_id',
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        state: {
            type: DataTypes.INTEGER,
            field: 'text'
        }
    }, {
        tableName: 'item'
    });

    return Item;
}