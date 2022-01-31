import { Text, Flex, Grid, Heading, Stack } from '@chakra-ui/react';
import { MainSideBar } from 'components/navbars';
import React from 'react';
import { mockTasks } from './mockData';
import { Task } from './Task';

export const Tasks = () => (
  <Flex>
    <MainSideBar />

    <Stack p='24px 32px' flex={1} bg='gray.50'>
      <Stack spacing='12px' mb='12px'>
        <Heading size='lg'>Tasks!</Heading>
      </Stack>

      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero amet eos
        placeat, fugit deserunt sunt nulla, nihil vel molestias, nemo eligendi
        dolorem sequi iure architecto possimus natus esse. Sunt, porro!
      </Text>

      <Stack spacing='20px'>
        {mockTasks.map((task, index) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            score={task.score}
            weight={task.weight}
            bulletPoints={task.bulletPoints}
            isMandatory={task.isMandatory}
            code={task.code}
          />
        ))}
      </Stack>
    </Stack>
  </Flex>
);
