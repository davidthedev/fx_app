# FX App demo

## Instructions on how to run the app

- Clone or download the repo
- Unzip if necessary
- Go to _src/_ and open _index.html_ in a browser
- The app should start running
- To run tests, in the root directory of the project type **npm run test** on the command line

## Features

- Added Redux
- Ability to pick a quote
- Ability to add new tiles
- CSS Grid (fallback to floats)
- BEM and ITCSS principles
- SCSS
- Manually created webpack config (I felt that create-react-app is too bloated for such a small project)
- React.js
- Jest, Enzyme and Sinon used for testing
- Datasource that gets updated every second

## Suggested improvements

### React

- Checks could be added to the components to conditionally render (depending on the requirements)
- Error boundaries and logging could be added to catch any errors and log them

### Code quality

- Linter could be added for cleaner code and format
- Components could be split into atoms, molecules and organisms to follow the atomic design principle (better separation of concerns)
- Tests could be improved

### CSS

- Styled components could be used instead of BEM and ITCSS but this depends on the size of the team that is working on the project and requirements
- SVGs could be used for indicators instead of the pure CSS for easier manipulation
- CSS could be minimified and uglyfied for production
- CSS properties such as **display** could be extracted into a scss/utils directory
- Depending on what browsers we want to support and what the designs look like for mobile view and other breakpoints a different strategy for responsive grid could be used
- Scss could be refactored, common properties could be combined in mixins

### Config

- Scripts could be loaded in the head tag
- Webpack config could be improved (split into development / production)

### Datasource

- We could create an endpoint in Node.js that serves data to our client. Our client could either poll (short poll) the endpoint or we upgrade to a connection via a WebSocket protocol (if supported)
