function bsCrudTitle(titleText) {
  const title = document.createElement("h1");
  title.classList = "text-left text-secondary m-2";
  title.innerText = titleText;
  return title;
}

function bsTriggerModal(modalId, triggerModalText = "", bsColor = "primary") {
  const triggerModal = document.createElement("button");
  triggerModal.className = `btn btn-${bsColor} m-2`;
  if (bsColor === "warning") triggerModal.classList.add("text-dark");
  triggerModal.setAttribute("data-bs-toggle", "modal");
  triggerModal.setAttribute("data-bs-target", `#${modalId}`);
  triggerModal.innerText = triggerModalText;
  return triggerModal;
}

function bsModal(
  modalId,
  modalTitleText,
  bsColor,
  modalBodyContent,
  confirmButtonCb = () => {}
) {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = modalId;
  modal.setAttribute("tabindex", -1);
  modal.setAttribute("aria-labelledby", "modalLabel");
  modal.setAttribute("aria-hidden", true);

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalHeader = document.createElement("div");
  modalHeader.className = `modal-header bg-${bsColor}`;

  const modalTitle = document.createElement("h5");
  modalTitle.id = "modalLabel";
  modalTitle.innerText = modalTitleText;

  const closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "close");
  closeButton.className = "btn btn-close";

  modalHeader.append(modalTitle, closeButton);

  const modalBody = document.createElement("div");
  modalBody.className = "p-3";
  modalBody.append(modalBodyContent);

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("data-bs-dismiss", "modal");
  cancelButton.className = "btn btn-danger";
  cancelButton.innerText = "Back";

  const confirmButton = document.createElement("button");
  confirmButton.setAttribute("type", "button");
  confirmButton.className = `btn btn-${bsColor}`;
  confirmButton.innerText = "Confirm";
  confirmButton.addEventListener("click", confirmButtonCb);

  modalFooter.append(cancelButton, confirmButton);

  if (bsColor !== "warning") {
    modalHeader.classList.add("text-light");
    confirmButton.classList.add("text-light");
  }

  modalContent.append(modalHeader, modalBody, modalFooter);
  modalDialog.append(modalContent);
  modal.append(modalDialog);

  return modal;
}

function bsFormInput(inputId, inputType, labelText) {
  const inputContainer = document.createElement("div");
  inputContainer.className = "mb-3";

  const inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", inputId);
  inputLabel.className = "form-label";
  inputLabel.innerText = labelText;

  const input = document.createElement("input");
  input.className = "form-control";
  input.type = inputType;
  input.id = inputId;

  inputContainer.append(inputLabel, input);
  return inputContainer;
}
