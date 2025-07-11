# TestAI-chat

Веб-приложение для тестирования AI чат-бота, построенное на Angular.

## Описание

TestAI-chat — это современное веб-приложение, предназначенное для взаимодействия с искусственным интеллектом через удобный чат-интерфейс. Проект создан с использованием Angular CLI и предоставляет интуитивно понятный пользовательский интерфейс для общения с AI.

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/xoxin0/Test-AI-chat.git
```

2. Перейдите в директорию проекта:
```bash
cd Test-AI-chat
```

3. Установите зависимости:
```bash
npm install
```

4. Создайте файл в папке `src` - `API.KEY.ts` и добавьте в него ключ Mistal API (предварительно получив его).
```ts
export const API_KEYs = {
  MISTRAL_API_KEY: 'ваш ключ',
  GEMINI_API_KEY: 'ваш ключ'
};
```

5. Для работы с json-server в основной директории самого проекта создайте файл `db.json` и укажите в нем поле `"users"`:

```json
{
  "users": []
}
```

6. Для очистки `localSorage` введите метод `clearAll()` из `local-storage.service.ts` в любое место в коде (не забудьте потом удалить метод).

## Запуск проекта

### Сервер разработки

Для запуска локального сервера разработки выполните:

```bash
ng serve
```

Откройте браузер и перейдите по адресу `http://localhost:4200/`. Приложение автоматически перезагрузится при изменении исходных файлов.

## Технологии

- **Frontend**: Angular — 20.0.3
- **Язык**: TypeScript — 5.8.3
- **Стили**: SCSS
- **Сборка**: Angular CLI — 20.0.3

## Контакты
- Email: [xoxinweb@gmail.com](mailto:xoxinweb@gmail.com)
- Telegram: [@xonweb](https://t.me/xonweb)
