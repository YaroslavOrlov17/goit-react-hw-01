import s from "./TransactionHistory.module.css"
import clsx from "clsx"

const TransactionHistory = ({ items }) => {
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory
