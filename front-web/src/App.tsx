import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import PieChart from "./components/pie-chart";
import SalesAmount from "./components/sales-amount";
import { buildSalesByGenreChart } from "./helpers";
import { FilterData, PieChartConfig, SalesByGender } from "./types";
import { makeRequest } from "./utils/request";

function App() {
  const [filterData, setFilterData] = useState<FilterData>({store: {'id': 0, 'name': ''}});
  const [salesByGenre, setSalesByGenre] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>(`/sales/by-gender?storeId=${filterData?.store.id}`)
      .then((response) => {
        const newSalesByGenre = buildSalesByGenreChart(response.data);
        setSalesByGenre(newSalesByGenre);
      })
      .catch(() => {
        console.error("Error to fetch sales by genre");
      });
  }, [filterData]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="base-card app-sales-amount-container">
          <SalesAmount storeId={filterData?.store.id}/>
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
