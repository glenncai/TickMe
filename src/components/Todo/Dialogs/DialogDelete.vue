<template>
  <v-dialog
    :value="true"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Delete task?
      </v-card-title>
      <v-card-text>
        Are you sure you wanna delete this task? The task will not be restored after deletion.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('close')"
          text
        >
          No
        </v-btn>
        <v-btn
          @click="deleteTask(task.id)"
          color="red darken-1"
          text
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DialogDelete',
  props: ['task'],
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId)
    }
  }
}
</script>
