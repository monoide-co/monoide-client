import React from 'react';
import { Grid } from '@chakra-ui/react';

import './BasicLayout.style.scss';

export interface BasicLayoutProps {
  children: React.ReactNode;
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
}: BasicLayoutProps) => <Grid className='basic-layout'>{children}</Grid>;
