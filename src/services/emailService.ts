import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { error } from "console";
require('dotenv').config()

// console.log(process.env.AWS_ACCESS_KEY_ID)
const ses = new SESClient({ region: "ap-south-1" });

function createSendEmailCommand(ToAddresses: string , fromAddress : string , message : string){
    return new SendEmailCommand({
        Destination: {
            ToAddresses: [ToAddresses]
        },
        Source: fromAddress,
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: "Your one time password"
            },
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: message
                }
            }
        }

    })
}
export async function  sendEmailToken(email: string , token : string ){
    console.log(email , token);

    const message  =  `Your One Time Password Is: ${token}`;
    const command = createSendEmailCommand( email , "kartik200327@gmail.com" , message);

    try {
        return await ses.send(command);
    }catch(e){
        console.log("error sending email", e);
        return error;
    }
}

