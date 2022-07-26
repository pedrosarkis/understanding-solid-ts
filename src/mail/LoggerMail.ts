import IMail from "./IMail";
import IMessage from "./IMessage";

export default class LoggerMail implements IMail {
    async sendMail(message: IMessage): Promise<void> {
        console.log(`Sending email to ${message.to.name} <${message.to.email}>`);
        console.log(`Subject: ${message.subject}`);
        console.log(`Body: ${message.body}`);
        console.log(`From: ${message.from.name} <${message.from.email}>`);
      
    }  
}