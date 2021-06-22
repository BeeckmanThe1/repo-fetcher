import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import pageActions from "../../store/actions/page/page.action";
import classnames from 'classnames';
import storageHelper from '../../utils/storageHelper.util';
import {filterCommits} from "./CommitsOverview.util";

const CommitsTableSection = ({searchInput}) => {

    const repo = useSelector(state => state?.page?.repo);
    const dispatch = useDispatch();
    const commits = repo?.commits || [];

    const displayDate = date => date && new Date(date)?.toLocaleDateString();

    const repoCommitsKey = `${repo?.name}.commits`;

    useEffect(() => {
        const storedCommits = storageHelper.getItem(repoCommitsKey);
        dispatch(pageActions.addCommitsToRepo(repo, storedCommits));
    }, []);

    useEffect(() => {
        console.log('repo?.commits', repo?.commits);
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
            {filterCommits(commits, searchInput).map(commit => <tr>
                <td>{commit.author}</td>
                <td>{commit?.message}</td>
                <td>{displayDate(commit?.date)}</td>
            </tr>)}

            </tbody>
        </table>
    </section>
};
export default CommitsTableSection;
