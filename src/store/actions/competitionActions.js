import { SET_COMPETITION } from "../types/competitionTypes";

export const setCompetition = (competition) => {
  return {
    type: SET_COMPETITION,
    payload: competition,
  };
};
