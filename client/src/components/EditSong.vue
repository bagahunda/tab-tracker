<template>
  <div class="wrapper">
    <app-header />
    <div class="register">
      <div class="register__form register__form--wide">
        <h1>Edit song data</h1>
        <div class="register__left">
          <input type="text" placeholder="Song Title" v-model="song.title">
          <input type="text" placeholder="Artist" v-model="song.artist">
          <input type="text" placeholder="Genre" v-model="song.genre">
          <input type="text" placeholder="Album name" v-model="song.album">
          <input type="text" placeholder="Album Image" v-model="song.albumImage">
          <div v-if="song.albumImage">
            <img :src="song.albumImage" alt="">
          </div>
          <input type="text" placeholder="Youtube ID" v-model="song.youtubeId">
          <div class="video">
            <div class="video__wrapper">
                <!-- <iframe src="https://www.youtube.com/watch?v=" + youtubeId frameborder=0 allowfullscreen></iframe> -->
            </div>
          </div>
        </div>
        <div class="register__right">
          <textarea placeholder="Lyrics" v-model="song.lyrics"></textarea>
          <textarea placeholder="Tabs" v-model="song.tab"></textarea>
        </div>
        <div class="error" v-if="error">
          <p>{{ error }}</p>
        </div>
        <button @click="save">Save Song</button>
      </div>
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
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImage: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      error: null
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>
