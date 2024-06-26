import { body } from "express-validator";

export const postCreateValidation = [
  body("title", "Введите заголовок").isLength({ min: 3 }).isString(),
  body("text", "Введите описание статьи")
    .isLength({
      min: 15,
    })
    .isString(),
  body("tags", "Некорректный формат тэгов").optional().isString(),
  body("imageUrl", "Неверный формат ссылки").optional().isString(),
];
