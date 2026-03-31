# CSM Wiki

Статическая корпоративная wiki на Next.js для деплоя в GitHub Pages.

## Как это работает

- Контент хранится по локалям: `content/ru/**/*.md` и `content/en/**/*.md`.
- URL всегда начинается с локали: `/ru/...` или `/en/...`.
- Каждый Markdown-файл становится отдельной страницей wiki внутри своей локали.
- Главная (`/`) редиректит на дефолтную локаль (`/ru`).
- Приложение собирается в статический `out/` через `next build` (`output: export`).

## Формат контента

Пример файла `content/ru/getting-started.md`:

```md
---
title: Быстрый старт
description: Как начать работу с вики
order: 10
updatedAt: 2026-03-06
---

# Добро пожаловать в CSM Wiki
```

- `title` обязателен только для красивого названия. Если нет, заголовок будет собран из slug.
- `description` показывается в каталоге и на странице документа.
- `order` используется для сортировки в каталоге (меньше = выше).

## Структура папок и index.md

- Папка в `content/<locale>/...` считается разделом в навигации.
- Название папки по умолчанию формируется из slug, но его можно переопределить.
- Чтобы задать красивое название раздела, добавьте файл `index.md` внутри папки и укажите `title` в frontmatter.
- Чтобы добавить описание раздела, укажите `description` в `index.md`.
- `title` и `description` из `index.md` используются в навигации и списках.
- `index.md` не отображается в списке страниц, но доступен по URL папки.
- Страница `index.md` остается доступной по URL папки.

Пример:

- `content/ru/guide/index.md` -> `/ru/guide`
- `content/en/guide/index.md` -> `/en/guide`
- `title` в `index.md` будет использован как имя раздела для каждой локали.
- `description` в `index.md` будет показан под названием раздела.

## Работа с локалями для контент-редактора

1. Создайте страницу на русском в `content/ru/...`.
2. Скопируйте файл в такой же путь внутри `content/en/...`.
3. Переведите только текст, `slug` в пути должен остаться одинаковым между языками.
4. Технический писатель обязан задублировать страницу в обеих локалях, даже если перевод еще не готов.
5. Если для второй локали не хватает времени или нужно доп. ревью перевода, используйте Empty State.

Пример:

- `content/ru/getting-started.md` -> `/ru/getting-started`
- `content/en/getting-started.md` -> `/en/getting-started`

## Empty State в Markdown

Чтобы показать заглушку в Markdown, добавьте на отдельной строке:

```md
[[empty-state]]
```

Можно задать свой текст (обычно на нужной локали):

```md
[[empty-state: This page is being drafted, we will publish it soon.]]
```

## Картинки в Markdown

Где хранить:

- Складывайте изображения в `public/<locale>/images/...`.
- Так ссылки остаются относительными и корректно работают и локально, и на GitHub Pages (из-за `basePath`).

Как ссылаться:

- Используйте относительные пути до папки `images` внутри своей локали.
- Абсолютные пути вида `/images/...` не подходят для GitHub Pages.
- В альтернативном тексте (`![…]`) описывайте, что на изображении.

Примеры:

- Файл `content/ru/getting-started.md` (URL `/ru/getting-started`):
  `![Схема](../images/getting-started/overview.png)`
- Файл `content/ru/guide/setup.md` (URL `/ru/guide/setup`):
  `![Схема](../../images/guide/setup/overview.png)`

Если картинка нужна в двух языках, положите копию в обе папки:

- `public/ru/images/...`
- `public/en/images/...`

## Локальный запуск

```bash
npm ci
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка и деплой на GitHub Pages

- Workflow: `.github/workflows/deploy.yml`
- Запуск: push в `main`
- Артефакт деплоя: папка `out/`

Важно:

- В `next.config.ts` `basePath` вычисляется автоматически из `GITHUB_REPOSITORY` в CI.
- Для локальной разработки `basePath` пустой.
- Для `gh-pages` используется статический экспорт (`output: export`) и `trailingSlash: true`, поэтому локализованные маршруты (`/ru/...`, `/en/...`) деплоятся без middleware.

Проверка перед push:

```bash
npm run lint
npm run build
```
