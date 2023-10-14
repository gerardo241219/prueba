import { AuthRepositoryImplement } from "../../../Data/repositories/AuthRepositories"
import { User } from "../../entities/user"

const { login } = new AuthRepositoryImplement();

export const LoginAuthUseCase = async (user: User) => {
    return await login(user);
}