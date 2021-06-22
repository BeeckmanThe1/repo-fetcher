import React from 'react';
import {withKnobs, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import RankingStars from '../RankingStars';
import '../../../../client/styles/styles.scss';

const config = {
    title: 'Partials',
    component: RankingStars,
    decorators: [withKnobs],
};

export const Stars = () => <RankingStars {...{
    numberOfStars: number('Amount of stars', 5, undefined, 'Properties'),
    ranking: number('Current ranking', 5, undefined, 'Properties'),
    handleRanking: action('Clicked star')
}}/>;

export default config;
