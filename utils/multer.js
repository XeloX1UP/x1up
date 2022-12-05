import multer from "multer";

export const uploadFiles = () => {
  const storage = multer.diskStorage({
    destination: "../uploads/productsImages",
    filename: function (_req, file, cb) {
      var extensions = file.originalname.slice(
        file.originalname.lastIndexOf(".")
      );
      cb(null, Date.now() + extensions);
    },
  });

  const upload = multer({ storage }).single("images");

  return upload;
};
