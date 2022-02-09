module.exports = ({ env }) => (
    {
        url: env('your-app-url'),
        proxy: true,
        app: {
            keys: env.array('APP_KEYS', ['42069', '69420']),
        },
    });