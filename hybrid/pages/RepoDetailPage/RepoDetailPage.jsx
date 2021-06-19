import React from 'react';
import {useSelector} from 'react-redux';
import CommitsTableSection from "../../sections/CommitsOverview/commitsTableSection.jsx";

const RepoDetailsPage = () => {
    const repo = useSelector(state => state?.page?.repo);

    return <div className={'rep-repo-details-page'}>
        <h1>{repo?.name}</h1>
        <CommitsTableSection/>
    </div>;
};

export default RepoDetailsPage;
