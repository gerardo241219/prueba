import { UserLocalRepositoriesImplement } from "../../../Data/repositories/UserLocalRepositories";

const { sessionDelete } = new UserLocalRepositoriesImplement();

export const SessionDeleteUserUseCase =async () => {
    return await sessionDelete();
}