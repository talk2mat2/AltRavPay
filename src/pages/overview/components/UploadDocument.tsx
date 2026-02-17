// import { Box, Text, Container, HStack, Button } from "@chakra-ui/react"
// import { FiArrowLeft } from "react-icons/fi"

// import { useState } from "react"
// import UploadCpcForm1 from "./ UploadCpcForm1"
// import UploadCpcForm2 from "./ UploadCpcForm2"

// const UploadDocument = () => {
// 	const [activeForm, setActiveForm] = useState<"form1" | "form2">("form1")

// 	return (
// 		<Container maxW="515px" py={8}>
// 			{/* Back button - always visible */}
// 			<Box
// 				display="flex"
// 				alignItems="center"
// 				color="brand.300"
// 				cursor="pointer"
// 				mb={4}
// 				fontSize="14px"
// 				fontWeight="500"
// 				onClick={() => window.history.back()}>
// 				<FiArrowLeft size={14} />
// 				<Text ml={1}>Back</Text>
// 			</Box>

// 			{/* Card */}
// 			<Box
// 				borderWidth="1px"
// 				borderColor="#E9ECEF"
// 				borderRadius="10px"
// 				boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
// 				bg="white"
// 				p={{ base: "24px", md: "30px" }}
// 				maxW="499px"
// 				w="100%">
// 				<Text
// 					fontSize="18px"
// 					fontWeight="500"
// 					color="#000000"
// 					textAlign="center"
// 					mb={6}>
// 					Upload CPC Document
// 				</Text>

// 				{/* Tabs */}
// 				<HStack mb={6} spacing={4}>
// 					<Button
// 						variant={activeForm === "form1" ? "solid" : "outline"}
// 						colorScheme="brand"
// 						size="sm"
// 						onClick={() => setActiveForm("form1")}
// 						px={4}
// 						py={2}
// 						borderRadius="5px">
// 						Form 1
// 					</Button>
// 					<Button
// 						variant={activeForm === "form2" ? "solid" : "outline"}
// 						colorScheme="brand"
// 						size="sm"
// 						onClick={() => setActiveForm("form2")}
// 						px={4}
// 						py={2}
// 						borderRadius="5px">
// 						Form 2
// 					</Button>
// 				</HStack>

// 				{/* Render active form */}
// 				{activeForm === "form1" ? <UploadCpcForm1 /> : <UploadCpcForm2 />}
// 			</Box>
// 		</Container>
// 	)
// }

// export default UploadDocument

import { Box, Text, Container, Card, CardBody, VStack } from "@chakra-ui/react"
import { FiArrowLeft } from "react-icons/fi"
import { useState } from "react"
import Stepper from "@/components/stepper"
import UploadCpcForm1 from "./UploadCpcForm1"
import UploadCpcForm2 from "./UploadCpcForm2"

const UploadDocument = () => {
	const [step, setStep] = useState(0)

	// Form 1 validation state
	const [form1Data, setForm1Data] = useState({
		requestCategory: "Reversal" as "Reversal" | "Amendment",
		type: "Customer error" as "Customer error" | "Branch error",
		entryNumber: "",
		reasonForRequest: "",
	})

	// Form 2 validation state
	const [form2Data, setForm2Data] = useState({
		letterhead: [] as string[],
		receipt: [] as string[],
		teller: [] as string[],
	})

	const isForm1Valid =
		form1Data.requestCategory &&
		form1Data.type &&
		form1Data.entryNumber.trim() &&
		form1Data.reasonForRequest

	const isForm2Valid =
		form2Data.letterhead.length > 0 &&
		form2Data.receipt.length > 0 &&
		form2Data.teller.length > 0

	const handleNext = () => {
		if (step === 0 && !isForm1Valid) return
		if (step === 1 && !isForm2Valid) return
		setStep((prev) => prev + 1)
	}

	const handleBack = () => {
		if (step === 0) {
			window.history.back()
		} else {
			setStep((prev) => prev - 1)
		}
	}

	return (
		<Box
			minH="100vh"
			bg="gray.100"
			display="flex"
			flexDirection="column"
			paddingTop={"2%"}
			alignItems={"center"}
			justifyContent="center"
			p={6}>
			<Box
				w="520px"
				mb={4} 
			>
				<Box
					display="flex"
					alignItems="center"
					color="brand.300"
					cursor="pointer"
					fontSize="14px"
					fontWeight="500"
					onClick={handleBack}
					width="fit-content" 
				>
					<FiArrowLeft size={14} />
					<Text ml={1}>Back</Text>
				</Box>
			</Box>

			<Card transition="all 0.25s ease" w="520px" shadow="lg" borderRadius="xl">
				<CardBody p={10}>
					<VStack spacing={8} align="stretch">
						<Text
							fontSize="18px"
							fontWeight="500"
							color="#000000"
							textAlign="center">
							Upload CPC Document
						</Text>

						<Stepper totalSteps={2} currentStep={step} />

						{step === 0 && (
							<UploadCpcForm1
								onDataChange={(data) => setForm1Data(data)}
								onNext={handleNext}
								isDisabled={!isForm1Valid}
							/>
						)}

						{step === 1 && (
							<UploadCpcForm2
								onDataChange={(data) => setForm2Data(data)}
								onNext={handleNext}
								isDisabled={!isForm2Valid}
							/>
						)}
					</VStack>
				</CardBody>
			</Card>
		</Box>
	)
}

export default UploadDocument