import { useState } from "react"
import Calculator from "./components/Calculator"
import Table from "./components/Table"
import { calculateInvestmentResults } from "./util/investment"


function App() {


  const [investment, setInvestment] = useState({ initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 });

  const [results, setResults] = useState({
    year: 0,
    interest: 0,
    valueEndOfYear: 0,
    annualInvestment: 0
  });

  function handleCalculateInvestment(initialInvestment, annualInvestment, expectedReturn, duration) {
    let annualData = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration });

    setResults({ year: annualData[0].year, interest: annualData[0].interest, valueEndOfYear: annualData[0].valueEndOfYear, annualInvestment: annualData[0].annualInvestment })
  }

  return (
    <>
      <header id="header">
        <img src="/cat-investor.png" alt="logo app" />
        <h1>Kitten Warren Investor</h1>
        <p>Do you wonder why this cat is rolling on it?🤑</p>
        <p>(Hint: He uses this tool😉)</p>
      </header>
      <section className="form-container">

        <Calculator text="Initial Investment" idInput="initial-investment" value={investment.initialInvestment}
          onChange={(e) => {
            setInvestment(prevInvestment => ({
              ...prevInvestment,
              initialInvestment: e.target.value
            }));
          }} />

        <Calculator text="Annual Investment" idInput="annual-investment" value={investment.annualInvestment}
          onChange={(e) => {
            setInvestment(prevInvestment => ({
              ...prevInvestment,
              annualInvestment: e.target.value
            }));
          }} />

        <Calculator text="Expected Return" idInput="expected-return" value={investment.expectedReturn}
          onChange={(e) => {
            setInvestment(prevInvestment => ({
              ...prevInvestment,
              expectedReturn: e.target.value
            }));
          }} />

        <Calculator text="Duration" idInput="duration" value={investment.duration}
          onChange={(e) => {
            setInvestment(prevInvestment => ({
              ...prevInvestment,
              duration: e.target.value
            }));
          }} />
      </section>
      <main>
        <Table year={results.year} investmentValue={results.valueEndOfYear} interest={results.interest} investedCapital={results.annualInvestment} />
      </main>
    </>
  )
}

export default App
