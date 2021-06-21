import React, {useState} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const RankingStars = ({numberOfStars, ranking, handleRanking}) => {
    const [hoveredStar, setHoveredStar] = useState();
    const [rankingState, setRankingState] = useState();
    const stars = new Array(numberOfStars).fill('');
    const shouldStarBeGold = (rankingCurrentStar, ranking) => {
        const isHovering = !!hoveredStar;
        const hasRanking = !!ranking;

        const shouldBeGold = isHovering ? rankingCurrentStar <= hoveredStar : hasRanking ? rankingCurrentStar <= ranking : false;
        return shouldBeGold;
    }
    return <div className={'rep-ranking-stars'}>
        {stars.map((star, index) => {
            const rankingCurrentStar = index + 1;
            return <i onClick={() => handleRanking(rankingCurrentStar)}
                      className={classnames({'rep-golden-star': shouldStarBeGold(rankingCurrentStar, ranking)}, 'fas fa-star')}
                      onMouseOver={() => setHoveredStar(rankingCurrentStar)}
                      onMouseLeave={() => setHoveredStar()}/>
        })}
    </div>;
}

RankingStars.propTypes = {
    /** Choose the desired number of stars*/
    numberOfStars: PropTypes.number,
    /** Choose the desired ranking*/
    ranking: PropTypes.number,
    /** Callback handling changing rank*/
    handleRanking: PropTypes.func.isRequired,
};
RankingStars.defaultProps = {
    numberOfStars: 5,
    ranking: 0
};
export default RankingStars;
