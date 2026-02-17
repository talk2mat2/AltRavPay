import {
  Box,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  Grid,
  GridItem,
  Text,
  Container,
  HStack,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";
import { GiShieldEchoes } from "react-icons/gi";
import { FiFileText } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import Buttons from "@/components/buttons";
import { BiBarChartAlt } from "react-icons/bi";
import ReportForm from "@/components/reportForm";
import { useNavigate } from "react-router-dom";
import { pageLinks } from "@/services/pageLinks";

const OverView = () => {
  const showReportForm = true;
  const navigate = useNavigate();
  return (
    <Container maxW="container.xl" w="100%" px={{ base: 4, md: 6 }} py={8}>
      <HStack
        align="flex-start"
        spacing={10}
        flexDir={{ base: "column", lg: "row" }}
        // justify={showReportForm ? "flex-start" : "center"}
        justifyContent={"center"}
      >
        <Box w="100%" maxW="515px" flexShrink={0}>
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
            mb={8}
            borderRadius="8px"
            p={4}
            maxW="467px"
            w="100%"
            bg="#FCFCFC"
          >
            <AlertIcon as={FiInfo} color="#FF9500" />
            <AlertTitle fontSize={"10px"} maxW="419px" w="100%">
              Process customer's payment by clicking on{" "}
              <b style={{ color: "#000000" }}>"Generate WebGUID"</b>.<br />{" "}
              Process payment by clicking on{" "}
              <b style={{ color: "#000000" }}>"Data Capture"</b>
            </AlertTitle>
          </Alert>
          <Grid
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
            gap={"24px"}
            mb={8}
          >
            {/* Web GUID Card */}
            <GridItem>
              <Box
                borderWidth="1px"
                borderColor="#A4DBE8"
                borderRadius="10px"
                p={6}
                bg="linear-gradient(135deg, rgba(66, 153, 225, 0.05) 0%, white 100%)"
                position="relative"
                overflow="hidden"
                w="100%"
                maxW="224px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={4}
                >
                  <Text fontSize="14px" fontWeight="500" color="blue.500">
                    Web GUID
                  </Text>
                  <BiBarChartAlt color="#3182ce" size={24} />
                </Box>

                <Text fontSize="28px" fontWeight="700" color="blue.500">
                  2345
                </Text>
                <Buttons
                  borderRadius="30px"
                  w="100%"
                  onClick={() => {
                    navigate(pageLinks.guid);
                  }}
                  maxW="194px"
                  h={"32px"}
                  mt={6}
                  loading={false}
                  type="submit"
                  spinnerColor="black"
                  fontSize={{ sm: "14px", md: "16px" }}
                >
                  Generate WebGUID
                </Buttons>
              </Box>
            </GridItem>

            {/* Process Payment Card */}
            <GridItem>
              <Box
                borderWidth="1px"
                borderColor="#8FD6BD"
                borderRadius="10px"
                p={6}
                bg="linear-gradient(135deg, rgba(56, 161, 105, 0.05) 0%, white 100%)"
                position="relative"
                overflow="hidden"
                w="100%"
                maxW="224px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={4}
                >
                  <Text fontSize="14px" fontWeight="500" color="#336642">
                    Process Payment
                  </Text>
                  <GiShieldEchoes color="#336642" size={24} />
                </Box>

                <Text fontSize="28px" fontWeight="700" color="#336642">
                  2345
                </Text>

                <Buttons
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
                  Data Capture
                </Buttons>
              </Box>
            </GridItem>

            {/* Lagos State Receipt Card */}
            <GridItem>
              <Box
                borderWidth="1px"
                borderColor="#F5E1A4"
                borderRadius="10px"
                p={6}
                bg="linear-gradient(135deg, rgba(214, 158, 46, 0.05) 0%, white 100%)"
                position="relative"
                overflow="hidden"
                w="100%"
                maxW="224px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={4}
                >
                  <Text fontSize="14px" fontWeight="500" color="#997600">
                    Lagos State Receipt
                  </Text>
                  <FiFileText color="#997600" size={24} />
                </Box>

                <Text fontSize="28px" fontWeight="700" color="#997600">
                  2345
                </Text>

                <Buttons
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
                  Upload Request
                </Buttons>
              </Box>
            </GridItem>

            {/* CPC Documents Card */}
            <GridItem>
              <Box
                borderWidth="1px"
                borderColor="#CED4DA"
                borderRadius="10px"
                p={6}
                bg="linear-gradient(135deg, rgba(113, 128, 150, 0.05) 0%, white 100%)"
                position="relative"
                overflow="hidden"
                w="100%"
                maxW="224px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={4}
                >
                  <Text fontSize="14px" fontWeight="500" color="#212529">
                    CPC Documents
                  </Text>
                  <FiUpload color="#495057" size={24} />
                </Box>

                <Text fontSize="28px" fontWeight="700" color="#212529">
                  2345
                </Text>

                <Buttons
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
                  Upload Document
                </Buttons>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        {showReportForm && (
          <Box flex="0.8">
            <ReportForm />
          </Box>
        )}
      </HStack>
    </Container>
  );
};

export default OverView;
