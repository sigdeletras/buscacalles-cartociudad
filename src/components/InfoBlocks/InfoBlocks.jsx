import "./InfoBlocks.css";

const InfoBlocks = () => {

    return (
        <div className='infoblocks'>
            <div className='infoblocks__block'>
                <p><i class="infoblocks__block--icon zmdi zmdi-search zmdi-hc-3x" /></p>
                <h2>Búsqueda</h2>
                <p>Introduce un texto de búsqueda para ver las calles, topónimos y localidades</p>
            </div>
            <div className='infoblocks__block'>
                <p><i class="infoblocks__block--icon zmdi zmdi-filter-list zmdi-hc-3x" /></p>
                <h2>Filtro</h2>
                <p>Puedes ver todas las coincidencias o filtrar solo los datos del callejero</p>
            </div>
            <div className='infoblocks__block'>
                <p><i class="infoblocks__block--icon zmdi zmdi-filter-center-focus zmdi-hc-3x" /></p>
                <h2>Consulta</h2>
                <p>Consulta los resultados por municipios de España</p>
            </div>
        </div>
    )

}

export default InfoBlocks;