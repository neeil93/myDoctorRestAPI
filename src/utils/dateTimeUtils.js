const timeUtils = {
  formatTime: (time) => {
    return String(time.hours).padStart(2, '0') + String(time.minutes).padStart(2, '0');
  },
  parseTime: (timeStr) => {
    return {
      hours: parseInt(timeStr.substring(0, 2)),
      minutes: parseInt(timeStr.substring(2))
    };
  },
  addMinutes: (time, mins) => {
    let minutes = (time.minutes + mins) % 60;
    let hours = (time.hours + Math.floor((time.minutes + mins) / 60)) % 24;
    return {
      hours,
      minutes
    };
  },
};

export {
  timeUtils
};