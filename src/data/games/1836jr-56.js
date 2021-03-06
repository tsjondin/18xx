const game = {
  // Generic Game Info
  info: {
    title: "1836jr",
    subtitle: "1856 Variant",
    designer: "David Hecht",
    background: "brown",
    width: 150,
    color_10: "orange",
    titleX: 50,
    titleY: -30,
    titleSize: 150,
    hexCoords: true,
    currency: "BEF"
  },

  links: {
    bgg: "https://boardgamegeek.com/boardgameexpansion/173574/1836jr",
    rules: "https://boardgamegeek.com/boardgameexpansion/173574/1836jr/files"
  },

  // Extra Tokens
  tokens: ["Round", "+20"],

  // Need an IPO sheet
  ipo: true,

  bank: "F6,000",

  players: [
    {
      number: 2,
      certLimit: 20,
      capital: "F450"
    },
    {
      number: 3,
      certLimit: 13,
      capital: "F300"
    },
    {
      number: 4,
      certLimit: 10,
      capital: "F225"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Chemins de Fer de L'Etat Belge",
      abbrev: "B",
      tokens: ["Free", "F40", "F100", "F100"],
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
      name: "Grande Compagnie Du Luxembourg",
      abbrev: "GCL",
      tokens: ["Free", "F40", "F100", "F100"],
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
      name: "Chemin de Fer Du Nord",
      abbrev: "Nord",
      tokens: ["Free", "F40", "F100", "F100"],
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
      name: "Noord-Brabantsch-Duitsche Spoorweg-Maatschappij",
      abbrev: "NBDS",
      tokens: ["Free", "F40", "F100"],
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
      name: "Hollandsche IJzeren Spoorweg Maatschappij",
      abbrev: "HSM",
      tokens: ["Free", "F40"],
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
      name: "Noord-Friesche Locaal",
      abbrev: "NFL",
      tokens: ["Free", "F40"],
      color: "lightGreen",
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
      name: "Maatschappij tot Exploitie van de Staats-Spoorwegen",
      abbrev: "SS",
      tokens: ["Free", "F40", "F100", "F100"],
      color: "red",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: "20/10",
          shares: 2
        },
        {
          quantity: 8,
          percent: "10/5",
          shares: 1
        },
        {
          quantity: 10,
          percent: "5",
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 5,
      price: "F100",
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
      quantity: 4,
      price: "F225",
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
      quantity: 3,
      price: "F350",
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
      quantity: 2,
      price: "F550",
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
      price: "F700",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "8",
      quantity: 5,
      price: "F1000",
      color: "brown",
      description: "Cost F650 when trading in a 4T, 5T or 6T",
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
      name: "Amsterdam Canal Company - ACC",
      price: "F20",
      revenue: "F5",
      description: "Blocks Hex D6."
    },
    {
      name: "Enkhuizen-Stavoren Ferry - E-SF",
      price: "F40",
      revenue: "F10",
      description:
      "Company may place free tile on B8."
    },
    {
      name: "Charbonnages du Hainaut - CdH",
      price: "F50",
      revenue: "F10",
      description:
      "Blocks Hex J8. Company may place tile and token on Hex J8 for F60."
    },
    {
      name: "Régie des Postes",
      price: "F70",
      revenue: "F15",
      description:
      "Owning company may place a +20 token on any city or town."
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      numbtr: "6",
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
          note: "Shares in the market pay dividends to the corporation"
        },
        {
          color: "brown",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "red",
          icon: "times",
          note: "Shares cannot be sold during the first stock round"
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
      ordered: true,
      optional: ["Purchase private companies"]
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [100,90,82,76,71,67]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { value: 60, label: 60, legend: 0, arrow: "down" },
        67,
        71,
        76,
        82,
        90,
        { value: 100, label: 100, par: true },
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
        { value: 53, label: 53, legend: 0, arrow: "down" },
        { value: 60, label: 60, legend: 0 },
        66,
        70,
        76,
        82,
        { value: 90, label: 90, par: true },
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
        { value: 300, label: 300, arrow: "up" }
      ],
      [
        { value: 46, label: 46, legend: 0, arrow: "down" },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        65,
        70,
        76,
        { value: 82, label: 82, par: true },
        90,
        100,
        111,
        125,
        140,
        155,
        170,
        185,
        { value: 200, label: 200, arrow: "up" }
      ],
      [
        { value: 39, label: 39, legend: 1, arrow: "down" },
        { value: 48, label: 48, legend: 0 },
        { value: 54, label: 54, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        66,
        71,
        { value: 76, label: 76, par: true },
        82,
        90,
        100,
        110,
        120,
        { value: 130, label: 130, arrow: "up" }
      ],
      [
        { value: 32, label: 32, legend: 1, arrow: "down" },
        { value: 41, label: 41, legend: 1 },
        { value: 48, label: 48, legend: 0 },
        { value: 55, label: 55, legend: 0 },
        62,
        67,
        { value: 71, label: 71, par: true },
        76,
        82,
        90,
        { value: 100, label: 100, arrow: "up" }
      ],
      [
        { value: 25, label: 25, legend: 2, arrow: "down" },
        { value: 34, label: 34, legend: 1 },
        { value: 42, label: 42, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 58, label: 58, legend: 0 },
        65,
        { value: 67, label: 67, par: true },
        71,
        75,
        { value: 80, label: 80, arrow: "up" }
      ],
      [
        { value: 18, label: 18, legend: 2, arrow: "down" },
        { value: 27, label: 27, legend: 2 },
        { value: 36, label: 36, legend: 1 },
        { value: 45, label: 45, legend: 1 },
        { value: 54, label: 54, legend: 0 },
        63,
        67,
        69,
        { value: 70, label: 70, arrow: "up" }
      ],
      [
        { value: 10, label: 10, legend: 2 },
        { value: 12, label: 12, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        67,
        { value: 68, label: 68, arrow: "up" }
      ],
      [
        null,
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 60, label: 60, legend: 0, arrow: "up" }
      ],
      [
        null,
        null,
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0, arrow: "up" }
      ],
      [
        null,
        null,
        null,
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "yellow",
        description:
        "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      },
      {
        color: "orange",
        description: "Players may own more than 60% of this corporation",
        icon: "percentage"
      },
      {
        color: "brown",
        description:
        "Players may purchase any number of shares of this corporation in one stock action",
        icon: "money-bill-wave"
      }
    ]
  },

  tiles: {
    "2": 1,
    "3": 2,
    "4": 2,
    "7": 4,
    "8": 8,
    "9": 7,
    "56": 1,
    "57": 4,
    "58": 2,
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

  map: [{
    name: "Original Companies",
    hexes: [
      { color: "gray",
        track: [{type: "sharp", side: 5}],
        values: [{angle: 180, percent: 0.333, value: 10}],
        cities: [{percent: 0.5,
                  name: {name: "Leeuwarden"},
                  companies: ["NFL"]}],
        hexes: ["A9"]
      },
      { color: "plain",
        hexes: ["A11","B12","C11","D12","E9","H8","I5","I7","K5"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Hamburg"},
          revenues: [{color: "yellow", cost: "40"},
                     {color: "brown", cost: "70"}]
        },
        offBoardTrack: [{side:1},{side:6}],
        hexes: ["A13"]
      },
      {
        color: "plain",
        terrain: [{type: "water", cost: "F80", percent: 0.75}],
        companies: [{label:"E-SF", percent: 0.7, angle: 180}],
        centerTowns: [
          { x: -30, name: { name: "Enkhuizen", reverse: true } },
          { x: 30, name: { name: "Stavoren" } }
        ],
        hexes: ["B8"]
      },
      {
        color: "plain",
        cities: [{name: {name: "Groningen"}}],
        hexes: ["B10"]
      },
      {
        color: "plain",
        borders: [{color:"water",side:4}],
        hexes: ["C7"]
      },
      {
        color: "plain",
        borders: [{color:"water",side:1}],
        hexes: ["C9"]
      },
      {
        color: "yellow",
        values: [{angle: 180, percent: 0.26, value: 40}],
        companies: [{label:"ACC",angle:240, percent: 0.6}],
        cities: [{percent: 0.5,
                  name: {name: "Amsterdam"},
                  companies: ["HSM"]}],
        labels: [{label:"T", angle:120, percent: 0.7}],
        track: [{type:"sharp", side: 5}],
        terrain: [{type:"water", cost:"F40", angle: 180, percent: 0.7}],
        tokens: [{company: "NFL", width: 15, angle: 60, percent: 0.75}],
        hexes: ["D6"]
      },
      {
        color: "plain",
        terrain: [{type:"water",cost:"F40"}],
        hexes: ["D8","D10","F8","G9","G11"]
      },
      {
        color: "plain",
        labels: [{label: "OO", percent: 0.667},
                 {label: "H", percent: 0.667, angle: 180}],
        cities: [{angle: 65, percent: 0.6,
                  name: {name: "Rotterdam"}},
                 {angle: 295, percent: 0.6,
                  name: {name: "Den Haag"}}],
        tokens: [{company: "NBDS", angle: 225, percent: 0.75, width: 15}],
        hexes: ["E5"]
      },
      {
        color: "plain",
        cities: [{name: {name: "Utrecht"}}],
        hexes: ["E7"]
      },
      {
        color: "plain",
        labels: [{label: "OO", percent: 0.667}],
        terrain: [{type: "water", cost: "F40", angle: 180, percent: 0.6}],
        cities: [{angle: 65, percent: 0.6,
                  name: {name: "Arnhem"}},
                 {angle: 295, percent: 0.6,
                  companies: ["NBDS"],
                  name: {name: "Nijmegen"}}],
        tokens: [{company: "HSM", angle: 135, percent: 0.75, width: 15}],
        hexes: ["E11"]
      },
      {
        color: "plain",
        centerTowns: [{name: {name: "Hoek van Holland"}}],
        terrain: [{type: "water", cost: "F40", percent: 0.6}],
        borders: [{color: "water", side: 5},
                  {color: "water", side: 6}],
        hexes: ["F4"]
      },
      {
        color: "plain",
        terrain: [{type:"water",cost:"F80"}],
        borders: [{color: "water", side: 6}],
        hexes: ["F6"]
      },
      {
        color: "plain",
        centerTowns: [{name: {name: "Eindhoven"}}],
        hexes: ["F10"]
      },
      {
        color: "plain",
        borders: [{color: "water", side: 3}],
        hexes: ["G3"]
      },
      {
        color: "plain",
        borders: [{color: "water", side: 2},
                  {color: "water", side: 3}],
        hexes: ["G5"]
      },
      {
        color: "plain",
        cities: [{name: {name: "Antwerp"}}],
        hexes: ["G7"]
      },
      {
        color: "plain",
        centerTowns: [{name: {name: "Bruges"}}],
        hexes: ["H2"]
      },
      {
        color: "plain",
        cities: [{name: {name: "Gand"}}],
        hexes: ["H4"]
      },
      {
        color: "yellow",
        values: [{percent: 0.5, value:30}],
        cities: [{angle: 150, percent: 0.333,
                  companies: ["B"],
                  name: {name: "Brussels", offset: 42}}],
        track: [{type: "gentle", side: 1}],
        labels: [{label: "L", angle: 240, percent: 0.6}],
        hexes: ["H6"]
      },
      {
        color: "plain",
        labels: [{label: "OO", percent: 0.667}],
        terrain: [{type: "water", cost: "F40", angle: 180, percent: 0.6}],
        cities: [{angle: 65, percent: 0.6,
                  name: {name: "Maastricht"}},
                 {angle: 295, percent: 0.6,
                  name: {name: "Liège"}}],
        tokens: [{company: "B", angle: 225, percent: 0.75, width: 15}],
        hexes: ["H10"]
      },
      {
        color: "yellow",
        values: [{angle: 180, percent: 0.6, value:30}],
        cities: [{angle: 330, percent: 0.333,
                  companies: ["Nord"],
                  name: {name: "Lille", offset: 42, reverse: false}}],
        track: [{type: "gentle", side: 4}],
        labels: [{label: "B", angle: 60, percent: 0.6}],
        hexes: ["I3"]
      },
      {
        color: "plain",
        terrain: [{type:"mountain",cost:"F60"}],
        hexes: ["I11","J10","J12","K7","K9"]
      },
      {
        color: "plain",
        cities: [{companies:["GCL"],
                  name: {reverse: true, name: "Namur"}}],
        terrain: [{type: "water", cost: "F40", angle: 180, percent: 0.6}],
        tokens: [{company: "Nord", percent: 0.8, width: 15}],
        hexes: ["I9"]
      },
      {
        color: "plain",
        hexes: ["J4"]
      },
      {
        color: "plain",
        cities: [{name: {name: "Charleroi"}}],
        hexes: ["J6"]
      },
      {
        color: "plain",
        cities: [{name: {reverse: true, name: "Hainaut Coalfields"}}],
        terrain: [{type: "mountain", cost: "F60", angle: 180, percent: 0.6}],
        companies: [{label: "CdH", percent: 0.75}],
        hexes: ["J8"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {name: "Harwich"},
          revenues: [{color: "yellow", cost: "+20"},
                     {color: "brown", cost: "+30"}]
        },
        offBoardTrack: [{side:4},{side:5}],
        hexes: ["E3"]
      },
      {
        color: "water",
        offBoardRevenue: {
          name: {name: "Dover"},
          revenues: [{color: "yellow", cost: "+20"},
                     {color: "brown", cost: "+30"}]
        },
        offBoardTrack: [{side:4},{side:5}],
        hexes: ["G1"]
      },
      {
        color: "land",
        offBoardRevenue: {
          name: {name: "Paris"},
          revenues: [{color: "yellow", cost: "+20"},
                     {color: "brown", cost: "+30"}]
        },
        offBoardTrack: [{side:3},{side:4}],
        hexes: ["J2"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Dortmund"},
          revenues: [{color: "yellow", cost: "30"},
                     {color: "brown", cost: "50"}]
        },
        offBoardTrack: [{side:1}],
        hexes: ["E13"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Cologne"},
          revenues: [{color: "yellow", cost: "30"},
                     {color: "brown", cost: "50"}]
        },
        offBoardTrack: [{side:1}],
        hexes: ["H12"]
      },
      {
        color: "plain",
        terrain: [{type: "mountain", cost: "F60", percent: 0.75}],
        centerTowns: [
          { x: -30, name: { name: "Arlon", reverse: true } },
          { x: 30, name: { name: "Luxembourg" } }
        ],
        hexes: ["K11"]
      },
      {
        color: "offboard",
        tokens: [{company:"GCL", width: 15, percent: 0.6}],
        offBoardRevenue: {
          name: {name: "Strasbourg"},
          revenues: [{color: "yellow", cost: "40"},
                     {color: "brown", cost: "70"}]
        },
        offBoardTrack: [{side:1},{side:2}],
        hexes: ["K13"]
      }
    ]
  },{
    name: "1830 Companies",
    copy: 0,
    hexes: [
      { color: "gray",
        track: [{type: "sharp", side: 5}],
        values: [{angle: 180, percent: 0.333, value: 10}],
        cities: [{percent: 0.5,
                  name: {name: "Leeuwarden"},
                  companies: [{color:"brown", label:"B&M"}]}],
        hexes: ["A9"]
      },
      {
        color: "yellow",
        values: [{angle: 180, percent: 0.26, value: 40}],
        companies: [{label:"ACC",angle:240, percent: 0.6}],
        cities: [{percent: 0.5,
                  name: {name: "Amsterdam"},
                  companies: [{color:"orange",label:"NYNH"}]}],
        labels: [{label:"T", angle:120, percent: 0.7}],
        track: [{type:"sharp", side: 5}],
        terrain: [{type:"water", cost:"F40", angle: 180, percent: 0.7}],
        tokens: [{company: {color:"brown",label:"B&M"},
                  width: 15, angle: 60, percent: 0.75}],
        hexes: ["D6"]
      },
      {
        color: "plain",
        labels: [{label: "OO", percent: 0.667},
                 {label: "H", percent: 0.667, angle: 180}],
        cities: [{angle: 65, percent: 0.6,
                  name: {name: "Rotterdam"}},
                 {angle: 295, percent: 0.6,
                  name: {name: "Den Haag"}}],
        tokens: [{company: {label:"ERIE", color:"yellow"}, angle: 225, percent: 0.75, width: 15}],
        hexes: ["E5"]
      },
      {
        color: "plain",
        labels: [{label: "OO", percent: 0.667}],
        terrain: [{type: "water", cost: "F40", angle: 180, percent: 0.6}],
        cities: [{angle: 65, percent: 0.6,
                  name: {name: "Arnhem"}},
                 {angle: 295, percent: 0.6,
                  companies: [{color:"yellow",label:"ERIE"}],
                  name: {name: "Nijmegen"}}],
        tokens: [{company: {color:"orange",label:"NYNH"}, angle: 135, percent: 0.75, width: 15}],
        hexes: ["E11"]
      },
      {
        color: "yellow",
        values: [{percent: 0.5, value:30}],
        cities: [{angle: 150, percent: 0.333,
                  companies: [{color:"black",label:"NYC"}],
                  name: {name: "Brussels", offset: 42}}],
        track: [{type: "gentle", side: 1}],
        labels: [{label: "L", angle: 240, percent: 0.6}],
        hexes: ["H6"]
      },
      {
        color: "plain",
        labels: [{label: "OO", percent: 0.667}],
        terrain: [{type: "water", cost: "F40", angle: 180, percent: 0.6}],
        cities: [{angle: 65, percent: 0.6,
                  name: {name: "Maastricht"}},
                 {angle: 295, percent: 0.6,
                  name: {name: "Liège"}}],
        tokens: [{company: {color:"black",label:"NYC"}, angle: 225, percent: 0.75, width: 15}],
        companies: [{label:"GCB", rotate: 30, reverse: true,
                     left: 55, right: 55, angle: 120, percent: 1.75}],
        hexes: ["H10"]
      },
      {
        color: "yellow",
        values: [{angle: 180, percent: 0.6, value:30}],
        cities: [{angle: 330, percent: 0.333,
                  companies: [{color:"blue",label:"B&O"}],
                  name: {name: "Lille", offset: 42, reverse: false}}],
        track: [{type: "gentle", side: 4}],
        labels: [{label: "B", angle: 60, percent: 0.6}],
        hexes: ["I3"]
      },
      {
        color: "plain",
        cities: [{companies:[{color:"green",label:"PRR"}],
                  name: {reverse: true, name: "Namur"}}],
        terrain: [{type: "water", cost: "F40", angle: 180, percent: 0.6}],
        tokens: [{company: {label:"B&O",color:"blue"}, percent: 0.8, width: 15}],
        hexes: ["I9"]
      },
      {
        color: "offboard",
        tokens: [{company:{color:"green",label:"PRR"}, width: 15, percent: 0.6}],
        offBoardRevenue: {
          name: {name: "Strasbourg"},
          revenues: [{color: "yellow", cost: "40"},
                     {color: "brown", cost: "70"}]
        },
        offBoardTrack: [{side:1},{side:2}],
        hexes: ["K13"]
      },
      {
        color: "plain",
        hexes: ["J4"]
      }
    ]
  }]
};

export default game;
