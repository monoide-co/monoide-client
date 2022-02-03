import {
  DragHandleIcon,
  CalendarIcon,
  AtSignIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import { Stack, Flex, Grid, Avatar, Text } from '@chakra-ui/react';
import React from 'react';

export const MainSideBar = () => (
  <Stack
    w={250}
    h='100vh'
    borderRight='1px solid'
    borderColor='gray.200'
    p='12px 20px'
    boxShadow='lg'
    // position='fixed'
  >
    <Flex
      className='sidebar-avatar'
      gridGap='12px'
      borderBottom='1px solid'
      borderColor='gray.200'
      p='12px 0 24px 0'
      alignItems='center'
    >
      <Grid>
        <Avatar name='Kevin Espinosa' size='md' />
      </Grid>
      <Stack spacing='1px'>
        <Text fontWeight='semibold'>Kevin Espinosa</Text>
        <Text fontSize='sm'>Software developer</Text>
      </Stack>
    </Flex>

    <Flex
      className='sidebar-options'
      p='24px 0 12px 0'
      justify='space-between'
      direction='column'
      h='100%'
    >
      <Grid gridGap='32px'>
        <Flex alignItems='center' gridGap='12px'>
          <DragHandleIcon /> <Text>My courses</Text>
        </Flex>

        <Flex alignItems='center' gridGap='12px'>
          <CalendarIcon /> <Text>Courses</Text>
        </Flex>

        <Flex alignItems='center' gridGap='12px'>
          <AtSignIcon /> <Text>Community</Text>
        </Flex>
      </Grid>

      <Flex alignItems='center' gridGap='12px'>
        <ExternalLinkIcon /> <Text>Logout</Text>
      </Flex>
    </Flex>
  </Stack>
);
