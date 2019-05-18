import { Controller } from "stimulus"

export default class extends Controller {
  open(event) {
    this.element.classList.add('open');
  }

  close() {
    this.element.classList.remove('open')
  }
}
