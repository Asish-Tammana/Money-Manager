import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    historyList: [],
  }

  getFormData = event => {
    event.preventDefault()

    const titleInput = document.getElementById('titleInput').value
    const amountInput = Number(document.getElementById('amountInput').value)
    const typeInput = document.getElementById('typeInput').value

    const newHistoryItem = {
      id: uuidv4(),
      titleInput,
      amountInput,
      typeInput,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistoryItem],
    }))

    if (typeInput === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance + amountInput,
        income: prevState.income + amountInput,
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - amountInput,
        expenses: prevState.expenses + amountInput,
      }))
    }

    document.getElementById('titleInput').value = ''
    document.getElementById('amountInput').value = ''
    document.getElementById('typeInput').value = 'INCOME'
  }

  deleteTransaction = id => {
    const {historyList} = this.state
    console.log(historyList)

    const requiredIndex = historyList.findIndex(each => each.id === id)

    const deletingItem = historyList[requiredIndex]
    console.log(deletingItem)

    if (deletingItem.typeInput === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance - deletingItem.amountInput,
        income: prevState.income - deletingItem.amountInput,
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance + deletingItem.amountInput,
        expenses: prevState.expenses - deletingItem.amountInput,
      }))
    }

    historyList.splice(requiredIndex, 1)

    this.setState({
      historyList,
    })
  }

  render() {
    const {historyList} = this.state
    console.log(historyList)

    return (
      <div className="bg-container">
        <div className="name-container">
          <h1>Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails moneyDetails={this.state} key={uuidv4()} />

        <div className="bottom-section">
          <form
            className="each-bottom-section form-section"
            onSubmit={this.getFormData}
          >
            <h1 className="each-bottom-section-heading">Add Transaction</h1>
            <label htmlFor="titleInput">TITLE</label> <br />
            <input type="text" id="titleInput" placeholder="TITLE" />
            <br />
            <label htmlFor="amountInput">AMOUNT</label>
            <br />
            <input type="text" id="amountInput" placeholder="AMOUNT" />
            <br />
            <label htmlFor="typeInput">TYPE</label>
            <br />
            <select id="typeInput">
              {transactionTypeOptions.map(each => (
                <option id={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="submit">Add</button>
          </form>
          <div className="each-bottom-section history-section">
            <h1 className="each-bottom-section-heading">History</h1>
            <div className="history-index">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul>
              {historyList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  transactionDetails={eachItem}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
