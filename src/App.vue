<template>
  <v-app light>
    <v-toolbar v-scroll="onScroll" fixed :class="navbar ? 'bar transparent elevation-0': 'bar white elevation-1'">
      <v-toolbar-title><img src="./assets/log.png" alt="" width="60px"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="#about" v-smooth-scroll="{ duration: 2000, offset: 0 }" flat>Sobre mi</v-btn>
        <v-btn href="#portfolio" v-smooth-scroll="{ duration: 2000, offset: 0 }" flat>portafolio</v-btn>
        <v-btn href="#contact" v-smooth-scroll="{ duration: 2000, offset: 0 }" flat>contacto</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <section>
        <v-jumbotron
          style="height: 40vh;"
          :gradient="gradient"
          :src="bg"
          dark
        >
          <v-container fill-height>
            <v-layout align-center>
              <v-flex text-xs-center>
                <h3 class="display-3 black--text">
                  Hola! Soy Jesús García
                </h3>
                <h4 class="black--text">Soy un desarrollador front end</h4>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3" id="about">
            <div class="text-xs-center">
              <h2 class="headline">«Cualquiera puede hablar. Enséñame el código»</h2>
              <span class="subheading">
                -Linus Torvalds
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md8>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout ml-1">
                      <div class="headline">Sobre mi</div>
                    </v-card-title>
                    <v-card-text>
                      Hey! buscabas un desarrollador frontend? antes que nada Hola gracias por estar aquí,
                      desde niño me gustaron las computadoras jugar y todo eso, era muy bueno en esto y decidi tomarlo como 
                      una forma vida trabajandolo. a finales del 2016 comenzo este sueño "SER UN PROGRAMADOR" ya van dos años
                      y dejame decirte que cada dia estoy mas enamorado de lo que hago.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0" style="background: transparent;">
                    <img :src="me" width="90%" height="400px">
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <!-- tabs-container-->
      <section id="portfolio">
        <v-flex xs12>
          <v-container>
              <v-flex  class="my-4" xs12 md8>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout">
                    <div class="headline">Portafolio</div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-tabs
                flat
                color="white"
                light
                slider-color="black"
              >
                <v-tab
                  ripple
                  data-filter="all"
                >
                  Todos
                </v-tab>
                <v-tab
                  ripple
                  data-filter="trabajos"
                >
                  trabajos
                </v-tab>
                <v-tab
                  ripple
                  data-filter="certificados"
                >
                  Certificados
                </v-tab>
                <v-tab-item
                >
                  <section>
                    <v-container grid-list-lg>
                      <v-layout row wrap>
                        <v-flex
                          v-for="item in todos"
                          :key="item.id"
                          xs12 sm6 md4
                        >
                          <v-card target="_blanck" :href="item.link" flat tile hover :data-filter="item.data">
                            <v-card-media
                              :src="item.image"
                              height="250"
                            >
                            </v-card-media>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </section>
                </v-tab-item>
                <v-tab-item
                >
                  <section>
                    <v-container grid-list-lg>
                      <v-layout row wrap>
                        <v-flex
                          v-for="item in trabajos"
                          :key="item.id"
                          xs12 sm6 md4
                        >
                          <v-card :href="item.link" flat tile hover :data-filter="item.data">
                            <v-card-media
                              :src="item.image"
                              height="250"
                            >
                            </v-card-media>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </section>
                </v-tab-item>
                <v-tab-item
                >
                  <section>
                    <v-container grid-list-lg>
                      <v-layout row wrap>
                        <v-flex
                          v-for="item in grid"
                          :key="item.id"
                          xs12 sm6 md4
                        >
                          <v-card flat tile hover>
                            <v-card-media
                              :src="item.image"
                              height="250"
                            >
                            </v-card-media>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </section>
                </v-tab-item>
              </v-tabs>
          </v-container>
        </v-flex>
      </section>
      <!-- end tabs -->
      <!-- progress bar -->
      <section id="skill">
        <v-container grid-list-xl>
          <v-flex  class="my-2" xs12 md8>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout">
                  <div class="headline">Skills</div><v-icon medium color="orange">start</v-icon>
                </v-card-title>
              </v-card>
            </v-flex>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12>
              <div>
                <h3>Node</h3>
                <v-progress-linear value="20" height="20" color="teal darken-4"></v-progress-linear>
                <h3>Angular</h3>
                <v-progress-linear value="30" height="20" color="error"></v-progress-linear>
                <h3>Vue Js</h3> 
                <v-progress-linear value="60" height="20" color="success"></v-progress-linear>
                <h3>React Js</h3>
                <v-progress-linear value="60" height="20" color="info"></v-progress-linear>
                <h3>Material desing(vuetify, material angular etc.)</h3>
                <v-progress-linear value="60" height="20" color="deep-purple darken-1"></v-progress-linear>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <!-- more skill -->
      <v-card flat>
    <v-card-text>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-flex  class="my-2" xs12 md8>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout">
                  <div class="headline">Mas habilidades...</div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="webpack"
              color="blue lighten-1"
              value="webpack"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="npm"
              color="red darken-3"
              value="npm"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="linux"
              color="indigo"
              value="linux"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="html"
              color="indigo darken-3"
              value="html"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="css"
              color="orange"
              value="css"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="bootstrap"
              color="orange darken-3"
              value="bootstrap"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="css-grid"
              color="primary"
              value="css-grid"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="foundation"
              color="secondary"
              value="foundation"
              hide-details
            ></v-checkbox>
          </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-5">
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="git"
              color="primary"
              value="git"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="mysql"
              color="secondary"
              value="mysql"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="mongo"
              color="primary"
              value="mongo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="ingles-basico"
              color="secondary"
              value="ingles-basico"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="php"
              color="success"
              value="php"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="javascript"
              color="info"
              value="javascript"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-checkbox
              v-model="ex4"
              label="poo"
              color="warning"
              value="poo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="express"
              color="error"
              value="express"
              hide-details
            ></v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
      <!-- contact -->
      <section id="contact">
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contacto</div>
                </v-card-title>
                <v-card-text class="layout justify-center">
                  <v-btn fab flat><img src="./assets/call.png" width="60px" alt=""></v-btn>
                  <v-btn arget="_blanck" href="https://www.linkedin.com/in/fairplaay/" fab flat><img src="./assets/in.png" width="65px" alt=""></v-btn>
                  <v-btn arget="_blanck" href="mailto:fairplaay16@gmail.com" fab flat><img src="./assets/mail.png" width="60px" alt=""></v-btn>
                  </v-btn>
                  <v-btn target="_blanck" href="https://github.com/Fairplaay" fab flat><img :src="git" width="60px" alt=""></v-btn>
                </v-card-text>
                <v-list class="transparent layout justify-center">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+58 4245792214</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Barquisimeto, VE</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>fairplaay16@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue accent-4 elevation-1">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="black--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by Jesús García
            </div>
          </v-flex>
        </v-layout>
        <v-snackbar
          v-model="snackbar"
          :bottom="y === 'bottom'"
          :left="x === 'left'"
          :multi-line="mode === 'multi-line'"
          :right="x === 'right'"
          :timeout="timeout"
          :top="y === 'top'"
          :vertical="mode === 'vertical'"
        >
          {{ text }}
          <v-btn
            color="pink"
            flat
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </v-snackbar>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import bg from './assets/bg_2.jpg'
import me from './assets/me.jpg'
import img_1 from './assets/1.jpg'
import img_2 from './assets/2.jpg'
import img_3 from './assets/3.jpg'
import img_4 from './assets/4.jpg'
import img_5 from './assets/5.jpg'
import img_6 from './assets/6.jpg'
import img_7 from './assets/7.jpg'
import img_8 from './assets/8.jpg'
import img_9 from './assets/9.jpg'
import img_10 from './assets/10.jpg'
import cap1 from './assets/cap.png'
import cap2 from './assets/cap2.png'
import cap3 from './assets/trade.png'
import cap5 from './assets/cap5.png'
import cap6 from './assets/cap6.png'
import cap7 from './assets/go.png'
import git from './assets/git.png'

export default {
  name: 'app',
  data () {
    return {
      gradient: 'to top, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.45)',
      title: 'Portfolio',
      offsetTop: null,
      navbar: true,
      bg: bg,
      me: me,
      git: git,
      grid: [
        {id: 10, image: img_10},
        {id: 9, image: img_9},
        {id: 1, image: img_1},
        {id: 2, image: img_2},
        {id: 3, image: img_3},
        {id: 4, image: img_4},
        {id: 5, image: img_5},
        {id: 6, image: img_6},
        {id: 7, image: img_7},
        {id: 8, image: img_8},
      ],
      todos: [
        {id: 5, image: cap7, link: 'https://goatlas-fairplaay.firebaseapp.com/'},
        {id: 10, image: cap1, link: 'https://crud-node19233.firebaseapp.com/'},
        {id: 11, image: cap2, link: 'https://fairplaay.herokuapp.com/'},
        {id: 12, image: cap3, link: 'https://github.com/Fairplaay/Trade'},
        {id: 13, image: cap5, link: 'https://github.com/Fairplaay/platzi-video'},
        {id: 14, image: cap6, link: 'https://github.com/Fairplaay/votaOnline'},
        {id: 9, image: img_9},
        {id: 15, image: img_10},
        {id: 1, image: img_1},
        {id: 2, image: img_2},
        {id: 3, image: img_3},
        {id: 4, image: img_4},
        {id: 5, image: img_5},
        {id: 6, image: img_6},
        {id: 7, image: img_7},
        {id: 8, image: img_8},
      ],
      trabajos: [
        {id: 6, image: cap7, link: 'https://goatlas-fairplaay.firebaseapp.com/'},
        {id: 1, image: cap1, link: 'https://crud-node19233.firebaseapp.com/'},
        {id: 2, image: cap2, link: 'https://fairplaay.herokuapp.com/'},
        {id: 3, image: cap3, link: 'https://github.com/Fairplaay/Trade'},
        {id: 4, image: cap5, link: 'https://github.com/Fairplaay/platzi-video'},
        {id: 5, image: cap6, link: 'https://github.com/Fairplaay/votaOnline'},
      ],
      snackbar: true,
      y: 'bottom',
      x: null,
      mode: '',
      timeout: 6000,
      text: 'Bienvenido.!',
      ex4: ['webpack', 'npm', 'linux', 'html', 'css', 'bootstrap', 'css-grid', 'foundation', 'git', 'mysql', 'mongo', 'ingles-basico', 'php', 'javascript', 'poo', 'express']
    }
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      if(this.offsetTop < 200) {
        this.navbar = true
      }else{
        this.navbar = false
      }
    }
  }
}
</script>

<style scoped>
.jumbotrom_image{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-width: 100%;
  transition: inherit;
}
.bar{
  height:64px;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  transform: translateY(0px);
}
</style>
