import type { ProjectCardData } from './types';

export const MOCK_PROJECTS: ProjectCardData[] = [
  {
    id: '0001',
    type: 'CaseProjectRequest',
    tags: [
      { key: 'ml', label: 'Машинное обучение' },
      { key: 'engineering', label: 'Инженерия' },
      { key: 'web', label: 'Веб-разработка' },
    ],
    ownerId: 1,
    partnerId: { value: 'gazprom', verbose: 'Газпром Нефть' },
    status: 'Active',
    meta: {
      title: 'Система предиктивной аналитики для промышленности',
      description: 'Разработка системы прогнозирования отказов оборудования на базе ML-моделей.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'ml', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'ML-инженер', description: '' } },
      { roleId: 'backend', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Backend', description: '' } },
      { roleId: 'frontend', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Frontend', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
  {
    id: '00011',
    type: 'CaseProjectRequest',
    tags: [
      { key: 'mobile', label: 'Мобайл-разработка' },
      { key: 'fintech', label: 'FinTech' },
      { key: 'design', label: 'Дизайн' },
    ],
    ownerId: 1,
    partnerId: { value: 'tbank', verbose: 'Т-Банк' },
    status: 'Active',
    meta: {
      title: 'Мобильное приложение для учета личных финансов',
      description: 'Современное мобильное приложение с интеграцией банковских API и геймификацией.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'ios', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'iOS Dev', description: '' } },
      { roleId: 'android', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Android Dev', description: '' } },
      { roleId: 'designer', placesCount: 1, minPlacesCount: 1, places: [], meta: { name: 'UX/UI Дизайнер', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: true,
    brandColor: 'fedd2c'
  },
  {
    id: '0035',
    type: 'CaseProjectRequest',
    tags: [
      { key: 'web', label: 'Веб-разработка' },
      { key: 'design', label: 'Дизайн' },
    ],
    ownerId: 1,
    partnerId: { value: 'vk', verbose: 'VK' },
    status: 'Active',
    meta: {
      title: 'Платформа для проведения онлайн-хакатонов',
      description: 'Создание масштабируемой платформы для организации соревнований с автоматической проверкой решений.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'frontend', placesCount: 4, minPlacesCount: 1, places: [], meta: { name: 'React Dev', description: '' } },
      { roleId: 'backend', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Node.js Dev', description: '' } },
      { roleId: 'qa', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'QA Engineer', description: '' } },
      { roleId: 'devops', placesCount: 1, minPlacesCount: 1, places: [], meta: { name: 'DevOps', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
  {
    id: '8201',
    type: 'PaidProjectRequest',
    tags: [
      { key: 'web', label: 'Веб-разработка' },
      { key: 'fintech', label: 'FinTech' },
      { key: 'mobile', label: 'Мобайл-разработка' },
      { key: 'ml', label: 'Машинное обучение' },
    ],
    ownerId: 1,
    partnerId: { value: 'tbank', verbose: 'Т-Банк' },
    status: 'Active',
    meta: {
      title: 'Конструктор мероприятий Т-Банка',
      description: 'Конструктор мероприятий Т-банка: трёхкомпонентная система, состоящая из конструктора по созданию мероприятий, веб и мобильной версий для просмотра актуальных мероприятий, скачивания деталей мероприятий для просмотра в оффлайн-режиме, получения уведомлений о мероприятиях.',
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'frontend', placesCount: 5, minPlacesCount: 1, places: [], meta: { name: 'Frontend', description: '' } },
      { roleId: 'backend', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Backend', description: '' } },
      { roleId: 'qa', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Тестировщик', description: '' } },
      { roleId: 'analyst', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Аналитик', description: '' } },
      { roleId: 'ml', placesCount: 1, minPlacesCount: 1, places: [], meta: { name: 'ML-инженер', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },

    EXTENDED: true,
    brandColor: '28be46'
  },
  {
    id: '0001b',
    type: 'RealProjectRequest',
    tags: [
      { key: 'ml', label: 'Машинное обучение' },
      { key: 'engineering', label: 'Инженерия' },
    ],
    ownerId: 1,
    partnerId: { value: 'invitro', verbose: 'Инвитро' },
    status: 'Active',
    meta: {
      title: 'Нейросеть для распознавания медицинских снимков',
      description: 'Разработка CV-моделей для помощи врачам в диагностике заболеваний по рентгеновским снимкам.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'ds', placesCount: 4, minPlacesCount: 1, places: [], meta: { name: 'Data Scientist', description: '' } },
      { roleId: 'mlops', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'ML Ops', description: '' } },
      { roleId: 'backend', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Python Backend', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
  {
    id: '0002',
    type: 'RealProjectRequest',
    tags: [
      { key: 'web', label: 'Веб-разработка' },
      { key: 'design', label: 'Дизайн' },
    ],
    ownerId: 1,
    partnerId: { value: 'tpu', verbose: 'ТПУ ОРПА' },
    status: 'Active',
    meta: {
      title: 'Автоматизация документооборота в университете',
      description: 'Перевод бумажных процессов согласования в электронный вид.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'fullstack', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Fullstack Dev', description: '' } },
      { roleId: 'analyst', placesCount: 1, minPlacesCount: 1, places: [], meta: { name: 'Системный аналитик', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
  {
    id: '0003',
    type: 'PaidProjectRequest',
    tags: [
      { key: 'mobile', label: 'Мобайл-разработка' },
      { key: 'design', label: 'Дизайн' },
      { key: 'engineering', label: 'Инженерия' },
    ],
    ownerId: 1,
    partnerId: { value: 'tpu', verbose: 'ТПУ' },
    status: 'Active',
    meta: {
      title: 'AR-навигатор по кампусу',
      description: 'Мобильное приложение с дополненной реальностью для навигации внутри учебных корпусов.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'unity', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Unity Dev', description: '' } },
      { roleId: '3d', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: '3D Artist', description: '' } },
      { roleId: 'mobile', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Mobile Dev', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
  {
    id: '0004',
    type: 'CaseProjectRequest',
    tags: [
      { key: 'ml', label: 'Машинное обучение' },
      { key: 'engineering', label: 'Инженерия' },
      { key: 'fintech', label: 'FinTech' },
    ],
    ownerId: 1,
    partnerId: { value: 'kaspersky', verbose: 'Лаборатория Касперского' },
    status: 'Active',
    meta: {
      title: 'Анализатор логов безопасности на базе ИИ',
      description: 'Инструмент для выявления аномалий и потенциальных угроз в банковских логах.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'sec', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Security Analyst', description: '' } },
      { roleId: 'ml', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'ML Engineer', description: '' } },
      { roleId: 'backend', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Backend', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
  {
    id: '0005',
    type: 'PaidProjectRequest',
    tags: [
      { key: 'web', label: 'Веб-разработка' },
      { key: 'design', label: 'Дизайн' },
    ],
    ownerId: 1,
    partnerId: { value: 'sber', verbose: 'Сбер' },
    status: 'Active',
    meta: {
      title: 'Корпоративный портал обучения сотрудников',
      description: 'Разработка внутренней платформы для адаптации и обучения новых сотрудников компании.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'frontend', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Frontend', description: '' } },
      { roleId: 'backend', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Backend', description: '' } },
      { roleId: 'design', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'UI/UX Дизайнер', description: '' } },
      { roleId: 'pm', placesCount: 1, minPlacesCount: 1, places: [], meta: { name: 'Product Manager', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
  {
    id: '0006',
    type: 'RealProjectRequest',
    tags: [
      { key: 'engineering', label: 'Инженерия' },
      { key: 'mobile', label: 'Мобайл-разработка' },
      { key: 'web', label: 'Веб-разработка' },
    ],
    ownerId: 1,
    partnerId: { value: 'yandex', verbose: 'Яндекс' },
    status: 'Active',
    meta: {
      title: 'Система умного дома (IoT)',
      description: 'Проектирование и разработка платформы управления устройствами умного дома.'
    },
    checkpoint: { value: 'MVP' },
    roles: [
      { roleId: 'embedded', placesCount: 4, minPlacesCount: 1, places: [], meta: { name: 'Embedded Dev', description: '' } },
      { roleId: 'mobile', placesCount: 3, minPlacesCount: 1, places: [], meta: { name: 'Mobile Dev', description: '' } },
      { roleId: 'backend', placesCount: 2, minPlacesCount: 1, places: [], meta: { name: 'Backend', description: '' } },
      { roleId: 'devops', placesCount: 1, minPlacesCount: 1, places: [], meta: { name: 'DevOps', description: '' } }
    ],
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },
    EXTENDED: false
  },
];