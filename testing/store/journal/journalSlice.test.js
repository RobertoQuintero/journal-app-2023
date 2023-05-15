import {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  journalSlice,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  updateNote,
} from "../../../src/store/journal";
import {
  activeNote,
  imageUrls,
  journalInitialState,
  journalLoadedState,
  journalNotes,
  newNote,
  updatedNote,
} from "../../fixtures/journalFixtures";

describe("pruebas en el journalSlice", () => {
  test("debe regresar el estado inicial y llamarse journal", () => {
    expect(journalSlice.name).toBe("journal");

    const state = journalSlice.reducer(journalInitialState, {});
    expect(state).toEqual(journalInitialState);
  });

  test("debe agregar una nueva nota", () => {
    const state = journalSlice.reducer(
      journalInitialState,
      addNewEmptyNote(newNote)
    );
    expect(state.notes).toContain(newNote);
  });

  test("debe activar una nota", () => {
    const state = journalSlice.reducer(
      journalLoadedState,
      setActiveNote(activeNote)
    );

    expect(state.active).toEqual(activeNote);
  });

  test("debe cargar las notas", () => {
    const state = journalSlice.reducer(
      journalInitialState,
      setNotes(journalNotes)
    );

    expect(state.notes).toEqual(journalNotes);
  });

  test("debe actualizar una nota", () => {
    const state = journalSlice.reducer(
      journalLoadedState,
      updateNote(updatedNote)
    );

    expect(state.notes).toContain(updatedNote);
  });

  test("Agregar imagenes a la nota activa", () => {
    const state = journalSlice.reducer(
      journalLoadedState,
      setPhotosToActiveNote(imageUrls)
    );

    expect(state.active.imageUrls.length).toBe(6);
  });

  test("resetear el estado al hacer logout", () => {
    const state = journalSlice.reducer(journalLoadedState, clearNotesLogout());
    expect(state).toEqual(journalInitialState);
  });

  test("debe eliminar una nota segun el ID", () => {
    const state = journalSlice.reducer(
      journalLoadedState,
      deleteNoteById("123456")
    );

    expect(state.notes.length).toBe(1);
  });
});
