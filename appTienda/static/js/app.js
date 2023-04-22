
$(function(){
  $("#tblProductos").DataTable();
  $("#fileFoto").on("change",mostrarImagen)
})


/**
 * función que recibe el id del producto
 * a eliminar. Abre una modal y verifica
 * si la persona desea eliminar el producto.
 * Si dice que si, llama una url llamada
 * /eliminar/idProducto
 * @param {*} idProducto 
 */
function abrirModalEliminar(idProducto){
    Swal.fire({
        title: 'Eliminar Producto',
        text: "¿Está seguro de eliminar?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'NO',
        confirmButtonText: 'SI'
      }).then((result) => {
        if (result.isConfirmed) {
           location.href="/eliminarProducto/"+idProducto+"/"
        }
      })
}

/**
 * A partir de la selección de una 
 * imagen en el control fileFoto del
 * formulario, se obtiene la url para
 * poder mostrarlo en un control tipo
 * IMG
 * @param {*} evento 
 */
function mostrarImagen(evento){
  const archivos = evento.target.files
  const archivo = archivos[0]
  const url = URL.createObjectURL(archivo)  
  $("#imagenProducto").attr("src",url)
}



function validarCodigo(){
  location.href="/validarCodigo/"+$("#txtCodigo").val()
}
