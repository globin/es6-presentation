/* eslint-disable */
fetch(someUrl)
    .then((response) => response.text())
    .catch((error) => handleError(error))
    .then((responseText) => console.log(responseText));
