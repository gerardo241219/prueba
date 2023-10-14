import { UserLocalRepositoriesImplement } from "../../../Data/repositories/UserLocalRepositories";

const { get } = new UserLocalRepositoriesImplement();

export const GetUserUseCase =async () => {
    return await get();
}