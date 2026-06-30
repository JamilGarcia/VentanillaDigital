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

export const getTramites = async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const url = query ? `${API_URL}/tramites?${query}` : `${API_URL}/tramites`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al obtener trámites');
    }
    return response.json();
};

export const getTramiteById = async (id) => {
    const response = await fetch(`${API_URL}/tramites/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el trámite');
    }
    return response.json();
};

export const getEstadisticas = async () => {
    const response = await fetch(`${API_URL}/estadisticas`);
    if (!response.ok) {
        throw new Error('Error al obtener estadísticas');
    }
    return response.json();
};
