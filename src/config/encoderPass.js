const crypto = require("crypto");
const HASH = require("../utils/hashPass");

function encoder(pass) {
  return crypto.createHmac("sha256", pass).update(HASH).digest("hex");
}

module.exports = encoder;
