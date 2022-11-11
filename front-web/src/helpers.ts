import { FilterData, SalesByGender, Store } from "./types"
import { formatGender } from "./utils/formatters";

export const buildSalesByGenreChart = (sales: SalesByGender[]) => {
    const labels = sales.map(sale => formatGender(sale.gender));
    const series = sales.map(sale => sale.sum);

    return {labels, series};
}

export const filterStoreId = (stores: Store[], filterData?: FilterData) => {
    const store = stores.find((store) => store.name === filterData?.store);
    return store?.id;
};
