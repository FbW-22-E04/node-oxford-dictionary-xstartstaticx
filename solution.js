const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const input = process.argv.slice(2);

const options = {
  headers: {
    app_id: process.env.APPLICATION_ID,
    app_key: process.env.APP_API_KEY,
  },
};

async function getData() {
  const response = await axios.get(
    `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${input}`,
    options
  );

  const newData =
    response.data.results[0].lexicalEntries[0].entries[0].senses.map((item) => {
      return item.definitions[0];
    });

  //   const newObject = Object.fromEntries(newData);
  //   console.log(newObject);
  console.log(newData);
  //   console.log(
  //     "Definition:",
  //     response.data.results[0].lexicalEntries[0].entries[0].senses[1].definitions
  //   );
  //   console.log(
  //     "Definition:",
  //     response.data.results[0].lexicalEntries[0].entries[0].senses[2].definitions
  //   );
}
getData();
