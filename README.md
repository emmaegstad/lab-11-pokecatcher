# Pokecatcher Plan

### Steps

1. ~~Add necessary file structure~~
2. ~~Add basic HTML structure, initial styling~~
3. ~~TDD app.js logic~~
4. ~~Set-up play button event listener~~
5. ~~Set-up 'on button click' logic~~
    - ~~wire-up selected id situation~~
6. ~~Remove unneccessary 'else' statement from capturePokemon (storage-utils.js)~~
7. Go back and write tests for local storage functions
8. Add grid to game window and place pokemon
9. Add simple styles to results page
10. Submit, and move on to pt. 2

## File Structure

-   home page (root)
    -   index.html
    -   app.js
-   results page (/results)
    -   index.html
    -   results.js
-   storage-utils.js (root)
-   pokemon.js (root)

## HTML Elements

-   build home page with
    -   three pokemon images
    -   submit button
-   build empty results page

## Local Storage Functions

-   findById -- should locate pokemon from pokemon array by id
-   getResults -- return the results array or empty array
-   showPokemon -- increment the shown key for a pokemon
-   catchPokemon -- increment the caught key for a pokemon

## app.js Logic

-   make function called generatePokemon()
    -   generate 3 random pokemon
    -   call showPokemon for each
    -   render the Pokemon on the page

### ON PAGE LOAD

-   set totalPlays to 0
-   call generatePokemon()

### ON BUTTON CLICK

-   increment totalPlays
-   call catchPokemon with chosen pokemon
-   if totalPlays >= 10
    -   redirect to results
-   else
    -   call generate Pokemon
