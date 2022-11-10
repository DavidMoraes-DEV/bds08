import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import PieChart from "./components/pie-chart";
import SalesAmount from "./components/sales-amount";

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
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
