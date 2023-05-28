export default (time: number): string => {
  const hourInSeconds = 3600;
  const minuteInSeconds = 60;
  const hours = Math.floor(time / hourInSeconds);
  const minutes = Math.floor((time - hours * hourInSeconds) / minuteInSeconds);
  const seconds = time - hours * hourInSeconds - minutes * minuteInSeconds;
  let result = "";

  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  if (!hours) {
    result = `${minutes}:${formattedSeconds}`;
  } else {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    result = `${hours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return result;
};
