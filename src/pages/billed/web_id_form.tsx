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

const Web_id_form = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <>
      <Heading
        fontSize={{ base: "13px", md: "16px" }}
        fontWeight="500"
        textAlign="center"
      >
        The Web GUID for<b> “C-1251462”</b> is
      </Heading>
      <Heading
        fontSize={{ base: "13px", md: "18px" }}
        fontWeight="500"
        textAlign="center"
        color={"#009CBD"}
      >
        27392729-2839103-162
      </Heading>
      <Formik
        style={{ width: "100%" }}
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
              <Selects disabled
                name="Currency code "
                title="Currency code "
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
              <FormInput
                name="Debit Account Number"
                label="Debit Account Number"
                type="text"
                placeholder="Enter Debit Account Number"
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
            <Box
              flexDirection={"row"}
              w="100%"
              justifyContent={"center"}
              display={"flex"}
            >
              {" "}
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
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Web_id_form;
