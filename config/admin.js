module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8677b583302e9e6b40553cf9e5ad7a58'),
  },
});
