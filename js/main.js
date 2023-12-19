let selectedId
const mainContainer = document.querySelector(".container-fluid")

const crudTitle = bsCrudTitle("CRUD name")

const createForm = document.createElement("div")
const createFormInputName = bsFormInput("create-name", "text", "Name")
const createFormInputLastname = bsFormInput(
  "create-lastname",
  "text",
  "Lastname"
)
const createFormInputAge = bsFormInput("create-age", "number", "Age")
createForm.append(
  createFormInputName,
  createFormInputLastname,
  createFormInputAge
)

const updateForm = document.createElement("div")
const updateFormInputName = bsFormInput("update-name", "text", "Name")
const updateFormInputLastname = bsFormInput(
  "update-lastname",
  "text",
  "Lastname"
)
const updateFormInputAge = bsFormInput("update-age", "number", "Age")
updateForm.append(
  updateFormInputName,
  updateFormInputLastname,
  updateFormInputAge
)

const createTriggerModal = bsTriggerModal("create-modal", "Create", "success")
const createModal = bsModal(
  "create-modal",
  "Create Modal",
  "success",
  createForm,
  () => {
    createData({
      name: document.getElementById("create-name").value,
      lastname: document.getElementById("create-name").value,
      age: document.getElementById("create-name").value,
    })
  }
)

const updateModal = bsModal(
  "update-modal",
  "Update Modal",
  "warning",
  updateForm,
  () => {}
)

const deleteModal = bsModal(
  "delete-modal",
  "Delete Modal",
  "danger",
  "Are you sure?",
  () => {}
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
