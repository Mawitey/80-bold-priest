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
];
