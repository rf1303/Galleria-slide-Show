import './gallery.js';


export const jsonData = (async () => {
    try {

        /* updateDebugInfo('📥 Cargando JSON...'); */

        const result = await fetch("./data.json");

        if (!result.ok) {
            throw new Error('HTTP error! status: ${result.status}');
        }

        const dataJson = await result.json();
        console.log('📊 Datos cargados:', dataJson);

        /* renderGalleria(dataJson) */
        
        return dataJson;

    } catch (error) {
        console.error('❌ Error cargando JSON:', error);
        /* updateDebugInfo(`❌ Error: ${error.message}`); */

        return null;
    }
})();
