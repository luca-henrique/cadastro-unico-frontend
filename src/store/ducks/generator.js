import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_GENERATOR_PDF: "@pdf/SHOW_MODAL_GENERATOR_PDF",
  HIDE_MODAL_GENERATOR_PDF: "@pdf/HIDE_MODAL_GENERATOR_PDF",

  GENERATOR_PDF_TODOS_REQUEST: " @pdf/GENERATOR_PDF_TODOS_REQUEST",
  GENERATOR_PDF_TODOS_SUCCESS: "@pdf/GENERATOR_PDF_TODOS_SUCCESS",

  GENERATOR_PDF_ETIQUETA_REQUEST: " @pdf/GENERATOR_PDF_ETIQUETA_REQUEST",
  GENERATOR_PDF_ETIQUETA_SUCCESS: "@pdf/GENERATOR_PDF_ETIQUETA_SUCCESS",

  GENERATOR_PDF_DESCARTES_REQUEST: " @pdf/GENERATOR_PDF_DESCARTES_REQUEST",
  GENERATOR_PDF_DESCARTES_SUCCESS: "@pdf/GENERATOR_PDF_DESCARTES_SUCCESS"
};

const INITIAL_STATE = Immutable({
  open: false,
  todos: {},
  etiqueta: {},
  descartes: {}
});

export default function generator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_GENERATOR_PDF:
      return {
        ...state,
        open: true
      };
    case Types.HIDE_MODAL_GENERATOR_PDF:
      return {
        ...state,
        open: false
      };

    case Types.GENERATOR_PDF_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos
      };

    case Types.GENERATOR_PDF_ETIQUETA_SUCCESS:
      return {
        ...state,
        etiqueta: action.payload.etiqueta
      };

    case Types.GENERATOR_PDF_DESCARTES_SUCCESS:
      return {
        ...state,
        descartes: action.payload.descartes
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalGeneratorPdf: () => ({
    type: Types.SHOW_MODAL_GENERATOR_PDF
  }),
  hideModalGeneratorPdf: () => ({
    type: Types.HIDE_MODAL_GENERATOR_PDF
  }),

  generatorPdfTodosRequest: () => ({
    type: Types.GENERATOR_PDF_TODOS_REQUEST
  }),
  generatorPdfTodosSuccess: todos => ({
    type: Types.GENERATOR_PDF_TODOS_SUCCESS,
    payload: { todos }
  }),
  generatorPdfEtiquetasRequest: () => ({
    type: Types.GENERATOR_PDF_ETIQUETA_REQUEST
  }),
  generatorPdfEtiquetasSuccess: etiqueta => ({
    type: Types.GENERATOR_PDF_ETIQUETA_SUCCESS,
    payload: { etiqueta }
  }),

  generatorPdfDescartesRequest: () => ({
    type: Types.GENERATOR_PDF_DESCARTES_REQUEST
  }),
  generatorPdfDescartesSuccess: descartes => ({
    type: Types.GENERATOR_PDF_DESCARTES_SUCCESS,
    payload: { descartes }
  })
};
