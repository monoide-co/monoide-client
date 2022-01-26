import React from 'react';
import { Box, Badge, Image, Progress } from '@chakra-ui/react';

type CourseCardProps = {
  name: string;
  courseImg: string;
  sections: number;
  lessons: number;
  score: number;
  progress: number;
  deadlineIn: number;
  tags: string[];
};

export const CourseCard = ({
  name,
  courseImg,
  sections,
  lessons,
  score,
  progress,
  deadlineIn,
  tags,
}: CourseCardProps) => (
  <Box
    maxW='md'
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    bg='white'
    boxShadow='md'
  >
    <Image src={courseImg} alt='alt' boxSize='200px' w='100%' objectFit='cover' />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>
        {tags.map((tag) => (
          <Badge key={`${tag}`} borderRadius='full' px='2' colorScheme='teal'>
            {tag}
          </Badge>
        ))}

        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          ml='2'
        >
          {sections} Sections &bull; {lessons} Lessons
        </Box>
      </Box>

      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        {name}
      </Box>

      <Box>
        <Box as='span' color='gray.600' fontSize='sm'>
          Score:
        </Box>
        {` ${score} `}
        <Box as='span' color='gray.600' fontSize='sm'>
          pts - Time left:
        </Box>
        {` ${deadlineIn}`} hours
      </Box>

      <Box mt='2'>
        <Box color='gray.600' fontSize='sm'>
          Progress: {progress}%
        </Box>
      </Box>
      <Progress value={progress} mt='6px' />
    </Box>
  </Box>
);
