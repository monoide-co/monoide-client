import React from 'react';
import {
  ComponentWithAs,
  Flex,
  Icon,
  IconProps,
  Link,
  Menu,
  MenuButton,
  Text,
} from '@chakra-ui/react';

type NavItemProps = {
  navSize: string;
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
};

const LessonNavItem = ({ navSize, title, icon }: NavItemProps) => (
  <Flex
    mt={30}
    flexDir='column'
    w='100%'
    alignItems={navSize === 'large' ? 'flex-start' : 'center'}
  >
    <Menu placement='right' closeOnSelect={false}>
      <Link
        p={3}
        borderRadius={8}
        _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
        to='/lesson'
      >
        <MenuButton>
          <Flex>
            <Icon as={icon} fontSize='xl' color='gray.500' />
            <Text ml={5} display={navSize === 'large' ? 'flex' : 'none'}>
              {title}
            </Text>
          </Flex>
        </MenuButton>
      </Link>
    </Menu>
  </Flex>
);

export default LessonNavItem;
