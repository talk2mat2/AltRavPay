import Stepper from "@/components/stepper"
import TextInput from "@/components/textInput"
import {
	Box,
	Button,
	Card,
	CardBody,
	Heading,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react"
import { useState } from "react"

import BillTypeForm from "./billTypeForm"
import TokenForm from "./tokenForm"

export default function DataCapture() {
	const [step, setStep] = useState(0)
	const [payerId, setPayerId] = useState("")
	const [billReference, setBillReference] = useState("")

	const isValid = payerId.trim().length > 3

	const handleVerify = () => {
		if (!isValid) return
		setStep(1) // move to next step
	}

	const handleNext = () => {
		setStep((prevStep) => prevStep + 1)
	}

	return (
		<Box
			minH="100vh"
			bg="gray.100"
			display="flex"
			paddingTop={"2%"}
			alignItems={"center"}
			justifyContent="center"
			p={6}>
			{/* Dynamically adjust card width based on step */}
			<Card
				transition="all 0.25s ease"
				w={step === 2 ? "982px" : "520px"}
				shadow="lg"
				borderRadius="xl">
				<CardBody p={10}>
					<VStack spacing={8} align="stretch">
						<Heading
							fontSize={{ base: "13px", md: "16px" }}
							fontWeight="500"
							textAlign="center">
							Data Capture
						</Heading>

							<Stepper totalSteps={2} currentStep={step} />
						

						{step == 0 && (
							<>
								<Box>
									<Text
										fontSize={{ base: "13px", md: "14px" }}
										mb={2}
										fontWeight="300">
										Teller’s Till Account Number
									</Text>
									<TextInput
										placeholder="Enter Teller’s Till Account Number"
										value={payerId}
										onChange={(e) => setPayerId(e)}
										label={""}
									/>
									<br />
									<Text
										fontSize={{ base: "13px", md: "14px" }}
										mb={2}
										fontWeight="300">
										Bill Reference
									</Text>
									<TextInput
										placeholder="Enter bill reference"
										value={billReference}
										onChange={(e) => setBillReference(e)}
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
									onClick={handleVerify}>
									Validate
								</Button>
							</>
						)}
						{step == 1 && <BillTypeForm handleNext={handleNext} />}
						{step == 2 && <TokenForm handleNext={handleNext} />}
					</VStack>
				</CardBody>
			</Card>
		</Box>
	)
}
