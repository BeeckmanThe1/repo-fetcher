export const shouldStarBeGold = (currentStar, ranking, hoveredStar) => {
    const isHovering = !!hoveredStar;
    const hasRanking = !!ranking;

    const shouldBeGold = isHovering ? currentStar <= hoveredStar : hasRanking ? currentStar <= ranking : false;
    return shouldBeGold;
};
