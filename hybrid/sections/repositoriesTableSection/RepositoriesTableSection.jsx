import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import RankingStars from "../../partials/RankingStars/RankingStars.jsx";
import storageHelper from '../../utils/storageHelper.util';
import websiteActions from '../../store/actions/website/website.action';

const RepositoriesTableSection = () => {

    const [didMount, setDidMount] = useState(false);
    const [ordering, setOrdering] = useState({rank: undefined});

    const repos = useSelector(state => state?.website?.repositories?.items) || [];
    const dispatch = useDispatch();

    useEffect(() => setDidMount(true), []);
    const mapper = {
        'asc': 'up',
        'desc': 'down',
        undefined: 'right'
    }

    const sortRepos = repos => {
        const sortedRepos = repos.sort((repo1, repo2) => {
            if (ordering?.rank === 'asc') {
                return repo1.rank >= repo2.rank;
            } else if (ordering?.rank === 'desc') {
                return repo1?.rank <= repo2?.rank
            } else return 0;
        });

        return sortedRepos;
    };

    const changeOrdering = type => {
        setOrdering(prev => {
            const prevRanking = prev?.[type];
            let newOrdening;
            switch (prevRanking) {
                case 'asc':
                    newOrdening = 'desc';
                    break;
                case 'desc':
                    newOrdening = undefined;
                    break;
                case undefined:
                    newOrdening = 'asc';
                    break;
            }
            const newOrdering = {...prev, [type]: newOrdening};
            return newOrdering;
        });
    }

    return <section className={classnames('rep-repositories-table-section', 'container')}>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Ranking<i onClick={() => changeOrdering('rank')} className={classnames(`fas fa-caret-${mapper[ordering?.rank]}`)}/></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {sortRepos(repos).map((repo, index) => {
                const rankingStoreKey = `${repo?.name}.ranking` || 0;
                const storedRanking = didMount && storageHelper.getItem(rankingStoreKey);
                //storedRanking && dispatch(websiteActions.rankRepo(repo?.name, storedRanking));
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
