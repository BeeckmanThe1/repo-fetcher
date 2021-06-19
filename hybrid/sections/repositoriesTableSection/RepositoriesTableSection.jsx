import React from 'react';
import classnames from 'classnames';
import {useSelector} from "react-redux";

const RepositoriesTableSection = () => {
    const repos = useSelector(state => state?.website?.repositories?.items) || [];

    return <section className={classnames('rep-repositories-table-section', 'container')}>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {repos.map((repo, index) => <tr>
                <th scope="row">{index + 1}</th>
                <td>{repo.name}</td>
                <td>{repo?.author || 'Author'}</td>
                <td><a className={'btn btn-success'} href={repo?.slug}>Commits</a></td>
            </tr>)}

            </tbody>
        </table>
    </section>
};

export default RepositoriesTableSection;
