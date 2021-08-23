import { Box } from '@chakra-ui/react';
import React from 'react';

export interface ICard {
  children: React.ReactNode;
}
export const CardType01: React.FC = ({ children }) => (
  <Box
    py="8"
    px={{ base: '4', md: '10' }}
    shadow="base"
    rounded={{ sm: 'lg' }}
    background="whiteAlpha.100"
    // borderColor="gray.100"
    // border="1px solid gray.500"
  >
    {children}
  </Box>
);
