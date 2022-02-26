const prices = [
    {
        id: 1,
        name: 'Косметический',
        price: '2500',
        description: 'Если нужно срочно обновить состояние вашей квартиры',
        text: 'Ремонтно-отделочные работы без необходимости внесения каких-либо изменений в инженерные системы в помещении квартиры, либо изменения ее конструктивных элементов',
        works: [
            {
                id: 1,
                name: 'Частичный демонтаж'
            },
            {
                id: 2,
                name: 'Подготовка стен'
            },
            {
                id: 3,
                name: 'Оклейка стен и потолка обоями'
            },
            {
                id: 4,
                name: 'Монтаж натяжного одноуровнего потолка'
            },
            {
                id: 5,
                name: 'Монтаж розеток, плинтусов и пр.'
            },
            {
                id: 6,
                name: 'Прочие работы'
            },
        ]
    },
    {
        id: 2,
        name: 'Стандартный',
        price: '4500',
        description: 'Подходит, если нужно провести плановый ремонт квартиры',
        text: 'Работы связанные с фактическим изменением всей отделки помещения, с частичной перепланировкой и заменой инженерных сетей (электрики и сантехники)',
        works: [
            {
                id: 1,
                name: 'Всё что входит в Косметический ремонт +'
            },
            {
                id: 2,
                name: 'Частичное штробление'
            },
            {
                id: 3,
                name: 'Установка дверей'
            },
            {
                id: 4,
                name: 'Монтаж напольного покрытия'
            },
            {
                id: 5,
                name: 'Монтаж натяжных потолков'
            },
            {
                id: 6,
                name: 'Прочие работы'
            },
        ]
    },
    {
        id: 3,
        name: 'Капитальный',
        price: '8500',
        description: 'Нужен, когда необходимо полностью отремонтировать "под ключ"',
        text: 'Это работы с полной заменой покрытий помещения с заменой отдельных конструктивных элементов квартиры и обязательным составлением дизайн-проекта',
        works: [
            {
                id: 1,
                name: 'Всё что входит в Стандартный ремонт +'
            },
            {
                id: 2,
                name: 'Установка ПВХ окон'
            },
            {
                id: 3,
                name: 'Капитальный ремонт пола'
            },
            {
                id: 3,
                name: 'Замена сантехники и электрики "От щитка"'
            },
            {
                id: 3,
                name: 'Монтаж натяжных ПВХ потолков и из ГВЛ'
            },
            {
                id: 3,
                name: 'Прочие работы'
            },
        ]
    },
]

const services = [
    {
        id: 1,
        name: 'Демонтаж',
        description: 'Первый и обязательный этап любого ремонта квартиры в новостройке или хрущёвке, при котором убираются перегородки, обои, напольные покрытия и декоративные панели, гипсокартонные потолки и многое другое.'
    },
    {
        id: 2,
        name: 'Возведение перегородок',
        description: 'Сооружение легких межкомнатных перегород из материалов с небольшим удельным весом, в помещениях со свободной планировкой. Рекомендуется дизайн-проект.'
    },
    {
        id: 3,
        name: 'Электромонтажные работы',
        description: 'Специальные строительные работы, выполняемые при выполнении ремонтных работ и связанные с монтажом электрических сетей. Это прокладка и замена проводки, смена, ремонт, установка защитного оснащения (УЗО), щита, счетчика, введение источников питания в эксплуатацию.'
    },
    {
        id: 4,
        name: 'Заливка стяжки пола',
        description: 'Это черновая основа для напольного покрытия, с помощью которой создается ровное, прочное, долговечное основание. Без нее не обходится практически ни один ремонт.'
    },
    {
        id: 5,
        name: 'Монтаж инженерной сантехники',
        description: 'Представляет собой весь спектр труб, фитингов для системы водоснабжения, канализации и отопления. Является самой оснасткой систем коммуникаций, от работы которой зависит удобство и комфортность проживания жильцов.'
    },
    {
        id: 6,
        name: 'Штукатурка стен',
        description: 'Обработка поверхностей стен после штробления и сокрытия трещин. Выравнивание стен из бетона, кирпича и прочих материалов.'
    },
    {
        id: 7,
        name: 'Укладка плитки санузлов',
        description: 'Подготовка основания, гидроизоляция и выполнение укладки плитки по уровню с использованием специальных присадок и пластификаторов.'
    },
    {
        id: 8,
        name: 'Монтаж конструкций ГКЛ',
        description: 'Монтаж двух- и многоуровневые потолки самой сложной конфигурации, оформление арочных и дверных проемы, осуществление любых перепланировок помещения, создание различных декоративных конструкций.'
    },
    {
        id: 11,
        name: 'Шпатлевка стен и потолков',
        description: 'Важный аспект ремонта, при котором формируется финишный слой на котором проводятся работы декорирования стен и потолка обоями, покраской и прочими материалами.'
    },
    {
        id: 12,
        name: 'Покраска потолков',
        description: 'Альтернатива натяжным потолкам, когда или нет технической возможности или целесообразности в них. Работы проводятся ручным способом и имеют возможность имитации под натуральные материалы.'
    },
    {
        id: 13,
        name: 'Укладка напольного покрытия',
        description: 'Укладка напольных покрытий с соблюдением всех установленных производителем технических норм и требований методами сплошного приклеивания и с фиксацией к основанию.'
    },
    {
        id: 14,
        name: 'Поклейка обоев',
        description: 'Один из основных этапов ремонтных и отделочных работ. Оклейка виниловыми, акриловами, текстильными материалами или стеклообоями.'
    },
    {
        id: 15,
        name: 'Установка дверей',
        description: 'Монтаж дверного короба, доборов, наличников и полотна с установкой фурнитуры. Предварительная консультация по вопросу выбора подходящего полотна.'
    },
    {
        id: 16,
        name: 'Установка оконных блоков',
        description: 'Установка окон в соответствии с нормами СНИП с долгосрочной гарантией на работы. Используем только высококачественные материалы для работ (ПСУЛ, пена монтажная, изоляция и пр.)'
    },
    {
        id: 17,
        name: 'Монтаж плинтусов и багета',
        description: 'Установка угловых соединений потолочными и напольными декоративными элементами в соответствии с дизайнерской задумкой.'
    },
    {
        id: 18,
        name: 'Монтаж бытовой сантехники',
        description: 'Установка смесителей, отводов и тройников для последующего подключения стиральной машины и прочих агрегатов.'
    },
    {
        id: 19,
        name: 'Монтаж натяжных потолков',
        description: 'Установка натяжных потолков за один день клиновой, гарпунной или клипсовой технологией. Работы проводятся безопасным способом и с полной чистотой процесса.'
    },
]

export const useServices = {
    prices,
    services
}
