const { createApp } = Vue

import { getCoches } from "./communicationManager.js";

createApp({
    data() {
        return {
            active: 0,
            coches: [],
            mostrarCarrito: false,
            carrito: [],
            precioCarrito: 0,
            nombre: "",
            email: "",
        }
    },
    methods: {
        changeScreen(active){
            this.active = active;
            
        },
        añadirCarrito(id){
            this.mostrarCarrito = true;
            this.carrito.push(this.coches[id]);
            console.log(this.carrito);

            this.precioCarrito += this.coches[id].precio;
        },
        eliminarProducto(id){
            this.precioCarrito -= this.carrito[id].precio;
            this.carrito.splice(id, 1);
            if (this.carrito.length == 0) {
                this.mostrarCarrito = false;
            }
        },
        setLocalStorageUser(){
            localStorage.setItem('nombre', this.nombre); 
            localStorage.setItem('email', this.email); 
        },
        getLocalStorage(){
            this.nombre = localStorage.getItem('nombre');;
            this.email = localStorage.getItem('email');;
        }
    },
    created(){
        if (localStorage.getItem('nombre') && localStorage.getItem('email')) {
            this.getLocalStorage("nombre");
            this.getLocalStorage("email");
        }
        getCoches().then(data => {
            this.coches = data; 
        });
    }
}).mount('#app')