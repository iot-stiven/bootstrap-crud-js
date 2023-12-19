const tableHeaders = [
  {
    dataKey: "id",
    tableHeader: "#",
  },
  {
    dataKey: "name",
    tableHeader: "Name",
  },
  {
    dataKey: "lastname",
    tableHeader: "Lastname",
  },
  {
    dataKey: "age",
    tableHeader: "Age",
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
  console.log(tableData)
}

function updateData(id, data) {
  if (!data.name || !data.lastname || !data.age || id) return
  const index = tableData.findIndex((row) => row.id == id)
  if (index === -1) return
  tableData[index] = { id: parseInt(id), ...data }
  console.log(tableData)
}

function deleteData(id) {
  const index = tableData.findIndex((row) => row.id == id)
  if (index === -1) return
  tableData.splice(index, 1)
  console.log(tableData)
}
