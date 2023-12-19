window.addEventListener("load", async () => {
  let selectedId;

  const mainContainer = document.querySelector(".container-fluid");
  const crudTitle = bsCrudTitle("CRUD name");

  const createTriggerModal = bsTriggerModal(
    "create-modal",
    "Create",
    "success"
  );
  const createForm = bsForm(tableHeaders, "create");
  const createModal = bsModal(
    "create-modal",
    "Create Modal",
    "success",
    createForm,
    () => {
      createData(setDataFromDOM(tableHeaders, "create"));
    }
  );
  const updateForm = bsForm(tableHeaders, "update");
  const updateModal = bsModal(
    "update-modal",
    "Update Modal",
    "warning",
    updateForm,
    () => {
      updateData(selectedId, setDataFromDOM(tableHeaders, "update"));
    }
  );

  const deleteModal = bsModal(
    "delete-modal",
    "Delete Modal",
    "danger",
    "Are you sure?",
    () => {
      deleteData(selectedId);
    }
  );

  const crudInfoTable = await bsTable(
    tableHeaders,
    readData,
    (row) => {
      selectedId = row.id;
      setDOMFromData(tableHeaders, row, "update");
    },
    (row) => (selectedId = row.id)
  );

  mainContainer.append(
    crudTitle,
    createTriggerModal,
    createModal,
    updateModal,
    deleteModal,
    crudInfoTable
  );
});

function bsForm(dataHeaders, baseId) {
  const form = document.createElement("div");
  dataHeaders.forEach(async (header) => {
    if (!header.editable) return;
    if (header.type == "select") {
      const selectData = await readDataReq(header.url);
      form.append(
        bsFormSelect(
          `${baseId}-${header.dataKey}`,
          selectData,
          header.subDataId,
          header.subDataKey,
          header.tableHeader
        )
      );
    } else {
      form.append(
        bsFormInput(
          `${baseId}-${header.dataKey}`,
          header.type,
          header.tableHeader
        )
      );
    }
  });
  return form;
}

function setDataFromDOM(dataHeaders, action) {
  let data = dataHeaders.filter((element) => !!element.editable);
  data = data.map((element) => element.dataKey);
  const object = {};
  for (i in data) {
    const value = document.getElementById(`${action}-${data[i]}`).value;
    object[data[i]] = parseInt(value) ? parseInt(value) : value;
  }
  return object;
}

function setDOMFromData(dataHeaders, values, action) {
  let data = dataHeaders.filter((element) => !!element.editable);
  for (i in data) {
    if (data[i].type == "select") {
      document.getElementById(`${action}-${data[i].dataKey}`).value =
        values[data[i].dataKey][data[i].subDataId];
    } else {
      document.getElementById(`${action}-${data[i].dataKey}`).value =
        values[data[i].dataKey];
    }
  }
}
