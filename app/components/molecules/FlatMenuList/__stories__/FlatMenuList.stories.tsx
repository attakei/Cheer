import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import FlatMenuList from '..';
import { FlatMenu } from '../../../types';

export default {
  title: 'molecules/FlatMenuList',
  decorators: [withKnobs],
};

const menus: FlatMenu[] = [
  {
    name: 'test1',
    label: 'Item1',
    action: action('action'),
  },
  {
    name: 'test2',
    label: 'Item2',
    action: action('action'),
  },
];

export const Default = () => <FlatMenuList menus={menus} />;
