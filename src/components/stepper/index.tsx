import { HStack, Box, Flex } from "@chakra-ui/react";

interface Props {
  totalSteps: number;
  currentStep: number;
}

export default function Stepper({ totalSteps, currentStep }: Props) {
  return (
    <Flex align="center" w="100%">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const isActive = i === currentStep;
        const isCompleted = i < currentStep;

        return (
          <Flex key={i} align="center" flex="1">
            {/* circle */}
            <Box
              flexShrink={0}
              w={{ base: "18px", md: "22px" }}
              h={{ base: "18px", md: "22px" }}
              borderRadius="full"
              bg={isCompleted || isActive ? "green.500" : "transparent"}
              border="2px solid"
              borderColor={isCompleted || isActive ? "#4B9560" : "gray.300"}
            />

            {/* connector */}
            {i !== totalSteps - 1 && (
              <Box
                flex="1"
                h="3px"
                mx={2}
                bg={i < currentStep ? "#4B9560" : "#D9D9D9"}
                borderRadius="full"
              />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
}
