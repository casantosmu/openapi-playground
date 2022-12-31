import { Pet } from "./pet.interfaces";

export const fakePets: Pet[] = [
  {
    id: 1,
    name: "Fluffy",
    category: {
      id: 1,
      name: "Cats",
    },
    photoUrls: [
      "https://www.example.com/fluffy1.jpg",
      "https://www.example.com/fluffy2.jpg",
    ],
    tags: [
      {
        id: 1,
        name: "friendly",
      },
      {
        id: 2,
        name: "cute",
      },
    ],
    status: "available",
  },
  {
    id: 2,
    name: "Buddy",
    category: {
      id: 2,
      name: "Dogs",
    },
    photoUrls: [
      "https://www.example.com/buddy1.jpg",
      "https://www.example.com/buddy2.jpg",
    ],
    tags: [
      {
        id: 3,
        name: "energetic",
      },
      {
        id: 4,
        name: "loyal",
      },
    ],
    status: "available",
  },
];
