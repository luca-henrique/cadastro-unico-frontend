import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_GENERATE_FILTER_BOX_PDF: "@pdf/SHOW_MODAL_GENERATE_FILTER_BOX_PDF",
  HIDE_MODAL_GENERATE_FILTER_BOX_PDF: "@pdf/HIDE_MODAL_GENERATE_FILTER_BOX_PDF",
};

const INITIAL_STATE = Immutable({
  box_filter_visible: false,
});

export default function generator(state = INITIAL_STATE, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}

export const Creators = {
  showModalGenereteBoxPdf: () => ({
    type: Types.SHOW_MODAL_GENERATE_FILTER_BOX_PDF,
  }),
  hideModalGenereteBoxPdf: () => ({
    type: Types.HIDE_MODAL_GENERATE_FILTER_BOX_PDF,
  }),
};
