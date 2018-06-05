<template >
  <div class="product-container">
    <div class="img-wrapper">
      <div class="item-image">
      </div>
    </div>
    <div class="descr-wrapper">
      <h2>{{$route.params.name}}</h2>
      <br>
      <h2>Price: ${{$route.params.price}}</h2>
      <br>
      <h2>Overview</h2>
      {{$route.params.description}}
      <form action="#">
        <input type="text" name="username" placeholder="Your name">
        <input type="email" name="usermail" placeholder="Email">
        <input type="tel" name="userphone" placeholder="Tel.">
        <textarea name="message" id="usertext" cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" class="user-message-submit" value="Send message">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product'
}
</script>
