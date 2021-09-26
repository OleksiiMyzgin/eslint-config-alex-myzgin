# Eslint и Prettier настройки

Это мои настройки для ESLint и Prettier

[English](./readme.md) / Russian

Не переживай, ты всегда можешь их изменить.

## Что оно делает

* Анализирует JavaScript на основе последних стандартов;
* Исправляет проблемы и ошибки форматирования с Prettier;
* Анализирует + исправляет внутри тегов HTML-скрипта;
* Анализирует + исправляет React через eslint-config-airbnb;
* Ты можешь увидеть все [правила здесь](https://github.com/OleksiiMyzgin/eslint-config-alex-myzgin/blob/main/.eslintrc.js). Также можно перезаписать любые из этих настроек или просто выполнить форк целиком, чтобы создать свои собственные.

## Установка

Ты можешь использовать eslint глобально и/или локально для каждого проекта.

## Локальная установка / установка в рамках проекта

1. Если у тебя ещё нет файла `package.json`, создайте его с помощью `npm init`.

2. Далее нужно установить все необходимое по конфигу:

```
npx install-peerdeps --dev eslint-config-alex-myzgin
```

1. Ты увидишь в своем `package.json` большой список `devDependencies`.

2. Создайте файл `.eslintrc` в корне каталога своего проекта (он должен находиться там же, где находится `package.json`). Твой файл `.eslintrc` должен выглядеть так:

```json
{
  "extends": [ "alex-myzgin" ]
}
```

Для TypeScript проектов используй `alex-myzgin/typescript`.

```json
{
  "extends": [ "alex-myzgin/typescript" ]
}
```

Пользователям TypeScript также понадобится файл `tsconfig.json` в своем проекте. Пустой объект `{}` подойдет, если это новый проект.

Совет: Ты также можешь поместить этот объект в свой `package.json` под свойством ` "eslintConfig": `.

5. Ты можешь добавить два скрипта в свой package.json для lint и/или fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
},
```

6. Теперь можешь вручную выполнить анализ кода, запустив `npm run lint`, и исправить все исправимые проблемы с помощью `npm run lint: fix`.

## Настройки

Если ты хочешь перезаписать настройки eslint или prettier, можешь добавить правила в свой файл `.eslintrc`. [Правила ESLint](https://eslint.org/docs/rules/) идут непосредственно в разделе `"rules"`, а [настройки prettier](https://prettier.io/docs/en/options.html) идут в разделе `"prettier/prettier"`. Обрати внимание, что правила `prettier` перезаписывают всё, что есть в моей конфиге (trailingComma и singleQuote), поэтому тебе также нужно будет включить их.

```js
{
  "extends": [
    "alex-myzgin"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 80,
        "tabWidth": 2,
      }
    ]
  }
}
```

## VS Code

**Ты должен прочитать все это!**

После того, как ты выполнил одну или обе из указанных выше установок. Вероятно, ты захочешь, чтобы твой редактор исправлял все за тебя. Вот инструкции для VS Code:

1. Установи [пакет ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Теперь тебе нужно настроить некоторые параметры VS Code через `Code/File` → `Preferences` → `Settings`. Эти настройки проще ввести при редактировании файла `settings.json`, поэтому щелкните значок Open (Open Settings) в правом верхнем углу:

```js
  // Это все мои конфиги с автосохранением
  "editor.formatOnSave": true,
  // отключите его для JS и JSX, мы сделаем это через eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // показать значок eslint на нижней панели инструментов
  "eslint.alwaysShowStatus": true,
  // указать плагину ESLint запускаться при сохранении
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

После первой попытки анализа файла тебе может потребоваться нажать `ESLint` в правом нижнем углу и выбрать `Разрешить везде (Allow Everywhere)` в окне предупреждения.

Возможно тебе также нужно будет перезапустить VS code.

## Create React App

1. Запусти `npx install-peerdeps --dev eslint-config-alex-myzgin`.
2. Распакуй и открой свой `package.json` и поменяй `"extends": "react-app"` на `"extends": "alex-myzgin"`.

## Gatsby

1. Запусти `npx install-peerdeps --dev eslint-config-alex-myzgin`.
2. Если у тебя есть файл `.prettierrc`, удали его.
3. Следуй главе `Локальная установка / установка в рамках проекта`, шаг выше.

## JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc)

Если ты ранее настроивал ESLint для работы через File Watcher, [выключи его.](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher)

### Если ты выбрал локальную установку / установку для каждого проекта

1. Откройте конфигурацию ESLint, перейдя в File > Settings (Edit > Preferences для Mac) > Languages & Frameworks > Code Quality Tools > ESLint (при желании просто выполни поиск в настройках для "eslint").
1. Выбери **Automatic ESLint Configuration**.
1. Выбери **Run eslint --fix on save**.

### Если ты выбрал глобальную установку

Следующие шаги предназначены для типичной глобальной установки Node/ESLint. Если у тебя есть индивидуальная настройка, обратись к документации JetBrains для получения дополнительной информации.[ESLint Configuration Options](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_manual_configuration).

1. Откройте конфигурацию ESLint, перейдя в File > Settings (Edit > Preferences для Mac) > Languages & Frameworks > Code Quality Tools > ESLint (при желании просто выполни поиск в настройках для "eslint").
2. Выбери **Manual ESLint configuration**.
3. Выбери свой **Node interpreter** из обнаруженных установок.
4. Выбери глобальный **ESLint package** из раскрывающегося списка.
5. Оставь Configuration файл как **Automatic Search**.
6. Выбери **Run eslint --fix on save**.

### Убедись, что плагин Prettier отключен, если он установлен

1. Открой конфигурацию Prettier, перейдя в File > Settings (Edit > Preferences для Mac) > Languages & Frameworks > Code Quality Tools > Prettier (при желании просто выполни поиск в настройках для "prettier").
2. Сними флажки **On code reformat** и **On save**
3. *Необязательно, НО ВАЖНО:* Если у тебя включено расширение Prettier для других языков, таких как CSS и HTML, отключите его для JS, поскольку мы делаем это через Eslint.
    1. Убедись, что **Run for files** glob не включает `js,ts,jsx,tsx`.
    2. Пример glob для styles, config, и markdown. `{**/*,*}.{yml,css,sass,md}`.

## Typescript

Те же инструкции, что и выше, только убедись, что ты использовал `alex-myzgin/typescript`, а не просто `alex-myzgin`.

## Yarn

Он должен работать, но если они не отображаются в твоем package.json, попробуй `npx install-peerdeps --dev eslint-config-alex-myzgin -Y`
