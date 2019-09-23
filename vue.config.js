module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://172.28.1.185:3001',
                ws: true,
                secure: false
            }
        }
    }
}