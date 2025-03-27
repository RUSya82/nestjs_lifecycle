# Код для статьи на сайте wp-lancer.ru
## Статья - https://wp-lancer.ru/middleware-pipes-guards-interceptors-tsikl-zaprosa-v-nest-js/

Ветки репозитория расположены по разделам статьи - middlewares, pipes, guards, interceptors

## Установите зависимости

```bash
$ npm install
```

## Запустите проект

```bash
# development
$ npm run start
или
# watch mode
$ npm run start:dev
```
## Тестирование middlewares
Переходим в ветку middlewares
С помощью Postman или Insomnia сделайте GET запрос по адресу http://localhost:3000/users/
Отработку middlewares можно увидеть в консоли IDE

## Тестирование Pipes
Переходим в ветку pipes
С помощью Postman или Insomnia сделайте GET запрос по адресу http://localhost:3000/users/35
Отработку middlewares можно увидеть в консоли IDE
Вместо 35 - любое число, и тогда запрос пройдёт, если вместо числа любые символы -
будет ошибка 400. Это срабатывает стандартный ParseIntPipe

Аналогичное поведение для Patch запроса по тому же url - проверяем отработку самописного
MyParseIntPipe

Запросом Delete по url http://localhost:3000/users/67c70327eada057ac36916a2
Проверяем отработку IsMongoIdPipe. В качестве параметра подойдёт любая строка,
подходящая под MongoId. Если из параметра убрать один символ - валидация пройдена не будет

GET -запросом на http://localhost:3000/users/
Проверяем отработку стандартного DefaultValuePipe, в ответе можно будет увидеть, что по-умолчанию передается query asc=true

## Тестирование Guards
Переходим в ветку guards
В Postman или Insomnia ставим заголовок запроса token, равный cat
Если токен есть, то запрос проходит, если его нет, то получаем 403

