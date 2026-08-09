const instaxList = document.querySelectorAll(".instax");/*Busca muchos elementos*/
const lightboxContent = document.getElementById("lightbox-content");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("close-lightbox");
function openInstax(photo){
    lightboxContent.innerHTML = `
        <div id="photo-frame">
            <img id="photo-image" src="${photo}">
            <img id="photo-instax" src="assets/objects/instax-frame.png">
        </div>
    `;
    lightbox.classList.add("active");
}
instaxList.forEach(instax=>{
    instax.addEventListener("click",()=>{
        openInstax(instax.dataset.photo);
    });
});
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
lightbox.addEventListener("click",(e)=>{
    if(!e.target.closest("#photo-frame") &&
        !e.target.closest("#gallery") &&
        !e.target.closest("#lightbox-player")&&
        !e.target.closest("#monitorProjects"))
        {
        lightbox.classList.remove("active");
        document.onkeydown = null;
    }
});





const camera=document.getElementById("camera");
function openGallery(images){
    let current = 0;
    lightboxContent.innerHTML = `
        <div id="gallery">
            <button id="prev">◀</button>
            <img id="gallery-image" src="${images[current]}">
            <button id="next">▶</button>
        </div>
    `;
    const img = document.getElementById("gallery-image");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    document.onkeydown = (e)=>{
    if(e.key==="ArrowRight"){
        next.click();
    }
    if(e.key==="ArrowLeft"){
        prev.click();
    }
    };
    next.onclick = ()=>{
        current++;
        if(current >= images.length)
            current = 0;
        img.src = images[current];
    };
    prev.onclick = ()=>{
        current--;
        if(current < 0)
            current = images.length-1;
        img.src = images[current];
    };
    lightbox.classList.add("active");
}
camera.addEventListener("click",()=>{
    openGallery([
        "assets/photos/gallery-1.jpg",
        "assets/photos/gallery-2.jpg",
        "assets/photos/gallery-3.jpg",
        "assets/photos/gallery-4.jpg",
        "assets/photos/gallery-5.jpg",
        "assets/photos/gallery-6.jpg",
        "assets/photos/gallery-7.jpg",
        "assets/photos/gallery-8.jpg",
    ]);
});





function openVideoGallery(videos){
    let current=0;
    lightboxContent.innerHTML=`
        <div id="lightbox-player">
            <video
                id="portfolio-video"
                autoplay
                muted
                loop
                playsinline
                controls>
                <source src="${videos[current].src}"type="video/mp4">
            </video>
            <div id="lightbox-info">
                <h2 id="lightbox-title">${videos[current].title}</h2>
                <p id="lightbox-description">${videos[current].description}</p>
            </div>
            <div id="lightbox-controls">
                <button id="lightbox-prev">◀</button>
                <button id="lightbox-next">▶</button>
            </div>
        </div>
    `;
    const video=document.getElementById("portfolio-video");
    const title=document.getElementById("lightbox-title");
    const description=document.getElementById("lightbox-description");
    const prev=document.getElementById("lightbox-prev");
    const next=document.getElementById("lightbox-next");
    function updateVideo(){
        video.src=videos[current].src;

        title.textContent=videos[current].title;

        description.textContent=videos[current].description;

        video.load();
        video.play();
    }
    document.onkeydown = (e)=>{
    if(e.key==="ArrowRight"){
        next.click();
    }
    if(e.key==="ArrowLeft"){
        prev.click();
    }
    };
    next.onclick=()=>{
        current++;
        if(current>=videos.length)
            current=0;
        
        updateVideo();
    };
    prev.onclick=()=>{
        current--;
        if(current<0)
            current=videos.length-1;
        
        updateVideo();
    };
    lightbox.classList.add("active");
}
const monitorTv=document.getElementById("monitor-tv");
monitorTv.addEventListener("click",()=>{
    openVideoGallery([
        {
        src:"assets/videos/video-1.mp4",
        title:"Cortinilla Greddus",
        description:"Video/Transición para escenas."
        },

        {
        src:"assets/videos/video-2.mp4",
        title:"Loop video",
        description:"Animación experimental realizada en After Effects."
        },

        {
        src:"assets/videos/video-3.mp4",
        title:"Loop video",
        description:"Animación experimental realizada en After Effects."
        },
        /*
        {
        src:"assets/videos/video-4.mp4",
        title:"Loop video",
        description:"Animación experimental realizada en After Effects."
        },*/

        {
        src:"assets/videos/video-4-test.mp4",
        title:"Loop video",
        description:"Animación experimental realizada en After Effects."
        },
        {
        src:"assets/videos/video-5.mp4",
        title:"Loop video",
        description:"Animación de carga realizada en After Effects."
        }
    ]);
});



const phone = document.getElementById("phone");
function openCv(pdf){
    lightboxContent.innerHTML = `
        <iframe
            src="${pdf}"
            id="cv-pdf">
        </iframe>
    `;
    lightbox.classList.add("active");
}
phone.addEventListener("click",()=>{
    openCv("assets/documents/CV-Paulo-Villa.pdf");
});



/*<h2>Take your time</h2>

function openWelcome(){
    lightboxContent.innerHTML=`
        <div id="welcome">
            <h1>Komorebi</h1>
            <p>
                Bienvenido.
                Este no es un portafolio tradicional.
                Explora el escritorio.
                Cada objeto contiene una parte de mi trabajo,
                mis proyectos o un pequeño detalle sobre mí.
            </p>
            <button class="glow-on-hover" type="button" id="start-btn">
                Comenzar
            </button>
        </div>
    `;
    lightbox.classList.add("active");
    document
        .getElementById("start-btn")
        .onclick=()=>{
            lightbox.classList.remove("active");
        };
}
openWelcome();
const postit=document.getElementById("postit-1");
postit.addEventListener("click",()=>{
    openWelcome();
});
*/
function openWelcome(){
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        lightboxContent.innerHTML = `
            <div id="welcome">
                <h1>Komorebi</h1>
                <p>
                    Esta experiencia está diseñada para disfrutarse
                    en una pantalla grande.
                </p>
                <p>
                    Para explorar Komorebi cómodamente,
                    te recomiendo abrirlo en una computadora.
                </p>
                <button class="glow-on-hover" type="button" id="start-btn">
                    Continuar
                </button>
            </div>
        `;
    } else {
        lightboxContent.innerHTML = `
            <div id="welcome">
                <h1>Komorebi</h1>
                <p>
                    Bienvenido.
                    Este no es un portafolio tradicional.
                    Explora el escritorio.
                    Cada objeto contiene una parte de mi trabajo,
                    mis proyectos o un pequeño detalle sobre mí.
                </p>
                <button class="glow-on-hover" type="button" id="start-btn">
                    Comenzar
                </button>
            </div>
        `;
    }
    lightbox.classList.add("active");
    document.getElementById("start-btn").onclick = () => {
        lightbox.classList.remove("active");
    };
}



const postit=document.getElementById("postit-1");
postit.addEventListener("click",()=>{
    openWelcome();
});


const monitor = document.getElementById("monitor");
function openProjects(projects){
    let current = 0;
    lightboxContent.innerHTML = `
        <div id="lightbox-player">
            <img
                id="portfolio-image"
                src="${projects[current].src}"
            >
            <div id="lightbox-info">
                <h2 id="lightbox-title">
                    ${projects[current].title}
                </h2>
                <p id="lightbox-description">
                    ${projects[current].description}
                </p>
            </div>
            <div id="lightbox-controls">
                <button id="lightbox-prev">◀</button>
                <button id="lightbox-next">▶</button>
            </div>
        </div>
    `;
    const image = document.getElementById("portfolio-image");
    const title = document.getElementById("lightbox-title");
    const description = document.getElementById("lightbox-description");
    const prev = document.getElementById("lightbox-prev");
    const next = document.getElementById("lightbox-next");
    function updateProject(){
        image.src = projects[current].src;
        title.textContent = projects[current].title;
        description.textContent = projects[current].description;
    }
    document.onkeydown = (e)=>{
        if(e.key === "ArrowRight"){
            next.click();
        }
        if(e.key === "ArrowLeft"){
            prev.click();
        }
    };
    next.onclick = ()=>{
        current++;
        if(current >= projects.length)
            current = 0;
        updateProject();
    };
    prev.onclick = ()=>{
        current--;
        if(current < 0)
            current = projects.length - 1;
        updateProject();
    };
    lightbox.classList.add("active");
}
monitor.addEventListener("click",()=>{
    openProjects([
        {
            src:"assets/photos/project-1.jpg",
            title:"Proyecto 01",
            description:"Fondo de pantalla | Ilustrator."
        },
        {
            src:"assets/photos/project-2.jpg",
            title:"Proyecto 02",
            description:"Invitación temática | Ilustrator."
        },
        {
            src:"assets/photos/project-3.jpg",
            title:"Proyecto 03",
            description:"Flat design | Ilustrator."
        },
        {
            src:"assets/photos/project-4.jpg",
            title:"Proyecto 04",
            description:"Flat design | Ilustrator."
        },
        {
            src:"assets/photos/project-5.jpg",
            title:"Proyecto 05",
            description:"Flat design | Ilustrator."
        },
        {
            src:"assets/photos/project-6.jpg",
            title:"Proyecto 06",
            description:"Proyecto universitario | Ilustrator."
        },
        {
            src:"assets/photos/project-7.jpg",
            title:"Proyecto 07",
            description:"Diseño propio | Ilustrator."
        },
        {
            src:"assets/photos/project-8.png",
            title:"Proyecto 08",
            description:"Menú para evento | Ilustrator."
        },
        {
            src:"assets/photos/project-9.jpg",
            title:"Proyecto 09",
            description:"Menú para evento | Ilustrator."
        },
        {
            src:"assets/photos/project-10.jpg",
            title:"Proyecto 10",
            description:"Menú para evento | Ilustrator."
        }
    ]);
});