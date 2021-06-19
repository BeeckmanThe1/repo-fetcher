import React from 'react';
import CommitsTableSection from "../../sections/CommitsOverview/commitsTableSection.jsx";
import PageIntro from "../../partials/PageIntro/PageIntro.jsx";
import {useSelector} from "react-redux";

const RepoDetailsPage = () => {
    const repo = useSelector(state => state?.page?.repo);

    return <div className={'rep-repo-details-page'}>
        <PageIntro {...{header: repo?.name, extraClassName: 'rep-repository-overview'}}><a href={'/'}>Back to overview</a></PageIntro>
        <CommitsTableSection/>
    </div>;
};

export default RepoDetailsPage;
