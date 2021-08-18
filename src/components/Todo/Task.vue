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
          <v-btn
            @click.stop="showOrhideDialog(dialogs.delete)"
            icon
          >
            <v-icon color="primary lighten-1">mdi-delete-circle</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>

    </v-list-item>
    <v-divider></v-divider>

    <DialogDelete 
      v-if="dialogs.delete"
      @close="showOrhideDialog(dialogs.delete)"
      :task="task"
    />
  </div>
</template>

<script>
import DialogDelete from '@/components/Todo/Dialogs/DialogDelete'

export default {
  name: 'Task',
  props: ['task'],
  components: { 
    DialogDelete
  },
  data() {
    return {
      dialogs: {
        delete: false
      }
    }
  },
  methods: {
    doneTask(taskId) {
      this.$store.commit('doneTask', taskId)
    },
    showOrhideDialog(active) {
      // if true, return false. if false, return true
      this.dialogs.delete = !active
    }
  }
}
</script>
