import React, { useState } from 'react';
import { FilterData, Store } from '../../types';
import './styles.css';

type Props = {
    onFilterChange: (filter: FilterData) => void;
}

const Filter = ({ onFilterChange }: Props) => {
    const [store, setStore] = useState<Store>();

    const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStore = event.target.value as Store;
        setStore(selectedStore);
        onFilterChange({store: selectedStore });
    };

    return (
        <div className='base-card filter-container'>
            <select className='filter-input' value={store} onChange={onChangeStore}>
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
