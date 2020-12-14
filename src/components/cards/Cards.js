import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const dataToDisplay = [
    {
      title: "Infected",
      data: confirmed.value,
      description: "Number of active cases of COVID-19",
      styles: styles.infected,
    },
    {
      title: "Recovered",
      data: recovered.value,
      description: "Number of recoveries from COVID-19",
      styles: styles.recovered,
    },
    {
      title: "Deaths",
      data: deaths.value,
      description: "Number of deaths caused by COVID-19",
      styles: styles.deaths,
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {dataToDisplay.map((card) => {
          return (
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, card.styles)}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={card.data}
                    duration={2.5}
                    separator=","
                  ></CountUp>
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
