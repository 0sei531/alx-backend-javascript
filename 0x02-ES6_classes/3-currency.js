class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string' && code.length > 0) {
      this._code = code;
    } else {
      throw new TypeError('Code must be a non-empty string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string' && name.length > 0) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a non-empty string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
