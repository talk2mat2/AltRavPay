import { VStack, Box, HStack, Text, Icon, Button } from "@chakra-ui/react"
import { FiUpload } from "react-icons/fi"
import { FaFilePdf } from "react-icons/fa" // ✅ Proper PDF icon
import Buttons from "@/components/buttons"
import { useState, useRef } from "react"

const UploadCpcForm2 = () => {
	// Track arrays of filenames per section
	const [files, setFiles] = useState({
		letterhead: [] as string[],
		receipt: [] as string[],
		teller: [] as string[],
	})

	const fileInputRefs = {
		letterhead: useRef<HTMLInputElement>(null),
		receipt: useRef<HTMLInputElement>(null),
		teller: useRef<HTMLInputElement>(null),
	}

	const handleFileSelect = (
		field: keyof typeof files,
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const selectedFiles = Array.from(e.target.files || [])
		const pdfFiles = selectedFiles.filter((file) =>
			file.name.toLowerCase().endsWith(".pdf"),
		)

		if (pdfFiles.length !== selectedFiles.length) {
			alert("Only PDF files are allowed")
		}

		const newFilenames = pdfFiles.map((file) => file.name)

		// Prevent duplicate filenames in the same section
		setFiles((prev) => {
			const existing = new Set(prev[field])
			const uniqueNew = newFilenames.filter((name) => !existing.has(name))
			return {
				...prev,
				[field]: [...prev[field], ...uniqueNew],
			}
		})

		// ✅ Reset input to allow re-selection
		if (e.target) {
			e.target.value = ""
		}
	}

	const removeFile = (field: keyof typeof files, index: number) => {
		setFiles((prev) => ({
			...prev,
			[field]: prev[field].filter((_, i) => i !== index),
		}))

		// ✅ Reset input to allow re-uploading
		if (fileInputRefs[field].current) {
			fileInputRefs[field].current.value = ""
		}
	}

	const isProceedEnabled =
		files.letterhead.length > 0 &&
		files.receipt.length > 0 &&
		files.teller.length > 0

	return (
		<VStack spacing={6} align="stretch">
			{/* Section 1: Original reversal request letter */}
			<Box>
				<Text fontSize="14px" fontWeight="400" color="#121524" mb={2}>
					Original reversal request letter on sterling bank letterhead
				</Text>

				{/* Upload Zone */}
				<Box
					border="1px dashed #CED4DA"
					borderRadius="5px"
					p={4}
					textAlign="center"
					cursor="pointer"
					_hover={{ borderColor: "brand.300" }}
					onClick={() => fileInputRefs.letterhead.current?.click()}>
					<HStack justify="center" spacing={2}>
						<Icon as={FiUpload} color="brand.300" boxSize={5} />
						<Text
							fontSize="14px"
							color="brand.300"
							fontWeight="400"
							textDecoration="underline">
							Drop files here or click to upload
						</Text>
					</HStack>
					<input
						type="file"
						accept=".pdf"
						multiple
						ref={fileInputRefs.letterhead}
						onChange={(e) => handleFileSelect("letterhead", e)}
						style={{ display: "none" }}
					/>
				</Box>

				{/* Uploaded Files List */}
				{files.letterhead.length > 0 && (
					<VStack spacing={2} mt={3} align="stretch">
						{files.letterhead.map((filename, index) => (
							<Box
								key={`${filename}-${index}`}
								borderWidth="1px"
								borderColor="#E9ECEF"
								borderRadius="4px"
								p={2}
								bg="#F9FAFB">
								<HStack justify="space-between">
									<HStack spacing={2}>
										{/* ✅ Using React Icon instead of emoji */}
										<Icon as={FaFilePdf} color="red.500" boxSize={4} />
										<Text fontSize="14px" color="#121524" fontWeight="400">
											{filename}
										</Text>
									</HStack>
									<Button
										size="xs"
										variant="link"
										color="red.500"
										px={2}
										onClick={() => removeFile("letterhead", index)}>
										×
									</Button>
								</HStack>
							</Box>
						))}
					</VStack>
				)}
			</Box>

			{/* Section 2: Original receipt of transaction */}
			<Box>
				<Text fontSize="14px" fontWeight="400" color="#121524" mb={2}>
					Original receipt of transaction
				</Text>

				{/* Upload Zone */}
				<Box
					border="1px dashed #CED4DA"
					borderRadius="5px"
					p={4}
					textAlign="center"
					cursor="pointer"
					_hover={{ borderColor: "brand.300" }}
					onClick={() => fileInputRefs.receipt.current?.click()}>
					<HStack justify="center" spacing={2}>
						<Icon as={FiUpload} color="brand.300" boxSize={5} />
						<Text
							fontSize="14px"
							color="brand.300"
							fontWeight="400"
							textDecoration="underline">
							Drop files here or click to upload
						</Text>
					</HStack>
					<input
						type="file"
						accept=".pdf"
						multiple
						ref={fileInputRefs.receipt}
						onChange={(e) => handleFileSelect("receipt", e)}
						style={{ display: "none" }}
					/>
				</Box>

				{/* Uploaded Files List */}
				{files.receipt.length > 0 && (
					<VStack spacing={2} mt={3} align="stretch">
						{files.receipt.map((filename, index) => (
							<Box
								key={`${filename}-${index}`}
								borderWidth="1px"
								borderColor="#E9ECEF"
								borderRadius="4px"
								p={2}
								bg="#F9FAFB">
								<HStack justify="space-between">
									<HStack spacing={2}>
										{/* ✅ Using React Icon */}
										<Icon as={FaFilePdf} color="red.500" boxSize={4} />
										<Text fontSize="14px" color="#121524" fontWeight="400">
											{filename}
										</Text>
									</HStack>
									<Button
										size="xs"
										variant="link"
										color="red.500"
										px={2}
										onClick={() => removeFile("receipt", index)}>
										×
									</Button>
								</HStack>
							</Box>
						))}
					</VStack>
				)}
			</Box>

			{/* Section 3: Original teller */}
			<Box>
				<Text fontSize="14px" fontWeight="400" color="#121524" mb={2}>
					Original teller
				</Text>

				{/* Upload Zone */}
				<Box
					border="1px dashed #CED4DA"
					borderRadius="5px"
					p={4}
					textAlign="center"
					cursor="pointer"
					_hover={{ borderColor: "brand.300" }}
					onClick={() => fileInputRefs.teller.current?.click()}>
					<HStack justify="center" spacing={2}>
						<Icon as={FiUpload} color="brand.300" boxSize={5} />
						<Text
							fontSize="14px"
							color="brand.300"
							fontWeight="400"
							textDecoration="underline">
							Drop files here or click to upload
						</Text>
					</HStack>
					<input
						type="file"
						accept=".pdf"
						multiple
						ref={fileInputRefs.teller}
						onChange={(e) => handleFileSelect("teller", e)}
						style={{ display: "none" }}
					/>
				</Box>

				{/* Uploaded Files List */}
				{files.teller.length > 0 && (
					<VStack spacing={2} mt={3} align="stretch">
						{files.teller.map((filename, index) => (
							<Box
								key={`${filename}-${index}`}
								borderWidth="1px"
								borderColor="#E9ECEF"
								borderRadius="4px"
								p={2}
								bg="#F9FAFB">
								<HStack justify="space-between">
									<HStack spacing={2}>
										{/* ✅ Using React Icon */}
										<Icon as={FaFilePdf} color="red.500" boxSize={4} />
										<Text fontSize="14px" color="#121524" fontWeight="400">
											{filename}
										</Text>
									</HStack>
									<Button
										size="xs"
										variant="link"
										color="red.500"
										px={2}
										onClick={() => removeFile("teller", index)}>
										×
									</Button>
								</HStack>
							</Box>
						))}
					</VStack>
				)}
			</Box>

			{/* Proceed Button */}
			<Buttons
				borderRadius="30px"
				width="100%"
				maxW="194px"
				h="32px"
				bg={isProceedEnabled ? "brand.300" : "gray.300"}
				color={isProceedEnabled ? "white" : "gray.500"}
				_hover={isProceedEnabled ? { bg: "primary.100" } : {}}
				_active={isProceedEnabled ? { bg: "primary.100" } : {}}
				mt={6}
				loading={false}
				type="button"
				spinnerColor="white"
				fontSize="14px"
				isDisabled={!isProceedEnabled}>
				Proceed
			</Buttons>
		</VStack>
	)
}

export default UploadCpcForm2
