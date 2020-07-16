import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_DISTRICT: "@district/SHOW_MODAL_DISTRICT",
  HIDE_MODAL_DISTRICT: "@district/HIDE_MODAL_DISTRICT",

  SHOW_MODAL_NEW_DISTRICT: "@district/SHOW_MODAL_NEW_DISTRICT",
  HIDE_MODAL_NEW_DISTRICT: "@district/HIDE_MODAL_NEW_DISTRICT",

  SHOW_MODAL_UPDATE_DISTRICT: "@district/SHOW_MODAL_UPDATE_DISTRICT",
  HIDE_MODAL_UPDATE_DISTRICT: "@district/HIDE_MODAL_UPDATE_DISTRICT",

  CREATE_DISTRICT_REQUEST: "@district/CREATE_DISTRICT_REQUEST",
  CREATE_DISTRICT_SUCCESS: "@district/CREATE_DISTRICT_SUCCESS",

  READ_DISTRICT_REQUEST: "@district/READ_DISTRICT_REQUEST",
  READ_DISTRICT_SUCCESS: "@district/READ_DISTRICT_SUCCESS",

  UPDATE_DISTRICT_REQUEST: "@district/UPDATE_DISTRICT_REQUEST",
  UPDATE_DISTRICT_SUCCESS: "@district/UPDATE_DISTRICT_SUCCESS",

  DELETE_DISTRICT_REQUEST: "@district/DELETE_DISTRICT_REQUEST",
  DELETE_DISTRICT_SUCCESS: "@district/DELETE_DISTRICT_SUCCESS",
};

const INITIAL_STATE = Immutable({
  districts: [],
  loading: true,

  visible_district: false,

  create_district: false,
  update_district: { visible: false, data: {} },
});

export default function district(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_DISTRICT:
      return {
        ...state,
        visible_district: true,
      };
    case Types.HIDE_MODAL_DISTRICT:
      return {
        ...state,
        visible_district: false,
      };

    case Types.SHOW_MODAL_NEW_DISTRICT:
      return {
        ...state,
        create_district: true,
      };
    case Types.HIDE_MODAL_NEW_DISTRICT:
      return {
        ...state,
        create_district: false,
      };

    case Types.SHOW_MODAL_UPDATE_DISTRICT:
      return {
        ...state,
        update_district: { data: action.payload.data, visible: true },
      };

    case Types.HIDE_MODAL_UPDATE_DISTRICT:
      return {
        ...state,
        update_district: { data: {}, visible: false },
      };

    case Types.READ_DISTRICT_SUCCESS:
      return {
        ...state,
        districts: action.payload.districts,
        loading: false,
      };

    case Types.CREATE_DISTRICT_SUCCESS:
      return {
        ...state,
        districts: [...state.districts, action.payload.district],
      };

    case Types.UPDATE_DISTRICT_SUCCESS:
      return {
        ...state,
        districts: update(state.districts, action.payload.district),
      };

    case Types.DELETE_DISTRICT_SUCCESS:
      return {
        ...state,
        districts: [
          ...state.districts.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalDistrict: () => ({
    type: Types.SHOW_MODAL_DISTRICT,
  }),

  hideModalDistrict: () => ({
    type: Types.HIDE_MODAL_DISTRICT,
  }),
  showModalNewDistrict: () => ({
    type: Types.SHOW_MODAL_NEW_DISTRICT,
  }),

  hideModalNewDistrict: () => ({
    type: Types.HIDE_MODAL_NEW_DISTRICT,
  }),

  showModalUpdateDistrict: (data) => ({
    type: Types.SHOW_MODAL_UPDATE_DISTRICT,
    payload: { data },
  }),
  hideModalUpdateDistrict: () => ({
    type: Types.HIDE_MODAL_UPDATE_DISTRICT,
  }),

  createDistrictRequest: (district) => ({
    type: Types.CREATE_DISTRICT_REQUEST,
    payload: {
      district,
    },
  }),

  createDistrictSuccess: (district) => ({
    type: Types.CREATE_DISTRICT_SUCCESS,
    payload: {
      district,
    },
  }),

  readDistrictRequest: () => ({
    type: Types.READ_DISTRICT_REQUEST,
  }),

  readDistrictSuccess: (districts) => ({
    type: Types.READ_DISTRICT_SUCCESS,
    payload: {
      districts,
    },
  }),

  updateDistrictRequest: (district) => ({
    type: Types.UPDATE_DISTRICT_REQUEST,
    payload: {
      district,
    },
  }),

  updateDistrictSuccess: (district) => ({
    type: Types.UPDATE_DISTRICT_SUCCESS,
    payload: {
      district,
    },
  }),

  deleteDistrictRequest: (id) => ({
    type: Types.DELETE_DISTRICT_REQUEST,
    payload: {
      id,
    },
  }),

  deleteDistrictSuccess: (id) => ({
    type: Types.DELETE_DISTRICT_SUCCESS,
    payload: {
      id,
    },
  }),
};

function update(items, account) {
  const index = items.findIndex((item) => item.id === account.id);
  return [...items.slice(0, index), { ...account }, ...items.slice(index + 1)];
}
