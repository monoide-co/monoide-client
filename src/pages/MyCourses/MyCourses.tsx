import {
  Flex,
  Grid,
  Stack,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { MainSideBar } from 'components/navbars';
import { Search2Icon } from '@chakra-ui/icons';
import { mockDashBoarddata } from './mockDashboardData';
import { CourseCard } from './CourseCard';

export const MyCourses = () => (
  <Flex>
    <MainSideBar />

    <Stack p='24px 32px' flex={1} bg='gray.50'>
      <Flex justifyContent='space-between'>
        <Heading size='lg'>My courses</Heading>
        <InputGroup w='xsm' bg='white'>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='Search course' />
        </InputGroup>
      </Flex>

      <Flex p='24px' justifyContent='space-between' alignItems='center'>
        <Text>Here will go filter stuffs I think :v</Text>
        <Button>Random option 1</Button>
        <Button>Random option 2</Button>
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
