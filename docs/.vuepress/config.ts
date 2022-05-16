import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'ko-KR',
    title: 'Code or Death',
    description: 'to code, or not to code. that is the problem',
    base: '/code-or-death/',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/logo.png',
        home: '/',
        lastUpdated: true,
        repo: 'hajun-myoung/code-or-death',
        editLink: false,
        contributors: true,
        notFound: [
            '엘리스가 선명하게 코드를 핥고 있었다',
            '그렇게 모자장수는 카카오로 취업했다',
        ],
        backToHome: '돌아가자...',
        search: true,

        // navigation bar
        navbar: [
            {
                text: 'Contributors',
                children: [
                    {
                        text: 'hajun',
                        link: '/hajun/',
                    },
                    {
                        text: 'byeolhee',
                        link: '/byeolhee/',
                    },
                    {
                        text: 'kihwan',
                        link: '/kihwan/',
                    },
                    {
                        text: 'jeonghyun',
                        link: '/nliker/',
                    },
                    {
                        text: 'jiyu',
                        link: '/jiyu/',
                    },
                    {
                        text: 'sujeong',
                        link: '/sujeong/',
                    },
                    {
                        text: 'kyungbeen',
                        link: '/kyungbeen/',
                    },
                ],
            },
        ],

        sidebar: {
            '/guide/contribute/': [
                'README.md',
                'configGuide.md',
                'docEditGuide.md',
            ],
            '/jiyu/': [
                'README.md',
                'baekjoon.md',
                'leetcode.md',
                'programmers.md',
            ],
            '/jiyu/baekjoon/': [
                '../baekjoon.md',
                'bj_11508.md',
                'bj_1343.md',
                'bj_10814.md',
                'bj_10825.md',
                'bj_1158.md',
                'bj_1254.md',
                'bj_1935.md',
                'bj_2263.md',
                'bj_1966.md',
                'bj_14425.md',
                'bj_1806.md',
                'bj_21921.md',
                'bj_22862.md',
                'bj_2470.md',
            ],
            '/jiyu/leetcode/': [
                '../leetcode.md',
                'lc_9.md',
                'lc_125.md',
                'lc_455.md',
                'lc_720.md',
                'lc_11.md',
                'lc_20.md',
                'lc_1.md',
                'lc_36.md',
            ],
            '/jiyu/programmers/': [
                '../programmers.md',
                'pg_81301.md',
                'pg_42883.md',
                'pg_42587.md',
                'pg_42586.md',
            ],
            '/kihwan/': ['README.md', '1week.md', '2week.md'],
            '/nliker/bj/': ['sort.md', 'greedy.md', 'search.md'],
            '/nliker/leetcode/': ['program.md'],
            '/sujeong/': [
                'README.md',
                'baekjoon.md',
                'leetcode.md',
                'programmars.md',
            ],
        },
    },

    plugins: [],
});
