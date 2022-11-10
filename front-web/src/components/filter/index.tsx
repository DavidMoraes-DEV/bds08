import './styles.css';

const Filter = () => {
    return (
        <div className='base-card filter-container'>
            <select className='filter-input'>
                <option value="">Selecione uma cidade</option>
                <option value="Araguari">Araguari</option>
                <option value="Ituiutaba">Ituiutaba</option>
                <option value="Uberaba">Uberaba</option>
                <option value="Uberlândia">Uberlândia</option>
            </select>
        </div>
    );
}

export default Filter;