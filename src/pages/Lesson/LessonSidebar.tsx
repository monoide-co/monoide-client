import React, { useState } from 'react';
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CalendarIcon } from '@chakra-ui/icons';
import LessonNavItem from './LessonNavItem';

const LessonSidebar = () => {
  const [navSize, setNavSize] = useState('large');

  return (
    <Flex
      pos='sticky'
      h='100vh'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.5)'
      borderRadius='15px'
      w={navSize === 'large' ? '250px' : '75px'}
      flexDirection='column'
      justifyContent='space-between'
    >
      <Flex
        p='5%'
        flexDir='column'
        alignItems={navSize === 'large' ? 'flex-start' : 'center'}
        as='nav'
      >
        <IconButton
          background='none'
          mt={5}
          _hover={{ background: 'none' }}
          icon={<HamburgerIcon />}
          aria-label='Toggle sidebar'
          onClick={() =>
            navSize === 'large' ? setNavSize('small') : setNavSize('large')
          }
        />
        <LessonNavItem
          navSize={navSize}
          title='Section 1'
          icon={CalendarIcon}
        />
      </Flex>

      <Flex
        p='5%'
        flexDir='column'
        w='100%'
        alignItems={navSize === 'large' ? 'flex-start' : 'center'}
        mb={4}
      >
        <Divider display={navSize === 'large' ? 'flex' : 'none'} />
        <Flex mt={4} align='center'>
          <Avatar size='sm' />
          <Flex
            flexDirection='column'
            ml={4}
            display={navSize === 'large' ? 'flex' : 'none'}
          >
            <Heading as='h3' size='sm'>
              Some User
            </Heading>
            <Text color='gray'>Student</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LessonSidebar;
