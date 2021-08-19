<template>
  <div>
    <v-list-item
      @click="doneTask(task.id)"
      :class="{ 'blue lighten-5' : task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.done"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through' : task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <TaskMenu :task="task" />
        </v-list-item-action>
      </template>

    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from '@/components/Todo/TaskMenu'

export default {
  name: 'Task',
  props: ['task'],
  components: { 
    TaskMenu
  },
  methods: {
    doneTask(taskId) {
      this.$store.commit('doneTask', taskId)
    }
  }
}
</script>
