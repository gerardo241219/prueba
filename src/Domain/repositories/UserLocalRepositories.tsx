import { User } from "../entities/user";

export interface UserLocalRepositories {
    save(user: User): Promise<void>
    get(): Promise<User>
    sessionDelete(): Promise<void>
}