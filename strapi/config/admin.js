module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d21c35abdbd2736f4657cd3036115ea'),
  },
});
