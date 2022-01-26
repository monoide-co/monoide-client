import {
  Flex,
  Grid,
  Stack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuItemOption,
  MenuOptionGroup,
} from '@chakra-ui/react';
import React from 'react';
import { MainSideBar } from 'components/navbars';
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons';
import { mockDashBoarddata } from './mockDashboardData';
import { CourseCard } from './CourseCard';

export const MyCourses = () => (
  <Flex>
    <MainSideBar />

    <Stack p='24px 32px' flex={1} bg='gray.50'>
      <Flex justifyContent='space-between'>
        <Heading size='lg'>My courses</Heading>
      </Flex>

      <Flex justifyContent='space-between' alignItems='center'>
        <Flex flex={1}>
          <InputGroup w='xsm' bg='white'>
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='gray.300' />
            </InputLeftElement>
            <Input type='tel' placeholder='Search course' />
          </InputGroup>
        </Flex>
        <Flex
          p='24px'
          justifyContent='space-between'
          alignItems='center'
          flex={1}
          gridGap='12px'
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme='pink'
              size='sm'
              isFullWidth
            >
              Sort by
            </MenuButton>
            <MenuList>
              <MenuItem>Recent</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Status</MenuItem>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme='pink'
              size='sm'
              isFullWidth
            >
              Filter by
            </MenuButton>
            <MenuList minWidth='240px'>
              <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                <MenuItemOption value='desc'>Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title='Country' type='checkbox'>
                <MenuItemOption value='email'>Email</MenuItemOption>
                <MenuItemOption value='phone'>Phone</MenuItemOption>
                <MenuItemOption value='country'>Country</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme='pink'
              size='sm'
              isFullWidth
            >
              Score
            </MenuButton>
            <MenuList>
              <MenuItem>Recent</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Status</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' gap={2}>
        {mockDashBoarddata.map((course) => (
          <CourseCard
            key={course.name}
            name={course.name}
            courseImg={course.courseImg}
            sections={course.sections}
            lessons={course.lessons}
            progress={course.progress}
            score={course.score}
            deadlineIn={course.deadlineIn}
            tags={course.tags || []}
          />
        ))}
      </Grid>
    </Stack>
  </Flex>
);
