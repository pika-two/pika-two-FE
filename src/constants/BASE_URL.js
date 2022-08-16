
const mode = import.meta.env.MODE;
let baseURL = "http://pikatwo.kbfg.kubepia.com/";
if (mode !== "dev") {
  baseURL = "https://test.api.predev.dev/";
}

export default baseURL