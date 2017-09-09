<template>
  <div class="wrapper">
    <app-header />
    <h1>
      List of songs
      <button class="btn btn--primary" @click="navigateTo({name: 'songs-create'})">Add a song</button>
    </h1>
    <div class="songs">
      <table class="song">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in songs" :key="song.title" @click="navigateTo({name: 'song', params: {songId: song.id}})">
            <td>{{song.title}}</td>
            <td>{{song.artist}}</td>
            <td>{{song.album}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import SongService from '@/services/SongService'
export default {
  components: {
    AppHeader
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
  .songs {
    width: 100%;
    max-width: 1000px;
  }

  .song {
    width: 100%;
    border-collapse: collapse;
  }

  .song th {
    padding: 1em;
    border-bottom: 1px solid #e8e8e8;
    text-align: left;
  }

  .song td {
    padding: 1em;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;
  }

</style>
