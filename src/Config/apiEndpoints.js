export const API_URL = "http://localhost:8282";

export const ENDPOINTS = {
  getDarkstoreData: `${API_URL}/darkstore/data`,
  login: `${API_URL}/auth`,
  getAllCities: `${API_URL}/get/cities`,
  getLeaderboardData: `${API_URL}/metrics/leaderboard`,
  getCompetitionData: `${API_URL}/get/metadata`,
  getWinnerData: `${API_URL}/metrics/winners`,
  getEmployeeDetails: `${API_URL}/metrics/employeeData`
};