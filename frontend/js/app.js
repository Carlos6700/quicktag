import { addTag } from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    const addTagBtn = document.getElementById('addTagBtn');
    const tagInput = document.getElementById('tagInput');
    const tagsContainer = document.getElementById('tagsContainer');

    addTagBtn.addEventListener('click', async function() {
        const tagValue = tagInput.value.trim();
        if (tagValue !== "") {
            const tagElement = createTagElement(tagValue);
            tagsContainer.appendChild(tagElement);
            tagInput.value = ""; // Limpiar el campo de entrada

            // Guardar la etiqueta en el backend
            await addTag(tagValue);
        }
    });

    function createTagElement(tagValue) {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.textContent = tagValue;

        // Función para eliminar la etiqueta
        tag.addEventListener('click', function() {
            tag.remove();
        });

        return tag;
    }
});
