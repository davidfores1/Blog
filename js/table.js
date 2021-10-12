class Table {

    constructor() {

        this.cantidadTD = document.getElementsByTagName("td").length;
        this.td = document.getElementsByTagName("td");

        this.eventos();
    }


    eventos() {
        window.addEventListener('DOMContentLoaded', () => {
            this.asignarEvento();
        })
    }
    asignarEvento() {
        for (var i = 0; i < this.cantidadTD; i++) {
            this.td[i].addEventListener("click", this.seleccionaraTD);
        }
    }

    seleccionaraTD(e) {
        var texto = "";
        var td = e.target;
        texto += "Has elegido" + td.textContent;
        var actividad = prompt("Escriba Actividad")
        if (actividad != "" && actividad != null) {
            
            td.innerHTML = actividad
        }
    }

}

new Table();