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
            //SLUG: dynamically decided
            //TITLE: dynamically decided
            //META_DESCRIPTION: dynamically decided
        },
        STATIC_PAGES: {
            TEST: {
                ID: 'test-static-page',
                WRAPPER_ID: 'test-static-page-wrapper',
                SLUG: '/test',
                TITLE: 'Test',
                META_DESCRIPTION: 'Test'
            },
            TEST_2: {
                ID: 'test2-static-page',
                WRAPPER_ID: 'test2-static-page-wrapper',
                SLUG: '/test2',
                TITLE: 'Test 2',
                META_DESCRIPTION: 'Test 2'
            },
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
