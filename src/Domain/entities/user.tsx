export interface User {
    id?: number;
    nombre_usuario?: string;
    email: string;
    password: string;
    tipo_usuario: string;
    ciudad?: string;
    telefono?: string;
    unidad_negocio?: string;
    token?: string;
    instance?: string;
}