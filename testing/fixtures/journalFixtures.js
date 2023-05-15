export const journalInitialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalLoadedState = {
  isSaving: false,
  messageSaved: null,
  notes: [
    {
      id: "123456",
      title: "Nueva Nota",
      body: "Prueba de journalSlice",
      imageUrls: ["https://img1.jpg", "https://img2.jpg", "https://img3.jpg"],
      date: new Date().getTime(),
    },
    {
      id: "abcdef",
      title: "Nueva Nota2",
      body: "Prueba de journalSlice2",
      imageUrls: ["https://img1.jpg", "https://img2.jpg"],
      date: new Date().getTime(),
    },
  ],
  active: {
    id: "123456",
    title: "Nueva Nota",
    body: "Prueba de journalSlice",
    imageUrls: ["https://img1.jpg", "https://img2.jpg", "https://img3.jpg"],
    date: new Date().getTime(),
  },
};

export const newNote = {
  title: "Nueva Nota",
  body: "Prueba de journalSlice",
  imageUrls: ["https://img1.jpg", "https://img2.jpg", "https://img3.jpg"],
  date: new Date().getTime(),
};

export const journalNotes = [
  {
    id: "123456",
    title: "Nueva Nota",
    body: "Prueba de journalSlice",
    imageUrls: ["https://img1.jpg", "https://img2.jpg", "https://img3.jpg"],
    date: new Date().getTime(),
  },
  {
    id: "abcdef",
    title: "Nueva Nota2",
    body: "Prueba de journalSlice2",
    imageUrls: ["https://img1.jpg", "https://img2.jpg"],
    date: new Date().getTime(),
  },
];

export const activeNote = {
  id: "123456abc",
  title: "Nueva Nota activa",
  body: "Prueba de journalSlice",
  imageUrls: ["https://img1.jpg", "https://img2.jpg", "https://img3.jpg"],
  date: new Date().getTime(),
};

export const updatedNote = {
  id: "123456",
  title: "Nueva Nota actualizada",
  body: "Prueba de journalSlice updated",
  imageUrls: ["https://img1.jpg", "https://img2.jpg"],
  date: new Date().getTime(),
};

export const imageUrls = [
  "https://img4.jpg",
  "https://img5.jpg",
  "https://img6.jpg",
];
