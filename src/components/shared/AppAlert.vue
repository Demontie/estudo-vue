<template>
  <b-alert
    :show="dismissCountDown"
    dismissible
    :variant="variant"
    @dismissed="dismissCountDown = 0"
    @dismiss-count-down="countDownChanged"
  >
    <p>{{ text }}</p>
    <b-progress
      :variant="variant"
      :max="dismissSecs"
      :value="dismissCountDown"
      height="4px"
    ></b-progress>
  </b-alert>
</template>

<script>
export default {
  name: 'AppAlert',
  props: {
    text: String,
    variant: {
      type: String,
      default: 'success'
    },
    dismissSecs: {
      type: Number,
      default: 5
    },
    dismissCountDown: {
      type: Number,
      default: 0
    },
    showDismissibleAlert: {
      type: Boolean,
      default: false
    }
  }
};
</script>
