<template>
  <div class="hello">
  <div class="filter-bar">
    <div class="cat-filter-wrapper">
      <div name="categories" id="cat_filter" v-bind:class="{opened: isOpen}" v-on:click="isOpen=!isOpen">
        Categories
        <div class="category">
          Cars
          <a href="#" class="sub-category">Sports</a>
          <a href="#" class="sub-category">Coupe</a>
          <a href="#" class="sub-category">Estate</a>
        </div>
      </div>
    </div>
    <form action="" class="search-form">
      <input type="text" class="search-input" placeholder="Search">
      <layer for="search-submit" class="search-submit" >
        <input type="submit" name="search-submit">
      </layer>
    </form>
    <form class="active-inactive-form">
      <div for="active-btn" class="label-active" v-bind:class="{active: !isActive}" v-on:click="isActive=!isActive">
        Active
        <input type="radio" id="active-btn">
      </div>
      <div for="inactive-btn" class="label-inactive" v-bind:class="{active: isActive}" v-on:click="isActive=!isActive">
        Inactive
        <input type="radio" id="inactive-btn">
      </div>
    </form>
    <div class="myads-wrapper">
      <div class="myads" v-bind:class="{checked: isChecked}" v-on:click="isChecked=!isChecked">
      </div>
      My ads
    </div>
    <router-link :to="{name: 'AddForm', params: {id:list.length + 1}}" class="add-new">Add new</router-link>
  </div>
    <div class="item-teaser" v-for="item in list" :key="item.id">
        <router-link :to="{name: 'Product', params: {id: item.id, description:item.description, price:item.price, name:item.name}}"
         class="item-href">
          <div class="item-image">

          </div>
          <div class="text-cont">
            <h2>{{ item.name }}</h2>
            <h2>Price: ${{ item.price }}</h2>
            <p>Description: {{item.description}}</p>
          </div>
        </router-link>
          <div class="contact-block">
            <a href="tel:555222333">Contact now</a>
          </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddsList',
  data () {
    return {
      msg: 'Welcome to AddsList',
      isActive: false,
      isOpen: false,
      isChecked: false
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      list: 'addsList'
    })
  }
}
</script>
