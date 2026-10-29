
/* Aquí busco el formulario y el mensaje de confirmación */
const formulario=document.getElementById("formularioContacto");
const aviso=document.getElementById("avisoFormulario");
/* Aquí reviso los datos cuando presiono el botón Enviar */
formulario.addEventListener("submit",(evento)=>{
evento.preventDefault();
formulario.classList.add("was-validated");
if(!formulario.checkValidity()){
aviso.classList.add("d-none");
return;
}
const nombre=document.getElementById("nombre").value.trim();
aviso.textContent=`Gracias, ${nombre}. Tu formulario se validó correctamente. Esta es una demostración y no se envió ningún correo.`;
aviso.classList.remove("d-none");
});
/* Aquí limpio los mensajes de validación cuando presiono Limpiar */
formulario.addEventListener("reset",()=>{
formulario.classList.remove("was-validated");
aviso.classList.add("d-none");
});
/* Aquí permito que la tarjeta 3D también funcione al hacer clic */
const control3d=document.getElementById("control3d");
control3d.addEventListener("click",()=>{
const estaGirado=control3d.getAttribute("aria-pressed")==="true";
control3d.setAttribute("aria-pressed",String(!estaGirado));
});
/* Aquí cierro el menú hamburguesa al seleccionar una opción */
document.querySelectorAll("#menuPrincipal .nav-link").forEach((enlace)=>{
enlace.addEventListener("click",()=>{
const menu=document.getElementById("menuPrincipal");
if(window.innerWidth<992&&window.bootstrap){
const instancia=bootstrap.Collapse.getInstance(menu);
if(instancia){
instancia.hide();
}
}
});
});
