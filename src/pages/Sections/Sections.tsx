import {
  Flex,
  Stack,
  Heading,
  Grid,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  Progress,
} from '@chakra-ui/react';
import React from 'react';
import { MainSideBar } from 'components/navbars';

const sectionList = [
  {
    id: 'ab',
    name: 'Syntax, conditions, operators',
    lessons: [
      "What's programming?",
      'learn about the javascript syntax!',
      'logical operators',
      "let's see the operators",
    ],
  },
  {
    id: 'cd',
    name: 'Loops for, while, function',
    lessons: ['While loop', 'For loop'],
  },
];

export const Sections = () => (
  <Flex>
    <MainSideBar />

    <Stack p='24px 32px' flex={1} bg='gray.50'>
      <Stack spacing='12px' mb='12px'>
        <Heading size='lg'>Javascript fundamentals</Heading>
        <Heading size='md'>Course content map</Heading>
      </Stack>

      <Grid backgroundColor='white' borderRadius='10px' p='12px'>
        <Text>Last lesson completed: Section 0, lesson 1 - For loop</Text>
        <Flex mb='12px'>
          <Progress value={32} my='6px' flex={0.9} />
          <Text textAlign='center' flex={0.1}>
            32%
          </Text>
        </Flex>
        <Accordion defaultIndex={[0, 1]} allowMultiple>
          {sectionList.map((section, sectionIdx) => (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section {sectionIdx} - {section.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {section.lessons.map((lesson, lessonIdx) => (
                  <Text fontSize='sm'>
                    &bull; Lesson {lessonIdx} - {lesson}
                  </Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Grid>
    </Stack>
  </Flex>
);
