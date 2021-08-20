<template>
  <v-dialog
    :value="true"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Edit task
      </v-card-title>
      <v-card-text>
        New task title:
        <v-text-field 
          v-model="taskTitle"
          @keyup.enter="saveTask(task.id)"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('close')"
          text
        >
          Cancel
        </v-btn>
        <v-btn
          @click="saveTask(task.id)"
          :disabled="taskTitleInvalid"
          color="red darken-1"
          text
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogEdit',
  props: ['task'],
  data() {
    return {
      taskTitle: null
    }
  },
  computed: {
    taskTitleInvalid() {
      // boolean
      return !this.taskTitle || this.taskTitle === this.task.title
    }
  },
  mounted() {
    this.taskTitle = this.task.title
  },
  methods: {
    saveTask(taskId) {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: taskId,
          title: this.taskTitle
        }

        this.$store.dispatch('updateTaskTitle', payload)
        this.$emit('close')
        this.$vuetify.goTo(0, { duration: 0 })
      }
    }
  }
}
</script>
