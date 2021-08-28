const { body } = require("express-validator");
const path = require("path");

const validateProductEditMiddleware = [
  body("name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre de producto")
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre del producto debe tener al menos 5 caracteres"),
  body("description")
    .notEmpty()
    .withMessage("Tienes que escribir una descripcion")
    .bail()
    .isLength({ min: 20 })
    .withMessage("La descripcion debe tener al menos 20 caracteres"),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `las extensiones permitidas son ${acceptedExtensions.join(", ")}`
        );
      }
    }

    console.log(validateProductEditMiddleware);
    return true;
  }),
  body("price")
    .isNumeric()
    .withMessage("el precio debe ser un numero")
    .bail()
    .custom((value) => {
      if (value < 1) {
        throw new Error("Colocar un numero superior a 0");
      } else {
        return true;
      }
    }),
];

module.exports = validateProductEditMiddleware;
