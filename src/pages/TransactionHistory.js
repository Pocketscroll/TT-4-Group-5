import { Button, Col, DatePicker, Row, Space, Table } from "antd";
import AccountName from "../components/TransactionHistoryCards/AccountName";
import Balance from "../components/TransactionHistoryCards/Balance";
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
		{
			date: "12/04/2021",
			amount: "S$50",
			status: "Received",
			refid: "001",
		},
		{
			date: "12/04/2021",
			amount: "S$50",
			status: "Received",
			refid: "001",
		},
		{
			date: "12/04/2021",
			amount: "S$50",
			status: "Received",
			refid: "001",
		},
		{
			date: "12/04/2021",
			amount: "S$50",
			status: "Received",
			refid: "001",
		},
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
		<>
			<Row>
				<Col span={12} offset={6}>
					<div className="spaced-layout">
						<h1>Transaction History</h1>
						<Space align="horizontal">
							<AccountName />
							<Balance />
						</Space>
						<br />
						<br />
						Date: <DatePicker onChange={onChange} />{" "}
						<Button type="primary">Search</Button>
						<br />
						<br />
						<Table columns={columns} dataSource={data} />
					</div>
				</Col>
			</Row>
		</>
	);
}

export default TransactionHistory;
