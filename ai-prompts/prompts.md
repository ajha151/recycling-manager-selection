# AI Evaluation Prompts for Recycling Production Line Manager Selection

## Overview
These prompts are designed to evaluate candidates across three critical competencies. Each prompt takes a candidate's profile (name, years of experience, skills) as input and returns a **numeric score (0-100)** with a brief justification.

---

## 🚨 Prompt 1: Crisis Management Evaluation

### Input Format:
```
Candidate Name: [NAME]
Years of Experience: [NUMBER]
Skills: [COMMA-SEPARATED LIST]
```

### Prompt:
```
You are evaluating a candidate for a Recycling Production Line Manager position. Your task is to assess their CRISIS MANAGEMENT capability based on their profile.

CANDIDATE PROFILE:
- Name: {name}
- Years of Experience: {years_experience}
- Skills: {skills}

EVALUATION CRITERIA:
1. **Safety & Compliance Skills** (0-30 points)
   - OSHA Compliance, Safety Auditing, Risk Assessment, Emergency Response, PPE Management
   
2. **Experience Level** (0-35 points)
   - 1-5 years: 10-15 points
   - 6-10 years: 16-25 points
   - 11-15 years: 26-32 points
   - 16+ years: 33-35 points
   
3. **Leadership & Decision-Making** (0-25 points)
   - Team Building, Conflict Resolution, Performance Management, Change Management
   
4. **Technical Competence** (0-10 points)
   - Equipment Maintenance, Process Optimization, Quality Control

SCORING RUBRIC:
- **90-100**: Exceptional crisis readiness. Strong safety background, 10+ years experience, proven leadership skills
- **75-89**: High competence. Good safety knowledge, 6+ years experience, demonstrates leadership
- **60-74**: Adequate capability. Basic safety awareness, 3-5 years experience, some leadership skills
- **45-59**: Developing skills. Limited safety background, <5 years experience, minimal leadership
- **0-44**: Insufficient crisis management capability

Return your response in this exact format:
SCORE: [0-100]
JUSTIFICATION: [2-3 sentences explaining the score based on the rubric above]
```

### Example Output:
```
SCORE: 82
JUSTIFICATION: The candidate demonstrates strong crisis management potential with 12 years of experience and critical skills including OSHA Compliance and Emergency Response. Leadership capabilities in Team Building and Conflict Resolution further support their ability to handle production line crises effectively. Minor gaps in advanced risk assessment expertise prevent a higher score.
```

---

## 🌱 Prompt 2: Sustainability Knowledge Evaluation

### Input Format:
```
Candidate Name: [NAME]
Years of Experience: [NUMBER]
Skills: [COMMA-SEPARATED LIST]
```

### Prompt:
```
You are evaluating a candidate for a Recycling Production Line Manager position. Your task is to assess their SUSTAINABILITY KNOWLEDGE based on their profile.

CANDIDATE PROFILE:
- Name: {name}
- Years of Experience: {years_experience}
- Skills: {skills}

EVALUATION CRITERIA:
1. **Sustainability-Specific Skills** (0-40 points)
   - Waste Reduction, Circular Economy, Environmental Compliance, Carbon Footprint Analysis, Green Manufacturing
   - Each relevant skill = 8 points
   
2. **Industry Experience** (0-30 points)
   - 1-5 years: 8-12 points
   - 6-10 years: 13-20 points
   - 11-15 years: 21-27 points
   - 16+ years: 28-30 points
   
3. **Process Optimization & Quality** (0-20 points)
   - Lean Manufacturing, Six Sigma, Process Optimization, Quality Control, Yield Optimization
   
4. **Technical Recycling Knowledge** (0-10 points)
   - Materials Sorting, Contamination Control, Recycling Technologies

SCORING RUBRIC:
- **90-100**: Sustainability expert. 3+ sustainability skills, 10+ years experience, strong process optimization background
- **75-89**: High sustainability competence. 2+ sustainability skills, 6+ years experience, good technical knowledge
- **60-74**: Moderate sustainability awareness. 1-2 sustainability skills, 3+ years experience, basic technical skills
- **45-59**: Basic sustainability understanding. Limited sustainability skills, <5 years experience
- **0-44**: Insufficient sustainability knowledge for a recycling leadership role

Return your response in this exact format:
SCORE: [0-100]
JUSTIFICATION: [2-3 sentences explaining the score based on the rubric above]
```

### Example Output:
```
SCORE: 88
JUSTIFICATION: The candidate shows exceptional sustainability competence with dedicated skills in Waste Reduction, Environmental Compliance, and Circular Economy principles. Their 14 years of industry experience combined with Lean Manufacturing and Materials Sorting expertise demonstrates comprehensive understanding of sustainable recycling operations. This profile strongly aligns with modern environmental manufacturing requirements.
```

---

## 👥 Prompt 3: Team Motivation Evaluation

### Input Format:
```
Candidate Name: [NAME]
Years of Experience: [NUMBER]
Skills: [COMMA-SEPARATED LIST]
```

### Prompt:
```
You are evaluating a candidate for a Recycling Production Line Manager position. Your task is to assess their TEAM MOTIVATION capability based on their profile.

CANDIDATE PROFILE:
- Name: {name}
- Years of Experience: {years_experience}
- Skills: {skills}

EVALUATION CRITERIA:
1. **Core Leadership Skills** (0-45 points)
   - Team Building: 12 points
   - Conflict Resolution: 10 points
   - Performance Management: 10 points
   - Cross-functional Collaboration: 8 points
   - Change Management: 5 points
   
2. **Management Experience** (0-30 points)
   - 1-5 years: 8-12 points (likely supervised small teams)
   - 6-10 years: 13-20 points (managed teams and projects)
   - 11-15 years: 21-27 points (senior leadership experience)
   - 16+ years: 28-30 points (extensive people leadership)
   
3. **Operational Excellence** (0-15 points)
   - Lean Manufacturing, Six Sigma, Process Optimization (demonstrates improvement mindset)
   
4. **Communication & Safety Culture** (0-10 points)
   - Safety Auditing, OSHA Compliance (shows commitment to team well-being)

SCORING RUBRIC:
- **90-100**: Exceptional motivator. 3+ leadership skills, 12+ years experience, strong operational background
- **75-89**: Strong team leader. 2+ leadership skills, 7+ years experience, proven people management
- **60-74**: Capable supervisor. 1-2 leadership skills, 4+ years experience, developing management style
- **45-59**: Emerging leader. Limited leadership skills, <5 years experience, technical focus
- **0-44**: Insufficient team motivation capability for management role

Return your response in this exact format:
SCORE: [0-100]
JUSTIFICATION: [2-3 sentences explaining the score based on the rubric above]
```

### Example Output:
```
SCORE: 91
JUSTIFICATION: The candidate exhibits outstanding team motivation capability with comprehensive leadership skills including Team Building, Performance Management, and Conflict Resolution. With 16 years of progressive management experience and additional expertise in Lean Manufacturing, they demonstrate the ability to inspire teams toward operational excellence. Their safety compliance background further reinforces a people-centered leadership approach.
```

---

## 🔧 Implementation Options

### Option 1: Mock AI Responses (Fastest)
Use the scoring rubrics above to manually calculate scores based on candidate profiles. This is what the `seed.sql` file does - it uses logic similar to the rubrics.

### Option 2: Use Claude API (Recommended)
```javascript
// Example API call
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
      content: `[Insert prompt above with candidate data filled in]`
    }]
  })
});
```

### Option 3: Use GitHub Copilot / OpenAI
Similar structure, just adjust the API endpoint and authentication.

---

## 📊 Score Interpretation

| Score Range | Interpretation | Hiring Recommendation |
|-------------|----------------|----------------------|
| 90-100 | Exceptional | Strong hire - top 10% |
| 75-89 | High competence | Recommended hire |
| 60-74 | Adequate | Consider for interview |
| 45-59 | Developing | Requires more experience |
| 0-44 | Insufficient | Not recommended |

---

## 🎯 Usage in Application

When implementing these prompts:
1. **Fetch candidate data** from database
2. **Fill in the placeholders** {name}, {years_experience}, {skills}
3. **Send to AI API** (or use rubric logic)
4. **Parse response** to extract SCORE and JUSTIFICATION
5. **Insert into evaluations table** (triggers auto-update rankings)

---

## ⚠️ Important Notes

- **Consistency**: Use the same AI model for all evaluations to ensure fair comparison
- **Bias Awareness**: Scores are influenced by skill keywords; ensure diverse skill representation
- **Validation**: Scores should be reviewed by humans for final hiring decisions
- **Privacy**: Do not include sensitive personal information in prompts
