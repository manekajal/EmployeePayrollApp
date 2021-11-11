let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeeDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeeDataFromStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ?
        JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
}



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

const remove=(node)=>{
    let empPayrollData=empPayrollList.find(empData => empData._id==node._id);
    if(!empPayrollData) return;
    const index=empPayrollList
                .map(empData => empData._id)
                .indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
}