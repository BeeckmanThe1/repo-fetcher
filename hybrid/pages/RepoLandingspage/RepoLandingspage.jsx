import React from 'react';
import RepositoriesTableSection from '../../sections/repositoriesTableSection/RepositoriesTableSection.jsx';
import PageIntro from '../../partials/PageIntro/PageIntro.jsx';

const RepoLandingsPage = () => {
    return <div className={'rep-repositories-landingspage'}>
        <PageIntro {...{header: 'Repositories', extraClassName: 'rep-repositories-overview-intro'}}/>
        <RepositoriesTableSection/>

    </div>;
};

export default RepoLandingsPage;
