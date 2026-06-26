const API_URL = 'http://localhost:3001/api';

export const getCategorias = async () => {
    const response = await fetch(`${API_URL}/categorias`);
    if (!response.ok) {
        throw new Error('Error al obtener categorías');
    }
    return response.json();
};

export const getInstituciones = async () => {
    const response = await fetch(`${API_URL}/instituciones`);
    if (!response.ok) {
        throw new Error('Error al obtener instituciones');
    }
    return response.json();
};

export const getTramites = async () => {
    const response = await fetch(`${API_URL}/tramites`);
    if (!response.ok) {
        throw new Error('Error al obtener trámites');
    }
    return response.json();
};
