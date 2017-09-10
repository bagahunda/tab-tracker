<template>
  <div class="wrapper wrapper--song">
    <app-header />
    <div class="song">
      <div class="song__header">
        <div class="song__artist">
          <img src="https://www.meloman.tv/wp-content/themes/videozoom/scripts/timthumb.php?src=http://www.meloman.tv/wp-content/uploads/2014/10/Depeche-Black1_smtv.jpg&h=160&w=228&zc=1" alt="">
        </div>
        <h2>{{song.artist}}</h2>
        <div class="song__info">
          <h1>{{ song.title }}</h1>
          <span>{{ song.album }}</span>
        </div>
        <a href="#" class="btn btn--primary" @click.prevent="navigateTo({name: 'song-edit', params: {songId: song.id}})">Edit Song</a>
      </div>
      <div class="video">
        <youtube
        :video-id="song.youtubeId">
        </youtube>
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
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>

  .song {
    width: 100%;
    max-width: 1000px;
    padding: 1em;
  }

  .song__header {
    text-align: center;
  }

  .song__header h2 {
    margin: 1em 0;
  }

  .song__artist {
    position: relative;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }

  .song__artist img {
    min-height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .song__info h1 {
    margin: 0;
  }

  .video {
    margin-top: 2em;
  }

  .video div {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
  }

  .video embed,
  .video object,
  .video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
