
import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,    
    docker,
  } from "../assets/";

export const navLinks = [
    {
        id: "home",
        title: "Главная"
    },
    {
        id: "skills",
        title: "Навыки"
    },
    {
        id: "experience",
        title: "Опыт"
    },
    {
        id: "contact",
        title: "Контакт"
    }
]
export const skills = [
    {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "docker",
        icon: docker,
      },
]

export const experiences = [
    {
      title: "Стажер IT отдела",
      company_name: "АО Фармстандарт",
      iconBg: "#383E56",
      date: "Сентябрь 2020 - Февраль 2021",
      points: [
        "Автоматизация задач при помощи скриптов, работа с виртуальными серверами Linux."
      ],
    },
    {
      title: "Fullstack разработчик",
      company_name: "Irdeto",
      iconBg: "#E6DEDD",
      date: "Февраль 2021 - Июль 2021",
      points: [
        "Работа по устранению багов системы и добавлению нового функционала используя React и nodeJS.",
        "Тестирование с использованием CI/CD, создание Jest тестов."
      ],
    },
    {
      title: "Backend разработчик",
      company_name: "Pluxbox",
      iconBg: "#383E56",
      date: "Февраль 2022 - Июль 2022",
      points: [
        "Cоздание веб блоков для онлайн конструктора и создание мониторинговой системы для облачного сервиса на базе ELK Stack.",
        "Работа с Docker контейнерами."
      ],
    },
    {
      title: "Разработчик микросервисов",
      company_name: "AS Watson Group",
      iconBg: "#E6DEDD",
      date: "Февраль 2023 - Июль 2023",
      points: [
        "разработка микросервисов для обработки и передачи данных в режиме реального времени на базе Kafka.", 
        " Миграция c Apache Kafka на Confluent Kafka с подключением к MongoDB.",
      ],
    },
  ];