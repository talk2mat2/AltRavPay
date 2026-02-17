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
} from "@chakra-ui/react"

import { Formik, Form } from "formik"

const Web_id_form2 = ({ handleNext }: { handleNext: () => void }) => {
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

			{/* Use Formik only for consistency, but no validation needed */}
			<Formik
				initialValues={{
					transactionDate: "",
					billType: "",
				}}
				onSubmit={() => {}}>
				{({ handleChange, handleBlur }) => (
					<Form autoComplete="off">
						{/* Transaction Date */}
						<Box mb={{ base: 3, md: "24px" }}>
							<FormDate
								name="transactionDate"
								label="Transaction Date"
								placeholder="--Select date--"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Box>

						{/* Bill-Type */}
						<Box mb={{ base: 3, md: "24px" }}>
							<Selects
								name="billType"
								title="Bill-Type"
								options={[
									{ value: "", name: "--Select bill type--" },
									{ value: "Utility", name: "Utility" },
									{ value: "Tax", name: "Tax" },
									{ value: "License", name: "License" },
								]}
								placeholder="--Select bill type--"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Box>

						{/* Currency (static, disabled) */}
						<Box mb={{ base: 3, md: "24px" }}>
							<Selects
								name="currency"
								title="Currency"
								options={[{ value: "Naira", name: "Naira" }]}
								placeholder="Naira"
								disabled
							/>
						</Box>

						{/* State (static, disabled) */}
						<Box mb={{ base: 3, md: "24px" }}>
							<Selects
								name="state"
								title="State"
								options={[{ value: "Lagos", name: "Lagos" }]}
								placeholder="Lagos"
								disabled
							/>
						</Box>

						{/* Buttons: Validate (disabled), Cancel (text) */}
						<HStack spacing={4} mt={6} justifyContent="center">
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
						</HStack>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default Web_id_form2
