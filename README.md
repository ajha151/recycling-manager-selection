# Recycling Production Line Manager Selection System

A candidate ranking system with database design, evaluation prompts, and interactive dashboard. It demonstrates database design, AI-style evaluation logic, and a React dashboard.

---

## Project Overview

This project evaluates 40 candidates for a Recycling Production Line Manager role using three criteria:
- **Crisis Management** (0-100)
- **Sustainability Knowledge** (0-100)
- **Team Motivation** (0-100)

**Final Score** = Average of the three scores

---

## Project Structure

```
recycling-manager-selection/
├── sql/
│   ├── schema.sql          # Database structure with auto-ranking
│   └── seed.sql            # 40 candidates with evaluation scores
├── ai-prompts/
│   └── prompts.md          # AI evaluation prompts + rubrics
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── data/
│       │   └── mockData.js      # Mock backend data
│       └── components/
│           ├── Leaderboard.jsx   # Top 10 table
│           ├── SkillHeatmap.jsx  # Bar chart visualization
│           └── CandidateCard.jsx # Individual cards
└── README.md               # This file
```

---

## Database Design

#### **Table: `candidates`**
- id, name, years_experience, skills (JSON), created_at

#### **Table: `evaluations`**
- candidate_id
- crisis_management_score
- sustainability_score
- team_motivation_score

#### **Table: `rankings`**
- candidate_id
- total_score
- rank

### **How Rankings Are Calculated**

```sql
total_score = (crisis_management_score + sustainability_score + team_motivation_score) / 3.0
rank = RANK() OVER (ORDER BY total_score DESC)
```
MySQL triggers automatically recompute rankings when evaluation data changes.

## AI Prompting (Mocked)

### **Evaluation Prompts**

The ai-prompts/prompts.md file contains three structured evaluation prompts:
1) Crisis Management
2) Sustainability Knowledge
3) Team Motivation

In this implementation:

- Scores are mocked to simulate AI output
- The structure mirrors how a real LLM-based system would score candidates

Real API integration can be added later.


## Frontend Dashboard

### **Tech Stack**
- **React 18**
- **Vite**
- **Mantine UI**
- **Recharts**

### **Features**

#### **1. Top 10 Leaderboard**

#### **2. Skill comparison chart**

#### **3. Candidate cards with score breakdown**

#### **4. Uses static mock data (no backend API)**

## Running the project

```bash
cd frontend
npm install
npm run dev
```

**App runs at:** `http://localhost:3000`

## Screenshots

### Top 10 Leaderboard
![Top 10 Leaderboard](screenshots/1.PNG)

### Skill Comparison Chart
![Skill Heatmap](screenshots/2.PNG)

### Candidate Cards
![Candidate Cards](screenshots/3.PNG)
![Candidate Cards](screenshots/4.PNG)


### **Notes**

- This is a frontend-only demo
- Data is mocked in mockData.js
- No authentication or backend API
- Designed to demonstrate system design, not production readiness

## Future Enhancements

- Backend API (Node / Flask)
- Real AI evaluation integration
- Filtering and search
- Export rankings
- Resume ingestion

## License

This project is a demonstration system for educational purposes.
