import { observable } from 'mobx';

import CoupleStyle from './Couple.style';

class CoupleState {

  @observable styles = CoupleStyle();
  @observable seconds = this.getRemainingTime('June 17 2017').seconds;
  @observable minutes = this.getRemainingTime('June 17 2017').minutes;
  @observable hours = this.getRemainingTime('June 17 2017').hours;
  @observable days = this.getRemainingTime('June 17 2017').days;

  constructor () {
    this.deadline = new Date(Date.parse('June 17 2017'));

    setInterval(() => {
      this.seconds = this.getRemainingTime(this.deadline).seconds;
      this.minutes = this.getRemainingTime(this.deadline).minutes;
      this.hours = this.getRemainingTime(this.deadline).hours;
      this.days = this.getRemainingTime(this.deadline).days;
    }, 1000);
  }

  getRemainingTime = (endtime) => {
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };

}

export default new CoupleState;
