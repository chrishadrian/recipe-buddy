import React from "react";
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import {
	ReceiptOutlined,
	CalendarMonthOutlined,
	DashboardOutlined,
	ShoppingCartOutlined,
	FitbitOutlined,
	ArrowCircleLeftOutlined,
	ArrowCircleRightOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { StyledMenuItem } from "./styledMenuItem";

export function StyledSidebar() {
	const { collapseSidebar, collapsed } = useProSidebar();
	return (
		<Sidebar style={{ height: "100vh" }} backgroundColor="#558B2F">
			<Menu>
				<StyledMenuItem
					icon={
						<FitbitOutlined
							fontSize="large"
							sx={{ color: "#85FFBD" }}
						/>
					}
					className="my-3"
				>
					<h2 className="title">Fit Tracker</h2>
				</StyledMenuItem>
				<StyledMenuItem
					icon={<DashboardOutlined />}
					component={<Link to="/" />}
				>
					Dashboard
				</StyledMenuItem>
				<StyledMenuItem
					icon={<ReceiptOutlined />}
					component={<Link to="/recipe" />}
				>
					Recipes
				</StyledMenuItem>
				<StyledMenuItem
					icon={<CalendarMonthOutlined />}
					component={<Link to="/" />}
				>
					Planner
				</StyledMenuItem>
				<StyledMenuItem
					icon={<ShoppingCartOutlined />}
					component={<Link to="/" />}
				>
					Shopping List
				</StyledMenuItem>
			</Menu>
			<Menu style={{ position: "absolute", bottom: "0", width: "100%" }}>
				<StyledMenuItem
					icon={
						collapsed ? (
							<ArrowCircleRightOutlined />
						) : (
							<ArrowCircleLeftOutlined />
						)
					}
					onClick={() => {
						collapseSidebar();
					}}
					className="pb-5"
				>
					{collapsed ? null : <h2>Collapse</h2>}
				</StyledMenuItem>
			</Menu>
		</Sidebar>
	);
}
