import { Text, Flex, Grid, Heading, Stack } from '@chakra-ui/react';
import { MainSideBar } from 'components/navbars';
import React from 'react';
import { mockChallenges } from './mockData';
import { Challenge } from './Challenge';

export const Challenges = () => (
  <Flex>
    <MainSideBar />

    <Stack p='24px 32px' flex={1} bg='gray.50' justify='center'>
      <Stack spacing='12px' mb='12px'>
        <Heading size='lg'>Challenges</Heading>
      </Stack>

      <Stack bg='white' maxW='900px' p='12px 20px'>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adiisicing elit. Vero amet eos
          placeat, fugit deserunt sunt nulla, nihil vel molestias, nemo eligendi
          dolorem sequi iure architecto possimus natus esse. Sunt, porro!
        </Text>

        <Text>Current score: </Text>
      </Stack>

      <Stack spacing='20px'>
        {mockChallenges.map((challenge, index) => (
          <Challenge
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            score={challenge.score}
            weight={challenge.weight}
            bulletPoints={challenge.bulletPoints}
            isMandatory={challenge.isMandatory}
            code={challenge.code}
          />
        ))}
      </Stack>
    </Stack>
  </Flex>
);
