
const disciplineDatabase = {
    boxing: {
        title: "Elite Boxing Specialists",
        fighters: [
            { name: "Max Holloway", detail: "BMF & Featherweight Legend • Precision Volume Pocket Boxer", img: "https://www.ufc.com/images/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=mcRfmIq0" },
            { name: "Dustin Poirier", detail: "Former Interim LW Champion • Elite Shoulder-Roll Defense & Heavy Counter Hooks", img: "https://www.ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/POIRIER_DUSTIN_L_06-01.png?itok=VHXq-Y5g" },
            { name: "Sean O'Malley", detail: "Former BW Champion • Master of Feints, Snapping Jabs, & Long-Range Snipers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4eYU4jgwjVzKEjAEAsQvmRSHZzt2lqB2rQ&s" }
        ]
    },
    muaythai: {
        title: "Elite Muay Thai Champions",
        fighters: [
            { name: "Alex Pereira", detail: "Light Heavyweight World Champ • Devastating Calf Kicks & Left Hook Execution", img: "https://ripped.topps.com/wp-content/uploads/2024/03/alex-pereira.webp" },
            { name: "Tawanchai PK.Saenchai", detail: "ONE Muay Thai Champion • World-Class Teep Kicks & Lethal Left Roundhouses", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvW063cT-ry87oknMMKvBYXnubVCO_alk8JQ&s" },
            { name: "Rodtang Jitmuangnon", detail: "Flyweight Muay Thai Legend • Relentless Close-Range Elbow Exchanges & Iron Chin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReScmgHHjKcyB29hbbHw0nyXfHVeNkZJQLLsuTHiC3TLZ4ejBn40tjFJ1RN0QSqjp5lxEFGJ2kSgOVzOTrpCCsVxKKhm02nxaTUTdwGIBIIA&s=10" }
        ]
    },
    bjj: {
        title: "Elite Brazilian Jiu-Jitsu Masters",
        fighters: [
            { name: "Charles Oliveira", detail: "Former Lightweight Champ • All-Time Leader in UFC Submission Victories", img: "https://www.ufc.com/images/styles/athlete_bio_full_body/s3/2026-03/OLIVEIRA_CHARLES_L_BMFMOCK.png?itok=Up-QPLgQ" },
            { name: "Gilbert Burns", detail: "Multi-Time BJJ World Champion • Explosive Armbars & Positional Control", img: "https://www.ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/BURNS_GILBERT_L_04-18.png?itok=H7GqTf0f" },
            { name: "Brian Ortega", detail: "Top Featherweight Contender • Elite Trap-Door Guillotines & Triangle Chokes", img: "https://www.ufc.com/images/styles/athlete_bio_full_body/s3/2025-08/ORTEGA_BRIAN_L_08-23.png?itok=OQf_S2Es" }
        ]
    },
    wrestling: {
        title: "Elite Wrestling Competitors",
        fighters: [
            { name: "Islam Makhachev", detail: "Lightweight Champion • Flawless Chain Wrestling, Double-Legs & Top Control", img: "https://www.ufc.com/images/2025-01/7/MAKHACHEV_ISLAM_BELT_01-18.png" },
            { name: "Jon Jones", detail: "Heavyweight Champion • Elite Greco-Roman Level Changes & Takedown Defense", img: "https://upload.wikimedia.org/wikipedia/commons/3/36/JonBonesJones.jpg" },
            { name: "Kamaru Usman", detail: "Former Welterweight Champion • Unstoppable Cage-Wall Clinch & Takedown Power", img: "https://www.ufc.com/images/styles/athlete_bio_full_body/s3/2025-06/USMAN_KAMARU_L_06-14.png?itok=_E2PDHo4" }
        ]
    },
    judo: {
        title: "Elite Judo Specialists",
        fighters: [
            { name: "Ronda Rousey", detail: "UFC Hall of Fame Legend • Olympic Judo Medalist • Signature Armbar Finishes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrcOpzC9au2wpTaIlKN_j0nvROj9UkBFe8w&s" },
            { name: "Valentina Shevchenko", detail: "Flyweight Champion • High-Impact Head-Arm Throws & Dynamic Inside Trips", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rpoPTu1I8QCFOUgXu0MjVieNQMmIc8wcrQ&s" },
            { name: "Kayla Harrison", detail: "2x Olympic Judo Gold Medalist • Elite Power Hip-Tosses & Dominant Ground Pound", img: "https://www.ufc.com/images/styles/athlete_bio_full_body/s3/2025-06/HARRISON_KAYLA_L_BELTMOCK.png?itok=goxu4s1i" }
        ]
    },
    karate: {
        title: "Elite Karate Specialists",
        fighters: [
            { name: "Stephen Thompson", detail: "Welterweight Contender • Masterful Blitzing Footwork & Disguised Side Kicks", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKsrAtJ9XPPsC-dsQymlnS_9gbgtINqlhRg&s" },
            { name: "Robert Whittaker", detail: "Former Middleweight Champ • Elite Linear Blitzes, Counter Right Hands & Speed", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cYerFdQST9idm_rTmSIYEWqh8d_oFsoN0A&s" },
            { name: "Lyoto Machida", detail: "Former Light Heavyweight Champ • Shotokan Base, Unorthodox Timing & Counter Snipers", img: "https://m.media-amazon.com/images/I/61inoidqI2L._AC_UF1000,1000_QL80_.jpg" }
        ]
    }
};

const rankingsData = [
    {
        name: "Flyweight", limit: "125 lbs",
        champ: { name: "Joshua Van", country: "Myanmar", record: "17–2" },
        top10: [
            { r: 1, name: "Alexandre Pantoja", country: "Brazil", record: "30–6" },
            { r: 2, name: "Manel Kape", country: "Portugal", record: "22–7" },
            { r: 3, name: "Tatsuro Taira", country: "Japan", record: "18–2" },
            { r: 4, name: "Brandon Royval", country: "United States", record: "17–9" },
            { r: 5, name: "Kyoji Horiguchi", country: "Japan", record: "36–5" },
            { r: 6, name: "Lone'er Kavanagh", country: "England", record: "10–1" },
            { r: 7, name: "Amir Albazi", country: "Iraq", record: "17–3" },
            { r: 8, name: "Asu Almabayev", country: "Kazakhstan", record: "23–3" },
            { r: 9, name: "Brandon Moreno", country: "Mexico", record: "23–10–2" },
            { r: 10, name: "Steve Erceg", country: "Australia", record: "14–4" },
        ]
    },
    {
        name: "Bantamweight", limit: "135 lbs",
        champ: { name: "Petr Yan", country: "Russia", record: "20–5" },
        top10: [
            { r: 1, name: "Merab Dvalishvili", country: "Georgia", record: "21–5" },
            { r: 2, name: "Umar Nurmagomedov", country: "Russia", record: "20–1" },
            { r: 3, name: "Sean O'Malley", country: "United States", record: "20–3" },
            { r: 4, name: "Cory Sandhagen", country: "United States", record: "18–6" },
            { r: 5, name: "Song Yadong", country: "China", record: "23–8–1" },
            { r: 6, name: "Aiemann Zahabi", country: "Canada", record: "14–3" },
            { r: 7, name: "Mario Bautista", country: "United States", record: "17–3" },
            { r: 8, name: "David Martínez", country: "Mexico", record: "14–1" },
            { r: 9, name: "Deiveson Figueiredo", country: "Brazil", record: "25–7–1" },
            { r: 10, name: "Marlon Vera", country: "Ecuador", record: "23–12–1" },
        ]
    },
    {
        name: "Featherweight", limit: "145 lbs",
        champ: { name: "Alexander Volkanovski", country: "Australia", record: "28–4" },
        top10: [
            { r: 1, name: "Movsar Evloev", country: "Russia", record: "20–0" },
            { r: 2, name: "Diego Lopes", country: "Brazil", record: "28–8" },
            { r: 3, name: "Lerone Murphy", country: "England", record: "17–1–1" },
            { r: 4, name: "Aljamain Sterling", country: "United States", record: "26–5" },
            { r: 5, name: "Yair Rodríguez", country: "Mexico", record: "20–5" },
            { r: 6, name: "Jean Silva", country: "Brazil", record: "17–3" },
            { r: 7, name: "Arnold Allen", country: "England", record: "21–4" },
            { r: 8, name: "Youssef Zalal", country: "Morocco", record: "18–6–1" },
            { r: 9, name: "Steve Garcia", country: "United States", record: "19–6" },
            { r: 10, name: "Kevin Vallejos", country: "Argentina", record: "18–1" },
        ]
    },
    {
        name: "Lightweight", limit: "155 lbs",
        champ: { name: "Justin Gaethje", country: "United States", record: "28–5" },
        top10: [
            { r: 1, name: "Ilia Topuria", country: "Georgia", record: "17–1" },
            { r: 2, name: "Arman Tsarukyan", country: "Armenia", record: "23–3" },
            { r: 3, name: "Charles Oliveira", country: "Brazil", record: "37–11" },
            { r: 4, name: "Max Holloway", country: "United States", record: "27–9" },
            { r: 5, name: "Benoît Saint Denis", country: "France", record: "17–3" },
            { r: 6, name: "Paddy Pimblett", country: "England", record: "23–4" },
            { r: 7, name: "Mateusz Gamrot", country: "Poland", record: "26–4" },
            { r: 8, name: "Dan Hooker", country: "New Zealand", record: "24–14" },
            { r: 9, name: "Maurício Ruffy", country: "Brazil", record: "14–2" },
            { r: 10, name: "Renato Moicano", country: "Brazil", record: "21–7–1" },
        ]
    },
    {
        name: "Welterweight", limit: "170 lbs",
        champ: { name: "Islam Makhachev", country: "Russia", record: "28–1" },
        top10: [
            { r: 1, name: "Ian Machado Garry", country: "Ireland", record: "17–1" },
            { r: 2, name: "Carlos Prates", country: "Brazil", record: "24–7" },
            { r: 3, name: "Michael Morales", country: "Ecuador", record: "19–0" },
            { r: 4, name: "Jack Della Maddalena", country: "Australia", record: "18–4" },
            { r: 5, name: "Gabriel Bonfim", country: "Brazil", record: "20–1" },
            { r: 6, name: "Sean Brady", country: "United States", record: "19–2" },
            { r: 7, name: "Belal Muhammad", country: "United States", record: "24–6" },
            { r: 8, name: "Leon Edwards", country: "England", record: "22–6" },
            { r: 9, name: "Kamaru Usman", country: "Nigeria", record: "21–4" },
            { r: 10, name: "Joaquin Buckley", country: "United States", record: "21–8" },
        ]
    },
    {
        name: "Middleweight", limit: "185 lbs",
        champ: { name: "Sean Strickland", country: "United States", record: "31–7" },
        top10: [
            { r: 1, name: "Khamzat Chimaev", country: "UAE", record: "15–1" },
            { r: 2, name: "Dricus du Plessis", country: "South Africa", record: "23–3" },
            { r: 3, name: "Nassourdine Imavov", country: "France", record: "17–4" },
            { r: 4, name: "Brendan Allen", country: "United States", record: "27–7" },
            { r: 5, name: "Caio Borralho", country: "Brazil", record: "18–2" },
            { r: 6, name: "Anthony Hernandez", country: "United States", record: "15–3" },
            { r: 7, name: "Joe Pyfer", country: "United States", record: "16–3" },
            { r: 8, name: "Reinier de Ridder", country: "Netherlands", record: "21–4" },
            { r: 9, name: "Israel Adesanya", country: "Nigeria", record: "24–6" },
            { r: 10, name: "Robert Whittaker", country: "Australia", record: "26–9" },
        ]
    },
    {
        name: "Light Heavyweight", limit: "205 lbs",
        champ: { name: "Carlos Ulberg", country: "New Zealand", record: "14–1" },
        top10: [
            { r: 1, name: "Magomed Ankalaev", country: "Russia", record: "20–2–1" },
            { r: 2, name: "Alex Pereira", country: "Brazil", record: "13–4" },
            { r: 3, name: "Jiří Procházka", country: "Czech Republic", record: "32–6–1" },
            { r: 4, name: "Jan Błachowicz", country: "Poland", record: "29–11–2" },
            { r: 5, name: "Khalil Rountree Jr.", country: "United States", record: "14–7" },
            { r: 6, name: "Jamahal Hill", country: "United States", record: "12–4" },
            { r: 7, name: "Paulo Costa", country: "Brazil", record: "16–4" },
            { r: 8, name: "Azamat Murzakanov", country: "Russia", record: "16–1" },
            { r: 9, name: "Volkan Oezdemir", country: "Switzerland", record: "21–8" },
            { r: 10, name: "Bogdan Guskov", country: "Uzbekistan", record: "18–3–1" },
        ]
    },
    {
        name: "Heavyweight", limit: "265 lbs",
        champ: { name: "Tom Aspinall", country: "England", record: "15–3" },
        top10: [
            { r: 1, name: "Ciryl Gane", country: "France", record: "14–2" },
            { r: 2, name: "Alexander Volkov", country: "Russia", record: "40–11" },
            { r: 3, name: "Sergei Pavlovich", country: "Russia", record: "21–3" },
            { r: 4, name: "Waldo Cortes-Acosta", country: "Dominican Republic", record: "17–3" },
            { r: 5, name: "Josh Hokit", country: "United States", record: "10–0" },
            { r: 6, name: "Serghei Spivac", country: "Moldova", record: "18–6" },
            { r: 7, name: "Curtis Blaydes", country: "United States", record: "19–6" },
            { r: 8, name: "Rizvan Kuniev", country: "Russia", record: "13–3–1" },
            { r: 9, name: "Derrick Lewis", country: "United States", record: "29–14" },
            { r: 10, name: "Tyrell Fortune", country: "United States", record: "18–3" },
        ]
    },
];

function buildRankings() {
    const container = document.getElementById('rankings-container');
    rankingsData.forEach(div => {
        const card = document.createElement('div');
        card.className = 'division-card';

        const rows = div.top10.map(f => `
                    <div class="rank-row">
                        <span class="rank-num">${f.r}</span>
                        <div class="rank-fighter-info">
                            <div class="rank-fighter-name">${f.name}</div>
                            <div class="rank-fighter-country">${f.country}</div>
                        </div>
                        <span class="rank-record">${f.record}</span>
                    </div>`).join('');

        card.innerHTML = `
                    <div class="division-header" onclick="toggleDivision(this)">
                        <h3>${div.name} <span style="color:#888;font-size:0.85rem;font-weight:300;">${div.limit}</span></h3>
                        <div class="division-header-right">
                            <span class="champ-badge">🏆 ${div.champ.name}</span>
                            <span class="toggle-icon">▼</span>
                        </div>
                    </div>
                    <div class="division-body">
                        <div class="rank-champ-row">
                            <span class="rank-label-champ">CHAMP</span>
                            <div class="rank-fighter-info">
                                <div class="rank-fighter-name">${div.champ.name}</div>
                                <div class="rank-fighter-country">${div.champ.country}</div>
                            </div>
                            <span class="rank-record">${div.champ.record}</span>
                        </div>
                        ${rows}
                    </div>`;

        container.appendChild(card);
    });
}

function toggleDivision(header) {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    const isOpen = body.classList.toggle('open');
    icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}


function showPage(pageId) {
    const activePage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    if (activePage === targetPage) return;
    if (activePage) {
        activePage.style.opacity = '0';
        activePage.style.transform = 'translateY(10px)';
        setTimeout(() => {
            activePage.classList.remove('active');
            revealTargetPage(targetPage);
        }, 250);
    } else {
        revealTargetPage(targetPage);
    }
}

function revealTargetPage(targetPage) {
    targetPage.classList.add('active');
    setTimeout(() => {
        targetPage.style.opacity = '1';
        targetPage.style.transform = 'translateY(0)';
    }, 50);
}

function openDisciplineChampions(styleKey) {
    const modal = document.getElementById('modal');
    const data = disciplineDatabase[styleKey];
    if (!data) return;
    let fighterListHTML = '';
    data.fighters.forEach(f => {
        const positionStyle = f.alignFace ? `style="object-position: ${f.alignFace};"` : '';
        fighterListHTML += `
                    <div class="modal-fighter-row">
                        <img src="${f.img}" alt="${f.name}" ${positionStyle} onerror="this.src='https://via.placeholder.com/75/111111/ffffff?text=MMA'">
                        <div class="modal-fighter-details">
                            <h4>${f.name}</h4>
                            <p>${f.detail}</p>
                        </div>
                    </div>`;
    });
    document.getElementById('modalContent').innerHTML = `
                <h2 style="color:var(--primary); margin:0 0 5px 0; text-transform:uppercase;">${data.title}</h2>
                <p style="color:#777; font-size:0.95rem; margin:0 0 20px 0; text-transform:uppercase; letter-spacing:0.5px;">Elite Specialists in Active Global Leagues</p>
                <div style="margin-bottom:20px;">${fighterListHTML}</div>
                <p style="font-size:0.85rem; color:#555; text-align:center; margin-top:20px;">Rosters undergo automatic contractual adjustments following live championship events.</p>`;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
}

function openEvent(title, fight, img, youtubeUrl = null) {
    const modal = document.getElementById('modal');
    let youtubeLinkHTML = '';
    if (youtubeUrl) {
        youtubeLinkHTML = `
                    <p style="margin-top:15px;">
                        <a href="${youtubeUrl}" target="_blank" style="display:inline-block; background:#ff0000; color:white; text-decoration:none; padding:10px 20px; font-weight:bold; text-transform:uppercase; letter-spacing:0.5px;">
                            📺 Watch Press Conference on YouTube
                        </a>
                    </p>`;
    }
    document.getElementById('modalContent').innerHTML = `
                <h2 style="color:var(--primary); margin:0 0 15px 0; text-transform:uppercase;">${title}</h2>
                <img src="${img}" style="width:100%; max-height:350px; object-fit:cover; margin-bottom:15px; border:1px solid #222;">
                <p style="font-size:1.3rem; margin:0 0 10px 0;"><b>Main Event:</b> ${fight}</p>
                ${youtubeLinkHTML}
                <p style="font-size:0.9rem; color:#777; margin-top:20px; margin-bottom:20px;">Bouts are subject to official athletic commission sanction changes. Broadcast availability restrictions apply.</p>
                <p><a href="https://www.ufc.com/news" target="_blank" style="color:var(--primary); text-decoration:none; font-weight:bold; text-transform:uppercase;">Read Official Fight Profiles →</a></p>`;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
}

function openFighter(name, record, division, style) {
    const modal = document.getElementById('modal');
    document.getElementById('modalContent').innerHTML = `
                <h2 style="color:var(--primary); margin:0 0 15px 0; text-transform:uppercase;">${name}</h2>
                <div style="font-size:1.1rem; line-height:1.6;">
                    <p style="margin:5px 0;"><b>Win-Loss Record:</b> ${record}</p>
                    <p style="margin:5px 0;"><b>Weight Class Division:</b> ${division}</p>
                    <p style="margin:5px 0;"><b>Core Combat Strategy:</b> ${style}</p>
                </div>
                <p style="font-size:0.9rem; color:#777; margin-top:20px;">All data points sourced directly via active contract records database verification methods.</p>
                <p style="margin-top:20px;"><a href="https://www.ufc.com/athletes" target="_blank" style="color:var(--primary); text-decoration:none; font-weight:bold; text-transform:uppercase;">Full Fight History →</a></p>`;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('modalContent').innerHTML = '';
    }, 300);
}

window.onclick = (e) => {
    if (e.target.id === 'modal') closeModal();
};

buildRankings();
