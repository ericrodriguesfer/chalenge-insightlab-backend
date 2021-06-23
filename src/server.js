const coreAPI = require("./core/core");
const PORT = require("./utils/portAPI");

coreAPI.listen(PORT, () => {
  console.log("Server application was started...");
});
