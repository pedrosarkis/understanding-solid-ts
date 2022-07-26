import IAddress from "./IAddress";

export default interface IMessage {
    to: IAddress;
    subject: string;
    body: string;
    from: IAddress;
}