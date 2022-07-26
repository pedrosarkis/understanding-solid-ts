import LoggerMail from "../../mail/LoggerMail";
import InMemoryUserRepository from "../../repositories/InMemoryUserRepository";
import LoggerUserRepository from "../../repositories/LoggerUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default new CreateUserController(
    new CreateUserUseCase(
        new InMemoryUserRepository(),
        new LoggerMail()
    )
);
 