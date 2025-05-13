<template>
  <NotificationsBell />
  <div>
    <h1 class="text-dark">test for theme change</h1>
  </div>
</template>
<script setup lang="ts">
import NotificationsBell from '@features/notifications/ui/NotificationsBell.vue'

// const { $logger: logger, $theme: theme } = useNuxtApp()

// logger.log('This is a log log')
// logger.info('This is an info log')
// logger.warn('This is a warn log')
// logger.error('This is an error log')
// toast.success('This is a success message!')
// toast.error('This is a success message!')
// toast.info('This is a success message!')

// setTimeout(() => {
//   theme.toggle()
// }, 5000)
</script>

<style>
.text-dark {
  color: darkblue;
}

html[data-theme='dark'] .text-dark {
  color: red;
}
</style>
