import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { Toolbar, Typography } from "@mui/material";

const sample = [
	["Frozen yoghurt", "1 pcs"],
	["Ice cream sandwich", "3 pcs"],
	["Eclair", "1 pcs"],
	["Cupcake", "1 dozen"],
	["Gingerbread", "1 dozen"],
];

function createData(id, name, quantity) {
	return { id, name, quantity };
}

const columns = [
	{
		width: 50,
		label: "Name",
		dataKey: "name",
	},
	{
		width: 50,
		label: "Quantity",
		dataKey: "quantity",
		numeric: true,
	},
];

const rows = Array.from({ length: 10 }, (_, index) => {
	const randomSelection = sample[Math.floor(Math.random() * sample.length)];
	return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
	Scroller: React.forwardRef((props, ref) => (
		<TableContainer component={Paper} {...props} ref={ref} />
	)),
	Table: (props) => (
		<Table
			{...props}
			sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
		/>
	),
	TableHead,
	TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
	TableBody: React.forwardRef((props, ref) => (
		<TableBody {...props} ref={ref} />
	)),
};

function fixedHeaderContent() {
	return (
		<TableRow>
			{columns.map((column) => (
				<TableCell
					key={column.dataKey}
					variant="head"
					align={column.numeric || false ? "right" : "left"}
					style={{ width: column.width }}
					sx={{
						backgroundColor: "background.paper",
					}}
				>
					{column.label}
				</TableCell>
			))}
		</TableRow>
	);
}

function rowContent(_index, row) {
	return (
		<React.Fragment>
			{columns.map((column) => (
				<TableCell
					key={column.dataKey}
					align={column.numeric || false ? "right" : "left"}
				>
					{row[column.dataKey]}
				</TableCell>
			))}
		</React.Fragment>
	);
}

function EnhancedTableToolbar(props) {
	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				height: '14.5%'
			}}
		>
			<Typography
				sx={{ flex: "1 1 100%" }}
				variant="h6"
				id="tableTitle"
				component="div"
			>
				Shopping List
			</Typography>
		</Toolbar>
	);
}

export default function EnhancedList() {
	return (
		<Paper style={{ height: "85.5%", width: "100%" }}>
			<EnhancedTableToolbar />
			<TableVirtuoso
				data={rows}
				components={VirtuosoTableComponents}
				fixedHeaderContent={fixedHeaderContent}
				itemContent={rowContent}
			/>
		</Paper>
	);
}
