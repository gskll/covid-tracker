# COVID TRACKER APP

App using the [Mathdroid COVID-19 API](https://github.com/mathdroid/covid-19-api) to display the latest COVID-19 numbers from around the world.

Live demo: https://covid-tracker-nine-lime.vercel.app/

The app shows three cards with the numbers of people infected, recovered and deaths.

A country picker allows the user to toggle between global numbers and those of individual countries.

A graphic shows either a line chart for global numbers showing the evolution of infected/deaths over time, or a bar chart showing the latest numbers from any single country.

App made using:

- React
- Material-UI design library
- CSS modules with 'classnames' dependency
- React-ChartJS-2 - line/bar chart
- React-Countup - card number animation



## Data fetching

`<App>` retrieves the latest numbers for the selected country. An empty string fetches global numbers (default).

These are passed down to the `<Card>` module to be displayed.

HandleCountryChange callback passed to `<CountryPicker>`. Stores `App.state.country` and fetches country data on change.

`country` and the latest numbers passed down to `<Chart>` component. If `country` is truthy, `<Chart>` displays a bar chart with the data passed down from `<App>`. Otherwise it displays a line chart with the time series data fetched from the API

