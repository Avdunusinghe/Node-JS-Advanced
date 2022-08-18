const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
  },

  imageUrl: {
    type: String,
  },
});

module.exports = User = mongoose.model("product", productSchema);
