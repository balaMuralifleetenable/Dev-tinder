const express = require('express');
const cors = require("cors");
const rootRouter = require('./routes/index');

const app = express();

// ✅ Enable CORS
app.use(cors()); // You can also restrict origin here if needed

// ✅ Enable JSON body parsing
app.use(express.json());

// ✅ Attach all routes from root router
app.use(rootRouter);

// ✅ Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
