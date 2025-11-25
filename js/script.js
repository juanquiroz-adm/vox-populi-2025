// CONFIGURACIÓN ESTÉTICA
Chart.defaults.font.family = 'Inter';
Chart.defaults.color = '#888';
Chart.defaults.borderColor = '#333';

// 1. CONFIANZA
new Chart(document.getElementById('chartConfianza'), {
    type: 'bar',
    data: {
        labels: ['1 (Nula)', '2 (Baja)', '3 (Media)', '4 (Alta)', '5 (Plena)'],
        datasets: [{
            label: '% de Encuestados',
            data: [14, 24, 52, 10, 0],
            backgroundColor: ['#FF3B30', '#FF3B30', '#444', '#0A84FF', '#0A84FF'],
            borderRadius: 0
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { y: { grid: { display: false } }, x: { grid: { display: false } } }
    }
});

// 2. PLATAFORMAS
new Chart(document.getElementById('chartPlataformas'), {
    type: 'doughnut',
    data: {
        labels: ['X (Twitter)', 'Facebook', 'TikTok', 'Instagram', 'Otros/Ninguna'],
        datasets: [{
            data: [38, 16, 14, 10, 22],
            backgroundColor: ['#fff', '#333', '#444', '#666', '#222'],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        plugins: {
            legend: { position: 'right', labels: { color: '#fff', font: { size: 10 } } }
        },
        cutout: '70%'
    }
});

// 3. POLARIZACIÓN
new Chart(document.getElementById('chartPolarizacion'), {
    type: 'pie',
    data: {
        labels: ['Aumenta Mucho', 'Un Poco', 'Es Igual/NS'],
        datasets: [{
            data: [40, 46, 14],
            backgroundColor: ['#FF3B30', '#ff6b6b', '#333'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: { legend: { position: 'bottom' } }
    }
});

// 4. IMPACTO VOTO
new Chart(document.getElementById('chartVoto'), {
    type: 'bar',
    data: {
        labels: ['Reforzó (40%)', 'No influye (32%)', 'Duda (24%)', 'Cambió (4%)'],
        datasets: [{
            data: [40, 32, 24, 4],
            backgroundColor: ['#fff', '#666', '#444', '#FF3B30'],
            borderRadius: 2
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { grid: { display: false } } }
    }
});