import Stepper from "@/components/stepper";
import TextInput from "@/components/textInput";
import { pageLinks } from "@/services/pageLinks";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  Stack,
  AlertTitle,
  Alert,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const [step, setStep] = useState(0);
  const [payerId, setPayerId] = useState("");

  const isValid = payerId.trim().length > 3;
  const navigate = useNavigate();
  const handleVerify = () => {
    if (!isValid) return;
    setStep(1);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <Box minH="100vh" bg="gray.100" pt={{ base: 16, md: 14 }} px={6}>
      <Box
        pb={3}
        flexDirection={"row"}
        paddingLeft={{ base: "0%", md: "20%" }}
        display={"flex"}
        w={"100%"}
        flexShrink={0}
      >
        <Box>
          <Heading
            as="h1"
            fontSize="20px"
            color="#000000"
            fontWeight="700"
            mb={4}
          >
            Hello Mayowa
          </Heading>
          <Alert
            status="info"
            borderRadius="8px"
            p={4}
            maxW="467px"
            w="100%"
            bg="#FCFCFC"
          >
            <AlertTitle fontSize={"13px"} maxW="419px" w="100%">
              Select an option to proceed
            </AlertTitle>
          </Alert>
        </Box>
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        justify="center" // centers horizontally only
      >
        {/* Card 1 */}
        <Card
          transition="all 0.25s ease"
          w={{ base: "100%", md: "300px" }}
          shadow="lg"
          borderRadius="xl"
        >
          <CardBody p={10}>
            <VStack spacing={6} align="stretch">
              <Heading
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="700"
                textAlign="center"
              >
                Billed Payment
              </Heading>

              <Box>
                <Text
                  fontSize={{ base: "13px", md: "14px" }}
                  mb={2}
                  fontWeight="300"
                >
                  Process Billed Payments
                </Text>
              </Box>

              <Button
                size="lg"
                borderRadius="full"
                height="40px"
                bgColor={"brand.300"}
                _hover={{ opacity: 0.9 }}
                fontSize={{ base: "13px", md: "14px" }}
                color="white"
                onClick={() => {
                  navigate(pageLinks.BilledPayment);
                }}
              >
                Proceed
              </Button>
            </VStack>
          </CardBody>
        </Card>

        {/* Card 2 */}
        <Card
          transition="all 0.25s ease"
          w={{ base: "100%", md: "300px" }}
          shadow="lg"
          borderRadius="xl"
        >
          <CardBody p={10}>
            <VStack spacing={6} align="stretch">
              <Heading
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="700"
                textAlign="center"
              >
                Non-Billed Payment
              </Heading>

              <Box>
                <Text
                  fontSize={{ base: "13px", md: "14px" }}
                  mb={2}
                  fontWeight="300"
                >
                  Process non-billed payment
                </Text>
              </Box>

              <Button
                onClick={() => {
                  navigate(pageLinks.guid);
                }}
                size="lg"
                borderRadius="full"
                height="40px"
                bgColor={"brand.300"}
                _hover={{ opacity: 0.9 }}
                fontSize={{ base: "13px", md: "14px" }}
                color="white"
                // onClick={handleNext}
              >
                Proceed
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
}
