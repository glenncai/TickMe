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

        <v-list-item-action v-show="task.dueDate">
          <v-list-item-action-text class="formatDate">
            <v-icon small>mdi-calendar</v-icon>
            <span>{{ task.dueDate | niceDate }}</span>
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <TaskMenu :task="task" />
        </v-list-item-action>
      </template>

    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from 'date-fns'
import TaskMenu from '@/components/Todo/TaskMenu'

export default {
  name: 'Task',
  props: ['task'],
  components: { 
    TaskMenu
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), 'd MMM')
    }
  },
  methods: {
    doneTask(taskId) {
      this.$store.commit('doneTask', taskId)
    }
  }
}
</script>

<style lang="scss" scoped>
.formatDate {
  display: flex;
  align-items: center;

  & span {
    padding-left: 3px;
  }
}
</style>
