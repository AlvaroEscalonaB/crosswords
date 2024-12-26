import { CellType, type Cell } from "@custom_types/boardTypes"


export const matrix: Cell[][] = [
  [
    { cellType: CellType.info, information: [
      { text: "Trituradoras", direction: "right", correctWord: "CHANCADORES" },
      { text: "Camello", direction: "below", correctWord: "DROMEDARIO" },
    ] },
    { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "H", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "N", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
      { text: "Dona", direction: "left", correctWord: "DA" },
      { text: "Que persiste en su porfía, inverso", direction: "right", correctWord: "ODURATSET" },
      { text: "\"ola\" desordenada", direction: "below", correctWord: "LAO" },
    ] },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "T", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "T", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "L", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "V", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Residuos del proceso minero", direction: "left", correctWord: "RELAVES" },
        { text: "Fósforo", direction: "right", correctWord: "P" },
      ]
    },
    { cellType: CellType.letter, text: "P", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Abreviatura de equipo universitario", direction: "right", correctWord: "UC" },
        { text: "Asiento para dos o más personas", direction: "below", correctWord: "BANCO" },
      ]
    },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Te apresures a hacer algo", direction: "right", correctWord: "APURES" },
      ]
    },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "P", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Contraseña de un solo uso", direction: "above", correctWord: "OTP" },
        { text: "Onomatopeya de abucheo", direction: "right", correctWord: "BU" },
      ]
    },
    { cellType: CellType.letter, text: "B", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Sistema de transporte de concentrado", direction: "above", correctWord: "STC" },
        { text: "La última narrada", direction: "below", correctWord: "ZETA" },
      ]
    },
  ],
  [
    { cellType: CellType.letter, text: "M", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Sigla de mantenimiento, reparación y revisión en inglés", direction: "left", correctWord: "MRO" },
        { text: "Acido desoxiribonucleico", direction: "right", correctWord: "ADN" },
      ]
    },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "N", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Dios egipcio", direction: "right", correctWord: "RA" },
        { text: "Lo buscan los piratas", direction: "below", correctWord: "SOROSET" },
      ]
    },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Se compone de estados", direction: "above", correctWord: "EEUU" },
      ]
    },
    { cellType: CellType.letter, text: "Z", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Dominio en España", direction: "left", correctWord: "ES" },
        { text: "Materia prima común en perfumería", direction: "below", correctWord: "OUD" },
      ]
    },
    { cellType: CellType.info, information: [
        { text: "Empresa de origen chileno de logistica aeropotuaria y remolcadores (inverso)", direction: "right", correctWord: "MAAS" },
      ]
    },
    { cellType: CellType.letter, text: "M", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Aparece en la biblia", direction: "right", correctWord: "NOE" },
      ]
    },
    { cellType: CellType.letter, text: "N", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Colador, inverso", direction: "below", correctWord: "ZIMAT" },
      ]
    },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Capital de noruega", direction: "right", correctWord: "OSLO" },
        { text: "Comunidad autónoma de españa", direction: "below", correctWord: "RIOJA" },
      ]
    },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "L", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Organización chilena, se dice que no trabajan", direction: "right", correctWord: "CUT" },
      ]
    },
    { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "T", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "Z", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Sogas", direction: "above", correctWord: "CUERDAS" },
        { text: "Nube de AA", direction: "left", correctWord: "AZURE" },
      ]
    },
    { cellType: CellType.info, information: [
        { text: "Deposito de armas", direction: "above", correctWord: "ARSENAL" },
        { text: "Arroyo", direction: "right", correctWord: "RIO" },
      ]
    },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "I", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Instrumento de los ángeles", direction: "below", correctWord: "ARPA" },
      ]
    },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "I", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "I", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "L", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Raro o extravagante que provoca risa, plural", direction: "left", correctWord: "RIDICULOS" },
        { text: "Indicador de objetivos", direction: "below", correctWord: "OKR" },
      ]
    },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Lo que me pertenece, en plural", direction: "below", correctWord: "MIS" },
      ]
    },
  ],
  [
    { cellType: CellType.letter, text: "I", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "M", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "\"Yo soy\" en new york", direction: "left", correctWord: "IM" },
      ]
    },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Nota musical inversa", direction: "left", correctWord: "OD" },
        { text: "Nuestro en Mississipi", direction: "right", correctWord: "US" },
        { text: "Voz de arrullo", direction: "below", correctWord: "RU" },
      ]
    },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "SQLAlchemy puede actuar como uno", direction: "right", correctWord: "ORM" },
      ]
    },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "M", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Existían 3 en AA", direction: "right", correctWord: "JORGE" },
      ]
    },
    { cellType: CellType.letter, text: "J", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "G", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "E", flag: false, currentText: "" },
    { cellType: CellType.info, information: [
        { text: "Indicador de desempeño", direction: "right", correctWord: "KPI" },
      ]
    },
    { cellType: CellType.letter, text: "K", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "P", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "I", flag: false, currentText: "" },
  ],
  [
    { cellType: CellType.info, information: [
        { text: "Posición en AA, femenino plural", direction: "right", correctWord: "TRADUCTORAS" },
      ]
    },
    { cellType: CellType.letter, text: "T", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "D", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "U", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "C", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "T", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "O", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "R", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "A", flag: false, currentText: "" },
    { cellType: CellType.letter, text: "S", flag: false, currentText: "" },
  ]

]
