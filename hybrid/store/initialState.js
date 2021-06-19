export default {
    loadInitials: () => ({
        website: websiteHardcoded,
        page: {}
    })
};

//  TODO: unhardcode

const websiteHardcoded = {
    websiteConstants: {
        projectName: 'Repo fetcher'
    },
    repositories: {
        items: [
            {
                name: 'beliving-original-work',
                fullName: 'BeeckmanThe1/beliving-original-work',
                description: null,
                slug: '/beliving-original-work'
            },
            {
                name: 'repo-fetcher',
                fullName: 'BeeckmanThe1/repo-fetcher',
                description: null,
                slug: '/repo-fetcher'
            },
            {
                name: 'static-isomorphic-boilerplate',
                fullName: 'BeeckmanThe1/static-isomorphic-boilerplate',
                description: null,
                slug: '/static-isomorphic-boilerplate'
            },
            {
                name: 'static-portfolio',
                fullName: 'BeeckmanThe1/static-portfolio',
                description: null,
                slug: '/static-portfolio'
            },
            {
                name: 'technical-assignment',
                fullName: 'BeeckmanThe1/technical-assignment',
                description: null,
                slug: '/technical-assignment'
            }
        ]
    }
}
