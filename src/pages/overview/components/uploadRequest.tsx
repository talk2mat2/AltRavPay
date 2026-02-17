// import { Box, Text, Container } from "@chakra-ui/react"
// import { FiArrowLeft } from "react-icons/fi"
// import { FaRegFile } from "react-icons/fa"
// import FormInput from "@/components/formInput"
// import Buttons from "@/components/buttons"
// import { useState } from "react"
// import { Formik, Form } from "formik"

// // ✅ Separate component for the form (guaranteed Formik context)
// const LagosStateReceiptForm = ({ onBack }: { onBack: () => void }) => {
// 	const initialValues = {
// 		numberOfReceipts: "",
// 		reason: "",
// 		collectorName: "",
// 	}

// 	return (
// 		<Formik
// 			initialValues={initialValues}
// 			onSubmit={(values, { setSubmitting }) => {
// 				setSubmitting(false)
// 			}}>
// 			{({ isSubmitting }) => (
// 				<Form>
// 					<Box
// 						display="flex"
// 						alignItems="center"
// 						color="brand.300"
// 						cursor="pointer"
// 						mb={4}
// 						fontSize="14px"
// 						fontWeight="500"
// 						onClick={onBack}>
// 						<FiArrowLeft size={14} />
// 						<Text ml={1}>Back</Text>
// 					</Box>

// 					<Box
// 						borderWidth="1px"
// 						borderColor="#E9ECEF"
// 						borderRadius="10px"
// 						boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
// 						bg="white"
// 						p={{ base: "20px", md: "30px" }}
// 						maxW="499px"
// 						w="100%">
// 						<Text
// 							fontSize="20px"
// 							fontWeight="500"
// 							color="#000000"
// 							textAlign="center"
// 							mb={6}>
// 							Lagos State Receipt
// 						</Text>

// 						<Box mb={4}>
// 							<FormInput
// 								name="numberOfReceipts"
// 								label="Number of Receipts"
// 								type="text"
// 								placeholder="Enter number"
// 							/>
// 						</Box>

// 						<Box mb={4}>
// 							<FormInput name="reason" label="Reason" as="select">
// 								<option value="">--select reason--</option>
// 								<option value="payment">Payment</option>
// 								<option value="refund">Refund</option>
// 								<option value="adjustment">Adjustment</option>
// 								<option value="other">Other</option>
// 							</FormInput>
// 						</Box>

// 						<Box mb={6}>
// 							<FormInput
// 								name="collectorName"
// 								label="Collector's name"
// 								type="text"
// 								placeholder="Enter name"
// 							/>
// 						</Box>

// 						<Buttons
// 							borderRadius="30px"
// 							width="100%"
// 							maxW="194px"
// 							h="32px"
// 							bg="brand.300"
// 							color="white"
// 							_hover={{ bg: "primary.100" }}
// 							_active={{ bg: "primary.100" }}
// 							mt={0}
// 							loading={isSubmitting}
// 							type="submit"
// 							spinnerColor="white"
// 							fontSize="14px">
// 							Proceed
// 						</Buttons>
// 					</Box>
// 				</Form>
// 			)}
// 		</Formik>
// 	)
// }

// // Main component
// const UploadRequest = () => {
// 	const [showForm, setShowForm] = useState(false)

// 	if (showForm) {
// 		// ✅ Only render form component when needed
// 		return (
// 			<Container maxW="515px" py={8}>
// 				<LagosStateReceiptForm onBack={() => setShowForm(false)} />
// 			</Container>
// 		)
// 	}

// 	// ✅ Empty state has ZERO Formik/FormInput components
// 	return (
// 		<Container maxW="515px" py={8}>
// 			<Box
// 				display="flex"
// 				alignItems="center"
// 				color="brand.300"
// 				cursor="pointer"
// 				mb={4}
// 				fontSize="14px"
// 				fontWeight="500"
// 				onClick={onBack}>
// 				<FiArrowLeft size={14} />
// 				<Text ml={1}>Back</Text>
// 			</Box>
// 			<Box
// 				borderWidth="1px"
// 				borderColor="#E9ECEF"
// 				borderRadius="10px"
// 				boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
// 				bg="white"
// 				p={{ base: "24px", md: "30px" }}
// 				maxW="499px"
// 				w="100%"
// 				display="flex"
// 				flexDirection="column"
// 				alignItems="center"
// 				justifyContent="center"
// 				h={{ base: "304px", md: "304px" }}>
// 				<FaRegFile color="#CED4DA" size={60} mb={4} />
// 				<Text fontSize="18px" fontWeight="500" color="#000000" mb={2}>
// 					No Records Available
// 				</Text>
// 				<Buttons
// 					borderRadius="30px"
// 					width="194px"
// 					h="32px"
// 					bg="brand.300"
// 					color="white"
// 					_hover={{ bg: "primary.100" }}
// 					_active={{ bg: "primary.100" }}
// 					mt={0}
// 					loading={false}
// 					type="button"
// 					spinnerColor="white"
// 					fontSize="14px"
// 					onClick={() => setShowForm(true)}>
// 					Add Lagos State Receipt
// 				</Buttons>
// 			</Box>
// 		</Container>
// 	)
// }

// export default UploadRequest

import { Box, Text, Container } from "@chakra-ui/react"
import { FiArrowLeft } from "react-icons/fi"
import { FaRegFile } from "react-icons/fa"
import FormInput from "@/components/formInput"
import Buttons from "@/components/buttons"
import { useState } from "react"
import { Formik, Form } from "formik"
import { useNavigate } from "react-router-dom"

const UploadRequest = () => {
	const [showForm, setShowForm] = useState(false)
	const navigate = useNavigate()

	// Handle back navigation (goes to previous route, not just toggle)
	const handleBack = () => {
		navigate(-1) // or navigate('/overview') if you prefer explicit path
	}

	return (
		<Container maxW="515px" py={8}>
			{/* Back button - ALWAYS VISIBLE on both states */}
			<Box
				display="flex"
				alignItems="center"
				color="brand.300"
				cursor="pointer"
				mb={4}
				fontSize="14px"
				fontWeight="500"
				onClick={handleBack}>
				<FiArrowLeft size={14} />
				<Text ml={1}>Back</Text>
			</Box>

			{!showForm ? (
				// === EMPTY STATE ===
				<Box
					borderWidth="1px"
					borderColor="#E9ECEF"
					borderRadius="10px"
					boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
					bg="white"
					p={{ base: "24px", md: "30px" }}
					maxW="499px"
					w="100%"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					h={{ base: "304px", md: "304px" }}>
					<FaRegFile color="#CED4DA" size={60} mb={4} />
					<Text fontSize="18px" fontWeight="500" color="#000000" mb={2}>
						No Records Available
					</Text>
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
						fontSize="14px"
						onClick={() => setShowForm(true)}>
						Add Lagos State Receipt
					</Buttons>
				</Box>
			) : (
				// === FORM STATE ===
				<Formik
					initialValues={{
						numberOfReceipts: "",
						reason: "",
						collectorName: "",
					}}
					onSubmit={(values, { setSubmitting }) => {
						setSubmitting(false)
					}}>
					{({ isSubmitting }) => (
						<Form>
							<Box
								borderWidth="1px"
								borderColor="#E9ECEF"
								borderRadius="10px"
								boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
								bg="white"
								p={{ base: "20px", md: "30px" }}
								maxW="499px"
								w="100%">
								<Text
									fontSize="20px"
									fontWeight="700"
									color="#000000"
									textAlign="center"
									mb={6}>
									Lagos State Receipt
								</Text>

								<Box mb={4}>
									<FormInput
										name="numberOfReceipts"
										label="Number of Receipts"
										type="text"
										placeholder="Enter number"
									/>
								</Box>

								<Box mb={4}>
									<FormInput name="reason" label="Reason" as="select">
										<option value="">--select reason--</option>
										<option value="payment">Payment</option>
										<option value="refund">Refund</option>
										<option value="adjustment">Adjustment</option>
										<option value="other">Other</option>
									</FormInput>
								</Box>

								<Box mb={6}>
									<FormInput
										name="collectorName"
										label="Collector's name"
										type="text"
										placeholder="Enter name"
									/>
								</Box>

								<Buttons
									borderRadius="30px"
									width="100%"
									maxW="194px"
									h="32px"
									bg="brand.300"
									color="white"
									_hover={{ bg: "primary.100" }}
									_active={{ bg: "primary.100" }}
									mt={0}
									loading={isSubmitting}
									type="submit"
									spinnerColor="white"
									fontSize="14px">
									Proceed
								</Buttons>
							</Box>
						</Form>
					)}
				</Formik>
			)}
		</Container>
	)
}

export default UploadRequest