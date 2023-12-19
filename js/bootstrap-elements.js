function bsCrudTitle(titleText) {
  const title = document.createElement("h1")
  title.classList = "text-left text-secondary m-2"
  title.innerText = titleText
  return title
}

function bsTriggerModal(modalId, triggerModalText = "", bsColor = "primary") {
  const triggerModal = document.createElement("button")
  triggerModal.className = `btn btn-${bsColor} m-2`
  if (bsColor === "warning") triggerModal.classList.add("text-dark")
  triggerModal.setAttribute("data-bs-toggle", "modal")
  triggerModal.setAttribute("data-bs-target", `#${modalId}`)
  triggerModal.innerText = triggerModalText
  return triggerModal
}

function bsModal(
  modalId,
  modalTitleText,
  bsColor,
  modalBodyContent,
  confirmButtonCb = () => {}
) {
  const modal = document.createElement("div")
  modal.className = "modal fade"
  modal.id = modalId
  modal.setAttribute("tabindex", -1)
  modal.setAttribute("aria-labelledby", "modalLabel")
  modal.setAttribute("aria-hidden", true)

  const modalDialog = document.createElement("div")
  modalDialog.className = "modal-dialog"

  const modalContent = document.createElement("div")
  modalContent.className = "modal-content"

  const modalHeader = document.createElement("div")
  modalHeader.className = `modal-header bg-${bsColor}`

  const modalTitle = document.createElement("h5")
  modalTitle.id = "modalLabel"
  modalTitle.innerText = modalTitleText

  const closeButton = document.createElement("button")
  closeButton.setAttribute("type", "button")
  closeButton.setAttribute("data-bs-dismiss", "modal")
  closeButton.setAttribute("aria-label", "close")
  closeButton.className = "btn btn-close"

  modalHeader.append(modalTitle, closeButton)

  const modalBody = document.createElement("div")
  modalBody.className = "p-3"
  modalBody.append(modalBodyContent)

  const modalFooter = document.createElement("div")
  modalFooter.className = "modal-footer"

  const cancelButton = document.createElement("button")
  cancelButton.setAttribute("type", "button")
  cancelButton.setAttribute("data-bs-dismiss", "modal")
  cancelButton.className = "btn btn-secondary"
  cancelButton.innerText = "Back"

  const confirmButton = document.createElement("button")
  confirmButton.setAttribute("type", "button")
  confirmButton.setAttribute("data-bs-dismiss", "modal")
  confirmButton.className = `btn btn-${bsColor}`
  confirmButton.innerText = "Confirm"
  confirmButton.addEventListener("click", confirmButtonCb)

  modalFooter.append(cancelButton, confirmButton)

  if (bsColor !== "warning") {
    modalHeader.classList.add("text-light")
    confirmButton.classList.add("text-light")
  }

  modalContent.append(modalHeader, modalBody, modalFooter)
  modalDialog.append(modalContent)
  modal.append(modalDialog)

  return modal
}

function bsFormInput(inputId, inputType, labelText = "", placeholder = "") {
  const inputContainer = document.createElement("div")
  inputContainer.className = "mb-3"

  const inputLabel = document.createElement("label")
  inputLabel.setAttribute("for", inputId)
  inputLabel.className = "form-label"
  inputLabel.innerText = labelText

  const input = document.createElement("input")
  input.className = "form-control"
  input.type = inputType
  input.placeholder = placeholder
  input.autocomplete = false
  input.id = inputId

  inputContainer.append(inputLabel, input)
  return inputContainer
}

function bsFormSelect(
  selectId,
  selectOptions,
  valueKey,
  textKey,
  labelText = ""
) {
  const selectContainer = document.createElement("div")
  selectContainer.className = "mb-3"

  const selectLabel = document.createElement("label")
  selectLabel.className = "form-label"
  selectLabel.setAttribute("for", selectId)
  selectLabel.innerText = labelText

  const select = document.createElement("select")
  select.className = "form-select"
  select.id = selectId
  selectOptions.forEach((option) => {
    const optionElement = document.createElement("option")
    optionElement.value = option[valueKey]
    optionElement.innerText = option[textKey]
    select.append(optionElement)
  })

  selectContainer.append(selectLabel, select)
  return selectContainer
}

function bsTable(tableHeaders, tableData, updateButtonCb, deleteButtonCb) {
  const table = document.createElement("table")
  table.className = "table table-striped"

  const tHead = document.createElement("thead")
  tHead.className = "table-dark"

  const trHeader = document.createElement("tr")
  tableHeaders.forEach((header) => {
    const thHeader = document.createElement("th")
    thHeader.innerText = header.tableHeader
    trHeader.append(thHeader)
  })
  const thUpdate = document.createElement("th")
  const thDelete = document.createElement("th")
  trHeader.append(thUpdate, thDelete)
  tHead.append(trHeader)

  const tBody = document.createElement("tbody")
  const headKeys = tableHeaders.map((header) => header.dataKey)
  let counter = 0
  tableData.forEach((row) => {
    const trBody = document.createElement("tr")
    for (let i in headKeys) {
      const tdBody = document.createElement("td")
      if (i == 0) tdBody.innerText = ++counter
      else tdBody.innerText = row[headKeys[i]]
      trBody.append(tdBody)
    }

    const tdUpdate = document.createElement("td")
    const updateButton = bsTriggerModal("update-modal", "Update", "warning")
    updateButton.addEventListener("click", () => updateButtonCb(row))
    tdUpdate.append(updateButton)

    const tdDelete = document.createElement("td")
    const deleteButton = bsTriggerModal("delete-modal", "Delete", "danger")
    deleteButton.addEventListener("click", () => deleteButtonCb(row))
    tdDelete.append(deleteButton)

    trBody.append(tdUpdate, tdDelete)
    tBody.append(trBody)
  })

  table.append(tHead, tBody)
  return table
}
