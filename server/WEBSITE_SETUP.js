export default {
    PAGES: {
        DEVELOPMENT_INDEX_PAGE: {
            ID: 'dev-landing-page',
            WRAPPER_ID: 'landing-page-wrapper',
            SLUG: '/index',
            TITLE: 'Index',
            META_DESCRIPTION: 'Development landingpage',
        },
        REPO_DETAIL_PAGE: {
            ID: 'repo-detail-page',
            WRAPPER_ID: 'repo-detail-page-wrapper',
        },
        STATIC_PAGES: {
            REPO_LANDINGS_PAGE: {
                ID: 'repo-landing-page',
                WRAPPER_ID: 'repo-landing-page-wrapper',
                SLUG: '/',
                TITLE: 'Repositories',
                META_DESCRIPTION: 'An overview of all your awesome and public repositories.',
            }
        }
    },
    get ALL_STATIC_PAGES() {
        return Object.values(this.PAGES.STATIC_PAGES);
    },
    get ALL_PAGES() {
        const {REPO_DETAIL_PAGE, DEVELOPMENT_INDEX_PAGE} = this.PAGES;
        return [REPO_DETAIL_PAGE, DEVELOPMENT_INDEX_PAGE, ...this.ALL_STATIC_PAGES];
    }
};
