import { DollarOutlined, HistoryOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { Component } from "react";

const { Header, Content, Footer, Sider } = Layout;

export default class Homepage extends Component {
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		return (
			<Layout>
				<Sider
					style={{
						overflow: "auto",
						height: "100vh",
						position: "fixed",
						left: 0,
					}}
				>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							My Account
						</Menu.Item>
						<Menu.Item key="2" icon={<DollarOutlined />}>
							Make a Transfer
						</Menu.Item>
						<Menu.Item key="3" icon={<HistoryOutlined />}>
							Transaction History
						</Menu.Item>
						<Menu.Item key="4" icon={<LogoutOutlined />}>
							Logout
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout" style={{ marginLeft: 200 }}>
					<Header className="site-layout-background" style={{ padding: 0 }} />
					<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
						<div
							className="site-layout-background"
							style={{ padding: 24, textAlign: "center" }}
						>
							hello
						</div>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						DBS Something something copyright
					</Footer>
				</Layout>
			</Layout>
		);
	}
}
