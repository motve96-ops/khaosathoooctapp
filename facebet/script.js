// Dữ liệu mẫu trận đấu
const matches = [
    {
        teams: 'Việt Nam vs Thái Lan',
        time: '20:00 15/10',
        odds: { home: 1.95, draw: 3.40, away: 3.80 }
    },
    {
        teams: 'Man City vs Arsenal',
        time: '22:00 15/10',
        odds: { home: 1.65, draw: 4.00, away: 4.50 }
    },
    {
        teams: 'Real Madrid vs Barcelona',
        time: '01:00 16/10',
        odds: { home: 2.10, draw: 3.60, away: 3.20 }
    }
];

// Populate trận đấu
function loadMatches() {
    const container = document.getElementById('matches');
    container.innerHTML = matches.map(match => `
        <div class="match-card">
            <div class="match-teams">${match.teams}</div>
            <div class="match-time">${match.time}</div>
            <div class="match-odds">
                <button class="odd-btn" onclick="placeBet('home', ${match.odds.home})">${match.odds.home}</button>
                <button class="odd-btn" onclick="placeBet('draw', ${match.odds.draw})">${match.odds.draw}</button>
                <button class="odd-btn" onclick="placeBet('away', ${match.odds.away})">${match.odds.away}</button>
            </div>
        </div>
    `).join('');
}

// Đặt cược mô phỏng
function placeBet(type, odds) {
    alert(`Đặt cược thành công! Kèo ${type} với tỷ lệ ${odds}`);
    // Có thể thêm logic cập nhật ví
}

// Smooth scroll cho nav
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load khi trang sẵn sàng
document.addEventListener('DOMContentLoaded', loadMatches);

// Cập nhật ví ngẫu nhiên (demo)
setInterval(() => {
    const balance = document.querySelector('.balance');
    const newBalance = (500000 + Math.floor(Math.random() * 100000)).toLocaleString('vi-VN') + ' VNĐ';
    balance.textContent = newBalance;
}, 10000);

