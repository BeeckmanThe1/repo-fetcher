import {getCaretIcon, sortArrayOfObjects} from '../sorting.util';

describe('Sorting', () => {
    describe('getCaretIcon', () => {
        describe('WHEN nothing at all is passed', () => {
            test('THEN I expect THE default caret', () => {
                const result = getCaretIcon();
                expect(result).toBe('fas fa-caret-right');
            })
        });
        describe('WHEN a wrong direction type is passed', () => {
            test('THEN I expect THE default caret', () => {
                const result = getCaretIcon('Wrong direction type');
                expect(result).toBe('fas fa-caret-right');
            })
        });
        describe('WHEN a correct direction type is passed', () => {
            test('THEN I expect correct caret as return value', () => {
                expect(getCaretIcon('asc')).toBe('fas fa-caret-up');
                expect(getCaretIcon('desc')).toBe('fas fa-caret-down');
            })
        });
    });

    describe('sortArrayOfObjects', () => {
        describe('WHEN nothing at all is passed', () => {
            test('THEN I expect an empty array back', () => {
                const result = sortArrayOfObjects();
                expect(result).toStrictEqual([]);
            });
        });
        describe('WHEN I pass an array, but no ordering object', () => {
            test('THEN I expect the same array back', () => {
                const mockedArray = ['some', 'values'];
                const result = sortArrayOfObjects(mockedArray);
                expect(result).toStrictEqual(mockedArray);
            });
        });
        describe('WHEN I pass an array, and an ordering object', () => {
            test('THEN I expect the same array back', () => {
                const firstMockedObject = {value: 'aaa'};
                const secondMockedObject = {value: 'bbb'};
                const thirdMockedObject = {value: 'bbb'};

                const mockedArray = [secondMockedObject, firstMockedObject, thirdMockedObject];
                const mockedAscendingOrderingObj = {value: 'asc'};
                const mockedDescendingOrderingObj = {value: 'desc'};

                const correctlyOrderedArr = [firstMockedObject, secondMockedObject, thirdMockedObject];

                expect(sortArrayOfObjects(mockedArray, mockedAscendingOrderingObj)).toStrictEqual(correctlyOrderedArr);
                expect(sortArrayOfObjects(mockedArray, mockedDescendingOrderingObj)).toStrictEqual(correctlyOrderedArr.reverse());
            });
        });
    });
});
