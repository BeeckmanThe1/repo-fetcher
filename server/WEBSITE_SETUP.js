export default {
    PAGES: {
        DEVELOPMENT_INDEX_PAGE: {
            ID: 'dev-landing-page',
            WRAPPER_ID: 'landing-page-wrapper',
            SLUG: '/index',
            TITLE: 'Index',
            META_DESCRIPTION: 'Development landingpage',
        },
        REPO_LANDINGS_PAGE: {
            ID: 'repo-landing-page',
            WRAPPER_ID: 'repo-landing-page-wrapper',
            SLUG: '/',
            TITLE: 'Repositories',
            META_DESCRIPTION: 'An overview of all your awesome and public repositories.',
        }
    },
    get ALL_STATIC_PAGES() {
        return Object.values(this.PAGES).filter(page => page.SLUG !== '/index');
    }
};
