import React, {useState} from 'react';
import classnames from 'classnames';

const RankingStars = ({numberOfStars, ranking, handleRanking}) => {
    const [hoveredStar, setHoveredStar] = useState();
    const stars = new Array(numberOfStars || 5).fill('');
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

export default RankingStars;
