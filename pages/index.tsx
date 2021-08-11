import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

export default function Home() {
  const [message, setMessage] = useState("hello");

  return (
    <Box w={500} p={3}>
      <Input
        placeholder="Basic usage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Text>{message}</Text>
    </Box>
  );
}
