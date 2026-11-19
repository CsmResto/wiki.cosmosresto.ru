---
title: Подключение REDSMS & Twilio
description: Подключение и настройка REDSMS & Twilio для информирования гостей через CosmosResto. 
summary: "Подключение SMS-шлюзов REDSMS и Twilio"
order: 2
updatedAt: 2026-06-01
---

**REDSMS** и **Twilio** — сервисы для автоматической отправки SMS и других уведомлений через API.

Выбор сервиса зависит от региона:
- **[REDSMS](https://redsms.ru/)** - для России.
- **[Twilio](https://www.twilio.com/)** - для всех остальных стран.

## Подключение REDSMS

**Для настройки интеграции с REDSMS запросите у поддержки CosmosResto следующие реквизиты:**
   - URL

**1.** Если у вас ещё нет аккаунта, зарегистрируйтесь в сервисе **REDSMS** и выполните необходимые процедуры для активации отправки SMS. Пополните баланс аккаунта.

**2.** Войдите в настройки пользователя или создайте нового пользователя.

**3.** Перейдите в раздел **Аккаунт → Доступ к разделам** и включите опцию **Отправка сообщений через API**.

![redsms](/ru/images/connection/redsms-twilio-connect/redsms-twilio-connect-1.png)

[[delimiter rows=1]]

**4.** Перейдите в раздел **Ограничения → Ограничения по странам** и установите значение **только Россия**.

![redsms](/ru/images/connection/redsms-twilio-connect/redsms-twilio-connect-2.png)

[[delimiter rows=1]]

**5.** Откройте раздел **HTTP API** и установите следующие настройки:

1. Включите параметр **Callback**
2. Укажите URL, предоставленный поддержкой CosmosResto
3. В списке передаваемых полей выберите: **uuid**, **status**, **status_time**, **clientField**

![redsms](/ru/images/connection/redsms-twilio-connect/redsms-twilio-connect-3.png)

[[delimiter rows=1]]

**6.** Сохраните настройки.

**7.** В разделе **HTTP API** сгенерируйте **API-ключ** и передайте его в поддержку CosmosResto.

**8.** Дождитесь завершения настройки интеграции со стороны CosmosResto.

[[info type=custom color=#E06823]]
Чтобы при отправке SMS отображалось желаемое вами имя отправителя, необходимо зарегистрировать альфа-имя у каждого оператора связи отдельно. Настройка выполняется в REDSMS отдельно.
[[/info]]

## Подключение Twilio

**1.** Если у вас ещё нет аккаунта, зарегистрируйтесь в сервисе **Twilio** и выполните необходимые процедуры для активации отправки SMS. Пополните баланс аккаунта.

**2.** Для настройки интеграции необходимо передать в поддержку CosmosResto следующие данные:
   - Account SID
   - API Key SID
   - API Key Secret
   - Messaging Service SID
   - WhatsApp Messaging Service SID - только если нужны рассылки в WhatsApp

### Account SID

1. Перейдите в раздел **Dashboard → Account Info** (главная страница консоли Twilio)
2. Скопируйте поле **Account SID**.

### API Key SID и API Key Secret

1. Перейдите в раздел **Console → Account → API keys & tokens**
2. Создайте новый ключ **Create API Key**
3. Выберите тип (Standard или Main)
4. После создания показывается:
    - SID (уже не показывается повторно)
    - Secret (показывается один раз, нужно сохранить сразу)

### Messaging Service SID
1. Перейдите в раздел **Console → Messaging → Services**
2. Выберите существующий сервис или создайте новый **Create Messaging Service**
3. Перейдите внутри сервиса в раздел **Overview**
4. Скопируйте поле **Messaging Service SID**

### WhatsApp Messaging Service SID

Нужен, только если планируются рассылки в WhatsApp. Это SID отдельного сервиса для WhatsApp - Messaging Service SID для SMS его не заменяет. Значение начинается с **MG**.

1. Перейдите в раздел **Console → Messaging → Services**.
2. Выберите сервис, который используется для WhatsApp, или создайте новый.
3. Скопируйте поле **Messaging Service SID** этого сервиса.

[[info type=custom color=#E06823]]
Передайте все собранные реквизиты в поддержку CosmosResto и дождитесь завершения настройки интеграции. Мы проинформируем вас о дальнейших шагах.
[[/info]]

[[delimiter rows=3]]

---
