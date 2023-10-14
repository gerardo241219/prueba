import { ResponseApiWhatsapp } from "../../Data/sources/remote/models/ResponseApiWhatsapp";
import { Messages } from "../entities/messages";

export interface MessageRepositories {
    getAllMessages(messages: Messages): Promise<ResponseApiWhatsapp>
}