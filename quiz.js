const db = require('../services/db');
const { Question } = require('./question');

class Quiz {
    id;
    title;
    description;
    questions = [];

    constructor(id) {
        this.id = id;
    }

    // Get quiz details from the database
    async getQuizDetails() {
        if (typeof this.title !== 'string') {
            var sql = "SELECT * from Quizzes where id = ?";
            const results = await db.query(sql, [this.id]);
            this.title = results[0].title;
            this.description = results[0].description;
        }
    }

    // Get all questions for the quiz
    async getQuestions() {
        var sql = "SELECT * FROM Questions WHERE quiz_id = ?";
        const results = await db.query(sql, [this.id]);
        for (var row of results) {
            this.questions.push(new Question(row.id, row.question_text));
        }
    }
}

module.exports = {
    Quiz
};
