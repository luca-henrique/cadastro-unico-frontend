import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_GENERETE_PDF: "pdf/SHOW_MODAL_GENERETE_PDF",
  HIDE_MODAL_GENERETE_PDF: "pdf/HIDE_MODAL_GENERETE_PDF",

  SHOW_MODAL_GENERATE_FILTER_BOX_PDF: "@pdf/SHOW_MODAL_GENERATE_FILTER_BOX_PDF",
  HIDE_MODAL_GENERATE_FILTER_BOX_PDF: "@pdf/HIDE_MODAL_GENERATE_FILTER_BOX_PDF",

  FILTER_BOX_REQUEST: "@pdf/FILTER_BOX_REQUEST",

  GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST:
    "pdf/GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST",
  GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS:
    "pdf/GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS",

  /* Vai buscar as familias de uma caixa e pasta [pelo o id] {CAIXA ESPECIFICA} */
  GENERETE_FAMILIES_BOX_REQUEST: "pdf/GENERETE_FAMILIES_BOX_REQUEST",
  GENERETE_FAMILIES_BOX_SUCCESS: "pdf/GENERETE_FAMILIES_BOX_SUCCESS",

  GENERATE_PDF_DISCARD_REQUEST: "pdf/GENERATE_PDF_DISCARD_REQUEST",
  GENERATE_PDF_DISCARD_SUCCESS: "pdf/GENERATE_PDF_DISCARD_SUCCESS",

  GENERETE_PDF_SYNTHETIC_REQUEST: "pdf/GENERETE_PDF_SYNTHETIC_REQUEST",
  GENERETE_PDF_SYNTHETIC_SUCCESS: "pdf/GENERETE_PDF_SYNTHETIC_SUCCESS",
};

const INITIAL_STATE = Immutable({
  box_filter_visible: false,
  modal_generete_pdf: false,

  hangTag: {},
  hang_tag_loading: true,

  box_with_familiar: {},
  familiar_loading: true,

  discard_boxes: [],
  discard_boxes_loading: true,
});

export default function generator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_GENERETE_PDF:
      return {
        ...state,
        modal_generete_pdf: true,
        hang_tag_loading: true,
      };
    case Types.HIDE_MODAL_GENERETE_PDF:
      return {
        ...state,
        modal_generete_pdf: false,
      };
    case Types.SHOW_MODAL_GENERATE_FILTER_BOX_PDF:
      return {
        ...state,
        box_filter_visible: true,
      };
    case Types.HIDE_MODAL_GENERATE_FILTER_BOX_PDF:
      return {
        ...state,
        box_filter_visible: false,
      };

    case Types.GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST:
      return {
        ...state,
        hang_tag_loading: true,
      };

    case Types.GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS:
      return {
        ...state,
        hang_tag_loading: false,
        hangTag: action.payload.hangTag,
      };

    case Types.GENERETE_FAMILIES_BOX_SUCCESS:
      return {
        ...state,
        box_with_familiar: action.payload.box,
        familiar_loading: false,
      };

    case Types.GENERATE_PDF_DISCARD_SUCCESS:
      return {
        ...state,
        discard_boxes: action.payload.discard,
        discard_boxes_loading: false,
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalGeneretePdf: () => ({
    type: Types.SHOW_MODAL_GENERETE_PDF,
  }),
  hideModalGeneretePdf: () => ({
    type: Types.HIDE_MODAL_GENERETE_PDF,
  }),
  showModalGenereteBoxPdf: () => ({
    type: Types.SHOW_MODAL_GENERATE_FILTER_BOX_PDF,
  }),

  hideModalGenereteBoxPdf: () => ({
    type: Types.HIDE_MODAL_GENERATE_FILTER_BOX_PDF,
  }),

  filterBoxRequest: (box) => ({
    type: Types.FILTER_BOX_REQUEST,
    payload: {
      box,
    },
  }),

  generateTagsUniqueBoxRequest: (id) => ({
    type: Types.GENERATE_PDF_TAG_UNIQUE_BOX_REQUEST,
    payload: {
      id,
    },
  }),

  generateTagsUniqueBoxSuccess: (hangTag) => ({
    type: Types.GENERATE_PDF_TAG_UNIQUE_BOX_SUCCESS,
    payload: {
      hangTag,
    },
  }),

  generateFamiliesBoxRequest: (id) => ({
    type: Types.GENERETE_FAMILIES_BOX_REQUEST,
    payload: {
      id,
    },
  }),

  /* Retorno com as familias da caixa [pega o id] {CAIXA ESPECIFICA} */
  generateFamiliesBoxSuccess: (box) => ({
    type: Types.GENERETE_FAMILIES_BOX_SUCCESS,
    payload: {
      box,
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

  generetePdfSynthetic: () => ({
    type: Types.GENERETE_PDF_SYNTHETIC_REQUEST,
  }),
};
