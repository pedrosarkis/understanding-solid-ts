import User from "../../entities/User";
import IMail from "../../mail/IMail";
import IUserRepository from "../../repositories/IUserRepository";
import ICreateUserDto from "./ICreateUserDto";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository, private mail: IMail) {
    }

    async execute(data: ICreateUserDto) {
        const user = await this.userRepository.findByEmail(data.email);
        console.log(user);
        if (user != null) {
            throw new Error("User already exists");
        }
        

        await this.userRepository.save(new User(data));
        this.mail.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "Equipe do meu app",
                email: "pedrosarkisverani@gmail.com"
            },
            subject: "Seja bem-vindo",
            body: "Seja bem-vindo ao nosso app"
        }) 
    }
}