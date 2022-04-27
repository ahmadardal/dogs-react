import axios from "axios";
const Api = async () => {
  const response = await axios.get(
    "https://api.jsonbin.io/b/6268780a019db467969220eb"
  );
  return response.data;
};

export default Api;
