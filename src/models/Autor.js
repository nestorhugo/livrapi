import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: [true, "O nome de autor(a) é obrigatório."],
    },
    nacionalidade: {
      type: String,
      enum: {
        values: [
          "AF",
          "ZA",
          "AL",
          "DE",
          "AD",
          "AO",
          "AG",
          "SA",
          "DZ",
          "AR",
          "AM",
          "AU",
          "AT",
          "AZ",
          "BS",
          "BH",
          "BD",
          "BB",
          "BY",
          "BE",
          "BZ",
          "BJ",
          "BO",
          "BA",
          "BW",
          "BR",
          "BN",
          "BG",
          "BF",
          "BI",
          "BT",
          "CV",
          "CM",
          "KH",
          "CA",
          "KZ",
          "TD",
          "CL",
          "CN",
          "CY",
          "SG",
          "CO",
          "KM",
          "CG",
          "CD",
          "KP",
          "KR",
          "CI",
          "CR",
          "HR",
          "CU",
          "DK",
          "DJ",
          "DM",
          "EG",
          "SV",
          "AE",
          "EC",
          "ER",
          "SK",
          "SI",
          "ES",
          "US",
          "EE",
          "ET",
          "FJ",
          "PH",
          "FI",
          "FR",
          "GA",
          "GM",
          "GH",
          "GE",
          "GD",
          "GR",
          "GT",
          "GY",
          "GN",
          "GQ",
          "GW",
          "HT",
          "NL",
          "HN",
          "HU",
          "YE",
          "MH",
          "SB",
          "IN",
          "ID",
          "IR",
          "IQ",
          "IE",
          "IS",
          "IL",
          "IT",
          "JM",
          "JP",
          "JO",
          "XK",
          "KW",
          "LA",
          "LS",
          "LV",
          "LB",
          "LR",
          "LY",
          "LI",
          "LT",
          "LU",
          "MK",
          "MG",
          "MY",
          "MW",
          "MV",
          "ML",
          "MT",
          "MA",
          "MU",
          "MR",
          "MX",
          "MM",
          "FM",
          "MZ",
          "MD",
          "MC",
          "MN",
          "ME",
          "NA",
          "NR",
          "NP",
          "NI",
          "NE",
          "NG",
          "NO",
          "NZ",
          "OM",
          "PK",
          "PW",
          "PA",
          "PG",
          "PY",
          "PE",
          "PL",
          "PT",
          "QA",
          "KE",
          "KG",
          "GB",
          "CF",
          "DO",
          "CZ",
          "RO",
          "RW",
          "RU",
          "EH",
          "WS",
          "SM",
          "LC",
          "KN",
          "ST",
          "VC",
          "SN",
          "SL",
          "RS",
          "SC",
          "SY",
          "SO",
          "LK",
          "SD",
          "SS",
          "SE",
          "CH",
          "SR",
          "SZ",
          "TJ",
          "TH",
          "TW",
          "TZ",
          "TL",
          "TG",
          "TO",
          "TT",
          "TN",
          "TM",
          "TR",
          "TV",
          "UA",
          "UG",
          "UY",
          "UZ",
          "VU",
          "VA",
          "VE",
          "VN",
          "ZM",
          "ZW",
          "PS",
        ],
        message: "O país {VALUE} não é permitido.",
      },
    },
  },
  {
    versionKey: false,
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
