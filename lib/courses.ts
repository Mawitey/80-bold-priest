export type CourseLesson = {
  part: number;
  title: string;
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
      { part: 1, title: "ክብሪ ኣምላኽ (1ይ ክፋል)", playbackId: "SZpD02hev8ELcAP88601poFPDVprdYpvLvic8Q8S69iro" },
      { part: 2, title: "ክብሪ ኣምላኽ (2ይ ክፋል)", playbackId: "02dtmR1CRL2Z8UbHa025H00aAIYVWX6W8pb7Bi4JrfPWL4" },
      { part: 3, title: "ክብሪ ኣምላኽ (3ይ ክፋል)", playbackId: "c006bdb6GP7IHt1L7zEWZASx1H7epXbE43KPkCUjrWSw" },
      { part: 4, title: "ክብሪ ኣምላኽ (4ይ ክፋል)", playbackId: "x5T9EEYEfNCLgQMFW00rqD5mZawIX3Z9RvNgdr3bGTh8" },
      { part: 5, title: "ክብሪ ኣምላኽ (5ይ ክፋል)", playbackId: "0002NWTaXvHT9m01gSd3c4PFHqolLYU8icP01kuKlmtrckE" },
      { part: 9, title: "ክብሪ ኣምላኽ (9ይ ክፋል)", playbackId: "MixC6kYq02cH9nBMmtiOrniHsAyyHIE2pQjw701wPYYM00" },
      { part: 10, title: "ክብሪ ኣምላኽ (10ይ ክፋል)", playbackId: "2jKQvXW5V5SLkBFGad5rQDaMdV2008s9hHOz6R00IqwP4" },
      { part: 11, title: "ክብሪ ኣምላኽ (11ይ ክፋል)", playbackId: "RDx027gkvyqndLKkl6dQ01ISqlGr02iWmNE7JLJr02KFIDk" },
      { part: 12, title: "ክብሪ ኣምላኽ (12ይ ክፋል)", playbackId: "ipEvljquEujQdrhkWeY6ny1e4t3c3SS00ojQ00KFUYC9I" },
    ],
  },
];
