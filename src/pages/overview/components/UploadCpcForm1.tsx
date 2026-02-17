import {
	VStack,
	FormControl,
	FormLabel,
	HStack,
	Radio,
	RadioGroup,
	Input,
} from "@chakra-ui/react"
import Buttons from "@/components/buttons"
import { useEffect, useState } from "react"

interface UploadCpcForm1Props {
	onDataChange?: (data: {
		requestCategory: "Reversal" | "Amendment"
		type: "Customer error" | "Branch error"
		entryNumber: string
		reasonForRequest: string
	}) => void
	onNext: () => void
	isDisabled: boolean
}

const UploadCpcForm1 = ({
	onDataChange,
	onNext,
	isDisabled,
}: UploadCpcForm1Props) => {
	// ... your existing state ...

	// Add this effect to notify parent of changes

	const [requestCategory, setRequestCategory] = useState<
		"Reversal" | "Amendment"
	>("Reversal")
	const [type, setType] = useState<"Customer error" | "Branch error">(
		"Customer error",
	)
	const [entryNumber, setEntryNumber] = useState("")
	const [reasonForRequest, setReasonForRequest] = useState("")

	useEffect(() => {
		onDataChange?.({
			requestCategory,
			type,
			entryNumber,
			reasonForRequest,
		})
	}, [requestCategory, type, entryNumber, reasonForRequest, onDataChange])
	
	return (
		<VStack spacing={3} align="stretch">
			<FormControl>
				<FormLabel fontSize="14px" fontWeight="400" mb={1}>
					Request Category
				</FormLabel>
				<RadioGroup onChange={setRequestCategory} value={requestCategory}>
					<HStack spacing={4}>
						<Radio value="Reversal" size="sm" colorScheme="teal">
							{" "}
							Reversal
						</Radio>
						<Radio value="Amendment" size="sm" colorScheme="teal">
							{" "}
							Amendment
						</Radio>
					</HStack>
				</RadioGroup>
			</FormControl>

			{/* Type */}
			<FormControl>
				<FormLabel fontSize="14px" fontWeight="400" mb={1}>
					Type
				</FormLabel>
				<RadioGroup onChange={setType} value={type}>
					<HStack spacing={4}>
						<Radio value="Customer error" size="sm" colorScheme="teal">
							{" "}
							Customer error
						</Radio>
						<Radio value="Branch error" size="sm" colorScheme="teal">
							{" "}
							Branch error
						</Radio>
					</HStack>
				</RadioGroup>
			</FormControl>

			<FormControl>
				<FormLabel fontSize="14px" fontWeight="400" mb={1}>
					Entry ID/Receipt Number
				</FormLabel>
				<Input
					placeholder="Enter number"
					value={entryNumber}
					onChange={(e) => setEntryNumber(e.target.value)}
					border="1px solid #D1D5DB"
					borderRadius="5px"
					h="40px"
					_focus={{
						borderColor: "brand.300",
						boxShadow: "none",
					}}
					_placeholder={{ color: "#9CA3AF" }}
				/>
			</FormControl>

			<FormControl>
				<FormLabel fontSize="14px" fontWeight="400" mb={1}>
					Reason for request
				</FormLabel>
				<Input
					as="select"
					value={reasonForRequest}
					onChange={(e) => setReasonForRequest(e.target.value)}
					border="1px solid #D1D5DB"
					borderRadius="5px"
					h="40px"
					_focus={{
						borderColor: "brand.300",
						boxShadow: "none",
					}}>
					<option value="">--select reason--</option>
					<option value="duplicate">Duplicate entry</option>
					<option value="wrong_amount">Wrong amount</option>
					<option value="cancelled">Cancelled transaction</option>
					<option value="other">Other</option>
				</Input>
			</FormControl>

			<Buttons
				borderRadius="30px"
				width="100%"
				maxW="194px"
				h="32px"
				bg={
					requestCategory && type && entryNumber.trim() && reasonForRequest
						? "brand.300"
						: "gray.300"
				}
				color={
					requestCategory && type && entryNumber.trim() && reasonForRequest
						? "white"
						: "gray.500"
				}
				_hover={
					requestCategory && type && entryNumber.trim() && reasonForRequest
						? { bg: "primary.100" }
						: {}
				}
				_active={
					requestCategory && type && entryNumber.trim() && reasonForRequest
						? { bg: "primary.100" }
						: {}
				}
				mt={4}
				loading={false}
				type="button"
				spinnerColor="white"
				fontSize="14px"
				isDisabled={
					!requestCategory || !type || !entryNumber.trim() || !reasonForRequest
				}
				onClick={onNext}>
				Proceed
			</Buttons>
		</VStack>
	)
}

export default UploadCpcForm1
