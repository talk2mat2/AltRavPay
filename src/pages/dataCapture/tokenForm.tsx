import Buttons from "@/components/buttons"
import FormDate from "@/components/formDate"
import FormInput from "@/components/formInput"
import Selects from "@/components/selects"
import TextInput from "@/components/textInput"
import {
	Box,
	Card,
	CardBody,
	Heading,
	HStack,
	Text,
	VStack,
	Grid,
	GridItem,
} from "@chakra-ui/react"
import { PinInput, PinInputField } from "@chakra-ui/react"
import { Formik, Form } from "formik"

const TokenForm = ({ handleNext }: { handleNext: () => void }) => {
	return (
		<>
			<Heading
				fontSize={{ base: "13px", md: "16px" }}
				fontWeight="500"
				textAlign="center">
				The Web GUID for <b>“T-1251462”</b> is
			</Heading>
			<Heading
				fontSize={{ base: "13px", md: "18px" }}
				fontWeight="500"
				textAlign="center"
				color={"#009CBD"}>
				27392729-2839103-162
			</Heading>

			<Formik
				initialValues={{
					validationStatus: "CUR109",
					paymentReference: "Tax",
					amountDue: "100000000.00",
					amountPaid: "100000000.00",
					bankNoteTellerNumber: "BG2346611",
					tellerName: "Akeem Balogun",
					creditAccount: "0012321111",
					bankPaymentDate: "0012321111",
					state: "Lagos",
				}}
				onSubmit={() => {}}>
				{({ handleChange, handleBlur, values }) => (
					<Form autoComplete="off">
						<Grid
							templateColumns={{ base: "1fr", md: "1fr 1fr" }}
							gap={6}
							mt={6}>
							<GridItem>
								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Validation Status
									</Text>
									<FormInput
										name="validationStatus"
										type="text"
										value={values.validationStatus}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter status"
									/>
								</Box>

								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Amount Due
									</Text>
									<FormInput
										name="amountDue"
										type="text"
										value={values.amountDue}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter amount"
									/>
								</Box>

								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Bank Note / Teller Number
									</Text>
									<FormInput
										name="bankNoteTellerNumber"
										type="text"
										value={values.bankNoteTellerNumber}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter number"
									/>
								</Box>

								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Credit Account
									</Text>
									<FormInput
										name="creditAccount"
										type="text"
										value={values.creditAccount}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter account"
									/>
								</Box>

								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										State
									</Text>
									<Selects
										name="state"
										title=""
										options={[
											{ value: "Lagos", name: "Lagos" },
											{ value: "Abuja", name: "Abuja" },
											{ value: "Rivers", name: "Rivers" },
										]}
										value={values.state}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</Box>
							</GridItem>

							<GridItem>
								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Payment Reference
									</Text>
									<FormInput
										name="paymentReference"
										type="text"
										value={values.paymentReference}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter reference"
									/>
								</Box>

								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Amount Paid
									</Text>
									<FormInput
										name="amountPaid"
										type="text"
										value={values.amountPaid}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter amount"
									/>
								</Box>

								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Teller Name
									</Text>
									<FormInput
										name="tellerName"
										type="text"
										value={values.tellerName}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter name"
									/>
								</Box>

								<Box mb={4}>
									<Text fontSize="14px" color="#121524" mb="2px">
										Bank Payment Date
									</Text>
									<FormInput
										name="bankPaymentDate"
										type="text"
										value={values.bankPaymentDate}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Enter date"
									/>
								</Box>
							</GridItem>
						</Grid>

						{/* Security Token - full width */}
						<Box mt={6}>
							<Text fontSize="14px" fontWeight="500" mb={2}>
								Enter Security Token
							</Text>
							<HStack>
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

						{/* Button - full width */}
						<HStack spacing={4} mt={6}>
							<Buttons
								onClick={handleNext}
								borderRadius="30px"
								w="100%"
								maxW="194px"
								h="32px"
								bg="brand.300"
								color="white"
								_hover={{ bg: "primary.100" }}
								_active={{ bg: "primary.100" }}
								loading={false}
								type="button"
								spinnerColor="white"
								fontSize="14px">
								Proceed
							</Buttons>
						</HStack>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default TokenForm
