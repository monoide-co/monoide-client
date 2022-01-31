import {
  Text,
  Box,
  Grid,
  Heading,
  HStack,
  Stack,
  Tag,
  ListItem,
  UnorderedList,
  Code,
  Button,
  Flex,
  Progress,
} from '@chakra-ui/react';
import React from 'react';

type TaskProps = {
  title: string;
  description: string;
  score: number;
  weight: number;
  bulletPoints: string[];
  isMandatory: boolean;
  code: string[];
};

export const Task = ({
  title,
  description,
  score,
  weight,
  bulletPoints,
  isMandatory,
  code,
}: TaskProps) => (
  <Grid
    boxShadow='sm'
    border='solid 1px'
    borderColor='gray.100'
    borderRadius='5px'
    bg='white'
    maxW='900px'
  >
    <HStack
      justify='space-between'
      borderBottom='1px solid'
      borderColor='white'
      p='12px 32px'
      mb='8px'
    >
      <Heading size='md'>{title}</Heading>
      <Tag>{isMandatory ? 'Mandatory' : 'Optional'}</Tag>
    </HStack>

    <Stack spacing='12px' p='0 32px 32px 32px'>
      <Text>{description}</Text>

      <UnorderedList listStylePosition='inside'>
        {bulletPoints.map((bullet) => (
          <ListItem>{bullet}</ListItem>
        ))}
      </UnorderedList>
      <Stack p='12px 25px' bg='blue.800' borderRadius='10px'>
        {code.map((block, idx) => (
          <Text fontSize='sm' lineHeight='15px' color='white' fontWeight='medium'>
            {block}
          </Text>
        ))}
      </Stack>

      <Flex gridGap='18px'>
        <Button flex={1} colorScheme='teal' variant='outline'>
          Run
        </Button>
        <Button flex={1} colorScheme='teal' variant='outline'>
          Submit
        </Button>
      </Flex>

      <Stack>
        <Text>Score: {score}%</Text>
        <Progress value={score} mt='6px' />
      </Stack>
    </Stack>
  </Grid>
);
