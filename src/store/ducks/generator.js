import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_GENERATOR_PDF: "@pdf/SHOW_MODAL_GENERATOR_PDF",
  HIDE_MODAL_GENERATOR_PDF: "@pdf/HIDE_MODAL_GENERATOR_PDF",

  GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST:
    "@pdf/GENERATE_PDF_RELATIONSHIP_BOX_FAMILIES_REQUEST",

  GENERATE_PDF_HANG_TAGS_REQUEST: "@pdf/GENERATE_PDF_HANG_TAGS_REQUEST",

  GENERATE_PDF_SINTETICO_REQUEST: "pdf/GENERATE_PDF_SINTETICO_REQUEST",

  /* Vai buscar as familias de uma caixa e pasta [pelo o id] {CAIXA ESPECIFICA} */
  GENERETE_FAMILIES_BOX_REQUEST: "pdf/GENERETE_FAMILIES_BOX_REQUEST",

  /* Retorno com as familias da caixa [pega o id] {CAIXA ESPECIFICA} */
  GENERETE_FAMILIES_BOX_SUCCESS: "pdf/GENERETE_FAMILIES_BOX_SUCCESS",

  GENERATE_PDF_DISCARD_REQUEST: "pdf/GENERATE_PDF_DISCARD_REQUEST",
  GENERATE_PDF_DISCARD_SUCCESS: "pdf/GENERATE_PDF_DISCARD_SUCCESS",

  GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST:
    "pdf/GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST",
  GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS:
    "pdf/GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS",
};

const INITIAL_STATE = Immutable({
  open: false,

  /* Atributos para gerar pdf de uma caixa selecionada */
  box_id_families: null,
  families_box: {},

  /* Descartes */
  discard: {},

  tag_box_id: 0,
  tag_box_unique: [],
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

    case Types.GENERETE_FAMILIES_BOX_REQUEST:
      return {
        ...state,
        box_id_families: action.payload.box_id,
      };

    case Types.GENERETE_FAMILIES_BOX_SUCCESS:
      return {
        ...state,
        families_box: action.payload.familiesBox,
      };

    case Types.GENERATE_PDF_DISCARD_SUCCESS:
      return {
        ...state,
        discard: action.payload.discard,
      };

    case Types.GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST:
      return {
        ...state,
        tag_box_id: action.payload.id,
      };

    case Types.GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS:
      return {
        ...state,
        tag_box_unique: action.payload.familiesBox,
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

  generatePdfDiscardRequest: () => ({
    type: Types.GENERATE_PDF_DISCARD_REQUEST,
  }),

  generatePdfDiscardSuccess: (discard) => ({
    type: Types.GENERATE_PDF_DISCARD_SUCCESS,
    payload: {
      discard,
    },
  }),

  generateTagsUniqueBoxRequest: (id) => ({
    type: Types.GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST,
    payload: {
      id,
    },
  }),

  generateTagsUniqueBoxSuccess: (familiesBox) => ({
    type: Types.GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS,
    payload: {
      familiesBox,
    },
  }),

  /* Vai buscar as familias de uma caixa e pasta [pelo o id] {CAIXA ESPECIFICA} */
  generateFamiliesBoxRequest: (box_id) => ({
    type: Types.GENERETE_FAMILIES_BOX_REQUEST,
    payload: {
      box_id,
    },
  }),

  /* Retorno com as familias da caixa [pega o id] {CAIXA ESPECIFICA} */
  generateFamiliesBoxSuccess: (familiesBox) => ({
    type: Types.GENERETE_FAMILIES_BOX_SUCCESS,
    payload: {
      familiesBox,
    },
  }),
};
