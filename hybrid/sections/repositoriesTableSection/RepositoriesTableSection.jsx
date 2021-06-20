import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import RankingStars from "../../partials/RankingStars/RankingStars.jsx";
import storageHelper from '../../utils/storageHelper.util';
import websiteActions from '../../store/actions/website/website.action';

const RepositoriesTableSection = () => {

    //storageHelper.setItem(rankingStoreKey, rank)

    const [didMount, setDidMount] = useState(false);
    const repos = useSelector(state => state?.website?.repositories?.items) || [];
    const dispatch = useDispatch();

    useEffect(() => setDidMount(true), []);

    return <section className={classnames('rep-repositories-table-section', 'container')}>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">⭐<i className="fas fa-caret-up"/></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {repos.map((repo, index) => {
                const rankingStoreKey = `${repo?.name}.ranking` || 0;
                const storedRanking = didMount && storageHelper.getItem(rankingStoreKey);
                return <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{repo.name}</td>
                    <td>{repo?.author || 'Author'}</td>
                    <td><RankingStars {...{
                        handleRanking: rank => {
                            dispatch(websiteActions?.rankRepo(repo?.name, rank));
                            storageHelper.setItem(rankingStoreKey, rank);
                        },
                        ranking: repo?.ranking || storedRanking
                    }}/></td>
                    <td><a className={'btn btn-success'} href={repo?.slug}>Commits</a></td>
                </tr>
            })}
            </tbody>
        </table>
    </section>
};

export default RepositoriesTableSection;
