<template>
  <div class="post">
    <div class="author">
      <img :src="post.user.avatar" :alt="post.user.name" />
      <b>{{post.user.name}}</b>
    </div>
    <img :src="post.post.img_url" :alt="post.user.name" />
    <div class="actions">
      <div class="group-actions">
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        <i class="far fa-caret-square-up"></i>
      </div>
      <i class="far fa-bookmark"></i>
    </div>
    <p class="likes">
      Curtido por
      <b>{{post.post.likes}} pessoas</b>
    </p>
    <p v-for="comment in post.post.comments" :key="comment.id" class="comment">
      <b>{{comment.author}}</b>
      {{comment.comment}}
    </p>
    <div class="comments"></div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    post: Object
  }
};
</script>