
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

let createInnerHtml = () => {
    let headerHTML = "<tr> <th></th> <th>Name</th> <th>Gender</th> <th>Department</th> <th>Salary</th> <th>StartDate</th><th>Actions</th> </tr>"
    let innerHTML = `${headerHTML}`;
    let empPayrollList = createEmployeePayrollJSON();

    for (const empPayrollData of empPayrollList) {
        innerHTML = `
        ${innerHTML}
    <tr>
    <td>
        <img class="profile" src="${empPayrollData._profilePic}">
    
    </td>
    <td> 
       ${empPayrollData._name}
    </td>
    <td>${empPayrollData._gender}</td>
    <td>
        ${getDeptHtml(empPayrollData._department)}
    </td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>
        <img alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img alt="edit" src="../assets/icons/create-black-18dp.svg">
    </td>
      </tr>  `;
    }

    document.querySelector("#display").innerHTML = innerHTML;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class = 'dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    return [

        {
            "_name": "Kajal Mane ",
            "_gender": "Female",
            "_department": [
                "Engineer",
                "Other"
            ],
            "_salary": "400000",
            "_startDate": "01 Oct 2021",
            "_note": "Welcome to Bridgelabz",
            _id: new Date().getTime(),
            "_profilePic": "../Assets/profile-images/Ellipse -1.png"
        },
        {
            "_name": "Rohit Sharma ",
            "_gender": "Male",
            "_department": [
                "HR",
                "Finance"
            ],
            "_salary": "400000",
            _startDate: "12 Oct 2019",
            _note: "",
            _id: new Date().getTime() + 1,
            _profilePic: "../Assets/profile-images/Ellipse -3.png",
        }
    ];
}