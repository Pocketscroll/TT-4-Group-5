import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			<h1>Live more, Bank less</h1>
			<div className="cards__containers">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="https://www.businesstimes.com.sg/sites/default/files/styles/large_popup/public/image/2020/09/14/DBS%20bank%20at%20Scape%20building%20-%20Jan%202020%20-%20ST%20file.jpg?itok=RCJ5Sv2N"
							label="Account Statement"
							path="/balance"
						/>
						<CardItem
							src="https://blogtrade.net/images/exness/1593481279064/original/internal-transfers-exness.png"
							label="Local Transfer"
							path="/login"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="https://cdn.lynda.com/course/382578/382578-637491005365547459-16x9.jpg"
							label="Investments"
							path="/login"
						/>
						<CardItem
							src="https://thesiliconreview.net/story_image_upload/article/thesiliconreview-2020-dbs-banks-india-mission.jpg"
							label="Apply for Cards"
							path="/login"
						/>
						<CardItem
							src="https://www.startupguys.net/wp-content/uploads/2020/05/forex-trade.jpg"
							label="Forex Rate"
							path="/login"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
