export const mockChallenges = [
  {
    id: 'ia2_01',
    title: "Let's start!!!",
    description:
      'Write a script that runs a C file through the preprocessor and save the result into another file',
    bulletPoints: [
      'The C file name will be saved in the variable $CFILE',
      'The output should be saved in the file c',
    ],
    score: 90,
    isMandatory: true,
    weight: 1,
    code: [
      "import { yourFunction } from 'task_file.js';",
      'yourFunction();',
      '// We expect the console to print exactly:',
      '// Hello world!',
    ],
  },
  {
    id: 'ia2_02',
    title: 'Compiler',
    description:
      'Write a C program that prints exactly "Programming is like building a multilingual puzzle, followed by a new line.',
    bulletPoints: [
      'Use the function puts',
      'You are not allowed to use printf',
      'Your program should end with the value 0',
    ],
    score: 32,
    isMandatory: true,
    weight: 1,
    code: ['#include <stdio.h>', 'int main(void)', '{', '   return (0)', '}'],
  },
];
