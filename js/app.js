
let precioEntradas = (precio,cantidad) =>{return precio * cantidad} 

let valorTicket = 200;
let valorTicketEstudiante = 40;
let valorTicketTrainee = 50;
let valorTicketJunior = 170;


let calcularDescuento = () =>{

    let categoria = document.getElementById('categoria').value
    let cantidad = document.getElementById('cantidad').value

    if(cantidad < 0){
        document.getElementById('mostrarPrecio').classList.remove('mostrarPrecio')
        document.getElementById('mostrarPrecio').classList.add('mostrarPrecioError')

        document.getElementById('mostrarPrecio').innerHTML = 'La cantidad ingresada no es valida';
    }else{
        document.getElementById('mostrarPrecio').classList.remove('mostrarPrecioError')
        document.getElementById('mostrarPrecio').classList.add('mostrarPrecio')
        
        document.getElementById('mostrarPrecio').innerHTML = 'Total a pagar: $<span  id="precioFinal"></span>';
        if(categoria == '---'){
            let valorEntradas = valorTicket * cantidad;
            
            document.getElementById('precioFinal').innerHTML = valorEntradas;
        }else if(categoria == 'estudiante'){
            let valorEntradas = valorTicketEstudiante * cantidad;
    
            document.getElementById('precioFinal').innerHTML = valorEntradas;
        }else if(categoria == 'trainee'){
            let valorEntradas = valorTicketTrainee * cantidad;
    
            document.getElementById('precioFinal').innerHTML = valorEntradas;
        }else if(categoria == 'junior'){
            let valorEntradas = valorTicketJunior * cantidad;
            
            document.getElementById('precioFinal').innerHTML = valorEntradas;
        }
    }

}

const menu = document.getElementById('menu')

menu.addEventListener('click', () =>{
    document.getElementById('contenedorBotones').classList.toggle('active')
})