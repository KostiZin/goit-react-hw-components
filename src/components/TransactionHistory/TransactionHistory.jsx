export function TransactionHistory(transactions) {
  let tableData = transactions.map(data => {
    <tbody>
      <tr key={data.id}>
        <td>{data.type}</td>
        <td>{data.amount}</td>
        <td>{data.currency}</td>
      </tr>
    </tbody>;
  });
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {tableData}
    </table>
  );
}
