import { Box, Text, Container, Flex } from "@chakra-ui/react"
import { FiArrowLeft } from "react-icons/fi"
import { FaRegFile } from "react-icons/fa"
import Buttons from "@/components/buttons"

const UploadRequest = () => {
	return (
		<Container maxW="515px" py={8}>
			{/* Back link with React Icon */}
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

			{/* Main card - FIXED CENTERING */}
			<Box
				borderWidth="1px"
				borderColor="#E9ECEF"
				borderRadius="10px"
				boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
				maxW="499px"
				h="304px"
				bg="white"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				px={8}
				py={6}>
				{/* Document icon using React Icons */}
				<FaRegFile color="#CED4DA" size={60} />

				{/* No Records text */}
				<Text fontSize="18px" fontWeight="500" color="#000000" mt={4} mb={2}>
					No Records Available
				</Text>

				{/* Add Lagos State Receipt button */}
				<Buttons
					borderRadius="30px"
					width="194px"
					h="32px"
					bg="brand.300"
					color="white"
					_hover={{ bg: "primary.100" }}
					_active={{ bg: "primary.100" }}
					mt={0}
					loading={false}
					type="button"
					spinnerColor="white"
					fontSize="14px">
					Add Lagos State Receipt
				</Buttons>
			</Box>
		</Container>
	)
}

export default UploadRequest
