module.exports = {
  MONGOLAB_URI: process.env.BOMBAS_DB,
  AUTHY_API_KEY: process.env.AUTHY_API_KEY_BOMBAS,
  PORT: 8080,
  JWT_SECRET: process.env.JWT_SECRET
}
