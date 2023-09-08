const express = require('express')

const app = express();

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfTheWeek[currentDate.getUTCDay()];

    const utcOffset = currentDate.getTimezoneOffset();
    const validUtcTime = new Date(Date.now() - (utcOffset * 60 * 1000) - (2 * 60 * 60 * 1000));
    const utcTimeString = validUtcTime.toISOString();

    const githubFileUrl = "https://github.com/Dev-180Memes/HNGX-1/blob/main/index.js";
    const githubRepoUrl = "https://github.com/Dev-180Memes/HNGX-1";

    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTimeString,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
    };

    res.json(response);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})