module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("usuario", {
        id: {

            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        nome: {
            type: DataType.TEXT,
            allowNull: false,
            primaryKey: false,
        },  
        email: {
            type: DataType.TEXT,
            allowNull: false,
            primaryKey: false,
        },
        senha: {
            type: DataType.TEXT,
            allowNull: false,
            primaryKey: false,
        },

    },
    { tableName: "usuario",
        timestamps: false, //se for usar campos com tipo data tem que ser true
    }
    );
    return Usuario;
};