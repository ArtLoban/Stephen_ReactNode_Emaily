/* prod/dev env creds */
const MONGO_USER = 'value_here';
const MONGO_PASSWORD = 'value_here';
const MONGO_DB = 'value_here';

module.exports = {
  googleClientID: 'value_here',
  googleClientSecret: 'value_here',
  mongoURI: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@artcluster.wyas1.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
  cookieKey: 'value_here', // Any random string. Like a salt
  stripePublishableKey: 'value_here',
  stripeSecretKey: 'value_here',
};
