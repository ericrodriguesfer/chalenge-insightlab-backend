const coreAPI = require("./core/core");
const PORT = require("./utils/portAPI");

coreAPI.listen(process.env.PORT || PORT, () => {
  console.log("Server application was started...");
});
