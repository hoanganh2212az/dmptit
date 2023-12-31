// chuc nang cho may cai sua thong tin 

var originalUsername;
var originalDob;
var originalEmail;

function enableEditMode() {
    originalUsername = document.getElementById("username").value;
    originalDob = document.getElementById("dob").value;
    originalEmail = document.getElementById("email").value;

    document.getElementById("editButton").style.display = "none";
    document.getElementById("saveButton").style.display = "inline";
    document.getElementById("cancelButton").style.display = "inline";
    document.getElementById("username").disabled = false;
    document.getElementById("dob").disabled = false;
    document.getElementById("email").disabled = false;
}

function saveChanges() {
    var userName = document.getElementById("username").value;
    document.getElementById("user-name").innerText = userName;

    // Add logic to save changes
    resetEditMode();
}

function cancelChanges() {
    // Restore original values
    document.getElementById("username").value = originalUsername;
    document.getElementById("dob").value = originalDob;
    document.getElementById("email").value = originalEmail;

    resetEditMode();
}

function resetEditMode() {
    document.getElementById("editButton").style.display = "inline";
    document.getElementById("saveButton").style.display = "none";
    document.getElementById("cancelButton").style.display = "none";
    document.getElementById("username").disabled = true;
    document.getElementById("dob").disabled = true;
    document.getElementById("email").disabled = true;
}
