<template>
  <div class="form-wrapper">
    <div class="form">
      <div class="img-loader"></div>
      <div class="input-wrapper">
        Title
        <input v-model="item.name"/>
        Price
        <input v-model="item.price"/>
        Overview
        <textarea v-model="item.description"/>
        <div class="btn-wrapper">
          <button @click="save()">Save</button>
          <router-link :to="{name: 'AddsList'}" class="add-cancel">Cancel</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddForm',
  computed: {
    ...mapState({
      item: 'addItem'
    })
  },
  methods: {
    save: function () {
      this.$store.dispatch('save', {item: this.item})
        .then(() => {
          this.$router.push({name: 'AddsList'})
        })
    }
  },
  created () {
    this.$store.dispatch('loadById', {id: this.$route.params.id})
  }
}
</script>
