import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import pageActions from "../../store/actions/page/page.action";
import classnames from 'classnames';

const CommitsTableSection = () => {
    const repo = useSelector(state => state?.page?.repo);

    const dispatch = useDispatch();
    const commits = repo?.commits || [];

    useEffect(() => dispatch(pageActions.addCommitsToRepo(repo)), []);
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
            {commits.map(commit => <tr>
                <td>{commit.author}</td>
                <td>{commit?.message || 'Author'}</td>
                <td>{new Date(commit?.date).toLocaleDateString()}</td>
            </tr>)}

            </tbody>
        </table>
    </section>
};
export default CommitsTableSection;
