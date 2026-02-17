import Stepper from "@/components/stepper";
import TextInput from "@/components/textInput";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import AmountForm from "./amountForm";
import Web_id from "./web_id";
import Web_id_form from "./web_id_form";
import Web_id_form2 from "./Web_id_form2";
import Web_id_form3 from "./Web_id_form3";

export default function GenerateWebGuid() {
  const [step, setStep] = useState(0);
  const [payerId, setPayerId] = useState("");

  const isValid = payerId.trim().length > 3;

  const handleVerify = () => {
    if (!isValid) return;
    setStep(1); // move to next step
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <Box
      minH="100vh"
      bg="gray.100"
      display="flex"
      paddingTop={"2%"}
      alignItems={"center"}
      justifyContent="center"
      p={6}
    >
      <Card transition="all 0.25s ease" w="520px" shadow="lg" borderRadius="xl">
        <CardBody p={10}>
          <VStack spacing={8} align="stretch">
            <Heading
              fontSize={{ base: "13px", md: "16px" }}
              fontWeight="500"
              textAlign="center"
            >
              Generate WebGUID
            </Heading>

            <Stepper totalSteps={5} currentStep={step} />
            {step == 0 && (
              <>
                <Box>
                  <Text
                    fontSize={{ base: "13px", md: "14px" }}
                    mb={2}
                    fontWeight="300"
                  >
                    Customer Payer ID
                  </Text>
                  <TextInput
                    placeholder="Enter customer payer ID"
                    value={payerId}
                    onChange={(e) => setPayerId(e)}
                    label={""}
                  />
                </Box>

                <Button
                  size="lg"
                  borderRadius="full"
                  height={"32px"}
                  maxW={"194px"}
                  bg="gray.300"
                  _hover={{}}
                  fontSize={{ base: "13px", md: "14px" }}
                  isDisabled={!isValid}
                  color="white"
                  bgColor={isValid ? "brand.300" : "gray.300"}
                  onClick={handleVerify}
                >
                  Verify Customer
                </Button>
              </>
            )}
            {step == 1 && <AmountForm handleNext={handleNext} />}
            {step == 2 && <Web_id handleNext={handleNext} />}
            {step == 3 && <Web_id_form handleNext={handleNext} />}
            {step == 4 && <Web_id_form2  handleNext={handleNext} />}
            {step == 5 && <Web_id_form3  handleNext={handleNext} />}
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
