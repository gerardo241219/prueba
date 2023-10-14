import { User } from "../../Domain/entities/user";
import { UserLocalRepositories } from "../../Domain/repositories/UserLocalRepositories";
import { LocalStorage } from "../sources/local/LocalStorage";

export class UserLocalRepositoriesImplement implements UserLocalRepositories {
    async save(user: User): Promise<void> {
        const { save } = LocalStorage();
        await save('user', JSON.stringify(user));
    }

    async get(): Promise<User> {
        const { get } = LocalStorage();
        const data = await get('user');
        const user:User = JSON.parse(data as any);

        return user;
    }

    async sessionDelete(): Promise<void> {
        const { sessionDelete } = LocalStorage();
        await sessionDelete('user');
    }
}