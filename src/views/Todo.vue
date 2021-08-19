<template>
  <div>
    <FieldAddTask />
    <TaskLists v-if="$store.state.tasks.length" />
    <NoTasks v-else />
    <ButtonDoneSorting v-if="$store.state.sorting" />
  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask'
import TaskLists from '@/components/Todo/TaskLists'
import NoTasks from '@/components/Todo/NoTasks'
import ButtonDoneSorting from '@/components/Todo/ButtonDoneSorting'

export default {
  name: 'Todo',
  components: {
    FieldAddTask,
    TaskLists,
    NoTasks,
    ButtonDoneSorting
  },
}
</script>

