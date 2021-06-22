import {shouldStarBeGold} from '../RankingStars.util';

describe('Ranking stars', () => {
    describe('When the current star-ranking is 4', () => {
        describe('WHEN nothing is passed', () => {
            test('THEN I expect "false" as return value', () => {
                expect(shouldStarBeGold()).toBe(false);
            });
        });
        describe('WHEN there is no star-hovering', () => {
            test('THEN I expect the first 4 stars to appear gold', () => {
                const ranking = 4;

                const firstStar = 1;
                const secondStar = 2;
                const thirdStar = 3;
                const fourthStar = 4;
                const fifthStar = 5;

                expect(shouldStarBeGold(firstStar, ranking)).toBe(true);
                expect(shouldStarBeGold(secondStar, ranking)).toBe(true);
                expect(shouldStarBeGold(thirdStar, ranking)).toBe(true);
                expect(shouldStarBeGold(fourthStar, ranking)).toBe(true);
                expect(shouldStarBeGold(fifthStar, ranking)).toBe(false);
            });
        });
        describe('WHEN the second star is hovered', () => {
            test('THEN I expect the first 2 stars to appear gold', () => {
                const ranking = 4;
                const hoveredStar = 2;

                const firstStar = 1;
                const secondStar = 2;
                const thirdStar = 3;
                const fourthStar = 4;
                const fifthStar = 5;

                expect(shouldStarBeGold(firstStar, ranking, hoveredStar)).toBe(true);
                expect(shouldStarBeGold(secondStar, ranking, hoveredStar)).toBe(true);
                expect(shouldStarBeGold(thirdStar, ranking, hoveredStar)).toBe(false);
                expect(shouldStarBeGold(fourthStar, ranking, hoveredStar)).toBe(false);
                expect(shouldStarBeGold(fifthStar, ranking, hoveredStar)).toBe(false);
            });
        });
    });
});
