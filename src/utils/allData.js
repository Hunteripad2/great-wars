"use strict";

const allData = {
  scenarioFirst: [
    {
      storyLine: ["Historical"],
      date: "Январь 1910г.",
      map: "map",
      events: [
      ]
    }
  ],

  scenarioSecond: [
    {
      storyLine: ["Historical"],
      date: "Январь 1924г.",
      map: "map",
      events: [
      ]
    },
  ],

  scenarioThird: [
    {
      storyLine: ["Historical"],
      date: "Январь 1934г.",
      map: "map-1934-01-historical",
      defaultMusic: [
        {
          name: "Музыка 1",
          src: "example1.ogg",
        },
      ],
      events: [
        {
          name: "Название события номер 2",
          desc: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Первая опция",
          type: "info",
          icon: "red-circle",
          positionX: "450px",
          positionY: "550px",
        },
        {
          name: "Название события номер 3",
          desc: "Описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Первая опция",
          type: "info",
          icon: "red-circle",
          positionX: "600px",
          positionY: "600px",
        },
        {
          name: "Название музыкального события",
          desc: "Описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Первая опция",
          option2: "Добавить в список",
          type: "music",
          icon: "red-circle",
          positionX: "380px",
          positionY: "450px",
          musicUnlockName: "Музыка 2",
          musicUnlockSrc: "example2.ogg",
        },
      ]
    },
    {
      storyLine: ["Historical", "Test"],
      date: "Февраль 1934г.",
      map: "map-1934-01-historical.png",
      events: [
        {
          name: "Название альтернативного события",
          desc: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Первая опция",
          type: "info",
          icon: "red-circle",
          positionX: "600px",
          positionY: "550px",
        },
      ]
    },
    {
      storyLine: ["Historical"],
      date: "Февраль 1934г.",
      map: "map-1934-01-historical.png",
      events: [
        {
          name: "Название события номер 4",
          desc: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Первая опция",
          type: "info",
          icon: "red-circle",
          positionX: "600px",
          positionY: "550px",
        },
      ]
    },
  ],
}

export default allData;