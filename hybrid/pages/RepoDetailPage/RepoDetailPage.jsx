import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import pageActions from '../../store/actions/page/page.action';

const RepoDetailsPage = () => {
    const repo = useSelector(state => state?.page?.repo);
    const dispatch = useDispatch();
    const commits = repo?.commits || [];

    useEffect(() => dispatch(pageActions.addCommitsToRepo(repo)),[]);

    return <>
        <h1>{repo?.name}</h1>
        <h2>Commits</h2>
        <ul>
            {commits.map(commit => <li>test</li>)}
        </ul>
    </>;
};

export default RepoDetailsPage;
