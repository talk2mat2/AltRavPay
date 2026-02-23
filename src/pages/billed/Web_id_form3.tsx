import Buttons from "@/components/buttons"
import {
	Box,
	Card,
	CardBody,
	Heading,
	Grid,
	GridItem,
	Text,
	VStack,
    HStack,
} from "@chakra-ui/react"
import { PinInput, PinInputField } from "@chakra-ui/react"

const Web_id_form3 = ({ handleNext }: { handleNext: () => void }) => {
	return (
		<>
			<Heading
				fontSize={{ base: "13px", md: "16px" }}
				fontWeight="500"
				textAlign="center">
				The Web GUID for <b>“C-1251462”</b> is
			</Heading>
			<Heading
				fontSize={{ base: "13px", md: "18px" }}
				fontWeight="500"
				textAlign="center"
				color={"#009CBD"}>
				27392729-2839103-162
			</Heading>

			{/* ✅ Gray card with true 2-column grid */}
			<Box
				mt={6}
				p={4}
				bg="#F8F9FA"
				borderRadius="8px"
				border="1px solid #E9ECEF">
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
			</Box>

			{/* ✅ Security Token — added proper spacing */}
			<Box mt={8}>
				{" "}
				{/* ✅ Increased from mt={6} to mt={8} */}
				<Text fontSize="14px" fontWeight="500" mb={3}>
					Enter Security Token
				</Text>
				<HStack spacing={3}>
					<PinInput otp size="lg">
						<PinInputField />
						<PinInputField />
						<PinInputField />
						<PinInputField />
						<PinInputField />
						<PinInputField />
					</PinInput>
				</HStack>
			</Box>

			{/* Buttons */}
			<Box mt={6}>
				<Buttons
					onClick={() => {
						handleNext()
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
					fontSize={{ sm: "14px", md: "16px" }}>
					Generate Report
				</Buttons>
			</Box>
		</>
	)
}

export default Web_id_form3
