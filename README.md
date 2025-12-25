# Quiz Game Portfolio


Simple browser-based Quiz Game built with plain HTML, CSS and JavaScript.

## Overview

This repository contains a small interactive quiz game. The player can start the quiz from the home page, answer 5 questions with a progress indicator, save their score, and view a leaderboard of top achievers saved in `localStorage`.

## Project Structure

- `index.html` — Home page with "Let's Start"/Play button and a link to view Top Achievers.
- `play.html` — The quiz view. Shows questions, answer options, a progress bar, and question count. Total questions: 5.
- `score.html` — Final score page. Player enters their name and saves the result to `localStorage`. Buttons to play again or return home.
- `achievers.html` — Leaderboard page that reads scores from `localStorage` and lists players and their scores. Has a "Go Home" button.
- `script.js` — JavaScript that implements quiz logic, question handling, progress updates, answer feedback, and `localStorage` operations.
- `style.css` — Visual styles for all pages.

## Game Flow (Beginning → End)

1. On `index.html` the player sees the home screen with a "Let's Start" / Play button and a "Top Achievers" link.
2. Clicking the Play button opens `play.html` which displays the questions (5 total). The JS updates the progress bar and shows the current question count. When the player selects an option:
   - If the answer is correct, the chosen option turns green, then the game advances to the next question.
   - If the answer is incorrect, the chosen option turns red, then the game advances to the next question.
3. After all 5 questions are attempted the player lands on `score.html`. There the player enters their name and clicks Save. The name and score are stored in `localStorage`. Buttons allow the player to play again or return to the home page.
4. From `index.html` clicking Top Achievers opens `achievers.html`, which displays a leaderboard (player name + score) populated from `localStorage`. A "Go Home" button returns to the home screen.

## Data Persistence

- Scores are stored in the browser using `localStorage`. Each saved entry should include at least a `name` and a `score` value. The leaderboard page reads these entries and displays them sorted (you can sort by highest score when rendering).

## How to Run Locally

Serve the files with a static file server (recommended) to ensure correct behavior for imports and navigation. From the `d:\Portfolio` folder you can use any static server; a quick option is Python's built-in server.

PowerShell example:

```powershell
cd d:\Portfolio
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Or just open `index.html` in your browser (works in many cases), but serving via HTTP is more reliable for navigation and `fetch` usage.

## Notes & Tips

- Ensure `script.js` contains the question data and logic for:
  - rendering questions and options,
  - handling click events and showing immediate feedback (green/red),
  - updating the progress bar and question counter,
  - saving the final score with the player's name into `localStorage`.
- Consider storing scores as a JSON array under a single `localStorage` key (for example `quiz_scores`) and parse/stringify it when reading/writing.
- Validate player name input on `score.html` before saving.
- Optionally add a "clear leaderboard" feature to `achievers.html` for testing.

## Contributing

If you'd like to improve the quiz, consider:

- Adding more questions and categories.
- Making the leaderboard persistent on a backend (instead of `localStorage`).
- Mobile responsive improvements and accessibility (keyboard navigation, ARIA attributes).

## License

This project can be used freely. Add a license file if you want to specify terms.

---

If you want, I can: add a sample `README` screenshot placeholder, sort and display how to store scores in `script.js`, or commit the `README.md` to a git repo for you. Which next step would you like?
