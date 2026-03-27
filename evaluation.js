// Dữ liệu mẫu môn học
const subjectsData = [
    { name: 'Toán học', teacher: 'TS. Nguyễn Văn A', ht1: 8.5, ht2: 7.8, avg: 8.15 },
    { name: 'Vật lý', teacher: 'ThS. Trần Thị B', ht1: 9.0, ht2: 8.5, avg: 8.75 },
    { name: 'Hóa học', teacher: 'GV. Lê Văn C', ht1: 7.5, ht2: 8.0, avg: 7.75 },
    { name: 'Tin học', teacher: 'TS. Phạm Thị D', ht1: 9.2, ht2: 9.5, avg: 9.35 },
    { name: 'Tiếng Anh', teacher: 'MA. Hoàng Văn E', ht1: 8.0, ht2: 7.5, avg: 7.75 }
];

// Load bảng môn học
function loadSubjectsTable() {
    const tbody = document.getElementById('subjects-table');
    tbody.innerHTML = subjectsData.map((subject, index) => `
        <tr>
            <td>${subject.name}</td>
            <td>${subject.teacher}</td>
            <td>${subject.ht1}</td>
            <td>${subject.ht2}</td>
            <td><strong>${subject.avg.toFixed(2)}</strong></td>
            <td><button class="btn-evaluate" onclick="startEvaluation(${index})">Đánh Giá</button></td>
        </tr>
    `).join('');
}

// Bắt đầu đánh giá
function startEvaluation(index) {
    const subject = subjectsData[index];
    const feedback = prompt(`Đánh giá môn ${subject.name} (1-10):`);
    if (feedback && !isNaN(feedback) && feedback >= 1 && feedback <= 10) {
        alert(`Cảm ơn! Đánh giá của bạn cho ${subject.name}: ${feedback}/10`);
    }
}

// Biểu đồ điểm số đơn giản (canvas)
function drawChart() {
    const canvas = document.getElementById('chart');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    // Dữ liệu mẫu
    const labels = subjectsData.map(s => s.name.slice(0,3));
    const data = subjectsData.map(s => s.avg);
    const maxData = Math.max(...data);

    // Vẽ biểu đồ cột
    const barWidth = canvas.width / data.length * 0.6;
    data.forEach((value, i) => {
        const barHeight = (value / maxData) * 250;
        const x = i * (canvas.width / data.length) + 20;
        const y = canvas.height - barHeight - 20;

        ctx.fillStyle = '#1877f2';
        ctx.fillRect(x, y, barWidth, barHeight);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(value.toFixed(1), x + barWidth/2, y - 5);
        
        ctx.fillStyle = '#65676b';
        ctx.font = '12px Segoe UI';
        ctx.fillText(labels[i], x + barWidth/2, canvas.height - 5);
    });
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    loadSubjectsTable();
    drawChart();
    
    // Resize chart
    window.addEventListener('resize', drawChart);
});

