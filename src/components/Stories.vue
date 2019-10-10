<template>
  <div class="stories">
    <div v-for="storie in stories" :key="storie.name">
      <img :src="storie.avatar" :alt="storie.name" />
      <small>{{storie.name}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "stories",
  data: () => ({
    stories: [
      {
        avatar: "https://randomuser.me/api/portraits/men/60.jpg",
        name: "guilherme"
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        name: "natasha"
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "juliana"
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
        name: "lucas"
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/70.jpg",
        name: "rafael"
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        name: "eduarda"
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "matheus"
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/61.jpg",
        name: "joao"
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        name: "bruna"
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "luana"
      }
    ]
  })
};
</script>