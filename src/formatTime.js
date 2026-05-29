export const formatTime = (time) => {
  const getHours = Math.floor(time / 3600);
  const getMinutes = Math.floor((time % 3600) / 60);
  const getSeconds = time % 60;

  const formattedTime = [getHours, getMinutes, getSeconds]
  .map(unit => String(unit).padStart(2, '0'))
  .join(':');

  return formattedTime;
};
