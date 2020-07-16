<template>
  <b-card>
    <b-card-title>{{ title }}</b-card-title>
    <b-card-text>
      <slot></slot>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    title: String
  }
};
</script>
