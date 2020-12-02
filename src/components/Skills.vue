<template>
  <section class="wrapper">
    <h1 class="title">Skills</h1>
    <div class="spacer"></div>
    <div>
  <div class="container">
    <div class="card">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="content">
        <h2>FrontEnd</h2>
        <ul>
          <li>HTML5/CSS3</li>
          <br>
          <li>JavaScript/ES6</li>
        </ul>
        <a href="http://www.viniciusmuller.com.br/curriculo/viniciusMullerResume.pdf" target="_blank">Courses</a>
      </div>
    </div>
    <div class="card">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="content">
        <h2>BackEnd</h2>
        <ul>
          <li>Node</li>
          <br>
          <li>PHP</li>
        </ul>
        <a href="http://www.viniciusmuller.com.br/curriculo/viniciusMullerResume.pdf" target="_blank">Experience</a>
      </div>
    </div>
    <div class="card">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="content">
        <h2 style="right:35px">FrameWorks</h2>
        <ul>
          <li>Vue</li>
          <br>
          <li>React</li>
        </ul>
        <a href="http://www.viniciusmuller.com.br/curriculo/viniciusMullerResume.pdf" target="_blank">Knowledge</a>
      </div>
    </div>
  </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 60px;

}

.title {
  color:white;
  font-size: 2.5rem;
  padding-bottom: 5px;
}

.spacer {
  width:150px;
  height: 5px;
  background: white;
  margin-bottom: 20px;
}

.container {
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container .card  {
  position: relative;
  width: 300px;
  height: 400px;
  background: #1b0006;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.container:hover .card {
  opacity: 0.5;
  transition: 0.2s all;
} 

.container .card:hover {
  opacity: 1;
} 

.container .card:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: 50%;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.container .card .content {
  padding: 30px;
  text-align: center;
}

.container .card .content h2 {
  position: absolute;
  right: 70px;
  font-size: 2rem;
  font-weight: 800;
  color: #ec5b53;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
}

.container .card:hover .content h2 {
  opacity: 1;
  transform: translateY(-70px);
}

.container .card .content ul li {
  position: relative;
  font-size: 1.5rem;
  color: #fff;
  z-index: 2;
  opacity: 0;
  letter-spacing: 1px;
  transition: 0.5s;
} 

.container .card .content ul li {
  position: relative;
  font-size: 2rem;
  color: #fff;
  z-index: 2;
  opacity: 0;
  font-weight: 300;
  letter-spacing: 1px;
  transition: 0.5s;
  list-style: none;
} 

.container .card:hover .content ul li,
.container .card:hover .content ul li {
  opacity: 1;
}

.container .card .content a {
  display: inline-block;
  margin-top: 25px;
  padding: 8px 15px;
  background: #fff;
  color: #0c002b;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
}

.container .card span {
  transition: 0.5;
  opacity: 0;
}

.container .card:hover span {
  opacity: 1;
}

.container .card span:nth-child(1) {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, transparent, #ec5b53);
  animation: animate1 2s linear infinite;
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.container .card span:nth-child(2) {
  position: absolute;
  top:0;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #ec5b53);
  animation: animate2 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.container .card span:nth-child(3) {
  position: absolute;
  bottom:0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to left, transparent, #ec5b53);
  animation: animate3 2s linear infinite;
}

@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}


.container .card span:nth-child(4) {
  position: absolute;
  top:0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to top, transparent, #ec5b53);
  animation: animate4 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@media screen and (max-width:1100px) {
  .container {
    display:flex;
    flex-direction: column;
  }
}
</style>