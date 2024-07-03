interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Larry",
  lastName: "Hudson",
  age: 32,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Karla",
  lastName: "Dermond",
  age: 26,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create header row
const headerRow: HTMLTableRowElement = thead.insertRow();
const headerCell1: HTMLTableCellElement = headerRow.insertCell();
const headerCell2: HTMLTableCellElement = headerRow.insertCell();

headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

table.appendChild(thead);

// Populate table with student data
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

table.appendChild(tbody);
body.appendChild(table);
