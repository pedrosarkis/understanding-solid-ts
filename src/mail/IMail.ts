import IMessage from "./IMessage";

export default interface IMail {
    sendMail(message: IMessage): Promise<void>;
}