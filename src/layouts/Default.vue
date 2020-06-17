<template>
  <div class="layout">
    <header class="header" id="hea">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">

    <!--
      <section>
      <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
    >
      <div class="p-1">
        <b-menu>
          <b-menu-list  label="班级信息展示">
            <b-menu-item  label="关于班级网站"  href="/class-info/"></b-menu-item>
             <b-menu-item  label="班级语雀文档" href="https://www.yuque.com/groups/openxy/join?token=cfV5vv0O6pKOR0fE"></b-menu-item >
            <b-menu-item label="班级团队信息" href="/group-info">
              <b-menu-item label="创新实践1"></b-menu-item>
              <b-menu-item label="创新实践2"></b-menu-item>
              <b-menu-item label="创新实践3"></b-menu-item>
              <b-menu-item label="创新实践4"></b-menu-item>
            </b-menu-item>

            <b-menu-item label="班级成员信息" href="/member/">
              <b-menu-item label="创新实践1"></b-menu-item>
              <b-menu-item label="创新实践2"></b-menu-item>
              <b-menu-item label="创新实践3"></b-menu-item>
              <b-menu-item label="创新实践4"></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list label="班级头脑风暴">
            <b-menu-item label="讨论区"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <img  @click="open = true" src="https://iknow-pic.cdn.bcebos.com/c2fdfc039245d6884d7ca2d9b4c27d1ed21b2454">
  </section>
        -->
        </div>

        <!-- Right side -->
        <div class="level-right">
          <img src="https://iknow-pic.cdn.bcebos.com/eaf81a4c510fd9f9ce4c4514352dd42a2834a477">
        <b-navbar>

        <template slot="start">
           <section class="rightSerach">
        <b-field  >
            <b-autocomplete
                :data="data"
                placeholder="搜索你感兴趣的"
                field="title"
                :loading="isFetching"
                @typing="getAsyncData"
                @select="option => selected = option">

                <template slot-scope="props">
                    <div class="media">
                        <div class="media-content">
                            {{ props.option.title }}
                            <br>
                            <small>
                                Released at {{ props.option.release_date }},
                                rated <b>{{ props.option.vote_average }}</b>
                            </small>
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>
    </section>
              <b-navbar-item href="/">
                首页
            </b-navbar-item>
              <b-navbar-item href="#">
                头脑风暴
            </b-navbar-item>
            <b-navbar-dropdown label="项目详情">
                <b-navbar-item href="/group-info/">
                    项目简介
                </b-navbar-item>
                <b-navbar-item href="#">
                    项目进度管理
                </b-navbar-item>
            </b-navbar-dropdown>
             <b-navbar-dropdown label="关于">
            <b-navbar-item href="/class-info/">
                班级详情
            </b-navbar-item>
             <b-navbar-item target="_blank" href="https://www.yuque.com/groups/openxy/join?token=cfV5vv0O6pKOR0fE">
                班级语雀文档
            </b-navbar-item>
            </b-navbar-dropdown>


        </template>



    </b-navbar>
  </div>
  </nav>
</header>

    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>

    <footer class="footer" id="foo">
      <div class="content has-text-centered">
        <p>
          使用<a href="https://gridsome.org">gridsome</a>框架，样式为<a href="https://buefy.org">buefy</a>
          <br />
          源码遵循<a href="http://opensource.org/licenses/mit-license.php">MIT协议</a>
          <br />
          <br />
          <strong>创新实践网站小组</strong>
          <a>用❤创造</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
    import debounce from 'lodash/debounce'

    export default {
        data() {
            return {
                data: [],
                selected: null,
                isFetching: false,
                open: false,
                overlay: true,
                fullheight: true,
                fullwidth: false,
                right: false
            }
        },
        methods: {
            // You have to install and import debounce to use it,
            // it's not mandatory though.
            getAsyncData: debounce(function (name) {
                if (!name.length) {
                    this.data = []
                    return
                }
                this.isFetching = true
                this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}`)
                    .then(({ data }) => {
                        this.data = []
                        data.results.forEach((item) => this.data.push(item))
                    })
                    .catch((error) => {
                        this.data = []
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
            }, 500)
        }
    }
</script>
<style>
.p-1{
  padding :1em;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}


.header#hea {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 80px;
}

.footer#foo {
    background-color: #fafafa;
    padding: 1.5rem 1.5rem 1.5rem;
}

.nav__link {
  margin-left: 20px;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}
.levelright{
  float :right;
}
.rightSerach{
  padding :1em;
}

</style>
