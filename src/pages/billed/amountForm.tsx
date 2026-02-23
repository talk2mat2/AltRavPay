import Buttons from "@/components/buttons";
import FormInput from "@/components/formInput";
import Selects from "@/components/selects";
import useModals from "@/hooks/useModal";
import { Box, Button, FormLabel, RadioGroup } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import {
  Card,
  CardBody,
  Heading,
  Grid,
  GridItem,
  Checkbox,
  Text,
  VStack,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Radio } from "antd";
import StatusCard from "@/components/statusCard";
import { useNavigate } from "react-router-dom";

const AmountForm = ({ handleNext }: { handleNext: () => void }) => {
  const { Modal, isModalOpen, handleOk, handleCancel, showModal } = useModals();
  const [reviewed, setReviwed] = useState<boolean>(false);
  const navigate = useNavigate();
  type StatusType = "success" | "error";
  const [alert, setAlert] = useState<{
    open: boolean;
    status: StatusType;
    title: string;
    message: string;
  }>({
    open: false,
    status: "error",
    title: "",
    message: "",
  });
  const [radioValue, setRadioValue] = useState<string | undefined>(undefined);

  const handleProceed = () => {
    showModal();
  };
  const handleSubmitData = () => {
    handleCancel();
    setTimeout(() => {
      setAlert({
        open: true,
        status: "success",
        title: "Request Submited",
        message: "Your request was successfully submited",
      });
    }, 300);
  };

  const handleFormSubmit = () => {};
  useEffect(() => {
    if (alert.open) {
      const timer = setTimeout(() => {
        setAlert({
          open: false,
          status: "error",
          title: "",
          message: "",
        });
        navigate("/");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  return (
    <>
      <StatusCard
        isOpen={alert?.open}
        onClose={() =>
          setAlert({
            open: false,
            status: "error",
            title: "",
            message: "",
          })
        }
        status={alert.status}
        title={alert.title}
        message={alert.message}
      />
      <Modal
        style={{ top: "20%" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <Box
          mt={6}
          p={4}
          bg="#F8F9FA"
          borderRadius="8px"
          border="1px solid #E9ECEF"
        >
          <Heading
            mb={30}
            fontSize={{ base: "13px", md: "16px" }}
            fontWeight="500"
            textAlign="center"
          >
            Transaction Summary
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            {/* Left column */}
            <GridItem>
              <VStack align="start" spacing={4}>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Validation Status:
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    CUR109
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Amount Due
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    ₦1,000,000.00
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Bank Note / Teller Number
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    BG2346611
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Credit Account
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    0012321111
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    State
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    Lagos
                  </Text>
                </Box>
              </VStack>
            </GridItem>

            {/* Right column */}
            <GridItem>
              <VStack align="start" spacing={4}>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Payment Reference
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    Tax
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Amount Paid
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    ₦1,000,000.00
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Teller Name
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    Akeem Balogun
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#495057" mb="2px">
                    Bank Payment Date
                  </Text>
                  <Text fontWeight="500" color={"#000000"} fontSize="16px">
                    March 5, 2025
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
          <Box mt={10} mb={10}>
            <Flex
              mb={5}
              justifyContent={"flex-start"}
              align="flex-start"
              w="full"
            >
              <Checkbox
                mt={1}
                isChecked={reviewed}
                onChange={() => setReviwed(!reviewed)}
                iconColor="white"
                sx={{
                  ".chakra-checkbox__control": {
                    borderColor: "brand.300",
                  },
                  ".chakra-checkbox__control[data-checked]": {
                    bg: "brand.300",
                    borderColor: "brand.300",
                  },
                }}
              />
              <Text>
                I confirm that I have reviewed the transaction details and they
                are correc
              </Text>
            </Flex>
          </Box>
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              size="lg"
              borderRadius="full"
              height={"32px"}
              maxW={"194px"}
              fontSize={{ base: "13px", md: "14px" }}
              isDisabled={!reviewed}
              color="white"
              bgColor={reviewed ? "brand.300" : "gray.300"}
              onClick={handleSubmitData}
            >
              Submit Request
            </Button>
          </Box>
        </Box>
      </Modal>
      <Formik
        initialValues={{
          payerName: "",
          agency: "",
          revenueItem: "",
          amount: "",
          creditAccount: "",
          paymentFlag: "",
        }}
        onSubmit={(values: any) => {
          console.log("Payment Payload:", values);
          handleProceed();
        }}
      >
        {() => (
          <Form autoComplete="off">
            {/* Payer Name */}
            <Box mb={{ base: 3, md: "24px" }}>
              <FormInput
                name="payerName"
                label="Payer Name"
                type="text"
                placeholder="Enter payer full name"
              />
            </Box>

            {/* Agency */}
            <Box mb={{ base: 3, md: "24px" }}>
              <Selects
                name="agency"
                title="Agency"
                options={[
                  { value: "LIRS", name: "LIRS" },
                  { value: "LASAA", name: "LASAA" },
                  { value: "LASPARK", name: "LASPARK" },
                ]}
                placeholder="--Select Agency--"
              />
            </Box>

            {/* Revenue Item */}
            <Box mb={{ base: 3, md: "24px" }}>
              <Selects
                name="revenueItem"
                title="Revenue Item"
                options={[
                  { value: "Personal Income Tax", name: "Personal Income Tax" },
                  { value: "Business Premises", name: "Business Premises" },
                  { value: "Development Levy", name: "Development Levy" },
                ]}
                placeholder="--Select Revenue Item--"
              />
            </Box>

            {/* Amount */}
            <Box mb={{ base: 3, md: "24px" }}>
              <FormInput
                name="amount"
                label="Amount (₦)"
                type="number"
                placeholder="Enter payment amount"
              />
            </Box>

            {/* Credit Account */}
            <Box mb={{ base: 3, md: "24px" }}>
              <FormInput
                name="creditAccount"
                label="Credit Account"
                type="text"
                placeholder="Enter receiving account number"
              />
            </Box>

            {/* Payment Flag */}
            <Box mb={{ base: 3, md: "24px" }}>
              <Selects
                name="paymentFlag"
                title="Payment Status"
                options={[
                  { value: "PAID", name: "Paid" },
                  { value: "PENDING", name: "Pending" },
                  { value: "REVERSAL", name: "Reversal" },
                ]}
                placeholder="--Select Payment Status--"
              />
            </Box>
            <Buttons
              borderRadius="30px"
              w="100%"
              maxW="220px"
              h={"40px"}
              mt={6}
              loading={false}
              type="submit"
              spinnerColor="black"
              fontSize={{ sm: "14px", md: "16px" }}
            >
              Submit Payment
            </Buttons>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AmountForm;
