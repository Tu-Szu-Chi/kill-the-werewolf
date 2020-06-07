<template lang="pug">
  .container
    input(@input="e => changeTitle(e.target.value)" type="text")
    p.bg-green-400 {{ state.title }}
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  setup () {
    const state = reactive({
      title: ''
    })
    function changeTitle (title: string) {
      state.title = title;
    }

    return {
      state,
      changeTitle
    }
  }
});

</script>
