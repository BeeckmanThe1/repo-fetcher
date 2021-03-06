import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import pageActions from '../../store/actions/page/page.action';
import classnames from 'classnames';
import storageHelper from '../../utils/storageHelper.util';
import {filterCommits} from './CommitsOverview.util';
import PropTypes from 'prop-types';

const CommitsTableSection = ({searchInput}) => {

    const githubOwner = useSelector(state => state?.website?.repositories?.githubOwner);
    const repo = useSelector(state => state?.page?.repo);
    const dispatch = useDispatch();
    const commits = repo?.commits || [];

    const displayDate = date => date && new Date(date)?.toLocaleDateString();

    const repoCommitsKey = `${repo?.name}.commits`;

    useEffect(() => {
        const storedCommits = storageHelper.getItem(repoCommitsKey);
        dispatch(pageActions.addCommitsToRepo(repo, githubOwner, storedCommits));
    }, []);

    useEffect(() => {
        !!repo?.commits && storageHelper.setItem(repoCommitsKey, repo?.commits);
    }, [repo?.commits]);

    return <section className={classnames('rep-commits-overview', 'container')}>
        <h2>Commits</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">message</th>
                    <th scope="col">date</th>
                </tr>
            </thead>
            <tbody>
                {filterCommits(commits, searchInput).map((commit, index) => <tr key={`${commit?.date}-${index}`}>
                    <td>{commit.author}</td>
                    <td>{commit?.message}</td>
                    <td>{displayDate(commit?.date)}</td>
                </tr>)}

            </tbody>
        </table>
    </section>;
};
CommitsTableSection.propTypes = {
    searchInput: PropTypes.string,
};
export default CommitsTableSection;
