import { useState } from "react"
import Calculator from "./components/Calculator"
import Table from "./components/Table"
import { calculateInvestmentResults } from "./util/investment"

function handleCalculateInvestment(){
  calculateInvestmentResults()
}

function App() {

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <>
      <header id="header">
        <img src="/cat-investor.png" alt="logo app" />
        <h1>Little Warren Investor</h1>
        <p>Do you wonder why this cat is richer as Warren Buffet?🤑</p>
        <p>(Hint: He uses this tool😉)</p>
      </header>
      <section className="form-container">
        <Calculator text="Initial Investment" idInput="initial-investment" value={initialInvestment} onChange={e => setInitialInvestment(e.target.value)} />
        <Calculator text="Annual Investment" idInput="annual-investment" value={annualInvestment} onChange={e => setAnnualInvestment(e.target.value)}  />
        <Calculator text="Expected Return" idInput="expected-return" value={expectedReturn} onChange={e => setExpectedReturn(e.target.value)}  />
        <Calculator text="Duration" idInput="duration" value={duration} onChange={e => setDuration(e.target.value)}  />
      </section>
      <main>
        <Table />
      </main>
    </>
  )
}

export default App
