export class CoreState {
  dayNightMode: any = { mode: getDayLightMode() ? true : false };
}


function getDayLightMode() {
  let date = new Date();
  let hour = date.getHours();
  if (hour > 6 && hour < 16) {
    return false;
  }
  else {
    return true;
  }
}