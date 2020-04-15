import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_GENERATOR_PDF: "@pdf/SHOW_MODAL_GENERATOR_PDF",
  HIDE_MODAL_GENERATOR_PDF: "@pdf/HIDE_MODAL_GENERATOR_PDF",

  GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST:
    "@pdf/GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST",

  GENERATE_PDF_HANG_TAGS_REQUEST: "@pdf/GENERATE_PDF_HANG_TAGS_REQUEST",

  GENERATE_PDF_SINTETICO_REQUEST: "pdf/GENERATE_PDF_SINTETICO_REQUEST",
};

const INITIAL_STATE = Immutable({
  open: false,
  relationBoxFamily: {},

  todos: {},
  etiqueta: {},
  descartes: {},
});

export default function generator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_GENERATOR_PDF:
      return {
        ...state,
        open: true,
      };
    case Types.HIDE_MODAL_GENERATOR_PDF:
      return {
        ...state,
        open: false,
      };

    case Types.GENERATOR_PDF_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case Types.GENERATOR_PDF_RELATIONSHIP_BOX_FAMILY_SUCCESS:
      return {
        ...state,
        relationBoxFamily: action.payload.relationBoxFamily,
      };

    case Types.GENERATOR_PDF_ETIQUETA_SUCCESS:
      return {
        ...state,
        etiqueta: action.payload.etiqueta,
      };

    case Types.GENERATOR_PDF_DESCARTES_SUCCESS:
      return {
        ...state,
        descartes: action.payload.descartes,
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalGeneratorPdf: () => ({
    type: Types.SHOW_MODAL_GENERATOR_PDF,
  }),
  hideModalGeneratorPdf: () => ({
    type: Types.HIDE_MODAL_GENERATOR_PDF,
  }),

  generateRelationshipBoxFamiliesRequest: () => ({
    type: Types.GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST,
  }),

  generateHangTagsRequest: () => ({
    type: Types.GENERATE_PDF_HANG_TAGS_REQUEST,
  }),

  generateSinteticoRequest: () => ({
    type: Types.GENERATE_PDF_SINTETICO_REQUEST,
  }),
};
