import Buttons from "@/components/buttons";
import FormDate from "@/components/formDate";
import FormInput from "@/components/formInput";
import StatusTags from "@/components/statusTags";
import Tables from "@/components/tables";
import TextDate from "@/components/textDate";
import TextInput from "@/components/textInput";
import { rowsReport } from "@/mocks";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import type { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const Reports = ({ isPreview }: { isPreview?: boolean }) => {
  const [search, setSearch] = useState<string>("");
  const totalItems = 0;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const columns: GridColDef[] = [
    {
      field: "Debit Account",
      headerName: "Debit Account",
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: "Web GUID",
      headerName: "Web GUID",
      flex: 1.5,
      disableColumnMenu: true,
    },
    {
      field: "Amount",
      headerName: "Amount",
      flex: 1,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
    },
    {
      field: "Credit Account",
      headerName: "Credit Account",
      flex: 1,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
    },
    {
      field: "Date",
      headerName: "Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
      renderCell: (params) => {
        return <StatusTags type={params.value} />;
      },
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: () => {
        return (
          <Center cursor={"pointer"} h="100%">
            <Text color="red.500">View More</Text>
          </Center>
        );
      },
    },
  ];

  const rows: any[] = rowsReport;
  const finalColumns = isPreview
    ? columns.filter((col) => col.field !== "Action")
    : columns;
  const apiRows = [];

  return (
    <Box px={{ base: "2x", md: "3%" }}>
      <Box mb="2%" mt="2%">
        <Text fontSize={{ base: "12px", md: "13px" }}>
          Search Results for
          <b style={{ color: "#000000" }}>Validated and Unvalidated Reports</b>
        </Text>
      </Box>
      <Text style={{ color: "#009CBD", fontWeight: "bold" }}>1000</Text>
      <HStack mb="3%"
        alignItems="flex-end"
        justifyContent="space-between"
        w="100%"
        spacing={4}
      >
        {/* Inputs */}
        <HStack maxW={{ base: "90%", md: "60%" }} spacing={4} flex={1}>
          <TextInput label="Bank Account Number" value="" onChange={() => {}} />
          <TextInput label="Bank Account Number" value="" onChange={() => {}} />
          <TextDate label="Start Date" value="" onChange={() => {}} />
          <TextDate label="End Date" value="" onChange={() => {}} />
        </HStack>

        {/* Button */}
        <Buttons
          borderRadius="30px"
          h="40px" // match input height
          px={6} // add padding instead of width
          loading={false}
          type="submit"
          maxW={"150px"}
          spinnerColor="black"
          fontSize={{ sm: "12px", md: "14px" }}
        >
          Download Report
        </Buttons>
      </HStack>

      <Box mt={["10px", "14px"]}>
        <Tables
          columns={finalColumns}
          rows={rows}
          pageNumber={pageNumber}
          pageSize={pageSize}
          // totalItems={totalItems}
          setPageNumber={setPageNumber}
          setPageSize={setPageSize}
          totalItems={totalItems}
        />
      </Box>
    </Box>
  );
};

export default Reports;
