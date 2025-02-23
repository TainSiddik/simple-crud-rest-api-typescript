import { DataTypes, Model, Optional } from "sequelize"
import db from "../config/dbConnection"

// 1️⃣ Definisikan tipe untuk atribut User
interface UserAttributes {
    id?: number // Primary Key (opsional, karena biasanya auto-increment)
    username: string
    email: string
    createdAt?: Date
    updatedAt?: Date
}

// 2️⃣ Buat tipe untuk input (opsional untuk model)
interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

// 3️⃣ Gunakan `Model<UserAttributes, UserCreationAttributes>`
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number
    public username!: string
    public email!: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

// 4️⃣ Definisikan model menggunakan class
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize: db,
        tableName: "user",
        freezeTableName: true,
        timestamps: true, // Pastikan ada timestamps (createdAt & updatedAt)
    }
);

export default User
