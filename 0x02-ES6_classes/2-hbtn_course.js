class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;  // Using setters for validation
    this.length = length;  // Using setters for validation
    this.students = students;  // Using setters for validation
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with validation
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with validation
  set students(students) {
    if (Array.isArray(students) && students.every(s => typeof s === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;

