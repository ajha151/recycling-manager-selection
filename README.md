# Recycling Production Line Manager Selection System

A candidate ranking system with database design, evaluation prompts, and interactive dashboard.

---

## Project Overview

This system evaluates and ranks 40 candidates for a Recycling Production Line Manager position based on three key competencies:
- **Crisis Management** (0-100)
- **Sustainability Knowledge** (0-100)
- **Team Motivation** (0-100)

**Final Ranking** = Average of the three scores

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

## Phase 1: Database Design

### **Schema Overview**

#### **Table: `candidates`**
- Stores basic candidate information
- Fields: `id`, `name`, `years_experience`, `skills` (JSON), `created_at`

#### **Table: `evaluations`**
- Stores AI-generated scores for each candidate
- Fields: `id`, `candidate_id`, `crisis_management_score`, `sustainability_score`, `team_motivation_score`, `evaluated_at`

#### **Table: `rankings`**
- Auto-computed rankings based on evaluation scores
- Fields: `candidate_id`, `total_score`, `rank`, `updated_at`

### **How Rankings Are Calculated**

```sql
total_score = (crisis_management_score + sustainability_score + team_motivation_score) / 3.0
rank = RANK() OVER (ORDER BY total_score DESC)
```

**Auto-Update Mechanism:**
- MySQL triggers automatically recalculate rankings whenever evaluations are inserted, updated, or deleted
- No manual intervention required

### **Setup Instructions**

```bash
# 1. Install MySQL (if not already installed)
# Download from: https://dev.mysql.com/downloads/mysql/

# 2. Create database
mysql -u root -p
CREATE DATABASE recycling_manager;
USE recycling_manager;

# 3. Run schema
SOURCE sql/schema.sql;

# 4. Load seed data
SOURCE sql/seed.sql;

# 5. Verify rankings
SELECT * FROM vw_candidate_overview LIMIT 10;
```

### **Key Features**

✅ **Normalized Design** - 3NF compliant with proper foreign keys  
✅ **Auto-Ranking** - Triggers handle real-time rank updates  
✅ **Indexed Queries** - Fast lookups on experience, scores, ranks  
✅ **Utility View** - `vw_candidate_overview` joins all data for easy querying  

---

## Phase 2: AI Prompting System

### **Evaluation Prompts**

Located in `ai-prompts/prompts.md`, the system includes 3 specialized prompts:

#### **1. Crisis Management Evaluation (0-100)**
**Criteria:**
- Safety & Compliance Skills (30 points)
- Experience Level (35 points)
- Leadership & Decision-Making (25 points)
- Technical Competence (10 points)

**Example Scoring:**
- 90-100: Exceptional crisis readiness
- 75-89: High competence
- 60-74: Adequate capability
- 45-59: Developing skills
- 0-44: Insufficient

#### **2. Sustainability Knowledge Evaluation (0-100)**
**Criteria:**
- Sustainability-Specific Skills (40 points)
- Industry Experience (30 points)
- Process Optimization & Quality (20 points)
- Technical Recycling Knowledge (10 points)

#### **3. Team Motivation Evaluation (0-100)**
**Criteria:**
- Core Leadership Skills (45 points)
- Management Experience (30 points)
- Operational Excellence (15 points)
- Communication & Safety Culture (10 points)

### **Implementation Options**

#### **Option A: Mock Responses (Current)**
The `seed.sql` file uses logic-based scoring that mirrors the AI rubrics.

#### **Option B: Real AI Integration**

```javascript
// Example using Claude API
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY',
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 500,
    messages: [{
      role: 'user',
      content: `[Insert prompt from prompts.md with candidate data]`
    }]
  })
});

const data = await response.json();
// Parse SCORE and JUSTIFICATION from response
```

---

## Phase 3: React Dashboard

### **Tech Stack**
- **React 18** - UI library
- **Vite** - Build tool
- **Mantine UI** - Component library
- **Recharts** - Data visualization

### **Features**

#### **1. Top 10 Leaderboard**
- Ranked table with medal icons
- Total scores with color-coded badges
- Progress bars for each evaluation category
- Experience level badges

#### **2. Skills Heatmap**
- Bar chart comparing top 10 candidates
- Three metrics side-by-side (Crisis, Sustainability, Team)
- Color-coded bars (red, green, blue)

#### **3. All Candidates View**
- Grid layout with 40 candidate cards
- Ring progress indicators for total score
- Skills preview (first 3 + count)
- Rank badges (green for top 10)

### **Run the Dashboard**

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

**Access at:** `http://localhost:3000`

### **Build for Production**

```bash
npm run build
# Output will be in frontend/dist/
```

---

## How Rankings Work

### **Scoring Formula**

```
Total Score = (Crisis Management + Sustainability + Team Motivation) / 3

Rank = Position when sorted by Total Score (descending)
```

### **Score Interpretation**

| Total Score | Grade | Recommendation |
|-------------|-------|----------------|
| 90-100 | A+ | Strong hire - Top 10% |
| 85-89 | A | Recommended hire |
| 75-84 | B | Consider for interview |
| 65-74 | C | Requires more experience |
| <65 | D/F | Not recommended |

### **Example Calculation**

**Michael Thompson (Rank #1):**
- Crisis Management: 93
- Sustainability: 95
- Team Motivation: 90
- **Total Score: (93 + 95 + 90) / 3 = 92.67**

---

## Data Overview

### **Candidate Distribution**

- **Total Candidates:** 40
- **Experience Range:** 1-20 years
- **Average Experience:** ~10 years
- **Top Score:** 92.67 (Michael Thompson)
- **Lowest Score:** 51.00 (Richard Hall)

### **Skills Tracked**

**Operations:** Lean Manufacturing, Six Sigma, Process Optimization, Quality Control, Production Planning  
**Safety:** OSHA Compliance, Safety Auditing, Risk Assessment, Emergency Response, PPE Management  
**Sustainability:** Waste Reduction, Circular Economy, Environmental Compliance, Carbon Footprint Analysis  
**Leadership:** Team Building, Conflict Resolution, Performance Management, Change Management  
**Technical:** Equipment Maintenance, Materials Sorting, Contamination Control, Recycling Technologies  

---

## Key Assumptions

1. **Equal Weighting:** All three evaluation categories (Crisis, Sustainability, Team) are weighted equally (33.33% each)

2. **Experience Bonus:** Candidates with more years of experience receive higher base scores, capped at 30 bonus points

3. **Skill-Based Scoring:** Presence of relevant skills (e.g., OSHA Compliance, Waste Reduction, Team Building) adds bonus points to respective categories

4. **Mock Data:** The current system uses pre-generated scores. In production, these would come from real AI API calls

5. **No Authentication:** Dashboard is frontend-only with no login required

6. **Static Backend:** Data is currently mocked in `mockData.js`. To connect to MySQL:
   - Build a REST API (Node.js/Express, Python/Flask, etc.)
   - Update frontend to fetch from API endpoints instead of mock data

---

## Future Enhancements

### Phase 4: Backend API (Optional)
- Build REST API to connect frontend to MySQL database
- Endpoints: `GET /candidates`, `GET /rankings`, `POST /evaluations`
- Real-time AI evaluation integration

### Phase 5: Advanced Features
- **Filtering:** By experience range, skills, score thresholds
- **Search:** Find candidates by name or skills
- **Export:** Download rankings as CSV/PDF
- **Comparison:** Side-by-side candidate comparison tool
- **Authentication:** Admin panel for HR managers
- **Resume Upload:** Parse resumes to auto-populate candidate data

---

## Usage Guide

### **For HR Managers**

1. **View Top Candidates:**
   - Open the dashboard at `http://localhost:3000`
   - Click "Top 10 Leaderboard" tab
   - Review candidates ranked by total score

2. **Analyze Skills:**
   - Click "Skills Heatmap" tab
   - Compare crisis, sustainability, and team scores visually
   - Identify strengths and weaknesses

3. **Browse All Candidates:**
   - Click "All Candidates" tab
   - Scroll through individual cards
   - Click on cards for detailed skill breakdown

### **For Developers**

1. **Add New Candidates:**
   ```sql
   INSERT INTO candidates (name, years_experience, skills) 
   VALUES ('Jane Doe', 10, '["Lean Manufacturing", "Team Building"]');
   
   INSERT INTO evaluations (candidate_id, crisis_management_score, sustainability_score, team_motivation_score)
   VALUES (LAST_INSERT_ID(), 85, 80, 88);
   ```

2. **Update Evaluation Scores:**
   ```sql
   UPDATE evaluations 
   SET crisis_management_score = 90 
   WHERE candidate_id = 1;
   -- Rankings auto-update via trigger
   ```

3. **Query Rankings:**
   ```sql
   SELECT * FROM vw_candidate_overview 
   WHERE total_score >= 85 
   ORDER BY rank;
   ```

---

## Troubleshooting

### **Database Issues**

**Problem:** "Table already exists" error  
**Solution:** Drop tables first or use `DROP TABLE IF EXISTS` in schema.sql

**Problem:** Rankings table is empty  
**Solution:** Insert evaluations first, triggers will auto-populate rankings

### **Frontend Issues**

**Problem:** "Module not found" errors  
**Solution:** Run `npm install` in the frontend folder

**Problem:** Port 3000 already in use  
**Solution:** Change port in `vite.config.js` or kill the process using port 3000

**Problem:** Blank page after `npm run dev`  
**Solution:** Check browser console for errors, ensure all files are in correct locations

---

## Development Notes

- **Database Triggers:** Auto-update rankings on every evaluation change
- **Mock Data:** Frontend currently uses static JSON, not connected to MySQL
- **Responsive Design:** Dashboard works on desktop, tablet, and mobile
- **No Backend:** This is a frontend-only demo; API integration required for production

---

## Credits

**System Design:** AI-powered candidate evaluation  
**Database:** MySQL with auto-ranking triggers  
**Frontend:** React + Mantine UI + Recharts  
**Data Generation:** Python script with realistic candidate profiles  

---

## License

This project is a demonstration system for educational purposes.

---

## Support

For questions or issues:
1. Check the troubleshooting section above
2. Review code comments in each file
3. Consult AI prompting documentation in `ai-prompts/prompts.md`

---

**System for efficient candidate evaluation**
