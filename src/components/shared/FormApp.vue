<template>
  <b-form {{tipoForm}} @submit="onSubmit" @reset="onReset">
    <slot></slot>
  </b-form>
</template>

<script>
export default {
  name: 'FormApp',
  props: {
    tipoForm: String,
    onSubmit: Function,
    onReset: Function
  }
};
</script>
