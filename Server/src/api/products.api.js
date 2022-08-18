const productImageUpload = (request, response) => {
  try {
    const image = request.file;

    if (!image) {
      response.json({
        isSucees: false,
        message: "Error",
      });
    }

    console.log(image.path);
  } catch (error) {}
};

module.exports = { productImageUpload };
