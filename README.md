## Deployed URL
https://cavallaroc9.github.io/christa-tic-tac-toe/

## Technologies Used
* HTML
* CSS
* SASS
* javascript
* jQuery
* AJAX

## Plan
1. Start with [suggested project schedule](https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/schedule.md "Suggested Schedule")
2. Review [project requirements](https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/requirements.md "Requirements")
3. Reviewed [Game Project API](https://github.com/ga-wdi-boston/game-project-api "Game API")
4. Create and prioritize user stories based on suggested project schedule
5. Create wireframes
6. Once repo is set up, begin coding and keep in mind the following tips:
  1. Keep WIP "work in progress" low. Try to finish one thing before moving on to another.
  2. If stuck on something, break it down into smaller pieces so the problems are easier to solve
  3. Use google if you hit a roadblock. Read documentation if you don't understand something.
  3. Commit often
  4. Create new branches for different features
  5. Deploy once each peice of code is working as expected
  6. Keep in mind what MVP is and focus on requirements first
7. Update config file with approprate API developement and production URLs
8. Start with HTML and CSS to create a page with a basic tic tac toe board
9. Update index.js with event handlers for game board
10. Create events.js file and setup event handler callbacks and game logic functions
11. Create api-board.js file and setup ajax requests for game board
12. Create ui-board.js file and handle displaying success/error messages on client
13. Once gameboard event handlers and logic are working as expected, move onto authentication (sign-up, sign-in, change-password, sign-out, etc.)
14. Update HTML and CSS to add appropriate authentication elements. Use form fields when requiring input from the user.
15. Update index.js with event handlers related to authentication
16. Create api-auth.js file and setup ajax requests for authentication
17. Create ui-auth.js file and handle displaying success/error messages on client
18. Use jQuery to hide and show elements appropriatly.
19. Update styling

## Post MVP
* To Do:
  - Make game board cells square and more responsive
  - Refactor code:
    - Create additional functions to reduce redundancies
  - Add additional game statistics such as how many games were won
  - Allow players to compete from separate devices
  - Allow players to customize their markers
  - Add tableside chat
  - Use localStorae to persist data locally

## User Stores

## Wireframes
https://imgur.com/a/eyC9L

## User Stories
* As a user, I would like to be able to enter my account information so that I can sign into the Tic Tac Toe Game
* As a user, I want to create an account so that I can use that account to sign in
* As a user, I want to be able to change my password when signed in so that I can keep my account secure
* As a user, I want to see the board update each time a player moves so that I know the game status
* As a user, I want to be prevented from marking a cell that is already marked so that someone cannot cheat
* As a user, I want to see which player won at the end of a game so that I know the game is over.
* As a user, I want to know if there is a tie at the end of a game so that I know the game is over.
* As a user, I want to be able to start a new game once a game is over so that I can play again.
* As a user, I want to be prevented from clicking on cells once a game is over so that I can see the status of the board when it was over.
* As a user, I want the board cleared when I start a new game so that I can make new moves.
* As a user, I would like to see game statistics so that I know how many total games I've played.
* As a user, I want to be able to sign out so that someone else cannot play on my account
