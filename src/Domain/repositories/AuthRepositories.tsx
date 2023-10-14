import { ResponseApiWhatsapp } from "../../Data/sources/remote/models/ResponseApiWhatsapp";
import { User } from "../entities/user";

export interface AuthRepository {
    login(user: User): Promise<ResponseApiWhatsapp>
}