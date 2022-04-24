/* prod/dev env creds */
const MONGO_USER = '';
const MONGO_PASSWORD = '';
const MONGO_DB = '';

module.exports = {
  googleClientID: '',
  googleClientSecret: '',
  mongoURI: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@artcluster.wyas1.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
  cookieKey: '' // Any random string. Like a salt
};
