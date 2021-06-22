import React from 'react';
import classnames from 'classnames';

const PageIntro = ({header, extraClassName, children}) => {

    return <section className={classnames('rep-page-intro', 'container', extraClassName)}>
        <h1>{header}</h1>
        {children}
    </section>
};

export default PageIntro;
