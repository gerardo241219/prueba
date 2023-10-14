import { useState, useEffect } from 'react'
import { useGetUserLocal } from '../../hooks/useGetUserLocal';
import { GetAllMessages } from '../../../Domain/useCases/messages/GetAllMessages';
import { SessionDeleteUserUseCase } from '../../../Domain/useCases/userLocal/SessionDeleteUserLocal';

const PendingChatListViewModel = () => {

    const { user, getUserSession } = useGetUserLocal();

    const getMessages = async () => {

    }

    const logOut = async () => {
        await SessionDeleteUserUseCase();
        getUserSession();
    }

    return {
        getMessages,
        logOut,
        user
    }
}

export default PendingChatListViewModel