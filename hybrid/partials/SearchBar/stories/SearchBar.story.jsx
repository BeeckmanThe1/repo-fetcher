import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import SearchBarComponent from '../SearchBar.jsx';
import '../../../../client/styles/styles.scss';

const config = {
    title: 'Partials',
    component: SearchBarComponent,
    decorators: [withKnobs],
};

export const SearchBar = () => <SearchBarComponent {...{
    handleInput: action('User input')
}}/>;

export default config;
