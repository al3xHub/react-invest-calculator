import { useState } from "react"
import Calculator from "./components/Calculator"
import Table from "./components/Table"


function App() {

  const [investment, setInvestment] = useState({ initialInvestment: 100, annualInvestment: 1000, expectedReturn: 8, duration: 10 });

  function handleInvestment(inputValue, newValue) {

    setInvestment(prevInvestment => {
      return {
        ...prevInvestment,
        [inputValue]: +newValue
      };
    })}

  let inputIsValid = investment.duration >= 1;

  return (
    <>
      <header id="header">
        <img src="/cat-investor.png" alt="logo app" />
        <h1>Kitten Warren Investor</h1>
        <p>Do you wonder why this cat is rolling on it?🤑</p>
        <p>(Hint: He uses this tool😉)</p>
      </header>
      <section className="form-container">

        <Calculator text="Initial Investment" idInput="initialInvestment" value={investment.initialInvestment}
          onChange={(e) => handleInvestment('initialInvestment', e.target.value)} />

        <Calculator text="Annual Investment" idInput="annualInvestment" value={investment.annualInvestment}
          onChange={(e) => handleInvestment('annualInvestment', e.target.value)} />

        <Calculator text="Expected Return" idInput="expectedReturn" value={investment.expectedReturn}
          onChange={(e) => handleInvestment('expectedReturn', e.target.value)}/>

        <Calculator text="Duration" idInput="duration" value={investment.duration}
          onChange={(e) => handleInvestment('duration', e.target.value)} />
      </section>
      <main>
        {inputIsValid ? <Table investment={investment}/> : <p className="center">Please enter a duration rater than zero</p>}
      </main>
    </>
  )
}

export default App
