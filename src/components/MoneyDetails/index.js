/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {moneyDetails} = this.props
    const {balance, income, expenses} = moneyDetails
    return (
      <div className="details-container">
        <div className="each-detail-container balance-container">
          <img
            className="container-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div>
            <p>Your Balance</p>
            <p testid="balanceAmount">Rs {balance}</p>
          </div>
        </div>

        <div className="each-detail-container income-container">
          <img
            className="container-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <div>
            <p>Your Income</p>
            <p testid="incomeAmount">Rs {income}</p>
          </div>
        </div>

        <div className="each-detail-container expenses-container">
          <img
            className="container-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div>
            <p>Your Expenses</p>
            <p testid="expensesAmount">Rs {expenses}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
