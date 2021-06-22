import React, {useState} from 'react';
import CommitsTableSection from "../../sections/CommitsOverview/commitsTableSection.jsx";
import PageIntro from "../../partials/PageIntro/PageIntro.jsx";
import {useSelector} from "react-redux";
import SearchBar from "../../partials/SearchBar/SearchBar.jsx";

const RepoDetailsPage = () => {
    const repo = useSelector(state => state?.page?.repo);
    const [searchInput, setSearchInput] = useState();

    return <div className={'rep-repo-details-page'}>
        <PageIntro {...{header: repo?.name, extraClassName: 'rep-repository-overview'}}>
            <a href={'/'}>Back to overview</a>
            <SearchBar handleInput={input => setSearchInput(input)}/>
        </PageIntro>
        <CommitsTableSection {...{searchInput}}/>
    </div>;
};

export default RepoDetailsPage;
