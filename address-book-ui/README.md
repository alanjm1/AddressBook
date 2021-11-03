# Address Book

This is a React front end for the interview-web-address-book code challenge. Thank you for taking the time to review!
I used the latest version Node.js LTS at the time of starting (16.13.0), latest NPM version also.

## Instructions for installing

-   Run `npm install` from the **interview-web-address-book** directory.
-   Change directory to the React code using `cd address-book-ui`.
-   Run `npm install` to install the needed packages.
-   You can move back up to the **interview-web-address-book** directory for the next step if you are going to the application.

## Running the application

-   from the **interview-web-address-book** directory, run `npm start`. This will run both server.js and the react front end using the npm package [concurrently](https://www.npmjs.com/package/concurrently) for convenience of not having to use two terminals.
-   The server will run on port 8080.
-   The UI will run on port 3000.

## Running the tests

-   Change directory to **address-book-ui**.
-   Run `npm test -- --watchAll=false`. to run the test suites.
-   To view the test coverage report run `npm test -- --coverage --watchAll=false`.

## Modifications made to server.js

-   I added an additional route to get an individual person object. I did this with the aim to remove the need to pass the whole people array and find which one was selected when rendering the 'PersonDetail' component. Instead when that component mounts, the route "/api/people/:id" is called to get just that specific person.
-   I added CORS and a rule to allow origin http://localhost:3000, which is the URL for the React UI project.

## Modifications made to people.json

-   I added an id property to each object in the people array.
-   I added an imageUrl property to each object. The SVG files included came from [SVGRepo](https://www.svgrepo.com/)

## Further enhancements I would have liked to make

-   Add some more section components to the address details, like some contact information, to make use of some of the white space in the right section.
-   Group the names by their first character, as seen in the provided mockup.
