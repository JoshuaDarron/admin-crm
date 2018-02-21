// EXPORT THE DATABASE MODEL
module.exports = function (sequelize, DataTypes) {

    // EMPLOYEE MODEL
    const Employee = sequelize.define("Employee", {
        // FIRST NAME
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // LAST NAME 
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        // AGE 
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        // JOB TITLE
        jobTitle: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    }); // END EMPLOYEE MODEL

    // RETURN THE EMPLOYEE MODEL 
    return Employee;
    
}; // END EXPORT