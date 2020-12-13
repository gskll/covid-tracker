import React from "react";

import { Cards, Chart, CountryPicker } from "./";
import { fetchData } from "../api";
import styles from "./App.module.css";
import covidImage from "../images/covid.png";

class App extends React.Component {
  state = { data: {}, country: "" };

  async componentDidMount() {
    const fetchedData = await fetchData(this.state.country);

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={covidImage} alt="Covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
