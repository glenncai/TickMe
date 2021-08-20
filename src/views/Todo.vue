<template>
  <div>
    <TaskLists v-if="$store.state.tasks.length" />
    <NoTasks v-else />
    <ButtonDoneSorting v-if="$store.state.sorting" />
  </div>
</template>

<script>
import TaskLists from '@/components/Todo/TaskLists'
import NoTasks from '@/components/Todo/NoTasks'
import ButtonDoneSorting from '@/components/Todo/ButtonDoneSorting'

export default {
  name: 'Todo',
  components: {
    TaskLists,
    NoTasks,
    ButtonDoneSorting
  },
}
</script>

