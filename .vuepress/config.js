module.exports = {
    theme: 'cosmos',
    title: 'Teleport Documentation',
    locales: {
        '/': {
            lang: 'en-US'
        },
    },
    markdown: {
        extendMarkdown: (md) => {
            md.use(require("markdown-it-katex"));
        },
    },
    head: [
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
            },
        ],
    ],
    base: process.env.VUEPRESS_BASE || '/',
    plugins: [
        'vuepress-plugin-element-tabs'
    ],
    head: [
        // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon16.png" }],
        ['link', { rel: "manifest", href: "/site.webmanifest" }],
        ['meta', { name: "msapplication-TileColor", content: "#2e3148" }],
        ['meta', { name: "theme-color", content: "#ffffff" }],
        ['link', { rel: "icon", type: "image/png", href: "/favicon.png" }],
        // ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
    ],
    themeConfig: {
        repo: 'teleport-network/teleport',
        docsRepo: 'teleport-network/documents',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinks: true,
        custom: true,
        project: {
            name: 'Teleport',
            denom: 'Teleport',
            ticker: 'Teleport',
            binary: 'teleport',
            testnet_denom: 'Tele',
            testnet_ticker: 'TELE',
            rpc_url_testnet: 'https://evm-rpc.testnet.teleport.network/',
            rpc_url_local: 'http://localhost:8545/',
            block_explorer_url_test: 'https://evm-explorer.testnet.teleport.network/',
            chain_id: '8000',
            testnet_chain_id: '8001',
            latest_version: 'v0.1.0-alpha1',
            version_number: '0.1.0',
            testnet_version_number: '0.1.0',
        },
        logo: {
            src: '/logo.png',
        },
        algolia: {
            id: 'BH4D9OD16A',
            key: 'a5d55fe5f540cc3bd28fa2c72f2b5bd8',
            index: 'teleport'
        },
        topbar: {
            banner: false
        },
        sidebar: {
            auto: false,
            nav: [{
                    title: 'Reference',
                    children: [{
                            title: 'Introduction',
                            directory: true,
                            path: '/intro'
                        },
                        {
                            title: 'Quick Start',
                            directory: true,
                            path: '/quickstart'
                        },
                        {
                            title: 'Basics',
                            directory: true,
                            path: '/basics'
                        },
                        {
                            title: 'Core Concepts',
                            directory: true,
                            path: '/core'
                        },
                    ]
                },
                {
                    title: 'Guides',
                    children: [{
                            title: 'Localnet',
                            directory: true,
                            path: '/guides/localnet'
                        },
                        {
                            title: 'Keys and Wallets',
                            directory: true,
                            path: '/guides/keys-wallets'
                        },
                        {
                            title: 'Ethereum Tooling',
                            directory: true,
                            path: '/guides/tools'
                        },
                        {
                            title: 'Validators',
                            directory: true,
                            path: '/guides/validators'
                        },
                        {
                            title: 'Upgrades',
                            directory: true,
                            path: '/guides/upgrades'
                        },
                        {
                            title: 'Key Management System',
                            directory: true,
                            path: '/guides/kms'
                        },
                    ]
                },
                {
                    title: 'APIs',
                    children: [{
                            title: 'JSON-RPC',
                            directory: true,
                            path: '/api/json-rpc'
                        },
                        {
                            title: 'Protobuf Reference',
                            directory: false,
                            path: '/api/proto-docs'
                        },
                    ]
                },
                {
                    title: 'TESTNET',
                    children: [{
                            title: 'Join Testnet',
                            directory: false,
                            path: '/testnet/join'
                        },
                        {
                            title: 'Token faucet',
                            directory: false,
                            path: '/testnet/faucet'
                        },
                        {
                            title: 'Deploy Node on Cloud',
                            directory: false,
                            path: '/testnet/cloud_providers'
                        }
                    ]
                },
                {
                    title: 'Specifications',
                    children: [{
                        title: 'Modules',
                        directory: true,
                        path: '/modules'
                    }]
                },
                {
                    title: 'Block Explorers',
                    children: [{
                            title: 'Teleport (EVM)',
                            path: 'https://github.com/teleport-network/blockscout'
                        },
                        {
                            title: 'Teleport (Cosmos)',
                            path: 'https://github.com/teleport-network/Look'
                        },
                    ]
                },
                {
                    title: 'Resources',
                    children: [{
                            title: 'Teleport API Reference',
                            path: 'https://pkg.go.dev/github.com/teleport-network/teleport'
                        },
                        {
                            title: 'Ethermint Library API Reference',
                            path: 'https://pkg.go.dev/github.com/tharsis/ethermint'
                        },
                        {
                            title: 'JSON-RPC API Reference',
                            path: '/api/json-rpc/endpoints'
                        }
                    ]
                }
            ]
        },
        gutter: {
            title: 'Help & Support',
            chat: {
                title: 'Developer Chat',
                text: 'Chat with Teleport developers on Discord.',
                url: 'https://discord.gg/5YQtRDF4Rh',
                bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)'
            },
            forum: {
                title: 'Teleport Medium',
                text: 'Join the Teleport Medium to learn more.',
                url: 'https://medium.com/@TeleportNetwork',
                bg: 'linear-gradient(221.79deg, #3D6B99 -1.08%, #336699 95.88%)',
                logo: 'ethereum-white'
            },
            github: {
                title: 'Found an Issue?',
                text: 'Help us improve this page by suggesting edits on GitHub.',
                bg: '#F8F9FC'
            }
        },
        footer: {
            logo: '/logo.png',
            textLink: {
              text: 'teleport.network',
              url: 'https://teleport.network'
            },
            services: [
              {
                service: 'github',
                url: 'https://github.com/teleport-network/teleport'
              },
              {
                service: "discord",
                url: "https://discord.gg/5YQtRDF4Rh",
              },
              {
                service: "twitter",
                url: "https://twitter.com/TeleportChain",
              },
              {
                service: "telegram",
                url: "https://t.me/TeleportNetwork",
              },
              {
                service: "medium",
                url: "https://medium.com/@TeleportNetwork",
              },
            ],
            smallprint: 'This website is maintained by Teleport Network',
            links: [{
              title: 'Documentation',
              children: [{
                title: 'Cosmos SDK Docs',
                url: 'https://docs.cosmos.network/master/'
              },
              {
                title: 'Ethereum Docs',
                url: 'https://ethereum.org/developers'
              },
              {
                title: 'Tendermint Core Docs',
                url: 'https://docs.tendermint.com'
              }
              ]
            },
            {
              title: 'Community',
              children: [{
                title: 'Teleport Community',
                url: 'https://discord.gg/5YQtRDF4Rh'
              },
              ]
            }
            ]
          },
        versions: [{
            "label": "main",
            "key": "main"
        }, ],
    }
};
