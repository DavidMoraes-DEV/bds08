import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import PieChart from "./components/pie-chart";
import SalesAmount from "./components/sales-amount";
import { FilterData } from "./types";

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  }

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange}/>
        <div className="base-card app-sales-amount-container">
          <SalesAmount />
          <PieChart
            name="Total de vendas"
            labels={["Feminino", "Masculino", "Outro"]}
            series={[40, 30, 30]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
