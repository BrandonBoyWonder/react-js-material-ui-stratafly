import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { TripLocation } from './TripLocation';
import { TripTypeAndTraveller } from './TripTypeAndTraveller';
import { OneWayDate, RoundTripDates } from './TripDates';
import DateIcon from '@material-ui/icons/EventOutlined';

const SearchForm = props => {
  const {
    classes,
    selectedRadio,
    onChangeRadio,
    onClickTraveller,
    totalTravellers,
    fromLocation,
    onChangeFromLocation,
    toLocation,
    onChangeToLocation,
    fromDate,
    toDate,
    onFromDateChange,
    onToDateChange
  } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.tripType}>
        <TripTypeAndTraveller
          selectedRadio={selectedRadio}
          onChangeRadio={onChangeRadio}
          onClickTraveller={onClickTraveller}
          totalTravellers={totalTravellers}
        />
      </Grid>
      <Grid item xs={12} className={classes.textFields}>
        <TripLocation
          location={fromLocation}
          onChangeLocation={onChangeFromLocation}
          classes={classes}
          placeholder={'From'}
        />
      </Grid>
      <Grid item xs={12} className={classes.textFields}>
        <TripLocation
          location={toLocation}
          onChangeLocation={onChangeToLocation}
          classes={classes}
          placeholder={'To'}
        />
      </Grid>
      {selectedRadio === 'one-way' && (
        <Grid item xs={12} className={classes.textFields}>
          <OneWayDate
            fromDate={fromDate}
            onFromDateChange={onFromDateChange}
            icon={<DateIcon className={classes.icon} />}
          />
        </Grid>
      )}

      {selectedRadio === 'round-trip' && (
        <Grid item xs={12} className={classes.textFields}>
          <RoundTripDates
            fromDate={fromDate}
            toDate={toDate}
            onFromDateChange={onFromDateChange}
            onToDateChange={onToDateChange}
            icon={<DateIcon className={classes.icon} />}
          />
        </Grid>
      )}
    </Grid>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary[700],
    paddingTop: theme.spacing.unit * 8
  },
  tripType: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  textFields: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  icon: { color: theme.palette.text.primaryMediumEmphasis }
});

export default withStyles(styles)(SearchForm);
