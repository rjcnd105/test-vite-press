
module.exports = {
    title: 'hj',
    description: 'Just playing around.',
    // 줄번호 활성화
    // VitePress uses markdown-it[https://github.com/markdown-it/markdown-it] as the Markdown renderer.
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebar: {
            '/': getHomeSideMenu(),
        }
    }
}


