import { UserLocalRepositoriesImplement } from "../../../Data/repositories/UserLocalRepositories";
import { User } from "../../entities/user";

const { save } = new UserLocalRepositoriesImplement();

export const SaveUserUseCase = async (user: User) => {
    return await save(user);
}