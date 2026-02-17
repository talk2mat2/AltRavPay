import Buttons from "@/components/buttons";
import FormDate from "@/components/formDate";
import FormInput from "@/components/formInput";
import Selects from "@/components/selects";
import TextInput from "@/components/textInput";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Formik, Form } from "formik";

const AmountForm = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <>
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
                name="Amount"
                label="Amount (₦)"
                type="text"
                placeholder="Enter amount in digit for example: 40000, 30300"
                // leftIcon={<FaUserAstronaut />}
              />
            </Box>

            <Box mb={{ base: 3, md: "24px" }}>
              <Selects
                name="Agency_Code"
                title="Agency Code"
                type="text"
                options={[
                  { value: "Lagos", name: "Lagos" },
                  { value: "Abuja", name: "Abuja" },
                  { value: "Rivers", name: "Rivers" },
                ]}
                placeholder="--Select state--"
                // leftIcon={<FaUserAstronaut />}
              />
            </Box>
            <Box mb={{ base: 3, md: "24px" }}>
              <Selects
                name="state"
                title="State"
                type="text"
                options={[
                  { value: "Lagos", name: "Lagos" },
                  { value: "Abuja", name: "Abuja" },
                  { value: "Rivers", name: "Rivers" },
                ]}
                placeholder="--Select state--"
                // leftIcon={<FaUserAstronaut />}
              />
            </Box>
            <Box mb={{ base: 3, md: "24px" }}>
              <Selects
                name="Applied Date or Period"
                label="Applied Date or Period"
                title="Applied Date or Period"
                type="text"
                options={[
                  { value: "Lagos", name: "Lagos" },
                  { value: "Abuja", name: "Abuja" },
                  { value: "Rivers", name: "Rivers" },
                ]}
                placeholder="--Select state--"
                // leftIcon={<FaUserAstronaut />}
              />
            </Box>
            <Box mb={{ base: 3, md: "24px" }}>
              <Selects
                name="ADate_or_Period"
                label="Revenue Code"
                title="Revenue Code"
                type="text"
                options={[
                  { value: "Lagos", name: "Lagos" },
                  { value: "Abuja", name: "Abuja" },
                  { value: "Rivers", name: "Rivers" },
                ]}
                placeholder="--Select state--"
                // leftIcon={<FaUserAstronaut />}
              />
            </Box>
            {/* <Box>
              <FormInput
                name="Agency Code"
                label="Agency Code"
                type="text"
                placeholder="--Select agency code--"
                // leftIcon={<FaUserAstronaut />}
              />
            </Box> */}

            <Box mb={{ base: 3, md: "24px" }}>
              <FormInput
                name="Assessment Reference"
                label="Assessment Reference"
                type="text"
                placeholder="Enter Assessment Reference"
                // leftIcon={<FaUserAstronaut />}
              />
            </Box>
            <Buttons
              onClick={() => {
                handleNext();
                // navigate("/reports");
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
    </>
  );
};

export default AmountForm;
