import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import Buttons from "../buttons";
import { Formik, Form } from "formik";
import { FaUserAstronaut } from "react-icons/fa";
import FormInput from "../formInput";
import FormDate from "../formDate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportForm = () => {
  const [value, setValue] = useState("option1");

  const navigate = useNavigate();

  return (
    <Box
      bg="#ffffff"
      p={{ base: "15px", md: "30px" }}
      minH={"400px"}
      maxW={"500px"}
      w="100%"
    >
      <Heading as="h1" fontSize="20px" fontWeight="700" mb={4}>
        Generate Report
      </Heading>
      <Box mt="9%">
        <Formik
          // validationSchema={LoginSchema}
          initialValues={{
            Email: "",
            passWord: "",
          }}
          onSubmit={(values: any) => {
            // handleSubmit(values);
          }}
        >
          {({
            isSubmitting,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <Form autoComplete="off">
              <Box mb={{ base: 3, md: "24px" }}>
                <FormInput
                  name="Email"
                  label="Bank Account Number"
                  type="text"
                  placeholder="Enter email here"
                  // leftIcon={<FaUserAstronaut />}
                />
              </Box>
              <Box>
                <FormInput
                  name="Branch_Code"
                  label="Branch Code"
                  type="text"
                  placeholder="Enter Branch Code"
                  // leftIcon={<FaUserAstronaut />}
                />
              </Box>
              <HStack w="100%">
                <Box flex={0.5}>
                  <FormDate
                    name="Branch_Code"
                    label="Start Date"
                    placeholder="Enter Branch Code"
                  />
                </Box>
                <Box flex={0.5}>
                  <FormDate
                    name="Branch_Code"
                    label="End Date"
                    placeholder="Enter Branch Code"
                  />
                </Box>
              </HStack>
              <RadioGroup
                mt={{ base: "3px", md: "23px" }}
                style={{ width: "100%" }}
                onChange={setValue}
                value={value}
              >
                <FormLabel fontSize={["12px", "14px"]} fontWeight="500">
                  Report Type
                </FormLabel>
                <VStack
                  align={"flex-start"}
                  style={{ width: "100%" }}
                  spacing={5}
                >
                  <Radio value="option1">
                    Validated and Unvalidated report
                  </Radio>
                  <Radio value="option2">Payment and Notification Report</Radio>
                </VStack>
              </RadioGroup>
              <Buttons
                onClick={() => {
                  navigate("/reports");
                }}
                borderRadius="30px"
                w="100%"
                maxW="194px"
                h={"32px"}
                mt={6}
                loading={false}
                type="submit"
                spinnerColor="black"
                fontSize={{ sm: "14px", md: "16px" }}
              >
                Generate Report
              </Buttons>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ReportForm;
