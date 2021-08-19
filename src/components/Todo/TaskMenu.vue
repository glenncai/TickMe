<template>
  <div>
    <v-menu
      bottom
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
  name: 'TaskMenu',
  props: ['task'],
  components: {
    DialogDelete
  },
  data() {
    return {
      dialogs: {
        delete: false
      },
      items: [
        { 
          title: 'Edit',
          icon: 'mdi-pencil',
          click() {
            console.log('edit');
          }
        },
        { 
          title: 'Due date',
          icon: 'mdi-calendar',
          click() {
            console.log('due date');
          }
        },
        { 
          title: 'Delete',
          icon: 'mdi-delete',
          click() {
            this.dialogs.delete = true
          }
        },
      ],
    }
  },
  methods: {
    handleClick(index) {
      this.items[index].click.call(this)
    },
    showOrhideDialog(active) {
      // if true, return false. if false, return true
      this.dialogs.delete = !active
    }
  }
}
</script>
