import { Button, DatePicker, Table } from "antd";
import React from "react";
import Balance from "../components/Balance/Balance";
import "./TransactionHistory.css";

const { RangePicker } = DatePicker;

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

	function onChange(date, dateString) {
		console.log(date, dateString);
	}

	return (
		<div>
			<Balance />
			Date:
			<DatePicker onChange={onChange} />
			<Button type="primary">Search</Button>
			<Table columns={columns} dataSource={data} />
		</div>
	);
}

export default TransactionHistory;
