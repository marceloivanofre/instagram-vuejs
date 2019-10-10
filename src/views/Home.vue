<template>
  <div class="home">
    <toolbar />
    <div class="container">
      <stories />
      <div class="posts">
        <post v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";
import Stories from "../components/Stories";
import Post from "../components/Post";

export default {
  name: "home",
  data: () => ({
    posts: [
      {
        id: 0,
        user: {
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          name: "joker"
        },
        post: {
          id: 0,
          img_url:
            "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/10/01/e8ad3f0e-d8ee-11e9-80eb-3aa57b6d2433_image_hires_044248.jpg?itok=IDlUWIAD&v=1569876182",
          likes: 285,
          comments: [
            {
              id: 0,
              author: "joker",
              comment:
                "The worst part about having a mental illness is people expect you to behave as if you DON'T "
            }
          ]
        }
      },
      {
        id: 1,
        user: {
          avatar: "https://randomuser.me/api/portraits/men/9.jpg",
          name: "cyberpunk2077"
        },
        post: {
          img_url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-06-09-at-21-23-11-1560112031.png?crop=0.551xw:0.982xh;0.219xw,0.0185xh&resize=480:*",
          likes: 97,
          comments: [
            {
              id: 0,
              author: "cyberpunk2077",
              comment: "lorem ipsum"
            },
            {
              id: 0,
              author: "mrreaves",
              comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          ]
        }
      }
    ]
  }),
  components: {
    Toolbar,
    Stories,
    Post
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>
