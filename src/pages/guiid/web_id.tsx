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

const Web_id = ({ handleNext }: { handleNext: () => void }) => {
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
      <Box flexDirection={"row"} w="100%" justifyContent={"center"} display={"flex"}>

      <Button
        size="lg"
        borderRadius="full"
        height={"36px"}
        maxW={"194px"}
        bg="gray.300"
        _hover={{}}
        fontSize={{ base: "13px", md: "14px" }}
        // isDisabled={!isValid}
        color="white"
        bgColor={"brand.300"}
        onClick={handleNext}
      >
        Continue
      </Button>
      </Box>
    </>
  );
};

export default Web_id;
