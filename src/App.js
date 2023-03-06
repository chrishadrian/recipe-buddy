import './App.css';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { ReceiptOutlined, MenuOutlined, CalendarMonthOutlined, DashboardOutlined, ShoppingCartOutlined } from "@mui/icons-material";
function App() {
  const { collapseSidebar, toggleSidebar, collapsed } = useProSidebar();

  const menuItemStyle = "text-white "

  return (
    <div id="app" style={{ height: "100vh", display: "flex" }}>
      <Sidebar style={{ height: "100vh" }} backgroundColor="#8BC34A">
        <Menu>
          <MenuItem
            icon={<MenuOutlined />}
            onClick={() => {
              collapseSidebar();
            }}
          >
            <h2>Fit Tracker</h2>
          </MenuItem>
          <MenuItem icon={<DashboardOutlined />}>Dashboard</MenuItem>
          <MenuItem icon={<ReceiptOutlined />}>Recipes</MenuItem>
          <MenuItem icon={<CalendarMonthOutlined />}>Planner</MenuItem>
          <MenuItem icon={<ShoppingCartOutlined />}>Shopping List</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main>
    </div>
  );
}

export default App;
