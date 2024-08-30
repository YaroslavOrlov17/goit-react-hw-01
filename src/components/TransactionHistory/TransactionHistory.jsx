import s from "./TransactionHistory.module.css"
import clsx from "clsx"

const TransactionHistory = ({ item }) => {
  return (
    <div>
      <table className={clsx("container", s.table)}>
        <thead className={s.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {item.map((trans) => (
            <tr key={trans.id}>
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
              <td>{trans.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory
