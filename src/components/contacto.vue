<template>
<div>
  <h2>Contacto</h2>
  <ul>
      <li v-for="tarea in tareas">{{tarea}}</li>
    </ul>
</div>
</template>

<script>
export default{
  data(){ return {
    tareas: [
      "Aprender vue",
      "Pasar el semestre"      ]
  }


  },
}
</script>

<style>
</style>
