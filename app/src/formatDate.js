import moment from "moment";

const formatDate = time => {
  let day = moment.unix(time)._d;
  let sunrise = moment().from(day);
  let sunset = moment().to(day);
  let suntimes = [sunrise, sunset];
  return suntimes;
};

export let suntimes;
