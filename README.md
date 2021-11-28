## anapa-hostel
### Web-приложение для хостела

Данное приложение разработано для [Отеля](https://vk.com/gostevoy_dom_b). В функционал заложены: бронирование пользователями номеров, оповещение клиентов об осуществлённых ими бронированиях по sms и email, учёт всех бронирований с возможностью их редактирования администратором, возможность оставления клиентами отзывов и их модерацией в панели администратора, учет уборки номеров, контроль заполняемости комнат для автоматизации задач администратора. Часть компонентов реализована с помощью реакт-анимации. Также добавлена адаптивная версия приложения для мобильных устройств. 

#### Клиентская часть:
![](/readme/header_booking_map.png)
- Шапка сайта
- Форма проверки доступности номеров на выбранные даты
- Сладйер
- Интерактивная карта 

![](/readme/info_why.png)
- Информационный блок

![](/readme/photo.png)
- Интерактинвый коллаж с различными фотографиями

![](/readme/modal.png)
- Модальное окно с подробной информацией по каждой котегории номеров

![](/readme/header.png)
- Подвал сайта с анимироваными компонентами

![](/readme/reviewsr.png)
- Компонент с отзывами прошедшими модерацию

![](/readme/search.png)
- Страница выбора номера на свободные даты

![](/readme/boocking_form.png)
- Форма бронирования номера

#### Панель управления:
![](/readme/admin_main_page.png)
- Просмотр актуальных бронирований, с возможностью изменить состояние бронирования и добавление комментария.

![](/readme/admin_form.png)
- Форма добавления гостей пришедших непосредственно в хостел

![](/readme/rooms.png)
- Cтраница с информацией по номерам, с дополнительной информацией

![](/readme/cleaning.png)
- Cтраница с информацией по уборке номеров

![](/readme/navigation.png)
- Навигация по админ-панели

![](/readme/admin_reviews.png)
- Cтраница модерирования отзывов


## Стек технологий:
JavaScript

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express, Sessions, Bcrypt, Cors

**Front**: React + Redux, Redux Saga, SVG, HTML5, SCSS/CSS, UI Kit


## Планы развития:
* Полнофункциональное внедрение оплаты


### Установка:
В директории 2 папки:
* **server/** Отвечает за back-end. 
   * cd server
   * npm ci
   * npx sequelize db:create
   * npx sequelize db:migrate
   * npx sequelize db:seed:all
   * npm run seed admin 123456 // создание администратора
   * npm run dev
* **client/** - front-end. 
   * cd client 
   * npm ci
   * npm start