import { AxiosError } from "axios";
import { Messages } from "../../Domain/entities/messages";
import { MessageRepositories } from '../../Domain/repositories/MessageRepositories'
import { ApiWhatsapp } from "../sources/remote/api/ApiWhatsapp";
import { ResponseApiWhatsapp } from "../sources/remote/models/ResponseApiWhatsapp";

export class MessageRepositoriesImplement implements MessageRepositories {
    async getAllMessages(messages: Messages): Promise<ResponseApiWhatsapp> {
        try {
            const response = await ApiWhatsapp.post<ResponseApiWhatsapp>('/messages/getAllMessages', messages);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            const apiError: ResponseApiWhatsapp = JSON.parse(JSON.stringify(e));

            return Promise.resolve(apiError)
        }
    }

}