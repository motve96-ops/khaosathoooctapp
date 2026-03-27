// Load data từ JSON file riêng theo yêu cầu user
let questionsData = []; // sẽ load từ survey-data.json
    "1. Giảng viên giới thiệu đầy đủ về bản thân và môn học trong buổi học đầu tiên.",
    "2. Giảng viên nêu rõ các kỹ năng cần thiết cho lớp học và các kỹ năng sẽ có được sau khi hoàn tất môn học.",
    "3. Đề cương và những giới thiệu ban đầu của giảng viên làm sáng tỏ được mục đích và giá trị của môn học.",
    "4. Giảng viên luôn luôn có mặt đúng giờ, cho nghỉ giải lao theo quy định, và ra về đúng giờ.",
    "5. Giảng viên luôn lên lớp trong trang phục đàng hoàng, đứng đắn (tốt nhất là nam áo sơ-mi cà vạt, nữ áo dài).",
    "6. Phòng học, thiết bị liên quan được GV chuẩn bị kỹ càng cho giờ lên lớp.",
    "7. Giảng viên có ý thức và thái độ bảo vệ tài sản, thiết bị của nhà trường.",
    "8. Giảng viên giảng dạy có sử dụng sách giáo khoa và sách giáo khoa đó có nội dung khá hay.",
    "9. Giảng viên có giới thiệu khá đầy đủ các tài liệu cho tham khảo, nghiên cứu thêm.",
    "10. Giảng viên chú trọng đánh giá quá trình, ví dụ: bài tập về nhà, các dạng bài tập nhóm hay cá nhân,…",
    "11. Các dạng bài tập của giảng viên đòi hỏi bạn phải làm việc nhóm với các sinh viên khác.",
    "12. Giảng viên tận tình hỗ trợ và giải đáp các thắc mắc của sinh viên.",
    "13. Giảng viên có thái độ công bằng và chống tiêu cực trong đánh giá kết quả học tập",
    "14. So với các lớp khác của bạn, khối lượng bài tập, thi cử ở lớp này là hợp lý, không nhiều hay ít quá.",
    "15. So với các lớp khác của bạn, lớp này không quá khó hoặc quá dễ.",
    "16. Sinh viên trong lớp luôn đi học đông đủ và tập trung cao trong giờ học.",
    "17. So với các giảng viên khác, giảng viên lớp này khá tích cực và giảng dạy hiệu quả.",
    "18. Bạn đã học được nhiều điều bổ ích từ lớp học này (dù có thể lớp học vẫn còn ít nhiều hạn chế).",
    "19. Nội dung học tập phản ánh đúng mục tiêu học tập đặt ra ban đầu.",
    "20. Phẩm chất Giảng viên 1 (về thái độ)",
    "21. Phẩm chất Giảng viên 2 ( sự nhiệt tình trong giảng dạy)",
    "22. Phẩm chất Giảng viên 3 ( tính kiên nhẫn)",
    "23. Phẩm chất Giảng viên 4 ( sự hiểu biết)",
    "24. Phẩm chất Giảng viên 5 ( tính linh hoạt )",
    "25. Phẩm chất Giảng viên 6 ( tâm tính )",
    "26. Điều kiện tiếp xúc Giảng viên (và Trợ giảng)",
    "27. Chất lượng và Không khí giờ học 1 ( cách thức tổ chức)",
    "28. Chất lượng và Không khí giờ học 2 ( tính trình tự )",
    "29. Chất lượng và Không khí giờ học 3 ( hiệu quả giờ học)",
    "30. Chất lượng giảng dạy 1",
    "31. Chất lượng giảng dạy 2",
    "32. Chất lượng giảng dạy 3",
    "33. Cơ hội thảo luận và Phát biểu của Sinh viên 1",
    "34. Cơ hội thảo luận và Phát biểu của Sinh viên 2",
    "35. (Giảng viên) Dùng Slide & Projector:",
    "36. Khối lượng Học tập (của Lớp học) 1",
    "37. Khối lượng Học tập (của Lớp học) 2",
    "38. Nội dung sách học",
    "39. Khối lượng đọc sách",
    "40. Bài tập ngoài giờ",
    "1. Đa dạng và có giá trị rất cao",
    "2. Nhiều bài tập có giá trị cao", 
    "3. Có giá trị vừa phải",
    "4. Ít giá trị",
    "5. Quá ít bài tập ngoài giờ có giá trị",
    "6. Không có bài tập ngoài giờ"
];

// Load questions dynamically
async function loadSurvey() {
    try {
        const response = await fetch('survey-data.json');
        const data = await response.json();
        questionsData = data.questions;
        
        const form = document.getElementById('surveyForm');
        questionsData.forEach((q, index) => {
            const questionGroup = document.createElement('div');
            questionGroup.className = 'question-group';
            questionGroup.innerHTML = `
                <div class="question">
                    <strong>${q.id}. ${q.text}</strong>
                </div>
                <div class="options">
                    ${q.options.map((option, optIndex) => 
                        `<label><input type="radio" name="q${q.id}" value="${optIndex + 1}"> ${optIndex + 1}. ${option}</label>`
                    ).join('')}
                </div>
            `;
            form.insertBefore(questionGroup, form.querySelector('.submit-btn'));
        });
    } catch (error) {
        console.error('Error loading survey data:', error);
        // Fallback to hard-coded data if JSON fails
        loadSurveyFallback();
    }
}

function loadSurveyFallback() {
    // Backup 40 câu nếu JSON fail
    const fallbackQuestions = [
        "1. Giảng viên giới thiệu đầy đủ về bản thân và môn học trong buổi học đầu tiên.",
        // ... full 40 as before
    ];
    // implement fallback logic
}

// Submit handling
document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    let score = 0;
    let answered = 0;
    
    for (let i = 1; i <= 40; i++) {
        const value = formData.get(`q${i}`);
        if (value) {
            score += parseInt(value);
            answered++;
        }
    }
    
    const avgScore = (score / answered).toFixed(1);
    const grade = getGrade(avgScore);
    
    document.getElementById('resultsText').innerHTML = `
        <p><strong>Cảm ơn bạn đã hoàn thành khảo sát!</strong></p>
        <p>Điểm trung bình: <strong>${avgScore}/6</strong></p>
        <p>Xếp loại: <strong>${grade}</strong></p>
        <p>Số câu trả lời: ${answered}/40</p>
    `;
    
    document.getElementById('resultsModal').style.display = 'block';
});

// Get grade based on average
function getGrade(avg) {
    if (avg <= 1.5) return 'Rất tốt';
    if (avg <= 2.5) return 'Tốt';
    if (avg <= 3.5) return 'Khá';
    if (avg <= 4.5) return 'Trung bình';
    if (avg <= 5.5) return 'Yếu';
    return 'Kém';
}

// Modal controls
function closeModal() {
    document.getElementById('resultsModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('resultsModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', loadSurvey);

