import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  DataGrid,
  type GridColDef,
  type GridEventListener,
  type GridRowSelectionModel,
} from "@mui/x-data-grid";
import { Center, Heading, Image } from "@chakra-ui/react";

import { Spinner } from "@chakra-ui/react";
import type { AdminRoles } from "@/types/roles";
import React from "react";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 6px rgba(0, 0, 0, 0.16)",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ] as const, // 👈 Ensures exact tuple length
});

// interface Props {
//   columns: GridColDef[];
//   onRowClick?: GridEventListener<"rowClick"> | undefined;
//   rows: Array<{ [key: string]: any }>;
//   moduleName?: Approle;
//   isLoading?: boolean;
// }
interface Props {
  columns: GridColDef[];
  onRowClick?: GridEventListener<"rowClick">;
  rows: Array<{ [key: string]: any }>;
  moduleName?: AdminRoles;
  isLoading?: boolean;
  checkboxSelection?: boolean;
  pageNumber?: number;
  pageSize?: number;
  totalItems?: number;
  setPageNumber?: (page: number) => void;
  setPageSize?: (size: number) => void;
}
function Tables({
  rows = [],
  columns,
  onRowClick,
  isLoading,
  pageNumber = 1,
  pageSize = 10,
  totalItems = 0,
  setPageNumber = () => {},
  setPageSize = () => {},
  checkboxSelection = false,
}: Props) {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>({ type: "include", ids: new Set() });

  return isLoading ? (
    <Center minH={"400px"}>
      <Spinner />
    </Center>
  ) : rows.length > 0 ? (
    <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={onRowClick}
          getRowId={(row) => row["id"]}
          // disableSelectionOnClick
          checkboxSelection={checkboxSelection}
          autoHeight
          // pagination

          pageSizeOptions={[5, 10, 20]}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
          rowCount={totalItems}
          paginationMode="server" // Enable server-side paginatio
          paginationModel={{ page: pageNumber - 1, pageSize }}
          onPaginationModelChange={(model) => {
            if (model.pageSize !== pageSize) {
              setPageNumber(1); // reset page
            } else {
              setPageNumber(model.page + 1);
            }

            setPageSize(model.pageSize);
          }}
          // onPaginationModelChange={(model) => {
          //   setPageNumber(model.page + 1);
          //   setPageSize(model.pageSize);
          // }}
          // pageSize={pageSize}
          sx={{
            "& .MuiDataGrid-row": {
              backgroundColor: "#FFFFFF",
            },
            // "& .MuiDataGrid-columnHeaders": {
            //   backgroundColor: "#FAFCFE",
            // },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#F0F0F0",
              cursor: "pointer",
            },
          }}
        />
      </div>
    </ThemeProvider>
  ) : (
    <Center flexDirection={"column"} minH={"400px"}>
      <Heading
        fontWeight="700"
        fontSize="14px"
        lineHeight="38.19px"
        letterSpacing="1px"
        color={"secondaryGray.900"}
      >
        No Data
      </Heading>
    </Center>
  );
}


export default Tables

