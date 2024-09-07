function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}



window.addEventListener('load', async () => {

    
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        
        let nombres = document.getElementById('nombre').value;
        let placa = document.getElementById('placa').value;
        let horometro = document.getElementById('horometro').value;
        let observaciones = document.getElementById('observaciones').value;

         // Obtener la opción seleccionada de "Revisión técnica"
        let revisionTecnica = document.querySelector('input[name="revision_tecnica"]:checked').value;
        let revisionTecnicaShort = '';
        switch (revisionTecnica) {
            case 'Bueno':
                revisionTecnicaShort = 'B';
                break;
            case 'Malo':
                revisionTecnicaShort = 'M';
                break;
            case 'No Aplica':
                revisionTecnicaShort = 'NA';
                break;
        }
        // Obtener la opción seleccionada de "parabrisas"
        let parabrisas = document.querySelector('input[name="parabrisas"]:checked').value;
        let parabrisasShort = '';
        switch (parabrisas) {
            case 'Bueno':
                parabrisasShort = 'B';
                break;
            case 'Malo':
                parabrisasShort = 'M';
                break;
            case 'No Aplica':
                parabrisasShort = 'NA';
                break;
        }
        // Obtener la opción seleccionada de "plumillas"
        let plumillas = document.querySelector('input[name="plumillas"]:checked').value;
        let plumillasShort = '';
        switch (plumillas) {
            case 'Bueno':
                plumillasShort = 'B';
                break;
            case 'Malo':
                plumillasShort = 'M';
                break;
            case 'No Aplica':
                plumillasShort = 'NA';
                break;
        }
        // Obtener la opción seleccionada de "vidrios_laterales"
        let vidrios_laterales = document.querySelector('input[name="vidrios_laterales"]:checked').value;
        let vidrios_lateralesShort = '';
        switch (vidrios_laterales) {
            case 'Bueno':
                vidrios_lateralesShort = 'B';
                break;
            case 'Malo':
                vidrios_lateralesShort = 'M';
                break;
            case 'No Aplica':
                vidrios_lateralesShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "parabrisas_trasero"
        let parabrisas_trasero = document.querySelector('input[name="parabrisas_trasero"]:checked').value;
        let parabrisas_traseroShort = '';
        switch (parabrisas_trasero) {
            case 'Bueno':
                parabrisas_traseroShort = 'B';
                break;
            case 'Malo':
                parabrisas_traseroShort = 'M';
                break;
            case 'No Aplica':
                parabrisas_traseroShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "pasamanos"
        let pasamanos = document.querySelector('input[name="pasamanos"]:checked').value;
        let pasamanosShort = '';
        switch (pasamanos) {
            case 'Bueno':
                pasamanosShort = 'B';
                break;
            case 'Malo':
                pasamanosShort = 'M';
                break;
            case 'No Aplica':
                pasamanosShort = 'NA';
                break;
        }
        //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // Obtener la opción seleccionada de "puerta"
        let puerta = document.querySelector('input[name="puerta"]:checked').value;
        let puertaShort = '';
        switch (puerta) {
            case 'Bueno':
                puertaShort = 'B';
                break;
            case 'Malo':
                puertaShort = 'M';
                break;
            case 'No Aplica':
                puertaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "manillas_de_puertas"
        let manillasDePuertas = document.querySelector('input[name="manillas_puertas"]:checked').value;
        let manillasDePuertasShort = '';
        switch (manillasDePuertas) {
            case 'Bueno':
                manillasDePuertasShort = 'B';
                break;
            case 'Malo':
                manillasDePuertasShort = 'M';
                break;
            case 'No Aplica':
                manillasDePuertasShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "espejos_laterales"
        let espejosLaterales = document.querySelector('input[name="espejos_laterales"]:checked').value;
        let espejosLateralesShort = '';
        switch (espejosLaterales) {
            case 'Bueno':
                espejosLateralesShort = 'B';
                break;
            case 'Malo':
                espejosLateralesShort = 'M';
                break;
            case 'No Aplica':
                espejosLateralesShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "espejo_interior"
        let espejoInterior = document.querySelector('input[name="espejo_interior"]:checked').value;
        let espejoInteriorShort = '';
        switch (espejoInterior) {
            case 'Bueno':
                espejoInteriorShort = 'B';
                break;
            case 'Malo':
                espejoInteriorShort = 'M';
                break;
            case 'No Aplica':
                espejoInteriorShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "asiento_operador"
        let asientoOperador = document.querySelector('input[name="asiento_operador"]:checked').value;
        let asientoOperadorShort = '';
        switch (asientoOperador) {
            case 'Bueno':
                asientoOperadorShort = 'B';
                break;
            case 'Malo':
                asientoOperadorShort = 'M';
                break;
            case 'No Aplica':
                asientoOperadorShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "balancin"
        let balancin = document.querySelector('input[name="balancin"]:checked').value;
        let balancinShort = '';
        switch (balancin) {
            case 'Bueno':
                balancinShort = 'B';
                break;
            case 'Malo':
                balancinShort = 'M';
                break;
            case 'No Aplica':
                balancinShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "contrapeso"
        let contrapeso = document.querySelector('input[name="contrapeso"]:checked').value;
        let contrapesoShort = '';
        switch (contrapeso) {
            case 'Bueno':
                contrapesoShort = 'B';
                break;
            case 'Malo':
                contrapesoShort = 'M';
                break;
            case 'No Aplica':
                contrapesoShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "cabina"
        let cabina = document.querySelector('input[name="cabina"]:checked').value;
        let cabinaShort = '';
        switch (cabina) {
            case 'Bueno':
                cabinaShort = 'B';
                break;
            case 'Malo':
                cabinaShort = 'M';
                break;
            case 'No Aplica':
                cabinaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "cañerias"
        let canerias = document.querySelector('input[name="canerias"]:checked').value;
        let caneriasShort = '';
        switch (canerias) {
            case 'Bueno':
                caneriasShort = 'B';
                break;
            case 'Malo':
                caneriasShort = 'M';
                break;
            case 'No Aplica':
                caneriasShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "cuñas_de_martillo"
        let cunasDeMartillo = document.querySelector('input[name="cunas_martillo"]:checked').value;
        let cunasDeMartilloShort = '';
        switch (cunasDeMartillo) {
            case 'Bueno':
                cunasDeMartilloShort = 'B';
                break;
            case 'Malo':
                cunasDeMartilloShort = 'M';
                break;
            case 'No Aplica':
                cunasDeMartilloShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "pasadores"
        let pasadores = document.querySelector('input[name="pasadores"]:checked').value;
        let pasadoresShort = '';
        switch (pasadores) {
            case 'Bueno':
                pasadoresShort = 'B';
                break;
            case 'Malo':
                pasadoresShort = 'M';
                break;
            case 'No Aplica':
                pasadoresShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "extintor"
        let extintor = document.querySelector('input[name="extintor"]:checked').value;
        let extintorShort = '';
        switch (extintor) {
            case 'Bueno':
                extintorShort = 'B';
                break;
            case 'Malo':
                extintorShort = 'M';
                break;
            case 'No Aplica':
                extintorShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "triangulos"
        let triangulos = document.querySelector('input[name="triangulos"]:checked').value;
        let triangulosShort = '';
        switch (triangulos) {
            case 'Bueno':
                triangulosShort = 'B';
                break;
            case 'Malo':
                triangulosShort = 'M';
                break;
            case 'No Aplica':
                triangulosShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "botiquin"
        let botiquin = document.querySelector('input[name="botiquin"]:checked').value;
        let botiquinShort = '';
        switch (botiquin) {
            case 'Bueno':
                botiquinShort = 'B';
                break;
            case 'Malo':
                botiquinShort = 'M';
                break;
            case 'No Aplica':
                botiquinShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "cinturon_de_seguridad"
        let cinturonDeSeguridad = document.querySelector('input[name="cinturon_seguridad"]:checked').value;
        let cinturonDeSeguridadShort = '';
        switch (cinturonDeSeguridad) {
            case 'Bueno':
                cinturonDeSeguridadShort = 'B';
                break;
            case 'Malo':
                cinturonDeSeguridadShort = 'M';
                break;
            case 'No Aplica':
                cinturonDeSeguridadShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "bocina"
        let bocina = document.querySelector('input[name="bocina"]:checked').value;
        let bocinaShort = '';
        switch (bocina) {
            case 'Bueno':
                bocinaShort = 'B';
                break;
            case 'Malo':
                bocinaShort = 'M';
                break;
            case 'No Aplica':
                bocinaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "focos_superiores"
        let focos_superiores = document.querySelector('input[name="focos_superiores"]:checked').value;
        let focos_superioresShort = '';
        switch (focos_superiores) {
            case 'Bueno':
                focos_superioresShort = 'B';
                break;
            case 'Malo':
                focos_superioresShort = 'M';
                break;
            case 'No Aplica':
                focos_superioresShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "focos_laterales"
        let focos_laterales = document.querySelector('input[name="focos_laterales"]:checked').value;
        let focos_lateralesShort = '';
        switch (focos_laterales) {
            case 'Bueno':
                focos_lateralesShort = 'B';
                break;
            case 'Malo':
                focos_lateralesShort = 'M';
                break;
            case 'No Aplica':
                focos_lateralesShort = 'NA';
                break;
        }

        


        //ACSESORIOS...................................................................................................

        // Obtener la opción seleccionada de "oruga"
        let oruga = document.querySelector('input[name="oruga"]:checked').value;
        let orugaShort = '';
        switch (oruga) {
            case 'Bueno':
                orugaShort = 'B';
                break;
            case 'Malo':
                orugaShort = 'M';
                break;
            case 'No Aplica':
                orugaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "caja_conductora_oruga"
        let caja_conductora_oruga = document.querySelector('input[name="caja_conductora_oruga"]:checked').value;
        let caja_conductora_orugaShort = '';
        switch (caja_conductora_oruga) {
            case 'Bueno':
                caja_conductora_orugaShort = 'B';
                break;
            case 'Malo':
                caja_conductora_orugaShort = 'M';
                break;
            case 'No Aplica':
                caja_conductora_orugaShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "rodillos_inferiores"
        let rodillos_inferiores = document.querySelector('input[name="rodillos_inferiores"]:checked').value;
        let rodillos_inferioresShort = '';
        switch (rodillos_inferiores) {
            case 'Bueno':
                rodillos_inferioresShort = 'B';
                break;
            case 'Malo':
                rodillos_inferioresShort = 'M';
                break;
            case 'No Aplica':
                rodillos_inferioresShort = 'NA';
                break;
        }
        // Obtener la opción seleccionada de "rodillos_superiores"
        let rodillos_superiores = document.querySelector('input[name="rodillos_superiores"]:checked').value;
        let rodillos_superioresShort = '';
        switch (rodillos_superiores) {
            case 'Bueno':
                rodillos_superioresShort = 'B';
                break;
            case 'Malo':
                rodillos_superioresShort = 'M';
                break;
            case 'No Aplica':
                rodillos_superioresShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "sistema_tensor"
        let sistema_tensor = document.querySelector('input[name="sistema_tensor"]:checked').value;
        let sistema_tensorShort = '';
        switch (sistema_tensor) {
            case 'Bueno':
                sistema_tensorShort = 'B';
                break;
            case 'Malo':
                sistema_tensorShort = 'M';
                break;
            case 'No Aplica':
                sistema_tensorShort = 'NA';
                break;
        }

        // Obtener la opción seleccionada de "zapatas_oruga"
        let zapatas_oruga = document.querySelector('input[name="zapatas_oruga"]:checked').value;
        let zapatas_orugaShort = '';
        switch (zapatas_oruga) {
            case 'Bueno':
                zapatas_orugaShort = 'B';
                break;
            case 'Malo':
                zapatas_orugaShort = 'M';
                break;
            case 'No Aplica':
                zapatas_orugaShort = 'NA';
                break;
        }
//---------------------------------------OTROS-----------------------------------------
// Obtener la opción seleccionada de "otro"     
            // Estructura para "logo_empresa"
        let logo_empresa = document.querySelector('input[name="logo_empresa"]:checked').value;
        let logo_empresaShort = '';
        switch (logo_empresa) {
            case 'Bueno':
                logo_empresaShort = 'B';
                break;
            case 'Malo':
                logo_empresaShort = 'M';
                break;
            case 'No Aplica':
                logo_empresaShort = 'NA';
                break;
        }

        // Estructura para "limpieza_interior_cabina"
        let limpieza_interior_cabina = document.querySelector('input[name="limpieza_interior_cabina"]:checked').value;
        let limpieza_interior_cabinaShort = '';
        switch (limpieza_interior_cabina) {
            case 'Bueno':
                limpieza_interior_cabinaShort = 'B';
                break;
            case 'Malo':
                limpieza_interior_cabinaShort = 'M';
                break;
            case 'No Aplica':
                limpieza_interior_cabinaShort = 'NA';
                break;
        }

        // Estructura para "limpieza_externa"
        let limpieza_externa = document.querySelector('input[name="limpieza_externa"]:checked').value;
        let limpieza_externaShort = '';
        switch (limpieza_externa) {
            case 'Bueno':
                limpieza_externaShort = 'B';
                break;
            case 'Malo':
                limpieza_externaShort = 'M';
                break;
            case 'No Aplica':
                limpieza_externaShort = 'NA';
                break;
        }

        // Estructura para "fugas_visibles"
        let fugas_visibles = document.querySelector('input[name="fugas_visibles"]:checked').value;
        let fugas_visiblesShort = '';
        switch (fugas_visibles) {
            case 'Bueno':
                fugas_visiblesShort = 'B';
                break;
            case 'Malo':
                fugas_visiblesShort = 'M';
                break;
            case 'No Aplica':
                fugas_visiblesShort = 'NA';
                break;
        }

        // Estructura para "marcador_nivel_combustible"
        let marcador_nivel_combustible = document.querySelector('input[name="marcador_nivel_combustible"]:checked').value;
        let marcador_nivel_combustibleShort = '';
        switch (marcador_nivel_combustible) {
            case 'Bueno':
                marcador_nivel_combustibleShort = 'B';
                break;
            case 'Malo':
                marcador_nivel_combustibleShort = 'M';
                break;
            case 'No Aplica':
                marcador_nivel_combustibleShort = 'NA';
                break;
        }


        // Estructura para "marcador_presion_aceite"
        let marcador_presion_aceite = document.querySelector('input[name="marcador_presion_aceite"]:checked').value;
        let marcador_presion_aceiteShort = '';
        switch (marcador_presion_aceite) {
            case 'Bueno':
                marcador_presion_aceiteShort = 'B';
                break;
            case 'Malo':
                marcador_presion_aceiteShort = 'M';
                break;
            case 'No Aplica':
                marcador_presion_aceiteShort = 'NA';
                break;
        }

        // Estructura para "horometro"
        let horometrot = document.querySelector('input[name="horometrot"]:checked').value;
        let horometroShort = '';
        switch (horometrot) {
            case 'Bueno':
                horometroShort = 'B';
                break;
            case 'Malo':
                horometroShort = 'M';
                break;
            case 'No Aplica':
                horometroShort = 'NA';
                break;
        }

        // Estructura para "panel_control"
        let panel_control = document.querySelector('input[name="panel_control"]:checked').value;
        let panel_controlShort = '';
        switch (panel_control) {
            case 'Bueno':
                panel_controlShort = 'B';
                break;
            case 'Malo':
                panel_controlShort = 'M';
                break;
            case 'No Aplica':
                panel_controlShort = 'NA';
                break;
        }

        // Estructura para "acelerador_manual"
        let acelerador_manual = document.querySelector('input[name="acelerador_manual"]:checked').value;
        let acelerador_manualShort = '';
        switch (acelerador_manual) {
            case 'Bueno':
                acelerador_manualShort = 'B';
                break;
            case 'Malo':
                acelerador_manualShort = 'M';
                break;
            case 'No Aplica':
                acelerador_manualShort = 'NA';
                break;
        }

        // Estructura para "palanca_bloqueo_hidraulico"
        let palanca_bloqueo_hidraulico = document.querySelector('input[name="palanca_bloqueo_hidraulico"]:checked').value;
        let palanca_bloqueo_hidraulicoShort = '';
        switch (palanca_bloqueo_hidraulico) {
            case 'Bueno':
                palanca_bloqueo_hidraulicoShort = 'B';
                break;
            case 'Malo':
                palanca_bloqueo_hidraulicoShort = 'M';
                break;
            case 'No Aplica':
                palanca_bloqueo_hidraulicoShort = 'NA';
                break;
        }

        // Estructura para "cucharron"
        let cucharron = document.querySelector('input[name="cucharron"]:checked').value;
        let cucharronShort = '';
        switch (cucharron) {
            case 'Bueno':
                cucharronShort = 'B';
                break;
            case 'Malo':
                cucharronShort = 'M';
                break;
            case 'No Aplica':
                cucharronShort = 'NA';
                break;
        }

        // Estructura para "brazo"
        let brazo = document.querySelector('input[name="brazo"]:checked').value;
        let brazoShort = '';
        switch (brazo) {
            case 'Bueno':
                brazoShort = 'B';
                break;
            case 'Malo':
                brazoShort = 'M';
                break;
            case 'No Aplica':
                brazoShort = 'NA';
                break;
        }

        // Estructura para "cilindro_hidraulico"
        let cilindro_hidraulico = document.querySelector('input[name="cilindro_hidraulico"]:checked').value;
        let cilindro_hidraulicoShort = '';
        switch (cilindro_hidraulico) {
            case 'Bueno':
                cilindro_hidraulicoShort = 'B';
                break;
            case 'Malo':
                cilindro_hidraulicoShort = 'M';
                break;
            case 'No Aplica':
                cilindro_hidraulicoShort = 'NA';
                break;
        }

        // Estructura para "circulina"
        let circulina = document.querySelector('input[name="circulina"]:checked').value;
        let circulinaShort = '';
        switch (circulina) {
            case 'Bueno':
                circulinaShort = 'B';
                break;
            case 'Malo':
                circulinaShort = 'M';
                break;
            case 'No Aplica':
                circulinaShort = 'NA';
                break;
        }

        // Estructura para "remolque"
        let remolque = document.querySelector('input[name="remolque"]:checked').value;
        let remolqueShort = '';
        switch (remolque) {
            case 'Bueno':
                remolqueShort = 'B';
                break;
            case 'Malo':
                remolqueShort = 'M';
                break;
            case 'No Aplica':
                remolqueShort = 'NA';
                break;
        }

        let tacos = document.querySelector('input[name="tacos"]:checked').value;
        let tacosShort = '';
        switch (tacos) {
            case 'Bueno':
                tacosShort = 'B';
                break;
            case 'Malo':
                tacosShort = 'M';
                break;
            case 'No Aplica':
                tacosShort = 'NA';
                break;
        }


        let lampa = document.querySelector('input[name="lampa"]:checked').value;
        let lampaShort = '';
        switch (lampa) {
            case 'Bueno':
                lampaShort = 'B';
                break;
            case 'Malo':
                lampaShort = 'M';
                break;
            case 'No Aplica':
                lampaShort = 'NA';
                break;
        }



        generatePDF(
            nombres, 
            placa, 
            horometro, 
            observaciones,
            revisionTecnicaShort, 
            parabrisasShort, 
            plumillasShort, 
            vidrios_lateralesShort,
            parabrisas_traseroShort, 
            pasamanosShort, 
            puertaShort, 
            manillasDePuertasShort, 
            espejosLateralesShort, 
            espejoInteriorShort, 
            asientoOperadorShort, 
            balancinShort, 
            contrapesoShort, 
            cabinaShort, 
            caneriasShort, 
            cunasDeMartilloShort, 
            pasadoresShort, 
            extintorShort, 
            triangulosShort, 
            botiquinShort, 
            cinturonDeSeguridadShort, 
            bocinaShort,
            focos_superioresShort,
            focos_lateralesShort,
            //interna cabina fue
            orugaShort,
            caja_conductora_orugaShort,
            rodillos_inferioresShort,
            rodillos_superioresShort,
            sistema_tensorShort,
            zapatas_orugaShort,

            logo_empresaShort,
            limpieza_interior_cabinaShort,
            limpieza_externaShort,
            fugas_visiblesShort,
            marcador_nivel_combustibleShort,

            marcador_presion_aceiteShort,
            horometroShort,
            panel_controlShort,
            acelerador_manualShort,
            palanca_bloqueo_hidraulicoShort,
            cucharronShort,
            brazoShort,
            cilindro_hidraulicoShort,
            circulinaShort,

            remolqueShort,
            tacosShort,
            lampaShort


        );
        
    })
});

async function generatePDF(nombres, placa, horometro,observaciones, revisionTecnica, parabrisas, plumillas, 
                            vidrios_laterales, parabrisas_trasero, pasamanos,puerta, manillasDePuertas,
                            espejosLaterales, espejoInterior, asientoOperador, balancin, contrapeso, 
                            cabina, canerias, cunasDeMartillo, pasadores, extintor, triangulos, botiquin,
                            cinturonDeSeguridad, bocina, focos_superiores, foco_laterales,
                            oruga, caja_conductora_oruga, rodillos_inferiores, rodillos_superiores, sistema_tensor,
                            zapatas_oruga, logo_empresa, limpieza_interior_cabina, limpieza_externa, fugas_visibles,
                            marcador_nivel_combustible,  marcador_presion_aceite, horometrot, panel_control,
                            acelerador_manual, palanca_bloqueo_hidraulico, cucharron, brazo, cilindro_hidraulico, circulina, remolque, tacos, lampa) {
    // Cargar la imagen JPG
    const image = await loadImage("formulario.jpg");
        
    // Crear una nueva instancia de jsPDF
    const pdf = new jsPDF('p', 'pt', 'letter');

    // Agregar la imagen JPG al PDF
    pdf.addImage(image, 'PNG', 0, 0, 565, 792);


    // Obtener la fecha actual
    const date = new Date();
    // Formatear la fecha
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son de 0 a 11, por lo que sumamos 1
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    pdf.text(formattedDate, 200, 160); 

    
    //para la hora
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    // Mostrar la hora en el PDF
    pdf.text(formattedTime, 350, 160); 
    

    //posicion
    pdf.setFontSize(10);
    pdf.text(nombres, 160, 127);
    pdf.text(placa, 160, 144);
    pdf.text(horometro, 375, 144);
    pdf.text(observaciones,50, 620);
    

    //PREGUNTAS//
    //______________________//
    //Pregunta 1
    if (revisionTecnica === 'B') {
        pdf.text('B', 238, 205);  // posición ajustada para "Bueno"
    } else if (revisionTecnica === 'M') {
        pdf.text('M', 254, 205);  // posición ajustada para "Malo"
    } else if (revisionTecnica === 'NA') {
        pdf.text('A', 271, 205);  // posición ajustada para "No Aplica"
    }
    
    //Pregunta 2
    if (parabrisas === 'B') {
        pdf.text('B', 238, 234);  // posición ajustada para "Bueno"
    } else if (parabrisas === 'M') {
        pdf.text('M', 254, 234);  // posición ajustada para "Malo"
    } else if (parabrisas === 'NA') {
        pdf.text('A', 271, 234);  // posición ajustada para "No Aplica"
    }
    
    //Pregunta 3
    if (plumillas === 'B') {
        pdf.text('B', 238, 247);  // posición ajustada para "Bueno"
    } else if (plumillas === 'M') {
        pdf.text('M', 254, 247);  // posición ajustada para "Malo"
    } else if (plumillas === 'NA') {
        pdf.text('A', 271, 247);  // posición ajustada para "No Aplica"
    }
        
    // Pregunta 4
    if (vidrios_laterales === 'B') {
        pdf.text('B', 238, 260);  // posición ajustada para "Bueno"
    } else if (vidrios_laterales === 'M') {
        pdf.text('M', 254, 260);  // posición ajustada para "Malo"
    } else if (vidrios_laterales === 'NA') {
        pdf.text('A', 271, 260);  // posición ajustada para "No Aplica"
    }

    // Pregunta 5
    if (parabrisas_trasero === 'B') {
        pdf.text('B', 238, 273);  // posición ajustada para "Bueno"
    } else if (parabrisas_trasero === 'M') {
        pdf.text('M', 254, 273);  // posición ajustada para "Malo"
    } else if (parabrisas_trasero === 'NA') {
        pdf.text('A', 271, 273);  // posición ajustada para "No Aplica"
    }

    // Pregunta 6 - Pasamanos
    if (pasamanos === 'B') {
        pdf.text('B', 238, 287.5);  // posición ajustada para "Bueno"
    } else if (pasamanos === 'M') {
        pdf.text('M', 254, 287.5);  // posición ajustada para "Malo"
    } else if (pasamanos === 'NA') {
        pdf.text('A', 271, 287.5);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Puerta
    if (puerta === 'B') {
        pdf.text('B', 238, 302);  // posición ajustada para "Bueno"
    } else if (puerta === 'M') {
        pdf.text('M', 254, 302);  // posición ajustada para "Malo"
    } else if (puerta === 'NA') {
        pdf.text('A', 271, 302);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Manillas de Puertas
    if (manillasDePuertas === 'B') {
        pdf.text('B', 238, 316.5);  // posición ajustada para "Bueno"
    } else if (manillasDePuertas === 'M') {
        pdf.text('M', 254, 316.5);  // posición ajustada para "Malo"
    } else if (manillasDePuertas === 'NA') {
        pdf.text('A', 271, 316.5);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Espejos Laterales
    if (espejosLaterales === 'B') {
        pdf.text('B', 238, 331);  // posición ajustada para "Bueno"
    } else if (espejosLaterales === 'M') {
        pdf.text('M', 254, 331);  // posición ajustada para "Malo"
    } else if (espejosLaterales === 'NA') {
        pdf.text('A', 271, 331);  // posición ajustada para "No Aplica 14.5"
    }

    // Pregunta - Espejo Interior
    if (espejoInterior === 'B') {
        pdf.text('B', 238, 346);  // posición ajustada para "Bueno"
    } else if (espejoInterior === 'M') {
        pdf.text('M', 254, 346);  // posición ajustada para "Malo"
    } else if (espejoInterior === 'NA') {
        pdf.text('A', 271, 346);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Asiento Operador
    if (asientoOperador === 'B') {
        pdf.text('B', 238, 360);  // posición ajustada para "Bueno"
    } else if (asientoOperador === 'M') {
        pdf.text('M', 254, 360);  // posición ajustada para "Malo"
    } else if (asientoOperador === 'NA') {
        pdf.text('A', 271, 360);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Balancín 12
    if (balancin === 'B') {
        pdf.text('B', 238, 374);  // posición ajustada para "Bueno"
    } else if (balancin === 'M') {
        pdf.text('M', 254, 374);  // posición ajustada para "Malo"
    } else if (balancin === 'NA') {
        pdf.text('A', 271, 374);  // posición ajustada para "No Aplica"
    }
    //------------------------------------------------------------------------------

    // Pregunta - Contrapeso 13
    if (contrapeso === 'B') {
        pdf.text('B', 238, 403);  // posición ajustada para "Bueno"
    } else if (contrapeso === 'M') {
        pdf.text('M', 254, 403);  // posición ajustada para "Malo"
    } else if (contrapeso === 'NA') {
        pdf.text('A', 271, 403);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Cabina 14
    if (cabina === 'B') {
        pdf.text('B', 238, 417);  // posición ajustada para "Bueno"
    } else if (cabina === 'M') {
        pdf.text('M', 254, 417);  // posición ajustada para "Malo"
    } else if (cabina === 'NA') {
        pdf.text('A', 271, 417);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Cañerías 15
    if (canerias === 'B') {
        pdf.text('B', 238, 431);  // posición ajustada para "Bueno"
    } else if (canerias === 'M') {
        pdf.text('M', 254, 431);  // posición ajustada para "Malo"
    } else if (canerias === 'NA') {
        pdf.text('A', 271, 431);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Cunas de Martillo 16
    if (cunasDeMartillo === 'B') {
        pdf.text('B', 238, 446);  // posición ajustada para "Bueno"
    } else if (cunasDeMartillo === 'M') {
        pdf.text('M', 254, 446);  // posición ajustada para "Malo"
    } else if (cunasDeMartillo === 'NA') {
        pdf.text('A', 271, 446);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Pasadores 17
    if (pasadores === 'B') {
        pdf.text('B', 238, 461);  // posición ajustada para "Bueno"
    } else if (pasadores === 'M') {
        pdf.text('M', 254, 461);  // posición ajustada para "Malo"
    } else if (pasadores === 'NA') {
        pdf.text('A', 271, 461);  // posición ajustada para "No Aplica"
    }

    // Pregunta - Extintor 18
    if (extintor === 'B') {
        pdf.text('B', 238, 475);  // posición ajustada para "Bueno"
    } else if (extintor === 'M') {
        pdf.text('M', 254, 475);  // posición ajustada para "Malo"
    } else if (extintor === 'NA') {
        pdf.text('A', 271, 475);  // posición ajustada para "No Aplica"
    }

    //--------------------------------------------------------------

    // Pregunta - Triángulos 19
    if (triangulos === 'B') {
        pdf.text('B', 238, 505);  // posición ajustada para "Bueno"
    } else if (triangulos === 'M') {
        pdf.text('M', 254, 505);  // posición ajustada para "Malo"
    } else if (triangulos === 'NA') {
        pdf.text('A', 271, 505);  // posición ajustada para "No Aplica"
    }

    // Pregunta para "botiquin"
    if (botiquin === 'B') {
        pdf.text('B', 238, 519);  // posición para "Bueno"
    } else if (botiquin === 'M') {
        pdf.text('M', 254, 519);  // posición para "Malo"
    } else if (botiquin === 'NA') {
        pdf.text('A', 271, 519);  // posición para "No Aplica"
    }

    // Pregunta para "cinturonDeSeguridad"
    if (cinturonDeSeguridad === 'B') {
        pdf.text('B', 238, 534);  // posición para "Bueno"
    } else if (cinturonDeSeguridad === 'M') {
        pdf.text('M', 254, 534);  // posición para "Malo"
    } else if (cinturonDeSeguridad === 'NA') {
        pdf.text('A', 271, 534);  // posición para "No Aplica"
    }

    // Pregunta para "bocina" aquiiiii
    if (bocina === 'B') {
        pdf.text('B', 238, 548);  // posición para "Bueno"
    } else if (bocina === 'M') {
        pdf.text('M', 254, 548);  // posición para "Malo"
    } else if (bocina === 'NA') {
        pdf.text('A', 271, 548);  // posición para "No Aplica"
    }


    // Pregunta para "focos_superiores"
    if (focos_superiores === 'B') {
        pdf.text('B', 238, 563);  // posición para "Bueno"
    } else if (focos_superiores === 'M') {
        pdf.text('M', 254, 563);  // posición para "Malo"
    } else if (focos_superiores === 'NA') {
        pdf.text('A', 271, 563);  // posición para "No Aplica"
    }

    //focos laterales
    if (foco_laterales === 'B') {
        pdf.text('B', 238, 577);  // posición para "Bueno"
    } else if (foco_laterales === 'M') {
        pdf.text('M', 254, 577);  // posición para "Malo"
    } else if (foco_laterales === 'NA') {
        pdf.text('A', 271, 577);  // posición para "No Aplica"
    }




    //___________________________________________________________________________________________________________
    // Estructura para "oruga"
    /*
    if (revisionTecnica === 'B') {
        pdf.text('B', 236, 205);  // posición para "Bueno"
    } else if (revisionTecnica === 'M') {
        pdf.text('M', 252, 205);  // posición para "Malo"
    } else if (revisionTecnica === 'NA') {
        pdf.text('A', 269, 205);  // posición para "No Aplica"
    }
    */
    if (oruga === 'B') {
        pdf.text('B', 475, 205);  // posición para "Bueno"
    } else if (oruga === 'M') {
        pdf.text('M', 493, 205);  // posición para "Malo"
    } else if (oruga === 'NA') {
        pdf.text('A', 513, 205);  // posición para "No Aplica"
    }

    // Estructura para "caja_conductora_oruga"
    if (caja_conductora_oruga === 'B') {
        pdf.text('B', 475, 219 );  // posición para "Bueno"
    } else if (caja_conductora_oruga === 'M') {
        pdf.text('M', 493, 219);  // posición para "Malo"
    } else if (caja_conductora_oruga === 'NA') {
        pdf.text('A', 513, 219);  // posición para "No Aplica"
    }
//-------------------------------------------------------------
    // Estructura para "rodillos_inferiores"
    if (rodillos_inferiores === 'B') {
        pdf.text('B', 475, 247);  // posición para "Bueno"
    } else if (rodillos_inferiores === 'M') {
        pdf.text('M', 493, 247);  // posición para "Malo"
    } else if (rodillos_inferiores === 'NA') {
        pdf.text('A', 513, 247);  // posición para "No Aplica"
    }

    // Estructura para "rodillos_superiores"
    if (rodillos_superiores === 'B') {
        pdf.text('B', 475, 260);  // posición para "Bueno"
    } else if (rodillos_superiores === 'M') {
        pdf.text('M', 493, 260);  // posición para "Malo"
    } else if (rodillos_superiores === 'NA') {
        pdf.text('A', 513, 260);  // posición para "No Aplica"
    }

    // Estructura para "sistema_tensor 3"
    if (sistema_tensor === 'B') {
        pdf.text('B', 475, 274);  // posición para "Bueno"
    } else if (sistema_tensor === 'M') {
        pdf.text('M', 493, 274);  // posición para "Malo"
    } else if (sistema_tensor === 'NA') {
        pdf.text('A', 513, 274);  // posición para "No Aplica"
    }

    // Estructura para "zapatas_oruga 4"
    if (zapatas_oruga === 'B') {
        pdf.text('B', 475, 289);  // posición para "Bueno"
    } else if (zapatas_oruga === 'M') {
        pdf.text('M', 493, 289);  // posición para "Malo"
    } else if (zapatas_oruga === 'NA') {
        pdf.text('A', 513, 289);  // posición para "No Aplica"
    }


        // Estructura para "logo_empresa 5"
    if (logo_empresa === 'B') {
        pdf.text('B', 475, 303);  // posición para "Bueno"
    } else if (logo_empresa === 'M') {
        pdf.text('M', 493, 303);  // posición para "Malo"
    } else if (logo_empresa === 'NA') {
        pdf.text('A', 513, 303);  // posición para "No Aplica"
    }

    // Estructura para "limpieza_interior_cabina 6"
    if (limpieza_interior_cabina === 'B') {
        pdf.text('B', 475, 317.5);  // posición para "Bueno"
    } else if (limpieza_interior_cabina === 'M') {
        pdf.text('M', 493, 317.5);  // posición para "Malo"
    } else if (limpieza_interior_cabina === 'NA') {
        pdf.text('A', 513, 317.5);  // posición para "No Aplica"
    }

    // Estructura para "limpieza_externa 7"
    if (limpieza_externa === 'B') {
        pdf.text('B', 475, 332);  // posición para "Bueno"
    } else if (limpieza_externa === 'M') {
        pdf.text('M', 493, 332);  // posición para "Malo"
    } else if (limpieza_externa === 'NA') {
        pdf.text('A', 513, 332);  // posición para "No Aplica"
    }

    // Estructura para "fugas_visibles 8"
    if (fugas_visibles === 'B') {
        pdf.text('B', 475, 347);  // posición para "Bueno"
    } else if (fugas_visibles === 'M') {
        pdf.text('M', 493, 347);  // posición para "Malo"
    } else if (fugas_visibles === 'NA') {
        pdf.text('A', 513, 347);  // posición para "No Aplica"
    }

    // Estructura para "marcador_nivel_combustible 9"
    if (marcador_nivel_combustible === 'B') {
        pdf.text('B', 475, 360.5);  // posición para "Bueno"
    } else if (marcador_nivel_combustible === 'M') {
        pdf.text('M', 493, 360.5);  // posición para "Malo"
    } else if (marcador_nivel_combustible === 'NA') {
        pdf.text('A', 513, 360.5);  // posición para "No Aplica"
    }
//---------------------------------------------------------------------------------


//tercera parte




    // Estructura para "marcador_presion_aceite"
    if (marcador_presion_aceite === 'B') {
        pdf.text('B', 475, 389);  // posición para "Bueno"
    } else if (marcador_presion_aceite === 'M') {
        pdf.text('M', 493, 389);  // posición para "Malo"
    } else if (marcador_presion_aceite === 'NA') {
        pdf.text('A', 513, 389);  // posición para "No Aplica"
    }

    // Estructura para "horometro"
    if (horometrot === 'B') {
        pdf.text('B', 475, 403);  // posición para "Bueno"
    } else if (horometrot === 'M') {
        pdf.text('M', 493, 403);  // posición para "Malo"
    } else if (horometrot === 'NA') {
        pdf.text('A', 513, 403);  // posición para "No Aplica"
    }

    // Estructura para "panel_control"
    if (panel_control === 'B') {
        pdf.text('B', 475, 417);  // posición para "Bueno"
    } else if (panel_control === 'M') {
        pdf.text('M', 493, 417);  // posición para "Malo"
    } else if (panel_control === 'NA') {
        pdf.text('A', 513, 417);  // posición para "No Aplica"
    }

    // Estructura para "acelerador_manual"
    if (acelerador_manual === 'B') {
        pdf.text('B', 475, 431);  // posición para "Bueno"
    } else if (acelerador_manual === 'M') {
        pdf.text('M', 493, 431);  // posición para "Malo"
    } else if (acelerador_manual === 'NA') {
        pdf.text('A', 513, 431);  // posición para "No Aplica"
    }

    // Estructura para "palanca_bloqueo_hidraulico"
    if (palanca_bloqueo_hidraulico === 'B') {
        pdf.text('B', 475, 446);  // posición para "Bueno"
    } else if (palanca_bloqueo_hidraulico === 'M') {
        pdf.text('M', 493, 446);  // posición para "Malo"
    } else if (palanca_bloqueo_hidraulico === 'NA') {
        pdf.text('A', 513, 446);  // posición para "No Aplica"
    }

    // Estructura para "cucharron"
    if (cucharron === 'B') {
        pdf.text('B', 475, 461);  // posición para "Bueno"
    } else if (cucharron === 'M') {
        pdf.text('M', 493, 461);  // posición para "Malo"
    } else if (cucharron === 'NA') {
        pdf.text('A', 513, 461);  // posición para "No Aplica"
    }

    // Estructura para "brazo"
    if (brazo === 'B') {
        pdf.text('B', 475, 475);  // posición para "Bueno"
    } else if (brazo === 'M') {
        pdf.text('M', 493, 475);  // posición para "Malo"
    } else if (brazo === 'NA') {
        pdf.text('A', 513, 475);  // posición para "No Aplica"
    }

    // Estructura para "cilindro_hidraulico"
    if (cilindro_hidraulico === 'B') {
        pdf.text('B', 475, 490);  // posición para "Bueno"
    } else if (cilindro_hidraulico === 'M') {
        pdf.text('M', 493, 490);  // posición para "Malo"
    } else if (cilindro_hidraulico === 'NA') {
        pdf.text('A', 513, 490);  // posición para "No Aplica"
    }

    // Estructura para "circulina"
    if (circulina === 'B') {
        pdf.text('B', 475, 505);  // posición para "Bueno"
    } else if (circulina === 'M') {
        pdf.text('M', 493, 505);  // posición para "Malo"
    } else if (circulina === 'NA') {
        pdf.text('A', 513, 505);  // posición para "No Aplica"
    }












    if (remolque === 'B') {
        pdf.text('B', 475, 520);  // posición para "Bueno"
    } else if (remolque === 'M') {
        pdf.text('M', 493, 520);  // posición para "Malo"
    } else if (remolque === 'NA') {
        pdf.text('A', 513, 520);  // posición para "No Aplica"
    }

    // Estructura para "cilindro_hidraulico"
    if (tacos === 'B') {
        pdf.text('B', 475, 535);  // posición para "Bueno"
    } else if (tacos === 'M') {
        pdf.text('M', 493, 535);  // posición para "Malo"
    } else if (tacos === 'NA') {
        pdf.text('A', 513, 535);  // posición para "No Aplica"
    }

    // Estructura para "circulina"
    if (lampa === 'B') {
        pdf.text('B', 475, 550);  // posición para "Bueno"
    } else if (lampa === 'M') {
        pdf.text('M', 493, 550);  // posición para "Malo"
    } else if (lampa === 'NA') {
        pdf.text('A', 513, 550);  // posición para "No Aplica"
    }

    pdf.setFillColor(0,0,0);
    pdf.save("example.pdf");

    location.reload(); // Actualiza la página después de generar el PDF
}
