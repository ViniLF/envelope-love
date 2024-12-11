const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 200,  // Número de partículas
            density: {
                enable: true,
                value_area: 5000
            }
        },
        shape: {
            type: "image", // Usar uma imagem para as partículas
            image: {
                src: "assets/images/coracao.png", // Caminho do ícone de coração
                width: 30, // Largura da partícula
                height: 30 // Altura da partícula
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 0.4,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 12, // Tamanho das partículas
            random: true,
            anim: {
                enable: true,
                speed: 12,
                size_min: 1,
                sync: false
            }
        },
        line_linked: {
            enable: true, // As partículas se conectam com linhas
            distance: 120,
            color: "#ff69b4",
            opacity: 0.4,
            width: 3
        },
        move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // Efeito quando o mouse passa sobre as partículas
            },
            onclick: {
                enable: true,
                mode: "push" // Efeito quando clica nas partículas
            }
        }
    },
    retina_detect: true
});