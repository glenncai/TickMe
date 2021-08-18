<template>
  <div>
    <FieldAddTask />
    <TaskLists v-if="$store.state.tasks.length" />
    <NoTasks v-else />
  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask'
import TaskLists from '@/components/Todo/TaskLists'
import NoTasks from '@/components/Todo/NoTasks'

export default {
  name: 'Todo',
  components: {
    FieldAddTask,
    TaskLists,
    NoTasks
  },
}
</script>

