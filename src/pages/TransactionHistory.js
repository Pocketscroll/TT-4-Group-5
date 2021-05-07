import { Button, Card, Col, DatePicker, Row, Space, Table } from "antd";
import React from "react";
import moment from 'moment';
import "./TransactionHistory.css";
import { tmpDataBase } from "../transactionPlaceHolderData.js";

var userInfo = tmpDataBase[0];
var startDate = null;
var endDate = null;
var transactionInfo = userInfo.transactions;
const { RangePicker } = DatePicker;


function onChange(dates, dateStrings) {
	startDate = dates[0];
	endDate = dates[1];
}

function OnSearch()
{
	var newInfo = null;
	
	for (var i = 0; i < transactionInfo.length; ++i)
	{
		if (new Date(transactionInfo[i].date) > startDate && new Date(transactionInfo[i].date) < endDate)
		{
			newInfo.push(transactionInfo[i]);
		}

	}
	if (newInfo != null)
		transactionInfo = newInfo;
}

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
					
					<RangePicker
						ranges={{
							'This Month': [moment().startOf('month'), moment().endOf('month')],
						}}
						showTime
						format="YYYY/MM/DD"
						onChange={onChange}
					/>

					<Button type="primary" onClick={OnSearch}>Search</Button>
					<Table columns={columns} dataSource={transactionInfo} />
				</div>
			</Space>
		</div>
	);
}

export default TransactionHistory;
