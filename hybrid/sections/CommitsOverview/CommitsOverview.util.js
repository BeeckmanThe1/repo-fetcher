const removeWhiteSpaces = (stringy) => stringy?.replace(/\s+/g, '');

export const filterCommits = (commits, searchInput) => {
    const filteredCommits = !!searchInput ? commits.filter(commit => {

        const commitMessage = commit?.message;
        const spaceLessUpperedCommitMessage = removeWhiteSpaces(commitMessage)?.toUpperCase();
        const spaceLessUpperedSearchInput = removeWhiteSpaces(searchInput)?.toUpperCase();

        return spaceLessUpperedCommitMessage?.includes(spaceLessUpperedSearchInput);
    }) : commits;
    return filteredCommits || [];
}
