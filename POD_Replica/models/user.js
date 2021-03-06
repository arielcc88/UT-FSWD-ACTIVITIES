module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        //defining fields for User model
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirmed: {
            //used for email verification. field will update 
            //once user activates its account via registration email link
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: false,
        },
    });

    //associations
    User.associate = (models) => {
        //User will associate with Role on Many:Many
        //allowing an user to have multiple roles if needed.
        User.belongsToMany(models.Role, { through: "user_roles", foreignKey: "userId", otherKey: "roleId" });
        //association to class model
        User.belongsToMany(models.Class, { through: "users_classes", foreignKey: "userId", otherKey: "classId" });

    };

    return User;
} 