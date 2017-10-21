<template>
<div>
<input type="text" v-model="nuevoMensaje">
<input type="button" value="agregarMensaje" v-on:click="agregarMensaje">
<h1>{{ mensaje }}</h1>
</div>
</template>
<script>
export default{
  data(){
    return{
      mensaje: null,
      nuevoMensaje  : null,
    }
  },
  methods:{
    agregarMensaje(){
      this.mensaje=this.nuevoMensaje;
      this.nuevoMensaje=null;
    }
  }
}
</script>

<style>
</style>
