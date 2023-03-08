import React from 'react'
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { ReceiptOutlined, CalendarMonthOutlined, DashboardOutlined, ShoppingCartOutlined, FitbitOutlined, ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from "@mui/icons-material";
import { StyledMenuItem } from './styledMenuItem';
import { Link } from 'react-router-dom';

export const StyledSidebar = () => {
    const { collapseSidebar, collapsed } = useProSidebar();
    return (
        <Sidebar style={{ height: "100vh" }} backgroundColor="#558B2F">
            <Menu>
                <StyledMenuItem
                    icon={<FitbitOutlined />}
                >
                    <h2 className='title'>Fit Tracker</h2>
                </StyledMenuItem>
                <StyledMenuItem icon={<DashboardOutlined />} component={<Link to="/" />}>Dashboard</StyledMenuItem>
                <StyledMenuItem icon={<ReceiptOutlined />} component={<Link to="/" />}>Recipes</StyledMenuItem>
                <StyledMenuItem icon={<CalendarMonthOutlined />} component={<Link to="/" />}>Planner</StyledMenuItem>
                <StyledMenuItem icon={<ShoppingCartOutlined />} component={<Link to="/" />}>Shopping List</StyledMenuItem>
            </Menu>
            <Menu style={{ position: "absolute", bottom: "0", width: "100%", paddingBottom: "5%" }}>
                <StyledMenuItem
                    icon={collapsed ? <ArrowCircleRightOutlined /> : <ArrowCircleLeftOutlined />}
                    onClick={() => {
                        collapseSidebar();
                    }}
                >
                    {collapsed ? null : <h2>Collapse</h2>}
                </StyledMenuItem>
            </Menu>
        </Sidebar>
    )
}