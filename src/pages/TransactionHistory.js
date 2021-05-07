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
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
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
					<Table columns={columns} dataSource={userInfo.transactions} />
				</div>
			</Space>
		</div>
	);
}

export default TransactionHistory;
