const apiUrl = 'http://localhost:3000/api/tags';  // Ruta del backend

export async function addTag(tagValue) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tag: tagValue }),
        });

        if (!response.ok) {
            throw new Error('Error al agregar la etiqueta');
        }

        const data = await response.json();
        console.log('Etiqueta agregada:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
