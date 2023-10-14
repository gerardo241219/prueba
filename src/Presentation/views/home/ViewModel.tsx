import { useState, useEffect } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useGetUserLocal } from '../../hooks/useGetUserLocal';

const HomeViewModel = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        tipo_usuario: ''
    });

    const [errorMessage, setErrorMessage] = useState(""); 
    const { user, getUserSession } = useGetUserLocal();

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value})
    }

    const login = async () => {
        if(isValidForm()) {
            const response = await LoginAuthUseCase(values)

            if(response.error) {
                setErrorMessage(response.message);
            } else {
                await SaveUserUseCase(response.data);
                getUserSession();
            }

        }
    }
 
    const isValidForm = (): boolean => {

        if(values.email === "") {
            setErrorMessage("El correo electronico es obligatorio");
            return false;
        }

        if(values.password === "") {
            setErrorMessage("La contraseña es obligatoria");
            return false;
        }

        if(values.tipo_usuario === "vacio") {
            setErrorMessage("La unidad de negocio es obligatoria");
            return false;
        }

        return true;
    }

    return {
        ...values,
        user,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel