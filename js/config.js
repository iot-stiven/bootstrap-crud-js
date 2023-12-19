const API_ROOT = "http://localhost:3000/products";

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
    url: `http://localhost:3000/areas`
  },
  {
    editable: true,
    dataKey: "categoryId",
    subDataKey: "name",
    subDataId: "id",
    tableHeader: "Category",
    type: "select",
    url: `http://localhost:3000/categories`
  },
  {
    editable: true,
    dataKey: "unitsId",
    subDataKey: "name",
    subDataId: "id",
    tableHeader: "Units",
    type: "select",
    url: `http://localhost:3000/units`
  },
];

async function readData() {
  const tableData = await readDataReq(`${API_ROOT}`);
  return tableData;
}

async function createData(data) {
  const response = await createDataReq(`${API_ROOT}`, data);
  if(response.error) console.log(response);
  else document.location.reload();
}

async function updateData(id, data) {
  const response = await updateDataReq(`${API_ROOT}/${id}`, data);
  if(response.error) console.log(response);
  else document.location.reload();
}

async function deleteData(id) {
  const response = await deleteDataReq(`${API_ROOT}/${id}`);
  if(response.error) console.log(response);
  else document.location.reload();
}
