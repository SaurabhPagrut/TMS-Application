


// GET Request FOR Report By ID

const getReportById = async () => {
    let response = await fetch(`http://localhost:8888/admin/report/${id}`);
    console.log(response);
}


// DELETE Request FOR Report By ID

const deleteReport = async () => {
    let response = await fetch('http://localhost:8888/admin/report/$[id]', {
        method: 'DELETE'
    });
    console.log(response);
}


// GET Request FOR All Reports

const getAllReports = async () => {
    let response = await fetch('http://localhost:8888/admin/reports');
    console.log(response);
}