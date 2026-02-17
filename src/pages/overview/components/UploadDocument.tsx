import { Box, Text, Container, HStack, Button } from "@chakra-ui/react"
import { FiArrowLeft } from "react-icons/fi"

import { useState } from "react"
import UploadCpcForm1 from "./ UploadCpcForm1"
import UploadCpcForm2 from "./ UploadCpcForm2"

const UploadDocument = () => {
	const [activeForm, setActiveForm] = useState<"form1" | "form2">("form1")

	return (
		<Container maxW="515px" py={8}>
			{/* Back button - always visible */}
			<Box
				display="flex"
				alignItems="center"
				color="brand.300"
				cursor="pointer"
				mb={4}
				fontSize="14px"
				fontWeight="500"
				onClick={() => window.history.back()}>
				<FiArrowLeft size={14} />
				<Text ml={1}>Back</Text>
			</Box>

			{/* Card */}
			<Box
				borderWidth="1px"
				borderColor="#E9ECEF"
				borderRadius="10px"
				boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
				bg="white"
				p={{ base: "24px", md: "30px" }}
				maxW="499px"
				w="100%">
				<Text
					fontSize="18px"
					fontWeight="500"
					color="#000000"
					textAlign="center"
					mb={6}>
					Upload CPC Document
				</Text>

				{/* Tabs */}
				<HStack mb={6} spacing={4}>
					<Button
						variant={activeForm === "form1" ? "solid" : "outline"}
						colorScheme="brand"
						size="sm"
						onClick={() => setActiveForm("form1")}
						px={4}
						py={2}
						borderRadius="5px">
						Form 1
					</Button>
					<Button
						variant={activeForm === "form2" ? "solid" : "outline"}
						colorScheme="brand"
						size="sm"
						onClick={() => setActiveForm("form2")}
						px={4}
						py={2}
						borderRadius="5px">
						Form 2
					</Button>
				</HStack>

				{/* Render active form */}
				{activeForm === "form1" ? <UploadCpcForm1 /> : <UploadCpcForm2 />}
			</Box>
		</Container>
	)
}

export default UploadDocument
