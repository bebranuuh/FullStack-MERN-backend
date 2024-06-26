import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Длина пароля должна быть не менее 5 символов").isLength({
    min: 5,
  }),
  body("fullName", "Длина имени должна быть не менее 2 символов").isLength({
    min: 2,
  }),
  body("avatarUrl", "Неверный формат ссылки").optional().isURL(),
];

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Длина пароля должна быть не менее 5 символов").isLength({
    min: 5,
  }),
];
