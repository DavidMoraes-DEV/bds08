import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import PieChart from "./components/pie-chart";
import SalesAmount from "./components/sales-amount";
import { buildSalesByGenreChart, filterStoreId } from "./helpers";
import { FilterData, PieChartConfig, SalesByGender, Store } from "./types";
import { makeRequest } from "./utils/request";

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGenre, setSalesByGenre] = useState<PieChartConfig>();
  const [storeId, setStoryId] = useState(0);

  useEffect(() => {
    makeRequest.get<Store[]>("/stores").then((response) => {
      const newStoreId = filterStoreId(response.data, filterData) as number;
      setStoryId(newStoreId);
    }).catch(() => {
      console.error("Error to fetch store");
    });
  }, [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>(`/sales/by-gender?storeId=${storeId === undefined ? 0 : storeId}`)
      .then((response) => {
        const newSalesByGenre = buildSalesByGenreChart(response.data);
        setSalesByGenre(newSalesByGenre);
      })
      .catch(() => {
        console.error("Error to fetch sales by genre");
      });
  }, [storeId]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="base-card app-sales-amount-container">
          <SalesAmount storeId={storeId}/>
          <PieChart
            name="Total de vendas"
            labels={salesByGenre?.labels}
            series={salesByGenre?.series}
          />
        </div>
      </div>
    </>
  );
}

export default App;
