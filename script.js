var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
console.log("before read")
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["collegeID"] = document.getElementById("collegeID").value;
    formData["courseName"] = document.getElementById("courseName").value;
    formData["campus"] = document.getElementById("campus").value;
   console.log(formData);
    return formData;

    
}

function insertNewRecord(data) {
    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.collegeID;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseName;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.campus;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    
    console.log(table);
    console.log("The length is :" + table.length);
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("collegeID").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("campus").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("collegeID").value = selectedRow.cells[1].innerHTML;
    document.getElementById("courseName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("campus").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.collegeID;
    selectedRow.cells[2].innerHTML = formData.courseName;
    selectedRow.cells[3].innerHTML = formData.campus;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    //isValid = true;
    if (document.getElementById("fullName").value.trim() == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}