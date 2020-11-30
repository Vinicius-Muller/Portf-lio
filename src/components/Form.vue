<template>
  <div class="form-wrapper">
    <h1>Fale Comigo</h1>
  <div class="spacer"></div>

  <form  @submit.prevent="sendEmail" method="POST">
    <label for="name">Nome</label>
    <input type="text" name="name" v-model="name">

    <label for="email">Email</label>
    <input type="email" name="email" v-model="email">

    <label for="message">Menssagem/Assunto</label>
    <textarea class="textarea" name="message" v-model="message"></textarea>

    <div class="box" v-if="opacity">
      <div class="bar"></div>
      <input  type="submit" value="Enviar" class="button"/>
    </div>

    <p v-else>Obrigado pelo contato</p>
  </form>

  </div>

</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_A5kmGKpDuk0hKaJmI3iZ7");

export default {
name: "Form",
data() {
    return {
      name: '',
      email: '',
      message: '',
      opacity: true,
      thanks: false
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_g0p8r7n', 'template_okq16u8', e.target,
        'user_A5kmGKpDuk0hKaJmI3iZ7', {
          name: this.name,
          email: this.email,
          message: this.message
        })

        this.opacity = false

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
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

.form-wrapper form p {
  color: white;
  font-size: 1.3rem;
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
  transition: 0.3s all;
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
  text-decoration: none;
  cursor: pointer;
}

.box:hover .bar {
  width: 100%;
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
}

</style>