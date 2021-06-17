import React from 'react';
import {useSelector} from 'react-redux';

const RepoDetailsPage = () => {
    const repo = useSelector(state => state?.page?.repo);
    return <h1>{repo?.name}</h1>;
};

export default RepoDetailsPage;
