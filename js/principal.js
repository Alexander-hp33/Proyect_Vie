var app = new Vue({
   // Identificador en el DOM
   el: '#app',
   
   // Variables
   data: {
        apellido: 'Hernandez',
        nombre: '',
        nota1: 0,
        nota2: 0,
        nota3: 0,
        promedio: 0,
        estado: '',  // Variable para almacenar el estado de aprobado o reprobado
        lista: []         
   },
   methods: {
      agregarNotas: function() {
            if (this.nombre !== '' && this.nota1 !== '' && this.nota2 !== '' && this.nota3 !== '') {
               // Calcular el promedio
               this.promedio = (parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3)) / 3;

               // Determinar si es aprobado o reprobado
               if (this.promedio >= 6) {
                   this.estado = 'Aprobado';
               } else {
                   this.estado = 'Reprobado';
               }

               // Agregar los datos a la lista
               this.lista.push({ 
                  nombre: this.nombre, 
                  nota1: this.nota1, 
                  nota2: this.nota2, 
                  nota3: this.nota3, 
                  promedio: this.promedio,
                  estado: this.estado  // Añadir el estado de aprobado/reprobado
               });

               // Limpiar los campos
               this.nombre = "";
               this.nota1 = 0;
               this.nota2 = 0;
               this.nota3 = 0;
               this.promedio = 0;
               this.estado = "";

               // Enfocar el campo de nombre
               document.getElementById("nombre").focus();
            } else {
               alert('Debe ingresar todos los datos');
            }
      }
   }
});
