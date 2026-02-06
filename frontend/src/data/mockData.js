// Mock data matching seed.sql
// In production, this would come from API endpoints

export const mockCandidates = [
  {
    id: 1,
    name: "Jennifer Martinez",
    years_experience: 15,
    skills: ["Team Building", "Safety Auditing", "Equipment Maintenance", "Lean Manufacturing", "Materials Sorting"],
    crisis_management_score: 95,
    sustainability_score: 88,
    team_motivation_score: 92,
    total_score: 91.67,
    rank: 1
  },
  {
    id: 2,
    name: "Michael Thompson",
    years_experience: 18,
    skills: ["Waste Reduction", "Six Sigma", "OSHA Compliance", "Performance Management", "Carbon Footprint Analysis"],
    crisis_management_score: 93,
    sustainability_score: 95,
    team_motivation_score: 90,
    total_score: 92.67,
    rank: 2
  },
  {
    id: 3,
    name: "Sarah Johnson",
    years_experience: 12,
    skills: ["Circular Economy", "Team Building", "Process Optimization", "Environmental Compliance"],
    crisis_management_score: 85,
    sustainability_score: 92,
    team_motivation_score: 87,
    total_score: 88.00,
    rank: 3
  },
  {
    id: 4,
    name: "David Chen",
    years_experience: 16,
    skills: ["Risk Assessment", "Green Manufacturing", "Conflict Resolution", "Yield Optimization", "Quality Control"],
    crisis_management_score: 90,
    sustainability_score: 89,
    team_motivation_score: 88,
    total_score: 89.00,
    rank: 4
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    years_experience: 14,
    skills: ["Emergency Response", "Waste Reduction", "Cross-functional Collaboration", "Materials Sorting"],
    crisis_management_score: 88,
    sustainability_score: 86,
    team_motivation_score: 85,
    total_score: 86.33,
    rank: 5
  },
  {
    id: 6,
    name: "James Wilson",
    years_experience: 11,
    skills: ["Production Planning", "Environmental Compliance", "Team Building", "Contamination Control"],
    crisis_management_score: 82,
    sustainability_score: 87,
    team_motivation_score: 84,
    total_score: 84.33,
    rank: 6
  },
  {
    id: 7,
    name: "Lisa Anderson",
    years_experience: 13,
    skills: ["PPE Management", "Circular Economy", "Change Management", "Recycling Technologies", "Lean Manufacturing"],
    crisis_management_score: 86,
    sustainability_score: 90,
    team_motivation_score: 88,
    total_score: 88.00,
    rank: 7
  },
  {
    id: 8,
    name: "Robert Garcia",
    years_experience: 9,
    skills: ["Safety Auditing", "Process Optimization", "Team Building", "Quality Control"],
    crisis_management_score: 78,
    sustainability_score: 75,
    team_motivation_score: 80,
    total_score: 77.67,
    rank: 8
  },
  {
    id: 9,
    name: "Amanda Lee",
    years_experience: 17,
    skills: ["OSHA Compliance", "Waste Reduction", "Performance Management", "Six Sigma", "Equipment Maintenance"],
    crisis_management_score: 91,
    sustainability_score: 88,
    team_motivation_score: 89,
    total_score: 89.33,
    rank: 9
  },
  {
    id: 10,
    name: "Christopher Davis",
    years_experience: 8,
    skills: ["Risk Assessment", "Green Manufacturing", "Production Planning", "Materials Sorting"],
    crisis_management_score: 76,
    sustainability_score: 80,
    team_motivation_score: 74,
    total_score: 76.67,
    rank: 10
  },
  {
    id: 11,
    name: "Jessica Brown",
    years_experience: 10,
    skills: ["Environmental Compliance", "Team Building", "Lean Manufacturing", "Contamination Control"],
    crisis_management_score: 80,
    sustainability_score: 83,
    team_motivation_score: 82,
    total_score: 81.67,
    rank: 11
  },
  {
    id: 12,
    name: "Matthew Taylor",
    years_experience: 7,
    skills: ["Emergency Response", "Process Optimization", "Conflict Resolution", "Yield Optimization"],
    crisis_management_score: 72,
    sustainability_score: 70,
    team_motivation_score: 75,
    total_score: 72.33,
    rank: 12
  },
  {
    id: 13,
    name: "Ashley Miller",
    years_experience: 15,
    skills: ["Carbon Footprint Analysis", "Performance Management", "OSHA Compliance", "Recycling Technologies"],
    crisis_management_score: 87,
    sustainability_score: 91,
    team_motivation_score: 86,
    total_score: 88.00,
    rank: 13
  },
  {
    id: 14,
    name: "Daniel White",
    years_experience: 6,
    skills: ["Safety Auditing", "Waste Reduction", "Quality Control", "Team Building"],
    crisis_management_score: 68,
    sustainability_score: 72,
    team_motivation_score: 70,
    total_score: 70.00,
    rank: 14
  },
  {
    id: 15,
    name: "Michelle Harris",
    years_experience: 12,
    skills: ["Circular Economy", "Cross-functional Collaboration", "Six Sigma", "Equipment Maintenance"],
    crisis_management_score: 84,
    sustainability_score: 88,
    team_motivation_score: 83,
    total_score: 85.00,
    rank: 15
  },
  {
    id: 16,
    name: "Andrew Martin",
    years_experience: 5,
    skills: ["Risk Assessment", "Production Planning", "Materials Sorting"],
    crisis_management_score: 62,
    sustainability_score: 58,
    team_motivation_score: 64,
    total_score: 61.33,
    rank: 16
  },
  {
    id: 17,
    name: "Kimberly Jackson",
    years_experience: 14,
    skills: ["Green Manufacturing", "Team Building", "Environmental Compliance", "Lean Manufacturing", "PPE Management"],
    crisis_management_score: 88,
    sustainability_score: 90,
    team_motivation_score: 87,
    total_score: 88.33,
    rank: 17
  },
  {
    id: 18,
    name: "Steven Moore",
    years_experience: 4,
    skills: ["Process Optimization", "Safety Auditing", "Contamination Control"],
    crisis_management_score: 58,
    sustainability_score: 55,
    team_motivation_score: 60,
    total_score: 57.67,
    rank: 18
  },
  {
    id: 19,
    name: "Melissa Thomas",
    years_experience: 11,
    skills: ["Waste Reduction", "Conflict Resolution", "OSHA Compliance", "Recycling Technologies"],
    crisis_management_score: 81,
    sustainability_score: 84,
    team_motivation_score: 80,
    total_score: 81.67,
    rank: 19
  },
  {
    id: 20,
    name: "Joshua Clark",
    years_experience: 8,
    skills: ["Emergency Response", "Production Planning", "Quality Control", "Team Building"],
    crisis_management_score: 74,
    sustainability_score: 71,
    team_motivation_score: 76,
    total_score: 73.67,
    rank: 20
  },
  {
    id: 21,
    name: "Karen Rodriguez",
    years_experience: 16,
    skills: ["Carbon Footprint Analysis", "Performance Management", "Six Sigma", "Materials Sorting", "Change Management"],
    crisis_management_score: 90,
    sustainability_score: 93,
    team_motivation_score: 91,
    total_score: 91.33,
    rank: 21
  },
  {
    id: 22,
    name: "Brian Lewis",
    years_experience: 3,
    skills: ["Safety Auditing", "Process Optimization", "Equipment Maintenance"],
    crisis_management_score: 52,
    sustainability_score: 50,
    team_motivation_score: 54,
    total_score: 52.00,
    rank: 22
  },
  {
    id: 23,
    name: "Nancy Walker",
    years_experience: 13,
    skills: ["Environmental Compliance", "Team Building", "Circular Economy", "Yield Optimization"],
    crisis_management_score: 85,
    sustainability_score: 89,
    team_motivation_score: 84,
    total_score: 86.00,
    rank: 23
  },
  {
    id: 24,
    name: "Kevin Hall",
    years_experience: 9,
    skills: ["Risk Assessment", "Waste Reduction", "Lean Manufacturing", "Contamination Control"],
    crisis_management_score: 77,
    sustainability_score: 79,
    team_motivation_score: 76,
    total_score: 77.33,
    rank: 24
  },
  {
    id: 25,
    name: "Betty Young",
    years_experience: 7,
    skills: ["OSHA Compliance", "Production Planning", "Team Building", "Quality Control"],
    crisis_management_score: 71,
    sustainability_score: 68,
    team_motivation_score: 73,
    total_score: 70.67,
    rank: 25
  },
  {
    id: 26,
    name: "Donald Allen",
    years_experience: 15,
    skills: ["Green Manufacturing", "Cross-functional Collaboration", "Emergency Response", "Recycling Technologies"],
    crisis_management_score: 89,
    sustainability_score: 91,
    team_motivation_score: 88,
    total_score: 89.33,
    rank: 26
  },
  {
    id: 27,
    name: "Sandra King",
    years_experience: 6,
    skills: ["Process Optimization", "Safety Auditing", "Materials Sorting"],
    crisis_management_score: 66,
    sustainability_score: 64,
    team_motivation_score: 68,
    total_score: 66.00,
    rank: 27
  },
  {
    id: 28,
    name: "Paul Wright",
    years_experience: 12,
    skills: ["Circular Economy", "Performance Management", "Six Sigma", "Equipment Maintenance", "PPE Management"],
    crisis_management_score: 83,
    sustainability_score: 87,
    team_motivation_score: 85,
    total_score: 85.00,
    rank: 28
  },
  {
    id: 29,
    name: "Donna Scott",
    years_experience: 5,
    skills: ["Waste Reduction", "Team Building", "Contamination Control"],
    crisis_management_score: 61,
    sustainability_score: 63,
    team_motivation_score: 65,
    total_score: 63.00,
    rank: 29
  },
  {
    id: 30,
    name: "Mark Torres",
    years_experience: 10,
    skills: ["Environmental Compliance", "Conflict Resolution", "Lean Manufacturing", "Quality Control"],
    crisis_management_score: 79,
    sustainability_score: 81,
    team_motivation_score: 80,
    total_score: 80.00,
    rank: 30
  },
  {
    id: 31,
    name: "Carol Nguyen",
    years_experience: 14,
    skills: ["OSHA Compliance", "Carbon Footprint Analysis", "Team Building", "Recycling Technologies", "Change Management"],
    crisis_management_score: 87,
    sustainability_score: 90,
    team_motivation_score: 88,
    total_score: 88.33,
    rank: 31
  },
  {
    id: 32,
    name: "Anthony Hill",
    years_experience: 4,
    skills: ["Risk Assessment", "Production Planning", "Materials Sorting"],
    crisis_management_score: 56,
    sustainability_score: 54,
    team_motivation_score: 58,
    total_score: 56.00,
    rank: 32
  },
  {
    id: 33,
    name: "Margaret Flores",
    years_experience: 11,
    skills: ["Green Manufacturing", "Performance Management", "Process Optimization", "Equipment Maintenance"],
    crisis_management_score: 82,
    sustainability_score: 85,
    team_motivation_score: 83,
    total_score: 83.33,
    rank: 33
  },
  {
    id: 34,
    name: "Charles Green",
    years_experience: 8,
    skills: ["Safety Auditing", "Waste Reduction", "Team Building", "Yield Optimization"],
    crisis_management_score: 75,
    sustainability_score: 77,
    team_motivation_score: 76,
    total_score: 76.00,
    rank: 34
  },
  {
    id: 35,
    name: "Elizabeth Adams",
    years_experience: 13,
    skills: ["Circular Economy", "Cross-functional Collaboration", "OSHA Compliance", "Lean Manufacturing"],
    crisis_management_score: 86,
    sustainability_score: 88,
    team_motivation_score: 85,
    total_score: 86.33,
    rank: 35
  },
  {
    id: 36,
    name: "Joseph Nelson",
    years_experience: 6,
    skills: ["Emergency Response", "Production Planning", "Contamination Control"],
    crisis_management_score: 67,
    sustainability_score: 65,
    team_motivation_score: 69,
    total_score: 67.00,
    rank: 36
  },
  {
    id: 37,
    name: "Susan Baker",
    years_experience: 17,
    skills: ["Environmental Compliance", "Performance Management", "Six Sigma", "Recycling Technologies", "PPE Management"],
    crisis_management_score: 92,
    sustainability_score: 94,
    team_motivation_score: 90,
    total_score: 92.00,
    rank: 37
  },
  {
    id: 38,
    name: "Richard Hall",
    years_experience: 3,
    skills: ["Process Optimization", "Safety Auditing", "Quality Control"],
    crisis_management_score: 51,
    sustainability_score: 49,
    team_motivation_score: 53,
    total_score: 51.00,
    rank: 38
  },
  {
    id: 39,
    name: "Linda Rivera",
    years_experience: 9,
    skills: ["Waste Reduction", "Team Building", "Lean Manufacturing", "Materials Sorting"],
    crisis_management_score: 78,
    sustainability_score: 80,
    team_motivation_score: 79,
    total_score: 79.00,
    rank: 39
  },
  {
    id: 40,
    name: "Thomas Campbell",
    years_experience: 12,
    skills: ["Carbon Footprint Analysis", "Conflict Resolution", "OSHA Compliance", "Equipment Maintenance", "Change Management"],
    crisis_management_score: 84,
    sustainability_score: 86,
    team_motivation_score: 85,
    total_score: 85.00,
    rank: 40
  }
];

// // Get top 10 candidates
// export const getTopCandidates = () => {
//   return mockCandidates
//     .sort((a, b) => a.rank - b.rank)
//     .slice(0, 10);
// };

// // Get all candidates
// export const getAllCandidates = () => {
//   return mockCandidates.sort((a, b) => a.rank - b.rank);
// };

export const getTopCandidates = () => {
  const sorted = [...mockCandidates].sort(
    (a, b) => b.total_score - a.total_score
  );

  return sorted.slice(0, 10).map((c, index) => ({
    ...c,
    rank: index + 1
  }));
};

export const getAllCandidates = () => {
  const sorted = [...mockCandidates].sort(
    (a, b) => b.total_score - a.total_score
  );

  return sorted.map((c, index) => ({
    ...c,
    rank: index + 1
  }));
};
