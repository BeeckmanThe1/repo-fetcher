import {filterCommits} from '../CommitsOverview.util';

describe('Commits overview', () => {
    describe('() => filterCommits', () => {
        describe('WHEN nothing is passed', () => {
            test('THEN I expect an empty array as return value', () => {
                expect(filterCommits()).toStrictEqual([]);
            });
        });
        describe('WHEN there are commits passed, but no search input', () => {
            test('THEN I expect the same array back as return value', () => {
                const mockedCommits = ['Some', 'mocked', 'commits'];
                expect(filterCommits(mockedCommits, null)).toBe(mockedCommits);
            });
        });
        describe('WHEN there are commits ánd a filter value passed', () => {
            test('THEN I expect the commits to be filtered as expected', () => {
                const mockedSearchValue = 'Epic commit';
                const mockedNonMatchingCommit1 = {message: 'this does not contains the search value'};
                const mockedNonMatchingCommit2 = {title: 'this does not contain any message key'};
                const mockedMatchingCommit = {message: `this does contain the searched value: ${mockedSearchValue}`};

                const mockedCommits = [mockedNonMatchingCommit1, mockedNonMatchingCommit2, mockedMatchingCommit];

                expect(filterCommits(mockedCommits, mockedSearchValue)).toStrictEqual([mockedMatchingCommit]);
            });
            test('THEN I expect the commits to be filtered; no matter the casing or spaces', () => {
                const mockedSearchValue = 'EpIc coM      MiT     ';
                const mockedMatchingCommit = {message: 'Epic commit'};
                const mockedCommits = [{}, mockedMatchingCommit];

                expect(filterCommits(mockedCommits, mockedSearchValue)).toStrictEqual([mockedMatchingCommit]);
            });
        });
    });
});
