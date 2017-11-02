import mongoose = require("mongoose");

interface IUser extends mongoose.Document {
    firstname: string;
    lastname: number;
    email: string;
}

export default IUser;