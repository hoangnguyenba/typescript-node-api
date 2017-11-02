import UserModel from "../models/UserModel";
import IUser from "../models/interfaces/IUser";
import BaseRepository from "./base/BaseRepository";

export default class UserRepository  extends BaseRepository<IUser> {
    constructor () {
        super(UserModel);
    }    
} 
Object.seal(UserRepository);