import { SEARCH_SOCIO, IS_LOADING } from "./actionsTypes";

export const searchSocio = socioId => ({
  type: SEARCH_SOCIO,
  socioId
});

export const isLoading = () => ({
  type: IS_LOADING
});
