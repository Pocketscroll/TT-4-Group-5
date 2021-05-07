import { Button, Card, Col, DatePicker, Row, Space, Table } from "antd";
import React from "react";
import "./TransactionHistory.css";
import { tmpDataBase } from "../transactionPlaceHolderData.js";

const userInfo = tmpDataBase[0];

const { RangePicker } = DatePicker;

function TransactionHistory() {
	const columns = [
		{
			title: "PayeeID",
			dataIndex: "payeeID",
			key: "payeeID",
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",    
			onFilter: (value, record) => record.date.indexOf(value) === 0,
			sorter: (a, b) => new Date(a.date) - new Date(b.date),
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
		},
		{
			title: "IsEGift",
			dataIndex: "eGift",
			value: "eGift",
		},
		{
			title: "Message",
			dataIndex: "message",
			key: "message",
		}
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
		}
	];
	return (
		<div>
			<Space>
				<div className="site-card-wrapper">
					<Row gutter={16}>
						<Col span={8}>
							<Card title="Balance" bordered={false}>
								{userInfo.balance}
							</Card>
						</Col>
					</Row>
					Date Range:
					<RangePicker />
					<Button type="primary">Search</Button>
					<Table columns={columns} dataSource={userInfo.transactions.slice().sort((a, b) => b.date - a.date)} />
				</div>
			</Space>
		</div>
	);
}

export default TransactionHistory;
