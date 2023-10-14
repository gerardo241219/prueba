import { MessageRepositoriesImplement } from "../../../Data/repositories/MessagesRepositories";
import { Messages } from "../../entities/messages";

const { getAllMessages } = new MessageRepositoriesImplement();

export const GetAllMessages = async (messages: Messages) => {
    return await getAllMessages(messages);
}