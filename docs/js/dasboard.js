document.addEventListener("DOMContentLoaded", function() {
    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('sidebarCollapse');
    
    collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Dark Mode Toggle
    const darkToggle = document.getElementById('darkModeToggle');
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Dummy Data Table
    const tableBody = document.getElementById('tableData');
    const dummyData = [
        {id: "#8801", name: "Alice Johnson", status: "Success", amount: "$120.00"},
        {id: "#8802", name: "Bob Smith", status: "Pending", amount: "$85.50"},
        {id: "#8803", name: "Charlie Brown", status: "Failed", amount: "$210.00"},
        {id: "#8804", name: "Diana Prince", status: "Success", amount: "$450.00"},
        {id: "#8805", name: "Ethan Hunt", status: "Success", amount: "$30.00"},
    ];

    dummyData.forEach(row => {
        const badgeClass = row.status === 'Success' ? 'bg-success' : (row.status === 'Pending' ? 'bg-warning' : 'bg-danger');
        tableBody.innerHTML += `
            <tr>
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td><span class="badge ${badgeClass}">${row.status}</span></td>
                <td>${row.amount}</td>
                <td><button class="btn btn-sm btn-light border"><i class="fas fa-eye"></i></button></td>
            </tr>
        `;
    });

    // Charts Initialization
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales 2025',
                data: [12, 19, 15, 25, 22, 30],
                borderColor: '#6366f1',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(99, 102, 241, 0.1)'
            }]
        }
    });

    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            datasets: [{
                data: [55, 30, 15],
                backgroundColor: ['#6366f1', '#10b981', '#f59e0b']
            }]
        },
        options: { plugins: { legend: { position: 'bottom' } } }
    });
});
