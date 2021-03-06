const game = {
  // Generic Game Info
  info: {
    title: "1886",
    designer: "Michael Bear Cub",
    background: "water",
    width: 150,
    titleX: 975,
    titleY: 2125,
    extraTotalHeight: 100,
    currency: "JPY"
  },

  // Extra Tokens
  tokens: ["Round"],

  // Need an IPO sheet
  ipo: true,

  bank: "$12,000",

  players: [
    {
      number: 3,
      certLimit: 20,
      capital: "$800"
    },
    {
      number: 4,
      certLimit: 16,
      capital: "$600"
    },
    {
      number: 5,
      certLimit: 13,
      capital: "$480"
    },
    {
      number: 6,
      certLimit: 11,
      capital: "$400"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Pennsylvania",
      abbrev: "PRR",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "green",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "New York Central",
      abbrev: "NYC",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "black",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Canadian Pacific",
      abbrev: "CPR",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "red",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Baltimore & Ohio",
      abbrev: "B&O",
      tokens: ["Free", "$40", "$100"],
      color: "blue",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Chesapeake & Ohio",
      abbrev: "C&O",
      tokens: ["Free", "$40", "$100"],
      color: "cyan",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Erie",
      abbrev: "ERIE",
      tokens: ["Free", "$40", "$100"],
      color: "yellow",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "New York, New Haven & Hartford",
      abbrev: "NYNH",
      tokens: ["Free", "$40"],
      color: "orange",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Boston & Maine",
      abbrev: "B&M",
      tokens: ["Free", "$40"],
      color: "brown",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 6,
      price: "$80",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 5,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "4",
      quantity: 4,
      price: "$300",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by D"
        }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "$450",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "$630",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "D",
      quantity: 6,
      price: "$1100",
      color: "brown",
      description: "Cost $800 when trading in a 4T, 5T or 6T",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  privates: [
    {
      name: "Schuylkill Valley",
      price: "$20",
      revenue: "$5",
      description: ""
    },
    {
      name: "Champlain & St.Lawrence",
      price: "$40",
      revenue: "$10",
      description:
        "A corporation owning the C&StL may lay a tile on the C&StL's hex even if this hex is not connected to the corporations's railhead. This free tile placement is in addition to the corporation's normal tile placement - for this turn only the corporation may play two tiles. The tile played on the C&StL hex does not have to connect to any existing adjacent track."
    },
    {
      name: "Delaware & Hudson",
      price: "$70",
      revenue: "$15",
      description:
        "A corporation owning the Delaware & Hudson may establish a railhead on the D&H hex by laying a station tile and a token. The station does not have to be connected to the remainder of the corporation's route. The tile laid is the owning corporation's one tile placement for the turn. Removal of the mountain costs $120 as usual but there is no charge for laying the token. Placing the token is not required, but if placed in a future turn, it must be paid for. Other corporations may place a tile here subject to the ordinary rules."
    },
    {
      name: "Mohawk & Hudson",
      price: "$110",
      revenue: "$20",
      description:
        "A player owning the M&H may exhange it for a 10% share of the NYC provided he does not already hold 60% of the NYC stock and there is NYC stock available in the Bank or the Pool. The exchange may be made during the player's turn of a stock round or between the turns of other players or corporations in either stock or operating rounds. This action closes the M&H."
    },
    {
      name: "Camden & Amboy",
      price: "$160",
      revenue: "$25",
      description:
        "The initial purchaser of the C&A immediately receives a 10% share of PRR stock without further payment. This action does not close the C&A. The PRR corporation will not be running at this point, but the stock may be retained or sold subject to the ordinary rules of the game."
    },
    {
      name: "Baltimore & Ohio",
      price: "$220",
      revenue: "$30",
      description:
        "The owner of the B&O private company immediately receives the President's certificate of the B&O corporation without further payment. The B&O private company may not be sold to any corporation, and does not exchange hands if the owning player loses the Presidency of the B&O corporation. When the B&O corporation purchases its first train the private company is closed down."
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "6",
      tiles: "yellow"
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Private companies are closed"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "D Trains may be purchased"
    },
    {
      name: "D",
      limit: "2",
      number: "6",
      rust: "4",
      tiles: "brown"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the company"
        },
        {
          color: "brown",
          icon: "exclamation",
          note: "No more than 50% of a company may be in the market"
        },
        {
          color: "red",
          icon: "times",
          note: "No stock sales during first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one share",
        "Sell any number of shares"
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [100, 90, 80, 75, 70, 65],
      cells: [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4]]
    },
    market: [
      [
        60,
        67,
        71,
        76,
        82,
        90,
        100,
        112,
        126,
        142,
        160,
        180,
        200,
        225,
        250,
        275,
        300,
        325,
        350
      ],
      [
        53,
        60,
        66,
        70,
        76,
        82,
        90,
        100,
        112,
        126,
        142,
        160,
        180,
        200,
        220,
        240,
        260,
        280,
        300
      ],
      [46, 55, 60, 65, 70, 76, 82, 90, 100, 111, 125, 140, 155, 170, 185, 200],
      [39, 48, 54, 60, 66, 71, 76, 82, 90, 100, 110, 120, 130],
      [32, 41, 48, 55, 62, 67, 71, 76, 82, 90, 100],
      [25, 34, 42, 50, 58, 65, 67, 71, 75, 80],
      [18, 27, 36, 45, 54, 63, 67, 69, 70],
      [10, 12, 30, 40, 50, 60, 67, 68],
      [null, 10, 20, 30, 40, 50, 60],
      [null, null, 10, 20, 30, 40, 50],
      [null, null, null, 10, 20, 30, 40]
    ],
    limits: [
      {
        color: "yellow",
        description: "Certificates no longer count towards the share limit",
        value: 50
      },
      {
        color: "orange",
        description: "Players may own more than 60% of the company",
        value: 40
      },
      {
        color: "black",
        description: "Company closes"
      }
    ]
  },

  tiles: {
    "1": 1,
    "2": 1,
    "3": 2,
    "4": 2,
    "7": 4,
    "8": 8,
    "9": 7,
    "55": 1,
    "56": 1,
    "57": 4,
    "58": 2,
    "69": 1,
    "14": 3,
    "15": 2,
    "16": 1,
    "18": 1,
    "19": 1,
    "20": 1,
    "23": 3,
    "24": 3,
    "25": 1,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "53": 2,
    "54": 1,
    "59": 2,
    "39": 1,
    "40": 1,
    "41": 2,
    "42": 2,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 1,
    "61": 2,
    "62": 1,
    "63": 3,
    "64": 1,
    "65": 1,
    "66": 1,
    "67": 1,
    "68": 1,
    "70": 1
  },

  map: {
    print: "landscape",
    hexes: [
      {
        color: "plain",
        hexes: [
          "C8",
          "D1",
          "D5",
          "E2",
          "E10",
          "F9",
          "G2",
          "H5",
          "H7",
          "H9",
          "H11",
          "I2",
          "J13",
          "K4",
          "K10",
          "N13",
          "O18",
          "P13",
          "P19"
        ]
      },
      {
        color: "plain",
        mountain: {
          cost: "¥120",
          size: "medium"
        },
        hexes: [
          "A2",
          "A4",
          "A8",
          "A12",
          "A14",
          "A18",
          "A20",
          "B5",
          "B7",
          "B13",
          "B17",
          "B19",
          "C6",
          "C10",
          "C16",
          "C18",
          "C20",
          "D19",
          "E14",
          "E18",
          "F15",
          "F19",
          "G14",
          "G16",
          "G18",
          "G20",
          "H17",
          "H19",
          "I12",
          "I14",
          "I16",
          "I18",
          "I20",
          "J1",
          "J15",
          "J19",
          "K2",
          "K18",
          "L17",
          "M20",
          "N15",
          "N19",
          "P5"
        ]
      },
      {
        color: "plain",
        mountain: {
          cost: "¥40",
          size: "small"
        },
        hexes: [
          "B3",
          "B11",
          "B15",
          "C12",
          "D9",
          "D13",
          "E12",
          "E16",
          "F13",
          "L3",
          "L19",
          "M2",
          "M16",
          "N3",
          "Q6"
        ]
      },
      {
        color: "plain",
        water: {
          cost: "¥80",
          size: "small"
        },
        hexes: ["D3", "E4", "E8", "F5", "F7", "G4", "H3", "I4", "J5", "K6"]
      },
      {
        color: "water",
        hexes: [
          "K8",
          "L7",
          "M6",
          "N7",
          "N11",
          "O8",
          "O12",
          "O14",
          "O16",
          "P9",
          "P11"
        ]
      },
      {
        color: "offboard",
        offBoardTrack: [
          {
            side: 6
          }
        ],
        offBoardRevenue: {
          name: {name: "Tarumi"},
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            }
          ]
        },
        hexes: ["A6"]
      },
      {
        copy: "A6",
        offBoardRevenue: {
          name: {name: "Minoh"},
          revenues: [
            {},
            {cost: "30"},
            {cost: "40"}
          ]
        },
        hexes: ["A10"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 6 }],
        cities: [
          {
            name: {
              name: "Gero",
              bgColor: "offboard",
              reverse: true,
              offset: 66.67
            },
            companies: [
              {
                color: "black",
                label: "GRR"
              }
            ]
          }
        ],
        labels: [
          {
            label: "TL",
            angle: 75,
            percent: 0.667
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.6,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            }
          ]
        },
        hexes: ["A16"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 3 }, { side: 4 }],
        offBoardRevenue: {
          name: {name: "Taniguchiyama Kegonji"},
          reverse: true,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            }
          ]
        },
        hexes: ["B1"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 4 }, { side: 6 }],
        offBoardRevenue: {
          name: {name: "Ibi"},
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            }
          ]
        },
        hexes: ["C2"]
      },
      {
        color: "plain",
        companies: [
          {
            label: "GLR",
            angle: 180,
            percent: 0.6
          }
        ],
        cities: [
          {
            name: {
              name: "Kurono",
              reverse: true
            }
          }
        ],
        hexes: ["C4"]
      },
      {
        color: "plain",
        cities: [
          {
            companies: [
              {
                label: "MER",
                color: "red"
              }
            ],
            name: {
              name: "Seki"
            }
          }
        ],
        hexes: ["B9"]
      },
      {
        color: "plain",
        cities: [
          {
            angle: 180,
            percent: 0.3,
            name: {
              name: "Minoh Ohta"
            }
          }
        ],
        mountain: {
          percent: 0.5,
          cost: "¥40",
          size: "small"
        },
        hexes: ["C14"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Yanagase"
            }
          }
        ],
        hexes: ["D7"]
      },
      {
        color: "yellow",
        cities: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Inuyama",
              offset: 75
            }
          },
          {
            angle: 270,
            percent: 0.5
          }
        ],
        companies: [
          {
            label: "KR",
            angle: 180,
            percent: 0.6
          }
        ],
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        hexes: ["D11"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 180,
            percent: 0.3,
            name: {
              name: "Kaminogoh"
            }
          }
        ],
        mountain: {
          percent: 0.5,
          cost: "¥40",
          size: "small"
        },
        hexes: ["D17"]
      },
      {
        color: "yellow",
        cities: [
          {
            name: {
              name: "Gifu",
              offset: 66.67
            }
          }
        ],
        values: [
          {
            value: "30",
            angle: 150,
            percent: 0.667
          }
        ],
        labels: [
          {
            label: "B",
            angle: 30,
            percent: 0.6
          }
        ],
        track: [
          {
            side: 1
          },
          {
            side: 5
          }
        ],
        hexes: ["E6"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 4 }],
        offBoardRevenue: {
          name: {name: "Maibara"},
          reverse: true,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            },
            {
              color: "black",
              textColor: "white",
              cost: "60"
            }
          ]
        },
        hexes: ["F1"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Ohgaki",
              reverse: true
            }
          }
        ],
        labels: [
          {
            label: "L",
            angle: 180,
            percent: 0.667
          }
        ],
        hexes: ["F3"]
      },
      {
        color: "yellow",
        cities: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Komaki",
              offset: 75
            }
          },
          {
            angle: 270,
            percent: 0.5
          }
        ],
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        hexes: ["F11"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Tajimi"
            }
          }
        ],
        hexes: ["F17"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 6 }],
        cities: [
          {
            name: {
              name: "Nakatsugawa",
              bgColor: "offboard",
              reverse: true,
              offset: 66.67
            },
            companies: [
              {
                color: "black",
                label: "GRR"
              }
            ]
          }
        ],
        labels: [
          {
            label: "CL",
            angle: 75,
            percent: 0.667
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.6,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            },
            {
              color: "black",
              textColor: "white",
              cost: "60"
            }
          ]
        },
        hexes: ["E20"]
      },
      {
        color: "plain",
        cities: [
          {
            companies: [
              {
                label: "TRR",
                color: "cyan"
              }
            ],
            name: {
              name: "Kani"
            }
          }
        ],
        hexes: ["D15"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Hashima",
              reverse: true
            }
          },
          {
            angle: 270,
            percent: 0.5,
            name: {
              name: "Inazawa"
            }
          }
        ],
        hexes: ["G6"]
      },
      {
        color: "yellow",
        mountain: {
          cost: "¥40",
          size: "tiny",
          border: true,
          percent: 0.75
        },
        values: [
          {
            value: "30",
            angle: 180,
            percent: 0.75
          }
        ],
        labels: [
          {
            label: "B",
            angle: 90,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: {
              name: "Ichinomiya",
              offset: 75
            }
          }
        ],
        track: [
          {
            side: 2
          },
          {
            side: 6
          }
        ],
        hexes: ["G8"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Iwakura"
            }
          }
        ],
        hexes: ["G10"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Kasugai"
            }
          }
        ],
        hexes: ["G12"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Yohroh"
            }
          }
        ],
        hexes: ["H1"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 180,
            percent: 0.3,
            name: {
              name: "Owariasahi"
            }
          }
        ],
        mountain: {
          percent: 0.5,
          cost: "¥40",
          size: "small"
        },
        hexes: ["H13"]
      },
      {
        color: "yellow",
        values: [
          {
            value: "30",
            angle: 180,
            percent: 0.667
          }
        ],
        mountain: {
          percent: 0.667,
          size: "tiny",
          cost: "¥120",
          border: true
        },
        cities: [
          {
            companies: [
              {
                color: "gray",
                label: "SER"
              }
            ],
            name: {
              name: "Seto",
              offset: 75
            }
          }
        ],
        track: [{ side: 1 }],
        hexes: ["H15"]
      },
      {
        color: "plain",
        companies: [
          {
            label: "BR",
            angle: 180,
            percent: 0.6
          }
        ],
        cities: [
          {
            name: {
              name: "Tsushima",
              reverse: true
            }
          }
        ],
        hexes: ["I6"]
      },
      {
        color: "plain",
        companies: [
          {
            label: "AH",
            angle: 180,
            percent: 0.6
          }
        ],
        cities: [
          {
            companies: [
              {
                color: "red",
                label: "NER"
              }
            ],
            name: {
              name: "Nishibiwajima",
              reverse: true
            }
          }
        ],
        hexes: ["I8"]
      },
      {
        color: "plain",
        labels: [
          {
            label: "L",
            angle: 180,
            percent: 0.667
          }
        ],
        centerTowns: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Ohzone",
              reverse: true
            }
          },
          {
            angle: 270,
            percent: 0.5,
            name: {
              name: "Chikusa"
            }
          }
        ],
        hexes: ["I10"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Tado Taisha"
            }
          }
        ],
        hexes: ["J3"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Kanie",
              reverse: true
            }
          },
          {
            angle: 270,
            percent: 0.5,
            name: {
              name: "Yatomi"
            }
          }
        ],
        hexes: ["J7"]
      },
      {
        color: "yellow",
        values: [
          {
            value: "40",
            angle: 180,
            percent: 0.8
          }
        ],
        track: [
          {
            side: 3,
            type: "sharp"
          },
          {
            side: 2,
            type: "sharpStopRev"
          }
        ],
        cities: [
          {
            angle: 120,
            percent: 0.5,
            name: {
              name: "Nagoya",
              reverse: true
            }
          },
          {
            angle: 240,
            percent: 0.5
          }
        ],
        water: {
          cost: "¥80",
          percent: 0.6
        },
        hexes: ["J9"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Atsuta Shingu",
              reverse: true
            }
          }
        ],
        labels: [
          {
            label: "L",
            angle: 180,
            percent: 0.667
          }
        ],
        hexes: ["J11"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 180,
            percent: 0.3,
            name: {
              name: "Sanage"
            }
          }
        ],
        mountain: {
          percent: 0.5,
          cost: "¥40",
          size: "small"
        },
        hexes: ["J17"]
      },
      {
        color: "gray",
        cities: [
          {
            angle: 150,
            percent: 0.5,
            name: {
              name: "Ohbu",
              offset: 66
            }
          }
        ],
        values: [
          {
            value: 10,
            angle: 240,
            percent: 0.667
          }
        ],
        track: [
          {
            side: 2,
            type: "straight"
          },
          {
            side: 6,
            type: "gentle"
          }
        ],
        hexes: ["K12"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Chiryu",
              reverse: true
            }
          }
        ],
        hexes: ["K14"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Iida"},
          reverse: true,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 2
          },
          {
            side: 6
          }
        ],
        hexes: ["K20"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Inabe"},
          reverse: true,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "40"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 3
          },
          {
            side: 4
          },
          {
            side: 5
          }
        ],
        hexes: ["L1"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Kuwana",
              reverse: true
            }
          }
        ],
        hexes: ["L5"]
      },
      {
        color: "plain",
        cities: [
          {
            companies: [
              {
                label: "OR",
                color: "green"
              }
            ],
            name: {
              name: "Ohtagawa",
              reverse: true
            }
          }
        ],
        hexes: ["L9"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 4,
            color: "water"
          },
          {
            side: 5,
            color: "water"
          }
        ],
        hexes: ["L11"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Kariya",
              reverse: true
            }
          }
        ],
        borders: [
          {
            side: 1,
            color: "water"
          }
        ],
        hexes: ["L13"]
      },
      {
        color: "yellow",
        cities: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Okazaki",
              offset: 75
            }
          },
          {
            angle: 270,
            percent: 0.5
          }
        ],
        companies: [
          {
            label: "NT",
            angle: 180,
            percent: 0.6
          }
        ],
        labels: [
          {
            label: "OO",
            percent: 0.667
          }
        ],
        hexes: ["L15"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 30,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: {
              name: "Tokoname",
              offset: 33.33
            }
          }
        ],
        track: [{ side: 3 }],
        hexes: ["M8"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 20,
            percent: 0.667
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "GRR",
                color: "black"
              }
            ],
            name: {
              name: "Chitahanda",
              offset: 33.33
            }
          }
        ],
        borders: [
          {
            side: 4,
            color: "water"
          }
        ],
        track: [{ side: 3 }],
        hexes: ["M10"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Uwagoromo",
              reverse: true
            }
          }
        ],
        labels: [
          {
            label: "L",
            angle: 180,
            percent: 0.667
          }
        ],
        hexes: ["K16"]
      },
      {
        color: "plain",
        labels: [
          {
            label: "L",
            angle: 180,
            percent: 0.667
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "KR",
                color: "green"
              }
            ],
            name: {
              name: "Yokkaichi",
              reverse: true
            }
          }
        ],
        hexes: ["M4"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 1,
            color: "water"
          },
          {
            side: 2,
            color: "water"
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "MRR",
                color: "blue"
              }
            ],
            name: {
              name: "Hekinan"
            }
          }
        ],
        hexes: ["M12"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Yonedzu",
              reverse: true
            }
          },
          {
            angle: 270,
            percent: 0.5,
            name: {
              name: "Fukuchi"
            }
          }
        ],
        hexes: ["M14"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Toyokawainari",
              reverse: true
            }
          }
        ],
        hexes: ["M18"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Yunoyama Onsen"},
          reverse: true,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 3
          },
          {
            side: 4
          }
        ],
        hexes: ["N1"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Suzuka"
            }
          }
        ],
        hexes: ["N5"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            angle: 180,
            percent: 0.3,
            name: {
              name: "Mihama"
            }
          }
        ],
        mountain: {
          percent: 0.5,
          cost: "¥40",
          size: "small"
        },
        hexes: ["N9"]
      },
      {
        color: "yellow",
        cities: [
          {
            name: {
              name: "Toyohashi",
              offset: 66.67
            }
          }
        ],
        values: [
          {
            value: "30",
            angle: 150,
            percent: 0.667
          }
        ],
        labels: [
          {
            label: "B",
            angle: 30,
            percent: 0.6
          }
        ],
        track: [
          {
            side: 1
          },
          {
            side: 5
          }
        ],
        hexes: ["N17"]
      },
      {
        color: "gray",
        cities: [
          {
            name: {
              name: "Kameyama",
              offset: 33.33
            }
          }
        ],
        offBoardRevenue: {
          percent: 0.6,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "40"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "20"
            }
          ]
        },
        track: [
          {
            side: 3
          },
          {
            side: 4
          }
        ],
        hexes: ["O2"]
      },
      {
        color: "plain",
        companies: [
          {
            angle: 180,
            percent: 0.3,
            label: "SR"
          }
        ],
        mountain: {
          percent: 0.3,
          cost: "¥120",
          size: "medium"
        },
        hexes: ["O4"]
      },
      {
        color: "plain",
        cities: [
          {
            companies: [
              {
                label: "IER",
                color: "purple"
              }
            ],
            name: {
              name: "Tsu"
            }
          }
        ],
        hexes: ["O6"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 2 }],
        offBoardRevenue: {
          name: {name: "Kohwa"},
          reverse: true,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            }
          ]
        },
        hexes: ["O10"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 1 }],
        cities: [
          {
            name: {
              name: "Hamamatsu",
              bgColor: "offboard",
              reverse: true,
              offset: 66.67
            },
            companies: [
              {
                color: "black",
                label: "GRR"
              }
            ]
          }
        ],
        labels: [
          {
            label: "TL",
            angle: 45,
            percent: 0.667
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.6,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            },
            {
              color: "black",
              textColor: "white",
              cost: "60"
            }
          ]
        },
        hexes: ["O20"]
      },
      {
        color: "gray",
        cities: [
          {
            companies: [{
              label: "SER",
              color: "yellow"
            }],
            name: {
              name: "Nakagawa",
              offset: 33.33
            }
          }
        ],
        offBoardRevenue: {
          percent: 0.6,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "10"
            },
            {
              color: "black",
              textColor: "white",
              cost: "60"
            },
            {
              color: "black",
              textColor: "white",
              cost: "80"
            }
          ]
        },
        track: [
          {
            side: 3
          },
          {
            side: 4
          }
        ],
        hexes: ["P3"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Matsuzaka",
              reverse: true
            }
          }
        ],
        hexes: ["P7"]
      },
      {
        color: "plain",
        centerTowns: [{
          name: {
            name: "Tahara"
          }
        }],
        hexes: ["P15"]
      },
      {
        color: "plain",
        cities: [
          {
            companies: [
              {
                label: "ARR",
                color: "orange"
              }
            ],
            name: {
              name: "Takashi"
            }
          }
        ],
        hexes: ["P17"]
      },
      {
        color: "offboard",
        offBoardTrack: [{ side: 3 }, { side: 4 }],
        offBoardRevenue: {
          reverse: true,
          name: {name: "Owashi"},
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "20"
            },
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            }
          ]
        },
        hexes: ["Q4"]
      },
      {
        color: "gray",
        cities: [{
          name: {
            name: "Isejingu",
            offset: 66.67
          }
        }],
        offBoardRevenue: {
          percent: 0.6,
          revenues: [
            {
              color: "black",
              textColor: "white",
              cost: "30"
            },
            {
              color: "black",
              textColor: "white",
              cost: "50"
            },
            {
              color: "black",
              textColor: "white",
              cost: "70"
            }
          ]
        },
        track: [{
          side: 1
        },{
          side: 2
        }],
        hexes: ["Q8"]
      }
    ]
  }
};

export default game;
