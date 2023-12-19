const API_ROOT = "http://localhost:3000";

const tableHeaders = [
  {
    editable: false,
    dataKey: "id",
    tableHeader: "#",
    type: "number",
  },
  {
    editable: true,
    dataKey: "name",
    tableHeader: "Name",
    type: "text",
  },
  {
    editable: true,
    dataKey: "stock",
    tableHeader: "Stock",
    type: "text",
  },
  {
    editable: true,
    dataKey: "areaId",
    subDataKey: "name",
    subDataId: "id",
    tableHeader: "Area",
    type: "select",
    url: `${API_ROOT}/areas`
  },
  {
    editable: true,
    dataKey: "categoryId",
    subDataKey: "name",
    subDataId: "id",
    tableHeader: "Category",
    type: "select",
    url: `${API_ROOT}/categories`
  },
  {
    editable: true,
    dataKey: "unitsId",
    subDataKey: "name",
    subDataId: "id",
    tableHeader: "Units",
    type: "select",
    url: `${API_ROOT}/units`
  },
];

async function readData() {
  const tableData = await readDataReq(`${API_ROOT}/products`);
  return tableData;
}

async function createData(data) {
  const response = await createDataReq(`${API_ROOT}/products`, data);
  if(response.error) console.log(response);
  else document.location.reload();
}

async function updateData(id, data) {
  const response = await updateDataReq(`${API_ROOT}/products/${id}`, data);
  if(response.error) console.log(response);
  else document.location.reload();
}

async function deleteData(id) {
  const response = await deleteDataReq(`${API_ROOT}/products/${id}`);
  if(response.error) console.log(response);
  else document.location.reload();
}
