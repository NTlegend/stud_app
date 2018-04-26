<template>
<<<<<<< HEAD
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
                    <router-link :to="{name: 'AddsList'}">Kitchenware</router-link>
                </li>
            </ul>
        </div>
        <div class="contact_form_box">
            <div class="row">
                <div class="col1">
                    <img :src="item.img"/>
                </div>
                <div class="col2">
                    <div class="description">
                        <h2 class="title">{{ item.title }}</h2>
                        <span class="price">Price: {{item.price}} $</span>
                        <p>{{item.desc}}</p>
                    </div>
                    <div class="form_box">
                        <div>
                            <input type="text" name="name" placeholder="Your name">
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email">
                        </div>
                        <div>
                            <input type="phone" name="phone" placeholder="Tel.">
                        </div>
                        <div>
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                        <div>
                            <button>
                                <span>Send Message</span>
                                <svg version="1.2" preserveAspectRatio="none" viewBox="0 -8.5 67 67"  style="opacity: 1; fill: rgb(255, 255, 255); width: 32px; height: 32px;"><g><g xmlns:default="http://www.w3.org/2000/svg" id="Mail">
                                    <polygon fill-rule="evenodd" clip-rule="evenodd" points="0,14.5 0,49.1 66.2,49.1 66.2,14.5 33.1,30.9  " style="fill: rgb(255, 255, 255);"></polygon>
                                    <polygon fill-rule="evenodd" clip-rule="evenodd" points="0,0 0,9.2 33.1,25.7 66.2,9.2 66.2,0  " style="fill: rgb(255, 255, 255);"></polygon>
                                </g></g>
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
        name: "SingleAdd",
        computed: {
            ...mapState({
                item: 'addItem'
            })
        },
        created () {
            this.$store.dispatch('loadById', {id: this.$route.params.id})
        }
    }
</script>
=======
  <div class="hello">
    <h1>Single Add page</h1>
  </div>
</template>

<script>
export default {
  name: 'SingleAdd',
  data () {
    return {
    }
  }
}
</script>
>>>>>>> fe55020bdb0744024526f69eb8fd9825eccc12fe
