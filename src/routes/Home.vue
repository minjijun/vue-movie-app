<template>
  <Headline />
  <Search />
  <MovieList></MovieList>
</template>

<script>
import Headline from "~/components/Headline";
import Search from "~/components/Search";
import MovieList from "~/components/MovieList.vue";

export default {
  components: {
    Headline,
    Search,
    MovieList,
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
};
</script>
