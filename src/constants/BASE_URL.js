
const mode = import.meta.env.MODE;
let baseURL = "https://localhost:3000/";
if (mode === "prod") {
  baseURL = "https://test.api.predev.dev/";
}

export default baseURL