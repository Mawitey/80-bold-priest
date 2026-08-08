export type CourseLesson = {
  part: number;
  title: string;
  titleEn: string;
  playbackId: string;
};

export type CourseCategory = {
  id: string;
  name: string;
  title: string;
  lessons: CourseLesson[];
};

export const courseCategories: CourseCategory[] = [
  {
    id: "kibri-amlak",
    name: "Kibri Amlak",
    title: "ክብሪ ኣምላኽ",
    lessons: [
      { part: 1, title: "ክብሪ ኣምላኽ (1ይ ክፋል)", titleEn: "Glory of God (Part 1)", playbackId: "SZpD02hev8ELcAP88601poFPDVprdYpvLvic8Q8S69iro" },
      { part: 2, title: "ክብሪ ኣምላኽ (2ይ ክፋል)", titleEn: "Glory of God (Part 2)", playbackId: "02dtmR1CRL2Z8UbHa025H00aAIYVWX6W8pb7Bi4JrfPWL4" },
      { part: 3, title: "ክብሪ ኣምላኽ (3ይ ክፋል)", titleEn: "Glory of God (Part 3)", playbackId: "c006bdb6GP7IHt1L7zEWZASx1H7epXbE43KPkCUjrWSw" },
      { part: 4, title: "ክብሪ ኣምላኽ (4ይ ክፋል)", titleEn: "Glory of God (Part 4)", playbackId: "x5T9EEYEfNCLgQMFW00rqD5mZawIX3Z9RvNgdr3bGTh8" },
      { part: 5, title: "ክብሪ ኣምላኽ (5ይ ክፋል)", titleEn: "Glory of God (Part 5)", playbackId: "0002NWTaXvHT9m01gSd3c4PFHqolLYU8icP01kuKlmtrckE" },
      { part: 6, title: "ክብሪ ኣምላኽ (6ይ ክፋል)", titleEn: "Glory of God (Part 6)", playbackId: "YdSoQXhysjUrv6pnYS8Ns1ugRuqxVK00ntxuWAg6A2yQ" },
      { part: 7, title: "ክብሪ ኣምላኽ (7ይ ክፋል)", titleEn: "Glory of God (Part 7)", playbackId: "AGBHy6Ch19Nw4RglBz023ToGmWk6YWyNdX001cJ19pstc" },
      { part: 8, title: "ክብሪ ኣምላኽ (8ይ ክፋል)", titleEn: "Glory of God (Part 8)", playbackId: "WSt38UGVl3oP0201CxGa157WHwG502AT1nCVWR7ckT5f00Q" },
      { part: 9, title: "ክብሪ ኣምላኽ (9ይ ክፋል)", titleEn: "Glory of God (Part 9)", playbackId: "MixC6kYq02cH9nBMmtiOrniHsAyyHIE2pQjw701wPYYM00" },
      { part: 10, title: "ክብሪ ኣምላኽ (10ይ ክፋል)", titleEn: "Glory of God (Part 10)", playbackId: "2jKQvXW5V5SLkBFGad5rQDaMdV2008s9hHOz6R00IqwP4" },
      { part: 11, title: "ክብሪ ኣምላኽ (11ይ ክፋል)", titleEn: "Glory of God (Part 11)", playbackId: "RDx027gkvyqndLKkl6dQ01ISqlGr02iWmNE7JLJr02KFIDk" },
      { part: 12, title: "ክብሪ ኣምላኽ (12ይ ክፋል)", titleEn: "Glory of God (Part 12)", playbackId: "ipEvljquEujQdrhkWeY6ny1e4t3c3SS00ojQ00KFUYC9I" },
    ],
  },
  {
    id: "rai",
    name: "Rai",
    title: "ራእይ",
    lessons: [
      { part: 1, title: "ራእይ (1ይ ክፋል)", titleEn: "Rai (Part 1)", playbackId: "cj6FlRwHcuY9cnnH6V9wmndFmw6yA7iLv1SdKsCT01tU" },
      { part: 2, title: "ራእይ (2ይ ክፋል)", titleEn: "Rai (Part 2)", playbackId: "vrlZjlCxsX3jps7Jtwxvs00G9Glo1duexVwAmL8tcztQ" },
      { part: 3, title: "ራእይ (3ይ ክፋል)", titleEn: "Rai (Part 3)", playbackId: "LilkRkKhmQNS2qONobztoDgT8a5nWsparkmExQRifgg" },
      { part: 4, title: "ራእይ (4ይ ክፋል)", titleEn: "Rai (Part 4)", playbackId: "noJUase49pmpPTAARXxJjmJKvZ4NiEEjPaPHIHsyZhI" },
      { part: 5, title: "ራእይ (5ይ ክፋል)", titleEn: "Rai (Part 5)", playbackId: "6yDC7ucnR4R82nZsaagdwpxgWx7umW7CJA1g00SzTuF00" },
      { part: 6, title: "ራእይ (6ይ ክፋል)", titleEn: "Rai (Part 6)", playbackId: "Ozqb94EBddJYjY7kJNtxE3LbpHa4jCYNvRjPyFuwTGY" },
      { part: 7, title: "ራእይ (7ይ ክፋል)", titleEn: "Rai (Part 7)", playbackId: "Xx3xMx3rJQnfibPJ5bH0100LW7e00HcAoLupPSQrdrm32w" },
    ],
  },
  {
    id: "hgi-menfes-hiwet",
    name: "Hgi Menfes Hiwet",
    title: "ሕጊ መንፈስ ሂወት",
    lessons: [
      { part: 1, title: "ሕጊ መንፈስ ሂወት — መእተዊን 1ይ ክፋልን", titleEn: "Law of the Spirit of Life — Introduction and Part 1", playbackId: "ItK32eHXp1trBCpXt21pTl2VlAvwj4h02sdZyGOjR6WI" },
      { part: 2, title: "ሕጊ መንፈስ ሂወት (2ይ ክፋል)", titleEn: "Law of the Spirit of Life (Part 2)", playbackId: "1pk028bRkQjlVH28piIGP180176DK66txdxWcTyqIxDv00" },
      { part: 3, title: "ሕጊ መንፈስ ሂወት (3ይ ክፋል)", titleEn: "Law of the Spirit of Life (Part 3)", playbackId: "KaozwDGI8IldXC1u9Ncg9pbzpajyGf006jkutqmjQanQ" },
      { part: 4, title: "ሕጊ መንፈስ ሂወት (4ይ ክፋል)", titleEn: "Law of the Spirit of Life (Part 4)", playbackId: "MBEidyqlj6cWPJ01uRWeMJthKk7vNbys3WZwLjo2ZFhs" },
      { part: 5, title: "ሕጊ መንፈስ ሂወት (5ይ ክፋል)", titleEn: "Law of the Spirit of Life (Part 5)", playbackId: "HVP1NslVzcB8Q1ruu21fcYQi00XOp68Gf4MkmJp7yaMA" },
      { part: 6, title: "ሕጊ መንፈስ ሂወት (6ይ ክፋል)", titleEn: "Law of the Spirit of Life (Part 6)", playbackId: "AysZhVq9evno01PDxHECxyTg2Mz8UAgCZcUdW01I5eTBY" },
      { part: 8, title: "ሕጊ መንፈስ ሂወት (8ይ ክፋል)", titleEn: "Law of the Spirit of Life (Part 8)", playbackId: "ac3y4SgGS4OnRyESM1l3yibTSu1HiSpO3r01142CzWXE" },
      { part: 9, title: "ሕጊ መንፈስ ሂወት (9ይ ክፋል)", titleEn: "Law of the Spirit of Life (Part 9)", playbackId: "KwOGbycwSvcj9l7doWHkuyF2hdDFDBNEsp1IL7UBdGU" },
    ],
  },
  {
    id: "hayli-amlak",
    name: "Hayli Amlak",
    title: "ሓይሊ ኣምላኽ",
    lessons: [
      { part: 3, title: "ሓይሊ ኣምላኽ (3ይ ክፋል)", titleEn: "Power of God (Part 3)", playbackId: "rIAuXWq7oLbDeq2ig4v02QuWTJb02hrg5AaqCLE8mDIO4" },
      { part: 4, title: "ሓይሊ ኣምላኽ (4ይ ክፋል)", titleEn: "Power of God (Part 4)", playbackId: "Bs302ZQsGmnaEPFWje3tHS01I7C4za2gqOLybuLAVRnvo" },
      { part: 5, title: "ሓይሊ ኣምላኽ (5ይ ክፋል)", titleEn: "Power of God (Part 5)", playbackId: "KycTj7uXmLbf18EChphemvKDlRtyXJxrGOs01Dz3dQI00" },
      { part: 6, title: "ሓይሊ ኣምላኽ (6ይ ክፋል)", titleEn: "Power of God (Part 6)", playbackId: "58qg0285IaI54I31CdvhqQcpvCGKkIX7Esa6SAGil4KE" },
      { part: 7, title: "ሓይሊ ኣምላኽ (7ይ ክፋል)", titleEn: "Power of God (Part 7)", playbackId: "eFGlfIei00SBf02o81MJ3rDIBV39LD9YOM4EoVN8yBdR4" },
      { part: 8, title: "ሓይሊ ኣምላኽ (8ይ ክፋል)", titleEn: "Power of God (Part 8)", playbackId: "lymR8Yt01PlZbQ5jhTEDVNRuqPjsi99vpVBEgCXLPhxE" },
      { part: 9, title: "ሓይሊ ኣምላኽ (9ይ ክፋል)", titleEn: "Power of God (Part 9)", playbackId: "sYl60201hbq6dRGrVX01tXrgP9pRRihdc3tUL00023WsqL2o" },
      { part: 10, title: "ሓይሊ ኣምላኽ (10ይ ክፋል)", titleEn: "Power of God (Part 10)", playbackId: "OTKED015ZJzgMDbj7uDiS01iEFZBuYAU9o7VZ00TluZRik" },
      { part: 12, title: "ሓይሊ ኣምላኽ (12ይ ክፋል)", titleEn: "Power of God (Part 12)", playbackId: "BnquDFgJzkmBRHk9w9MKecTRahg28xEM7VY4OuhdBXE" },
      { part: 13, title: "ሓይሊ ኣምላኽ (13ይ ክፋል)", titleEn: "Power of God (Part 13)", playbackId: "s9bWDkNMLxV01AMDe6YYmKdeHkJHntyYVXvvWZV802usw" },
    ],
  },
];
