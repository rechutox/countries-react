# COUNTRIES

A simple app that can search for a country by name and show
a list of matches where you can select one and get more info
about it. It fetch the information from the [REST Countries API](https://restcountries.eu).

![Screenshot](https://i.imgur.com/47X69LR.png "Countries screenshot")

**DEMO:** [CodeSandbox](https://codesandbox.io/s/lively-breeze-olv07)

## 🍑 Features

- Big, fat search-box
- Get results as you type
- Flags!
- Inaccurate and unuseful error messages!

## 🚀 The future

- Show the map of the country using OSM or Google maps

## 🏗 Dependencies

- React and friends
- Axios
- Lodash
- Scss

## 👻 Known issues

- ~~In the countries list, sometimes the flag will get misaligned.~~ FIXED.
- ~~The API will throw a 404 if the search query has no matches.
  This will raise an error notification and scare my poor users.
  Possible fix: Disable the notification (B-but, what if we
  get a real error??).~~. FIXED.
