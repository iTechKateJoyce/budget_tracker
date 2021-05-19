import React, { useState } from 'react'
export default function InputForm() {
  const [formData, updateFormData] = useState({
    salary: '',
    propertyPrice: '',
    interestRate: '',
    mortgageTerm: '',
    deposit: '',

  })
  const [monthlyRepayments, updateMonthlyRepayments] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
    console.log(formData)
  }
  // monthly repayments = mortgage rate divided by 12 

  function calculateRepayments() {
    const mortgageAmount = formData.propertyPrice - formData.deposit
    const monthlyInterestRate = (formData.interestRate / 12) / 100
    const prn = mortgageAmount * monthlyInterestRate
    const rnnt = Math.pow((1 + monthlyInterestRate), (12 * formData.mortgageTerm))
    const monthlyRepayments = (prn * rnnt) / (rnnt - 1)
    return updateMonthlyRepayments(monthlyRepayments)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // console.log(formData)
    calculateRepayments()
  }

  return <section id="form">
    <form onSubmit={handleSubmit} action="/action_page.php">
      <label>Salary: </label>
      <input
        type="text"
        id="username"
        name={'salary'}
        value={formData.salary}
        onChange={handleChange}
      />
      <br />
      <label>Property price: </label>
      <input
        type="text"
        id="propertyPrice"
        name="propertyPrice"
        value={formData.propertyPrice}
        onChange={handleChange}
      />
      <br />
      <label>Mortgage interest rate: </label>
      <input
        type="text"
        id="interestRate"
        name="interestRate"
        value={formData.interestRate}
        onChange={handleChange}
      />
      <br />
      <label>Mortgage term (years): </label> {/*could be dropdown*/}
      <input
        type="text"
        id="mortgageTerm"
        name="mortgageTerm"
        value={formData.mortgageTerm}
        onChange={handleChange}
      />
      <br />
      <label>Deposit: </label>
      <input
        type="text"
        id="deposit"
        name="deposit"
        value={formData.deposit}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Submit"></input>
    </form>
    <div>
      <p>Monthly Repayments <span id="monthlyRepayments">{monthlyRepayments}</span></p>
    </div>

  </section>
}