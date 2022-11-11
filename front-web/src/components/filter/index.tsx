import React, { useState } from 'react';
import { FilterData, SelectedStore } from '../../types';
import './styles.css';

type Props = {
    onFilterChange: (filter: FilterData) => void;
}

const Filter = ({ onFilterChange }: Props) => {
    const [selectedStore, setSelectedStore] = useState<SelectedStore>();

    const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedStore = event.target.value as SelectedStore;
        setSelectedStore(newSelectedStore);
        onFilterChange({store: newSelectedStore });
    };

    return (
        <div className='base-card filter-container'>
            <select className='filter-input' value={selectedStore} onChange={onChangeStore}>
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
