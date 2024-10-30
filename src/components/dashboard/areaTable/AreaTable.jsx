import "./TransactionTable.scss";

const TABLE_HEADS = [
  "Phone number",
  "Amount",
  "Type",
  "Transaction ID",
  "Date",
  "Status",
];

const TABLE_DATA = [
  {
    id: 100,
    phone: "08169784011",
    amount: "₦35,000.00",
    type: "Wallet Funding",
    transaction_id: "9990978899999990779",
    date: "24 Jan, 2023 8:00am",
    status: "Pending",
  },
  {
    id: 101,
    phone: "08169784011",
    amount: "₦35,000.00",
    type: "Wallet Funding",
    transaction_id: "9990978899999990779",
    date: "24 Jan, 2023 8:00am",
    status: "Failed",
  },
  {
    id: 102,
    phone: "08169784011",
    amount: "₦35,000.00",
    type: "Wallet Funding",
    transaction_id: "9990978899999990779",
    date: "24 Jan, 2023 8:00am",
    status: "Successful",
  },
  {
    id: 103,
    phone: "08169784011",
    amount: "₦35,000.00",
    type: "Wallet Funding",
    transaction_id: "9990978899999990779",
    date: "24 Jan, 2023 8:00am",
    status: "Pending",
  },
];

const TransactionTable = () => {
  return (
    <section className="transaction-table">
      <div className="table-header">
        <h4>Recent Transactions</h4>
        <a href="/transactions" className="see-all">
          See all <span>→</span>
        </a>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.phone}</td>
                <td>{dataItem.amount}</td>
                <td>{dataItem.type}</td>
                <td>{dataItem.transaction_id}</td>
                <td>{dataItem.date}</td>
                <td>
                  <span className={`status ${dataItem.status.toLowerCase()}`}>
                    {dataItem.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionTable;
