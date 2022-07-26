import { CreateUserUseCase } from "./CreateUserUseCase";
import {Request, Response} from "express";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {
       
    }
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, name, password } = req.body;
        try {
            await this.createUserUseCase.execute({
                email,
                name,
                password
            });
            return res.status(201).send();
            
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}
