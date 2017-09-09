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

  [type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
  }

  button, select {
    text-transform: none;
  }

  button, input {
    overflow: visible;
  }

  button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  [role=button], a, area, button, input, label, select, summary, textarea {
    touch-action: manipulation;

  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: .25rem;
    transition: all .15s ease-in-out;
    cursor: pointer;
  }

  .btn--primary {
    color: #fff;
    background-color: #ff54a6;
  }

  .btn--primary.active,
  .btn--primary:active,
  .btn-primary:hover {
    background-color: #DD0E71;
    border-color: #DD0E71;
  }

  .btn.focus, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(0,123,255,.25);
  }

  h1 {
    width: 100%;
    max-width: 1000px;
    position: relative;
    margin: 0 0 0.5em;
    font-size: 30px;
    text-align: center;
  }

  h1 .btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .wrapper {
    min-height: 100vh;
    padding-top: 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .register {
    width: 100%;
    padding: 30px 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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
    align-items: center;
  }

  .register__form--wide {
    max-width: 1000px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .register__form--wide h1 {
    width: 100%;
  }

  .register__form--wide .error {
    width: 100%;
  }

  .register__left {
    width: 40%;
  }

  .register__right {
    width: calc(60% - 20px);
  }

  .register__form input {
    height: 40px;
    width: 100%;
    margin-bottom: 1em;
    padding: 0 0.5em;
    outline: none;
    font-size: 14px;
    border: 1px solid #2c3e50;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease-in-out;
  }

  .register__form input:focus {
    border: 1px solid #ff54a6;
  }

  .register__form textarea {
    height: calc(50% - 1.25em);
    width: 100%;
    margin-bottom: 1em;
    padding: 0.5em;
    outline: none;
    font-size: 14px;
    border: 1px solid #2c3e50;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease-in-out;
    resize: none;
  }

  .register__form button {
    height: 40px;
    width: 100%;
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
