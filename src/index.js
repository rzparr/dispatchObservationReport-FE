import './index.css';
import { getSupervisors, deleteSupervisor } from './api/supervisorApi';

// Populate table of supervisors
getSupervisors().then(result => {
    let supervisorsBody = "";

    result.forEach(supervisor => {
        supervisorsBody += `<tr>
        <td><a href="#" data-id="${supervisor.id}" class="deleteSupervisor">Delete</a></td>
        <td>${supervisor.id}</td>
        <td>${supervisor.supervisorName}</td>
        </tr>`
    });

    global.document.getElementById('supervisors').innerHTML = supervisorsBody;

    const deleteLinks = global.document.getElementsByClassName('deleteSupervisor');

    // Must use array.from to create a real array from a DOM collection
    // getElementsByCklassName only returns an "array like" object
    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target;
            event.preventDefault();
            deleteSupervisor(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});