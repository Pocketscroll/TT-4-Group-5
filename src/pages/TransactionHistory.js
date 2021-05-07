import { Table } from "antd";
import React from "react";

function TransactionHistory() {
	const columns = [
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
		},
		{
			title: "Reference ID",
			dataIndex: "refid",
			key: "refid",
		},
	];

	const data = [
		{
			date: "12/04/2021",
			amount: "S$50",
			status: "Received",
			refid: "001",
		},
	];

	return (
		<div>
			{/* <h3>Balance</h3> */}
			{/* Search date range */}
			<Table columns={columns} dataSource={data} />
		</div>
	);
}

export default TransactionHistory;
