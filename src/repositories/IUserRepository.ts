import User from "../entities/User";

export default interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<void>; 
}