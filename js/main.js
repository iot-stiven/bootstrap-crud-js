let selectedId
const mainContainer = document.querySelector(".container-fluid")

const crudTitle = bsCrudTitle("CRUD name")

const createTriggerModal = bsTriggerModal("create-modal", "Create", "success")
const createForm = bsForm(tableHeaders, "create")
const createModal = bsModal(
  "create-modal",
  "Create Modal",
  "success",
  createForm,
  () => {
    createData({
      name: document.getElementById("create-name").value,
      lastname: document.getElementById("create-lastname").value,
      age: parseInt(document.getElementById("create-age").value),
    })
    document.getElementById("create-name").value = ""
    document.getElementById("create-lastname").value = ""
    document.getElementById("create-age").value = ""
  }
)
const updateForm = bsForm(tableHeaders, "update")
const updateModal = bsModal(
  "update-modal",
  "Update Modal",
  "warning",
  updateForm,
  () => {
    updateData(selectedId, {
      name: document.getElementById("update-name").value,
      lastname: document.getElementById("update-lastname").value,
      age: document.getElementById("update-age").value,
    })
  }
)

const deleteModal = bsModal(
  "delete-modal",
  "Delete Modal",
  "danger",
  "Are you sure?",
  () => {
    deleteData(selectedId)
  }
)

const crudInfoTable = bsTable(
  tableHeaders,
  readData(),
  (row) => {
    selectedId = row.id
    document.getElementById("update-name").value = row.name
    document.getElementById("update-lastname").value = row.lastname
    document.getElementById("update-age").value = row.age
  },
  (row) => (selectedId = row.id)
)

mainContainer.append(
  crudTitle,
  createTriggerModal,
  createModal,
  updateModal,
  deleteModal,
  crudInfoTable
)

function bsForm(dataHeaders, baseId){
  const form = document.createElement("div")
  dataHeaders.forEach((header) => {
    if (!header.editable) return
    if (header.type == "select") {
    } else {
      form.append(
        bsFormInput(`${baseId}-${header.dataKey}`, header.type, header.tableHeader)
      )
    }
  })
  return form
}

function dataForAction(dataHeaders){
  let data = dataHeaders.filter(element => !!element.editable)
  data = data.map(element => element.dataKey)
  console.log(data) 
}

dataForAction(tableHeaders)