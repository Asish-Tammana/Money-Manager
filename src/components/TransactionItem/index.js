/* eslint-disable react/no-unknown-property */
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, titleInput, amountInput, typeInput} = transactionDetails

  const clickDeleteIcon = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item-container">
      <div className="transaction-item-text">
        <p>{titleInput}</p>
        <p>Rs {amountInput}</p>
        <p>{typeInput}</p>
      </div>
      <button
        testid="delete"
        type="button"
        className="delete-container"
        onClick={clickDeleteIcon}
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
