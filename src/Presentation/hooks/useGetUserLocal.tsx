import { useState, useEffect } from 'react'
import { GetUserUseCase } from '../../Domain/useCases/userLocal/GetUserLocal'
import { User } from '../../Domain/entities/user'

export const useGetUserLocal = () => {
    const [ user, setUser ] = useState<User>();

    useEffect(() => {
        getUserSession()
    }, [])

    const getUserSession = async () => {
        const user = await GetUserUseCase();
        setUser(user);
    }

    return { user, getUserSession }
}