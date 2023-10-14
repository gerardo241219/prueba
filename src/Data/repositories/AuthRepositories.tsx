import { AxiosError } from "axios";
import { User } from "../../Domain/entities/user";
import { AuthRepository } from "../../Domain/repositories/AuthRepositories";
import { ApiWhatsapp } from "../sources/remote/api/ApiWhatsapp";
import { ResponseApiWhatsapp } from "../sources/remote/models/ResponseApiWhatsapp";

export class AuthRepositoryImplement implements AuthRepository {
    async login(user: User): Promise<ResponseApiWhatsapp> {
        try {
            const response = await ApiWhatsapp.post<ResponseApiWhatsapp>('/users/login', user);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: ResponseApiWhatsapp = JSON.parse(JSON.stringify(e));

            return Promise.resolve(apiError)
        }
    }
}