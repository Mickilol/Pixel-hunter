/* eslint-disable no-console */
import AbstractView from '../../abstract-view';

export default class extends AbstractView {
  get template() {
    return `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;
  }

  bind() {
    const nextBtnNode = this.element.querySelector(`.intro__asterisk`);

    nextBtnNode.addEventListener(`click`, () => {
      this.onStart();
    });
  }

  onStart() {

  }
}
