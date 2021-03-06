// Tracklist
const musicVideoLinks = [{
        name: "Ew",
        src: "https://www.youtube.com/embed/UGB_Bsm5Unk"
    },
    {
        name: "Modus",
        src: "https://www.youtube.com/embed/Vu0nRz_bQ0Y"
    },
    {
        name: "Tick Tock",
        src: "https://youtube.com/embed/2FCo7OxVoeY"
    },
    {
        name: "Daylight",
        src: "https://youtube.com/embed/v97FPN2US2o"
    },
    {
        name: "Upgrade",
        src: "https://youtube.com/embed/DoE_le4Te9U"
    },
    {
        name: "Run",
        src: "https://youtube.com/embed/K09_5IsgGe8"
    },
    {
        name: "Gimme Love",
        src: "https://youtube.com/embed/jPan651rVMs"
    },
    {
        name: "Sanctuary",
        src: "https://youtube.com/embed/YWN81V7ojOE"
    },
    {
        name: "Afterthought",
        src: "https://youtube.com/embed/ujriV3vkC9w"
    },
    {
        name: "Nitrous",
        src: "https://youtube.com/embed/dHq_AS62ioY"
    },
    {
        name: "Pretty Boy",
        src: "https://youtube.com/embed/Qn5IpWXWub0"
    },
    {
        name: "Normal People",
        src: "https://youtube.com/embed/4N4P-Y0DyXs"
    },
    {
        name: "Mr. Hollywood",
        src: "https://youtube.com/embed/08xzc6pZ0m8"
    },
    {
        name: "Reanimator",
        src: "https://youtube.com/embed/coZdfBrHwxQ"
    },
    {
        name: "777",
        src: "https://youtube.com/embed/HLetFEpgPgY"
    },
    {
        name: "Like You Do",
        src: "https://youtube.com/embed/Bv-1BnoB75k"
    },
    {
        name: "Your Man",
        src: "https://youtube.com/embed/RrtkU7i0qD8"
    }
];


// Functions
function generateSongButtons() {
    for (let i = 0; i < musicVideoLinks.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('music-title');
        btn.innerText = musicVideoLinks[i].name;

        if (i < 9) {
            document.querySelector('.up').appendChild(btn);
        } else {
            document.querySelector('.down').appendChild(btn);
        }
    }
}

function changeSong(){
    const btns = document.querySelectorAll('.music-title');
    const musicVideo = document.querySelector('.music-video iframe');
    btns.forEach(btn =>{
        btn.addEventListener('click', (e) =>{
            musicVideoLinks.forEach(link =>{
                if(e.target.innerText === link.name){
                    musicVideo.src = link.src;                    
                }
            });
        });
    });
}

generateSongButtons();
changeSong();
