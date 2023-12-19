const tableHeaders = [
  {
    dataKey: "id",
    tableHeader: "#",
    editable: false,
    type: "number"
  },
  {
    dataKey: "name",
    tableHeader: "Name",
    editable: true,
    type: "text"
  },
  {
    dataKey: "lastname",
    tableHeader: "Lastname",
    editable: true,
    type: "text"
  },
  {
    dataKey: "age",
    tableHeader: "Age",
    editable: true,
    type: "number"
  },
]

const tableData = [
  {
    id: 1,
    name: "Juan",
    lastname: "Perez",
    age: 25,
  },
  {
    id: 2,
    name: "Luis",
    lastname: "Rodriguez",
    age: 20,
  },
  {
    id: 3,
    name: "Ana",
    lastname: "Pedraza",
    age: 27,
  },
  {
    id: 4,
    name: "Maria",
    lastname: "Rivera",
    age: 22,
  },
  {
    id: 5,
    name: "Pedro",
    lastname: "Lopez",
    age: 31,
  },
  {
    id: 6,
    name: "Carlos",
    lastname: "Ceballos",
    age: 26,
  },
]

function readData() {
  return tableData
}

function createData(data) {
  if (!data.name || !data.lastname || !data.age) return
  const id = tableData[tableData.length - 1].id + 1
  tableData.push({ id, ...data })
  crudInfoTable.innerHTML = ""
  crudInfoTable.append(bsTable(
    tableHeaders,
    readData(),
    (row) => {
      selectedId = row.id
      document.getElementById("update-name").value = row.name
      document.getElementById("update-lastname").value = row.lastname
      document.getElementById("update-age").value = row.age
    },
    (row) => (selectedId = row.id)
  ))
}

function updateData(id, data) {
  if (!data.name || !data.lastname || !data.age || !id) return
  const index = tableData.findIndex((row) => row.id == id)
  if (index === -1) return
  tableData[index] = { id: parseInt(id), ...data }
  crudInfoTable.innerHTML = ""
  crudInfoTable.append(bsTable(
    tableHeaders,
    readData(),
    (row) => {
      selectedId = row.id
      document.getElementById("update-name").value = row.name
      document.getElementById("update-lastname").value = row.lastname
      document.getElementById("update-age").value = row.age
    },
    (row) => (selectedId = row.id)
  ))
}

function deleteData(id) {
  const index = tableData.findIndex((row) => row.id == id)
  if (index === -1) return
  tableData.splice(index, 1)
  crudInfoTable.innerHTML = ""
  crudInfoTable.append(bsTable(
    tableHeaders,
    readData(),
    (row) => {
      selectedId = row.id
      document.getElementById("update-name").value = row.name
      document.getElementById("update-lastname").value = row.lastname
      document.getElementById("update-age").value = row.age
    },
    (row) => (selectedId = row.id)
  ))
}
