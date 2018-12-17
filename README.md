
# FX Trading App demo

Demo gif

![](http://g.recordit.co/ejPSatMZ6Y.gif)

## Instructions to run

* Clone or download the repo
* Go to _src/_ and open _index.html_
* The app should start running in your browser
* To run test in the root directory of the project type **npm run test** in the command line

## Features

* CSS Grid
* BEM and ITCSS principles
* SCSS
* Manually created webpack config (I felt that create-react-app is too bloated for such a small project)
* React.js
* Jest, Enzyme and Sinon used for testing
* Datasource that gets updated every second

## To do

* Pointed indicators

### Suggested improvements

* Checks could be added to the components to conditionally render (depending on the requirements)
* Linter could be added for cleaner code and format
* Styled components could be used instead of BEM and ITCSS but this depends on the size of the team that is working on the project and requirements
* Components could be split into atoms, molecules and organisms to the atomic design principle (better separation of concerns)
* Tests could be improved
* Scripts could be loaded in the head tag
* Depending on what browsers we want to support and what the designs look like for mobile view and other breakpoints a different strategy for responsive grid could be used. This is particullary important when using CSS Grid, we could a check to see if a browser supports CSS Grid and provide a flexbox or floats fallback. 
* Webpack config could be improved (split into development / production)
* CSS could be minimified and uglyfied
* CSS properties such as **display** could be extracted into a scss/utils directory
* and more
