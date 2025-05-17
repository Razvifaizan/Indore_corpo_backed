const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // ✅ Loads environment variables
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const GallearRouts = require('./Router/GallearyRouter.js')
const PostRouts = require('./Router/PostRouter.js')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', PostRouts);
app.use('/media', GallearRouts);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
