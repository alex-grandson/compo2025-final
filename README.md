# React Translation App

Приложение для перевода текста с использованием Google Translate API.

## Настройка для разработки

1. Клонируйте репозиторий
2. Установите зависимости:
   ```bash
   npm install
   ```

3. Скопируйте `.env.example` в `.env` и добавьте ваш API ключ:
   ```bash
   cp .env.example .env
   ```

4. Получите API ключ Google Translate:
   - Перейдите в [Google Cloud Console](https://console.cloud.google.com/)
   - Создайте новый проект или выберите существующий
   - Включите Translation API
   - Создайте API ключ
   - Добавьте ключ в файл `.env`

5. Запустите приложение:
   ```bash
   npm start
   ```

## Настройка GitHub Actions для развертывания

1. Перейдите в настройки вашего репозитория на GitHub
2. Выберите Settings → Secrets and variables → Actions
3. Добавьте новый secret с именем `REACT_APP_GOOGLE_TRANSLATE_API_KEY` и вашим API ключом
4. Убедитесь, что в настройках репозитория (Settings → Pages) выбран источник "GitHub Actions"

## Структура проекта

- `src/components/translate.js` - основной компонент перевода
- `src/components/languages.js` - список доступных языков
- `src/components/field.js` - поле ввода
- `.github/workflows/deploy.yml` - конфигурация автоматического развертывания

## Развертывание

Приложение автоматически разворачивается на GitHub Pages при push в ветку `main`.

URL сайта: https://alex-grandson.github.io/compo2025-final
