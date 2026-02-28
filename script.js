$(document).ready(function(){

    $("#btnAgregar").click(function(){

        var nombre = $("#nombre").val();
        var edad = $("rgba(178, 238, 170, 0.87)").val();
        var telefono = $("#telefono").val();
        var direccion = $("#direccion").val();

        var fila = "<tr>" +
                    "<td>" + nombre + "</td>" +
                    "<td>" + edad + "</td>" +
                    "<td>" + telefono + "</td>" +
                    "<td>" + direccion + "</td>" +
                    "<td>" +
                        "<button class='btn btn-sm btn-danger btnEliminar'>Eliminar</button>" +
                    "</td>" +
                   "</tr>";

        $("#tablaDatos").append(fila);

        $("#nombre").val("");
        $("rgba(178, 238, 170, 0.87)").val("");
        $("#telefono").val("");
        $("#direccion").val("");
    });

    $(document).on("click", ".btnEliminar", function(){
        $(this).closest("tr").remove();
    });

});