<template>
  <div class="form-wrapper">
    <h1>Fale Comigo</h1>
  <div class="spacer"></div>

  <form>
    <label for="name">Nome</label>
    <input type="text" name="name" v-model="name">

    <label for="email">Email</label>
    <input type="email" name="email" v-model="email">

    <label for="message">Menssagem/Assunto</label>
    <textarea class="textarea" name="message" v-model="message"></textarea>

    <div class="box">
      <div class="bar"></div>
      <div class="button">enviar</div>
    </div>
  </form>

  </div>

</template>

<script>


export default {
name: "Form",

computed: {
  name: {
    get() {
      return this.$store.state.form.name
    },
    set(value) {
      this.$store.commit("UPDATE_FORM", {name: value})
    }
  },
    email: {
    get() {
      return this.$store.state.form.email
    },
    set(value) {
      this.$store.commit("UPDATE_FORM", {email: value})
    }
  },
    message: {
    get() {
      return this.$store.state.form.message
    },
    set(value) {
      this.$store.commit("UPDATE_FORM", {message: value})
    }
  }
}
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding-top: 110px;
}

.form-wrapper h1 {
  color: white;
  padding-bottom: 5px;
  font-size: 2.5rem;
}
.form-wrapper .spacer {
  width: 310px;
  height: 5px;
  background-color:white;
  margin-bottom: 50px;
}

.form-wrapper form {
  width: 60%;
  display:flex;
  flex-direction: column;
}


label {
  color:white;
  font-size:1.5rem;
}

input {
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
  outline: none;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}

.textarea {
  margin-bottom: 5px;
  width: 100%;
  height: 100px;
  outline: none;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}

.box {
  width: 60%;
  height:50px;
  position: relative;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}

.bar {
  position: absolute;
  width: 0%;
  height: 100%;
  background: #ec5b53;
  transition: 0.3s;
  border-radius: 8px;
}

.button {
  position: absolute;
  z-index: 1;
  color: #ec5b53;
  font-size: 1.7rem;
  top: 5%;
  left: 35%;
  text-decoration: none;
}

.box:hover .bar {
  width: 100%;
}

.box:hover .button {
  color: white;
}

@media screen and (max-width:1100px) {
  .form-wrapper {
    width: 90%;
  }
}

@media screen and (max-width:485px) {
  .wrapper .form-wrapper {
    width: 100%;
    padding-top: 110px;
  }

  .wrapper .form-wrapper form {
    width: 80%;
  }

  .box .button {
    left: 28%;
  }
}

</style>