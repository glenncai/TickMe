<template>
  <v-list
    class="pt-0"
    flat
  >
  <Task
    v-for="task in $store.getters.tasksFiltered"
    :key="task.id"
    :task="task"
  />
  </v-list>
</template>

<script>
import Task from '@/components/Todo/Task'

export default {
  name: 'TaskLists',
  components: {
    Task
  }
}
</script>
