import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_GENERATOR_PDF: "@pdf/SHOW_MODAL_GENERATOR_PDF",
  HIDE_MODAL_GENERATOR_PDF: "@pdf/HIDE_MODAL_GENERATOR_PDF",

  GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST:
    "@pdf/GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST",

  GENERATE_PDF_HANG_TAGS_REQUEST: "@pdf/GENERATE_PDF_HANG_TAGS_REQUEST",

  GENERATE_PDF_SINTETICO_REQUEST: "pdf/GENERATE_PDF_SINTETICO_REQUEST",

  GENERETE_PDF_UNIQUE_BOX_FAMILIES_REQUEST:
    "pdf/GENERETE_PDF_UNIQUE_BOX_FAMILIES_REQUEST",
  GENERETE_PDF_UNIQUE_BOX_FAMILIES_SUCCESS:
    "pdf/GENERETE_PDF_UNIQUE_BOX_FAMILIES_SUCCESS",

  GENERATE_PDF_DISCARD_REQUEST: "pdf/GENERATE_PDF_DISCARD_REQUEST",
  GENERATE_PDF_DISCARD_SUCCESS: "pdf/GENERATE_PDF_DISCARD_SUCCESS",
};

const INITIAL_STATE = Immutable({
  open: false,
  box_id: null,
  unique_box_families: {},
  discard: {},
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
    case Types.GENERETE_PDF_UNIQUE_BOX_FAMILIES_SUCCESS:
      return {
        ...state,
        unique_box_families: action.payload.unique_box_families,
      };
    case Types.GENERETE_PDF_UNIQUE_BOX_FAMILIES_REQUEST:
      return {
        ...state,
        box_id: action.payload.box_id,
      };
    case Types.GENERATE_PDF_DISCARD_SUCCESS:
      return {
        ...state,
        discard: action.payload.discard,
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

  GeneratePdfUniqueBoxFamiliesRequest: (box_id) => ({
    type: Types.GENERETE_PDF_UNIQUE_BOX_FAMILIES_REQUEST,
    payload: {
      box_id,
    },
  }),

  GeneratePdfUniqueBoxFamiliesSuccess: (unique_box_families) => ({
    type: Types.GENERETE_PDF_UNIQUE_BOX_FAMILIES_SUCCESS,
    payload: {
      unique_box_families,
    },
  }),

  generatePdfDiscardRequest: () => ({
    type: Types.GENERATE_PDF_DISCARD_REQUEST,
  }),

  generatePdfDiscardSuccess: (discard) => ({
    type: Types.GENERATE_PDF_DISCARD_SUCCESS,
    payload: {
      discard,
    },
  }),
};
