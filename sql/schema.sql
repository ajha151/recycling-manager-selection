-- ============================================
-- RECYCLING PRODUCTION LINE MANAGER SELECTION
-- Database Schema (MySQL 8.0+)
-- ============================================

-- Drop existing tables if they exist
DROP TABLE IF EXISTS rankings;
DROP TABLE IF EXISTS evaluations;
DROP TABLE IF EXISTS candidates;

-- ============================================
-- TABLE: candidates
-- Stores basic candidate information
-- ============================================
CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    years_experience INT NOT NULL CHECK (years_experience >= 0 AND years_experience <= 50),
    skills JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_experience (years_experience),
    INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: evaluations
-- Stores AI-generated evaluation scores
-- ============================================
CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    crisis_management_score INT NOT NULL CHECK (crisis_management_score >= 0 AND crisis_management_score <= 100),
    sustainability_score INT NOT NULL CHECK (sustainability_score >= 0 AND sustainability_score <= 100),
    team_motivation_score INT NOT NULL CHECK (team_motivation_score >= 0 AND team_motivation_score <= 100),
    evaluated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE,
    INDEX idx_candidate (candidate_id),
    INDEX idx_evaluated (evaluated_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: rankings
-- Stores computed rankings (auto-updated)
-- ============================================
CREATE TABLE rankings (
    candidate_id INT PRIMARY KEY,
    total_score DECIMAL(6,2) NOT NULL,
    rank INT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE,
    INDEX idx_total_score (total_score DESC),
    INDEX idx_rank (rank)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- STORED PROCEDURE: Update Rankings
-- Recalculates total scores and ranks
-- ============================================
DELIMITER //

CREATE PROCEDURE update_rankings()
BEGIN
    -- Clear existing rankings
    TRUNCATE TABLE rankings;
    
    -- Insert new rankings with calculated scores and ranks
    INSERT INTO rankings (candidate_id, total_score, rank)
    SELECT 
        candidate_id,
        total_score,
        RANK() OVER (ORDER BY total_score DESC) as rank
    FROM (
        SELECT 
            e.candidate_id,
            ROUND(
                (e.crisis_management_score + e.sustainability_score + e.team_motivation_score) / 3.0,
                2
            ) as total_score
        FROM evaluations e
        GROUP BY e.candidate_id
    ) as scores;
END//

DELIMITER ;

-- ============================================
-- TRIGGER: Auto-update rankings after evaluation insert
-- ============================================
DELIMITER //

CREATE TRIGGER after_evaluation_insert
AFTER INSERT ON evaluations
FOR EACH ROW
BEGIN
    CALL update_rankings();
END//

DELIMITER ;

-- ============================================
-- TRIGGER: Auto-update rankings after evaluation update
-- ============================================
DELIMITER //

CREATE TRIGGER after_evaluation_update
AFTER UPDATE ON evaluations
FOR EACH ROW
BEGIN
    CALL update_rankings();
END//

DELIMITER ;

-- ============================================
-- TRIGGER: Auto-update rankings after evaluation delete
-- ============================================
DELIMITER //

CREATE TRIGGER after_evaluation_delete
AFTER DELETE ON evaluations
FOR EACH ROW
BEGIN
    CALL update_rankings();
END//

DELIMITER ;

-- ============================================
-- UTILITY VIEW: Full Candidate Overview
-- Joins all relevant data for easy querying
-- ============================================
CREATE VIEW vw_candidate_overview AS
SELECT 
    c.id,
    c.name,
    c.years_experience,
    c.skills,
    e.crisis_management_score,
    e.sustainability_score,
    e.team_motivation_score,
    r.total_score,
    r.rank,
    e.evaluated_at
FROM candidates c
LEFT JOIN evaluations e ON c.id = e.candidate_id
LEFT JOIN rankings r ON c.id = r.candidate_id
ORDER BY r.rank ASC;

-- ============================================
-- End of Schema
-- ============================================
