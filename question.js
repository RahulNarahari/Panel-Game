const db = require('../services/db');

class Question {
    id;
    question_text;
    answers = [];

    constructor(id, question_text) {
        this.id = id;
        this.question_text = question_text;
    }

    // Get answers for a specific question
    async getAnswers() {
        var sql = "SELECT * FROM Answers WHERE question_id = ?";
        const results = await db.query(sql, [this.id]);
        for (var row of results) {
            this.answers.push({
                answer_text: row.answer_text,
                is_correct: row.is_correct
            });
        }
    }
}

module.exports = {
    Question
};
