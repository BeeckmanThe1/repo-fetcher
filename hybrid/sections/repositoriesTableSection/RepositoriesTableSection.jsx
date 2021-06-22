import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import RankingStars from '../../partials/RankingStars/RankingStars.jsx';
import storageHelper from '../../utils/storageHelper.util';
import websiteActions from '../../store/actions/website/website.action';
import {getCaretIcon, sortArrayOfObjects} from '../../utils/sorting.util';

const RepositoriesTableSection = () => {

    const [ordering, setOrdering] = useState({ranking: undefined});

    const repos = useSelector(state => state?.website?.repositories?.items) || [];
    const dispatch = useDispatch();

    const getStoredRankingAndDispatch = () => {
        for (let i = 0; i < repos?.length; i++) {
            const repo = repos[i];
            const rankingStoreKey = `${repo?.name}.ranking` || 0;
            const storedRanking = storageHelper.getItem(rankingStoreKey);
            storedRanking && dispatch(websiteActions.rankRepo(repo?.name, storedRanking));
        }
    };

    useEffect(getStoredRankingAndDispatch, []);

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
            default:
                newOrdening = 'asc';
                break;
            }
            const newOrdering = {...prev, [type]: newOrdening};
            return newOrdering;
        });
    };
    const sortedRepos = sortArrayOfObjects(repos, ordering);

    return <section className={classnames('rep-repositories-table-section', 'container')}>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Owner</th>
                    <th scope="col">
                    Ranking
                        <i aria-hidden onClick={() => changeOrdering('ranking')}
                            className={classnames(getCaretIcon(ordering?.ranking))}/>
                    </th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {sortedRepos.map((repo, index) => {
                    const rankingStoreKey = `${repo?.name}.ranking` || 0;

                    return <tr key={repo?.name}>
                        <th scope="row">{index + 1}</th>
                        <td>{repo?.name}</td>
                        <td>{repo?.userName}</td>
                        <td><RankingStars {...{
                            handleRanking: rank => {
                                dispatch(websiteActions?.rankRepo(repo?.name, rank));
                                storageHelper.setItem(rankingStoreKey, rank);
                            },
                            ranking: repo?.ranking
                        }}/></td>
                        <td><a className={'btn btn-success'} href={repo?.slug}>Commits</a></td>
                    </tr>;
                })}
            </tbody>
        </table>
    </section>;
};

export default RepositoriesTableSection;
