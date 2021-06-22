# Static portfolio

## Wat wordt er verwacht

~~Een app die verbinding maakt met de Github API en alle openbare repositories van een gebruiker weergeeft, en de laatste commits voor de repositories.~~

### Taken

~~Maak verbinding met de Github API~~
~~Maak verbinding met de Github API en maak een lijst van alle openbare opslagplaatsen van uw gebruiker.~~

~~Maak een pagina met de openbare opslagplaatsen.~~

~~Laad commits~~
~~Nadat op een repository is geklikt, moet de gebruiker een pagina te zien krijgen met de laatste 20 commits op die repository,~~
~~ook een zoekveld om de commits te filteren op de term die in het veld is ingevoegd.~~

### Bonustaken

- Gebruik een moderne CSS-oplossing (CSS-modules, Styled-componenten, enz.); 
- Infinite scroll voor de commits-pagina️
- ~~Maak het mogelijk om de volgorde waarin de repositories worden weergegeven te wijzigen (met sterren, naam, enz.);~~
- ~~Component library (Storybook.js, Styleguidist, enz.);~~
- ~~Server-side rendering.~~
 

## Oplossing

~~Bepaal welk framework je wil gebruiken: VueJS, ReactJS of Angular;~~
~~Gebruik een oplossing voor state management;~~
~~Gebruik ES6+ -functies en noteer in het README-bestand waarom en waarvoor, voor minimaal 2 ervan;~~
~~Schrijf unit-tests en andere tests die je mogelijk nuttig of belangrijk vindt;~~
~~Houd rekening met prestaties en edge cases;~~
~~Wees creatief en laat ons zien wat je in huis hebt.~~

## ES6+ functies

- Default Parameter values -> Clean way of defaulting parameters
- Spread operator -> elegant way to clone an array (bv: sorting.util.js  > sortArrayOfObjects)
- String interpolation -> using the backticks is a very clean way of string interpolation

## Oplevering

~~Maak een nieuwe repository in je account~~ en stuur ons de URL;
Maak deze repository publiek, of voeg username "wiven" toe als member;
~~Maak een README-bestand met de instructies om het project en de tests uit te voeren~~, en voeg commentaar toe waarvan je denkt dat het relevant is.

## Building the project locally:
- node version: 10.19.0
- npm version: 6.13.4

To run the project locally:

- add environment variable -> ENV: "development"
- optional: GITHUB_USERNAME
- optional: GITHUB_PASSWORD
- npm i
- npm run start-dev

The project should open in the browser.
