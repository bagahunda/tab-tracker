<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  h1 {
    margin: 0 0 0.5em;
    font-size: 30px;
    text-align: center;
  }

  .register {
    padding: 30px 0;
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo svg {
    width: 80px;
    fill: #ff54a6;
  }

  .logo span {
    position: relative;
    margin-top: -0.5em;
    font-size: 35px;
    line-height: 1;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #fff;
    z-index: 2;
    transform: rotate(-10deg);
  }

  .register__form {
    display: flex;
    width: 100%;
    max-width: 400px;
    flex-direction: column;
  }

  .register__form input {
    height: 40px;
    margin-bottom: 1em;
    padding: 0 0.5em;
    outline: none;
    font-size: 14px;
    border: 1px solid #2c3e50;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  .register__form input:focus {
    border: 1px solid #ff54a6;
  }

  .register__form button {
    height: 40px;
    appearance: none;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    outline: none;
    background-color: #ff54a6;
    border-radius: 3px;
    font-weight: bold;
  }

  .error {
    color: red;
  }

</style>
