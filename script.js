document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       DATOS PRINCIPALES
    ========================= */

    const nombre = document.getElementById("nombrePersona");
    const mensajePortada = document.getElementById("mensajePortada");
    const tituloHistoria = document.getElementById("tituloHistoria");
    const mensajeHistoria = document.getElementById("mensajeHistoria");
    const fotoPrincipal = document.getElementById("fotoPrincipal");

    if (nombre) {
        nombre.textContent = "Para " + datosCliente.nombre + " ❤️";
    }

    if (mensajePortada) {
        mensajePortada.textContent = datosCliente.mensajePortada;
    }

    if (tituloHistoria) {
        tituloHistoria.textContent = datosCliente.tituloHistoria;
    }

    if (mensajeHistoria) {
        mensajeHistoria.textContent = datosCliente.mensajeHistoria;
    }

    if (fotoPrincipal) {
        fotoPrincipal.src = "imagenes/principal.PNG";
        fotoPrincipal.style.display = "block";
        fotoPrincipal.style.width = "min(700px, 90%)";
        fotoPrincipal.style.height = "auto";
        fotoPrincipal.style.margin = "40px auto";
        fotoPrincipal.style.objectFit = "cover";
        fotoPrincipal.style.borderRadius = "20px";
    }


    /* =========================
       NUESTRA HISTORIA
    ========================= */

    const timeline = document.getElementById("timeline");

    if (timeline) {

        timeline.innerHTML = "";

        timeline.style.display = "flex";
        timeline.style.flexDirection = "column";
        timeline.style.gap = "60px";
        timeline.style.width = "100%";
        timeline.style.maxWidth = "1000px";
        timeline.style.margin = "50px auto";
        timeline.style.padding = "0 20px";

        datosCliente.momentos.forEach(function (momento) {

            const bloque = document.createElement("article");

            bloque.style.display = "flex";
            bloque.style.flexWrap = "wrap";
            bloque.style.alignItems = "center";
            bloque.style.justifyContent = "center";
            bloque.style.gap = "35px";
            bloque.style.width = "100%";
            bloque.style.padding = "30px";
            bloque.style.borderRadius = "25px";
            bloque.style.background = "#ffffff";
            bloque.style.boxShadow =
                "0 15px 40px rgba(70, 20, 30, 0.10)";

            const texto = document.createElement("div");

            texto.style.flex = "1 1 300px";
            texto.style.minWidth = "250px";
            texto.style.textAlign = "left";

            const fecha = document.createElement("p");

            fecha.textContent = momento.fecha;

            fecha.style.fontSize = "13px";
            fecha.style.letterSpacing = "3px";
            fecha.style.color = "#b7354d";
            fecha.style.marginBottom = "10px";

            const titulo = document.createElement("h3");

            titulo.textContent = momento.titulo;

            titulo.style.fontFamily = "Georgia, serif";
            titulo.style.fontSize = "32px";
            titulo.style.color = "#7d2635";
            titulo.style.margin = "10px 0 15px";

            const descripcion = document.createElement("p");

            descripcion.textContent = momento.texto;

            descripcion.style.fontSize = "16px";
            descripcion.style.lineHeight = "1.8";
            descripcion.style.color = "#80515a";
            descripcion.style.margin = "0";

            texto.appendChild(fecha);
            texto.appendChild(titulo);
            texto.appendChild(descripcion);


            const contenedorImagen =
                document.createElement("div");

            contenedorImagen.style.flex = "1 1 300px";
            contenedorImagen.style.minWidth = "250px";

            const imagen = document.createElement("img");

            imagen.src = momento.foto;
            imagen.alt = momento.titulo;

            imagen.style.display = "block";
            imagen.style.width = "100%";
            imagen.style.maxWidth = "450px";
            imagen.style.height = "350px";
            imagen.style.margin = "0 auto";
            imagen.style.objectFit = "cover";
            imagen.style.borderRadius = "20px";
            imagen.style.boxShadow =
                "0 15px 35px rgba(70, 20, 30, 0.15)";

            contenedorImagen.appendChild(imagen);

            bloque.appendChild(texto);
            bloque.appendChild(contenedorImagen);

            timeline.appendChild(bloque);

        });

    }


    /* =========================
       CARTA
    ========================= */

    if (datosCliente.carta) {

        const saludo =
            document.getElementById("saludoCarta");

        const parrafo1 =
            document.getElementById("cartaParrafo1");

        const parrafo2 =
            document.getElementById("cartaParrafo2");

        const parrafo3 =
            document.getElementById("cartaParrafo3");

        const firma =
            document.getElementById("firmaCarta");

        if (saludo) {
            saludo.textContent =
                datosCliente.carta.saludo;
        }

        if (parrafo1) {
            parrafo1.textContent =
                datosCliente.carta.parrafo1;
        }

        if (parrafo2) {
            parrafo2.textContent =
                datosCliente.carta.parrafo2;
        }

        if (parrafo3) {
            parrafo3.textContent =
                datosCliente.carta.parrafo3;
        }

        if (firma) {
            firma.textContent =
                datosCliente.carta.firma;
        }
    }


    /* =========================
       CONTADOR DE CUMPLEAÑOS
    ========================= */

    function actualizarCumpleanos() {

        const ahora = new Date();

        let objetivo = new Date(
            ahora.getFullYear(),
            7,
            19,
            0,
            0,
            0
        );

        if (ahora >= objetivo) {

            objetivo = new Date(
                ahora.getFullYear() + 1,
                7,
                19,
                0,
                0,
                0
            );

        }

        const diferencia =
            objetivo.getTime() - ahora.getTime();

        const dias = Math.floor(
            diferencia / 86400000
        );

        const horas = Math.floor(
            (diferencia % 86400000) / 3600000
        );

        const minutos = Math.floor(
            (diferencia % 3600000) / 60000
        );

        const segundos = Math.floor(
            (diferencia % 60000) / 1000
        );

        const d =
            document.getElementById("diasCumpleanos");

        const h =
            document.getElementById("horasCumpleanos");

        const m =
            document.getElementById("minutosCumpleanos");

        const s =
            document.getElementById("segundosCumpleanos");

        if (d) d.textContent = dias;
        if (h) h.textContent =
            String(horas).padStart(2, "0");
        if (m) m.textContent =
            String(minutos).padStart(2, "0");
        if (s) s.textContent =
            String(segundos).padStart(2, "0");

    }

    actualizarCumpleanos();

    setInterval(
        actualizarCumpleanos,
        1000
    );


    /* =========================
       BOTÓN DESCUBRIR
    ========================= */

    const boton =
        document.getElementById("boton");

    const inicio =
        document.getElementById("inicio");

    const regalo =
        document.getElementById("regalo");

    const musica =
        document.getElementById("musica");

    if (boton) {

        boton.addEventListener(
            "click",
            function () {

                if (musica) {
                    musica.play().catch(function () {});
                }

                if (inicio) {
                    inicio.style.display = "none";
                }

                if (regalo) {
                    regalo.style.display = "block";
                    regalo.classList.add("mostrar");
                }

                window.scrollTo(0, 0);

            }
        );

    }


    /* =========================
       MÚSICA
    ========================= */

    if (musica) {

        musica.src = "musica/cancion.mp3";

    }

    const controlMusica =
        document.getElementById("controlMusica");

    if (controlMusica && musica) {

        controlMusica.addEventListener(
            "click",
            function () {

                if (musica.paused) {

                    musica.play();

                    controlMusica.textContent = "🔊";

                } else {

                    musica.pause();

                    controlMusica.textContent = "🔇";

                }

            }
        );

    }


    /* =========================
       CARTA
    ========================= */

    const sobre =
        document.getElementById("sobre");

    const carta =
        document.getElementById("carta");

    if (sobre && carta) {

        sobre.addEventListener(
            "click",
            function () {

                sobre.style.display = "none";

                carta.style.display = "block";

                carta.classList.add("abierta");

            }
        );

    }

});