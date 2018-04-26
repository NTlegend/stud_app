<template>
    <div class="container">
        <div class="path">
            <ul>
                <li>
                    <router-link :to="{name: 'AddsList'}">Home</router-link>
                    <svg version="1.2" preserveAspectRatio="none" viewBox="0 0 256 256" style="opacity: 1; fill: rgb(199, 199, 199); width: 12px; height: 12px;">
                        <path fill="#343434" d="M203.438,116.838c3.26,3.226,4.89,6.995,4.89,11.307c0,4.346-1.63,8.115-4.89,11.34L91.609,251.179 C88.384,254.37,84.649,256,80.371,256c-4.244,0-8.013-1.63-11.239-4.821l-16.638-16.638c-3.226-3.26-4.821-6.995-4.821-11.273 s1.596-8.013,4.821-11.204l84.58-84.564l-84.58-83.562c-3.226-3.226-4.821-6.927-4.821-11.069c0-4.142,1.596-7.843,4.821-11.069 L69.132,4.822C72.357,1.596,76.126,0,80.473,0c4.312,0,8.047,1.596,11.137,4.822L203.438,116.838L203.438,116.838z" style="fill: rgb(199, 199, 199);"></path>
                    </svg>
                </li>
                <li class="current">
                    Edit form
                </li>
            </ul>
        </div>
        <div class="edit_form_wrap">
            <div class="row">
                <div class="col1">
                    <img :src="item.img"/>
                    <div class="imageActions">
                        <span>
                            <svg version="1.2" preserveAspectRatio="none" viewBox="0 0 24 24" style="opacity: 1; fill: rgb(0, 0, 0); width: 32px; height: 32px;">
                                <g><path xmlns:default="http://www.w3.org/2000/svg" d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" style="fill: rgb(0, 0, 0);"></path></g>
                            </svg>
                        </span>
                        <span>
                            <svg version="1.2" preserveAspectRatio="none" viewBox="0 0 20 20" style="opacity: 1; fill: rgb(0, 0, 0); width: 24px; height: 24px;">
                                <g>
                                    <rect display="none" fill="#FFA400" width="20" height="20" style="fill: rgb(0, 0, 0);"></rect>
                                    <rect display="none" fill="none" width="20" height="20" style="fill: rgb(0, 0, 0);"></rect>
                                    <polygon fill-rule="evenodd" clip-rule="evenodd" points="20,3 17,0 10,7 3,0 0,3 7,10 0,17 3,20 10,13 17,20 20,17 13,10 " style="fill: rgb(0, 0, 0);"></polygon>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="col2">
                    <div class="form">
                        <div class="form_row">
                            <label for="title">Title</label>
                            <input id="title" type="text" v-model="item.title"/>
                        </div>
                        <div class="form_row">
                            <label for="price">Price</label>
                            <input id="price" type="text" v-model="item.price"/>
                        </div>
                        <div class="form_row">
                            <label for="overview">Overview</label>
                            <textarea id="overview" v-model="item.desc"></textarea>
                        </div>
                        <div class="form_row_buttons">
                            <button @click="save()" class="save_button">
                                <span>Save</span>
                                <svg version="1.2" preserveAspectRatio="none" viewBox="0 0 24 24" style="opacity: 1; fill: rgb(255, 255, 255); width: 24px; height: 24px;">
                                    <g>
                                        <path xmlns:default="http://www.w3.org/2000/svg" d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" style="fill: rgb(255, 255, 255);"></path>
                                    </g>
                                </svg>
                            </button>
                            <button class="cancel_button">
                                <router-link :to="{name: 'AddsList'}">Cancel</router-link>
                                <svg version="1.2" preserveAspectRatio="none" viewBox="0 0 24 24" class="ng-element" style="opacity: 1; fill: rgb(255, 255, 255); width: 24px; height: 24px;">
                                    <g>
                                        <path xmlns:default="http://www.w3.org/2000/svg" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" style="fill: rgb(255, 255, 255);"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'EditForm',
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