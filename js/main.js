const mainContainer = document.querySelector(".container-fluid");

const crudTitle = bsCrudTitle("CRUD name");
const createTriggerModal = bsTriggerModal("createModal", "Create", "success");
const createFormInputName = bsFormInput("create-name", "text", "Name");
const createModal = bsModal(
  "createModal",
  "Modal Create",
  "success",
  createFormInputName
);

mainContainer.append(crudTitle, createTriggerModal, createModal);
