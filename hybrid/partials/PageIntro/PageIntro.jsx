import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const PageIntro = ({header, extraClassName, children}) => {

    return <section className={classnames('rep-page-intro', 'container', extraClassName)}>
        <h1>{header}</h1>
        {children}
    </section>;
};

PageIntro.propTypes = {
    header: PropTypes.string,
    extraClassName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PageIntro;
