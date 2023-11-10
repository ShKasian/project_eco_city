'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          title: 'Тайская авиакомпания переоденет стюардесс в форму из переработанных бутылок',
          body: 'Авиакомпания Thai Airways представила новую униформу для женщин-бортпроводников, сообщает АТОР. Ее главная особенность – в экологичности. Форма на 70 процентов состоит из переработанных волокон, полученных в том числе из пластиковых бутылок ПЭТ, оставленных в самолетах. А на остальные 30 процентов – из традиционного тайского шелка. Отмечается, что на один комплект расходуются 54 пластиковые бутылки. Новая "экологичная" форма будет введена в действие с 1 января 2024 года. Предполагается, что к концу следующего года в нее переоденутся около 2100 бортпроводниц Thai Airways.',
          img: 'https://cdnn21.img.ria.ru/images/07e7/0a/1b/1905684016_0:105:865:591_600x0_80_0_0_ce8fb2e07f5253492942c148ac9f6bc3.jpg.webp',
        },
        {
          title: 'Раздельный сбор мусора стал доступен почти 60% населения России',
          body: 'Услуга раздельного сбора бытовых отходов по итогам первой половины 2023 года стала доступна для 59,7% населения России в 77 регионах, сообщили в пресс-службе Российского экологического оператора. "РЭО провел мониторинг, в ходе которого было выявлено, что в целом по России раздельным накоплением ТКО (твердых коммунальных отходов - ред.) охвачено 59,7% населения (плюс 3% к началу 2023 года) в 77 субъектах РФ, это 87,4 миллиона человек", - цитирует пресс-служба гендиректора компании Дениса Буцаева. Он также отметил, что по итогам первого полугодия для раздельного накопления в стране оборудовано 204 тысячи контейнерных площадок с 358 тысячами контейнерами. ',
          img: 'https://bgpravda.ru/wp-content/uploads/2022/07/punkt-razdelnogo-sbora-othodov-chelny-1090x730-1.jpg',
        },
        {
          title: 'Свыше шести тысяч кубометров мусора убрали в лесах Подмосковья в августе',
          body: 'В лесах Московской области убрали свыше шести тысяч кубометров мусора за вторую и третью декаду августа, сообщает пресс-служба комитета лесного хозяйства региона. "Август прошел с хорошим результатом уборки мусора в лесах - за вторую и третью его декаду силами муниципальных образований вывезено 6218,5 кубометра отходов. Всего с десятого апреля уже ликвидировали 614 навалов общим объемом 15840 кубометра сказал курирующий Комлесхоз зампред правительства Подмосковья Георгий Филимонов. Он добавил, что среди муниципалитетов, которые еще в начале месяца были в отстающих, наметилась позитивная динамика, а некоторые существенно продвинулись в очистке лесных территорий от мусора. Это городские округа Богородский, Волоколамский, Домодедово, Шатура и Электросталь.',
          img: 'https://cdnn21.img.ria.ru/images/49741/14/497411437_0:0:2990:2000_1440x900_80_1_1_045e03f3abcc7618dce3fc6f434656ce.jpg.webp?source-sid=rian_photo',
        },
        {
          title: 'Оператор мусорной реформы предложил закон о запрете смешивать отходы',
          body: 'В организации считают, что только изменения в законодательстве помешают собирать отходы из разных контейнеров в один мусоровоз, как это часто происходит сейчас. В этом случае операторы будут нести ответственность. Госкомпания «Российский экологический оператор» (РЭО) подготовила дополнения в действующее законодательство, в которых предлагается запретить региональным операторам смешивать раздельно собранные отходы, говорится в сообщении организации. Там пояснили, что в систему «РЭО Радар» поступают сообщения о том, что при вывозе мусора отходы из всех контейнеров сваливают в один грузовик. «Это недопустимая ситуация с учетом того, что задача внедрять по всей стране раздельный сбор отходов поставлена президентом. Те региональные операторы, которые недобросовестно подходят к транспортировке раздельно собранных ТКО, должны нести ответственность за свои действия», — заявил генеральный директор РЭО Илья Гудков.',
          img: 'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/6/09/755847104459096.jpeg',
        },
        {
          title: 'Мир без мусора: как страны утилизируют пищевые, бытовые и электронные отходы',
          body: 'Человечество ежегодно производит миллиарды тонн отходов, нанося серьезный ущерб природе и превращая города в огромные свалки мусора. На этом фоне в мире возникает все больше инициатив по эффективной утилизации вторсырья. В Международный день за мир без отходов, который в этом году отмечается впервые, Служба новостей ООН совместно с Программой ООН по окружающей среде рассказывает о странах, которым удалось добиться больших успехов в сортировке, сборе и переработке мусора.Индия - Проезжая по чистым улицам индийского города Индора, невозможно не заметить маленькие, яркие мусоровозы. Их задние отсеки представляют собой лоскутное одеяло из шести сочных цветов, напоминающее картину в стиле поп-арт. Каждое цветное отделение предназначено для определенного вида отходов. Несколько лет назад, благодаря усилиям правительства и активистов, жители Индора обязались добиваться «нулевых отходов» и сортировать свой мусор по шести категориям, рассказывает городской консультант Таня Мукерджи.',
          img: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/26-07-2022-Istanbul-Turkey-03.jpg/image1170x530cropped.jpg',
        },
        {
          title: 'В Пермском крае построили новый комплекс обработки ТКО',
          body: 'На территории Березниковского городского округа в Пермском крае построили новый комплекс обработки твёрдых коммунальных отходов. «В 2024 году работа по созданию мощностей на территории Пермского края будет продолжена. Развитие инфраструктуры ТКО направлено на повышение качества жизни и экологического благополучия жителей края», — заявил генеральный директор РЭО Денис Буцаев. Со своей стороны, заместитель гендиректора РЭО Евгений Карелов отметил, что с запуском нового комплекса суммарная мощность объектов обработки ТКО, введённых в рамках федерального проекта в Пермском крае, достигла 345 тыс. т в год. Ранее сообщалось, что в Ярославской области в Рыбинском и Ростовском районах построят два мусоросортировочных комплекса мощностью 100 тыс. т. Российский экологический оператор вложит в проект 440 млн рублей.',
          img: 'https://mf.b37mrtl.ru/russian/images/2023.10/article/65411b0c02e8bd1aa13e2310.jpg',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Initiatives',
      [
        {
          title: 'ВЫБИРАЙТЕ ЭКОЛОГИЧНЫЙ ТРАНСПОРТ',
          body: 'Самые полезные для людей и для природы способы передвижения – прогулки пешком и поездки на велосипеде. Меньше вреда окружающей среде будет и при выборе общественного транспорта вместо автомобиля. Но, если все-таки без автомобиля вам не обойтись, воспользуйтесь советами экологов, которые помогут сократить расход топлива и уменьшить воздействие на окружающую среду. Во-первых, заботьтесь об автомобиле не только тогда, когда что-то барахлит: вовремя проходите техосмотр, меняйте воздушные фильтры, моторное масло и свечи зажигания. Во-вторых, старайтесь придерживаться постоянной скорости и не превышать допустимый предел – езда на 100 км/ч вместо 120 км/ч сэкономит 20% топлива. Если делаете остановку больше минуты, выключайте двигатель. И поддерживайте необходимое давление в колесах: не до конца надутые колеса производят большее сопротивление и, как следствие, увеличивают расход топлива.',
          img: 'https://34travel.me/media/upload/images/2018/may/ecotransport/IMG_5109.jpg',
          userId: 1,
        },
        {
          title: 'ИСПОЛЬЗУЙТЕ ПОВТОРНО И НЕ БЕРИТЕ ЛИШНЕЕ',
          body: 'Сокращать отходы не менее важно, чем правильно их перерабатывать. Сегодня практически всему одноразовому, есть многоразовая альтернатива. Покупайте меньше того, что почти сразу полетит в мусорное ведро: одноразовые стаканчики замените на термос или термокружку, продукты в дополнительной упаковке – на те, что на развес (используйте авоськи, собственную тару, тканевые мешочки). Попробуйте не выкидывать качественную упаковку и найти ей новое применение – это поможет избавиться и от необходимости что-то покупать, и что-то выбрасывать.',
          img: 'https://medservise24.ru/upload/img/30-04-20/2.jpg',
          userId: 1,
        },
        {
          title: 'ВНЕДРЯЙТЕ ЭКО-ПРИВЫЧКИ НА РАБОТЕ',
          body: 'Станьте проводником в мир экологической жизни для коллег! Откажитесь от лифта в пользу лестницы, не забывайте выключать компьютер в конце рабочего дня, берите с собой многоразовые ланч-боксы и термокружки. Все удивятся, как преобразится офис, если предложить заняться его озеленением, начать коллективно разделять мусор на бумагу, пластик и стекло; предложить проводить в хорошую погоду совещания в ближайшем парке – смена рабочей обстановки не только улучшит самочувствие, но и повысит продуктивность.',
          img: 'https://bcdn.products.pcc.eu/wp-content/uploads/2022/08/FOT2-ekologia.jpg',
          userId: 1,
        },
      ],

      {},
    );

    await queryInterface.bulkInsert(
      'CategoryFactories',
      [
        {
          name: 'ПЛАСТИК',
        },
        {
          name: 'СТЕКЛО',
        },
        {
          name: 'БУМАГА',
        },
        {
          name: 'МЕТАЛЛ',
        },
        {
          name: 'ОРГАНИКА',
        },
        {
          name: 'ЭЛЕКТРОНИКА',
        },
      ],

      {},
    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
