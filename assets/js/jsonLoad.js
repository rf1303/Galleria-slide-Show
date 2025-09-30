import './gallery.js';

export const jsonData = (async () => {
    try {
        const result = await fetch("./data.json");
        if (!result.ok) {
            throw new Error('HTTP error! status: ${result.status}');
        }
        const dataJson = await result.json();
        return dataJson;
    } catch (error) {
        console.error('❌ Error cargando JSON:', error);
        return null;
    }
})();
