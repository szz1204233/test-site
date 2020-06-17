<!--
 * @FilePath     : \test-site\src\pages\Index.vue
 * @Date         : 2020-05-31 14:22:32
 * @LastEditTime : 2020-06-17 17:17:22
 * @Description  : 首页第三版，加入流展示与跳转项
-->

<template>
  <Layout>
    <div class="columns">
      <div class="column is-9">
        <div class="tile is-vertical is-parent">
          <div
            class="tile is-child"
            v-for="(post, index) in $page.posts.edges"
            :key="index"
            :id="index"
          >
            <section>
              <b-collapse
                class="card"
                aria-id="contentIdForA11y3"
                :open="isOpen == index"
                @open="isOpen = index"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                >
                  <p class="card-header-title">
                    {{post.node.title}}&#12288;
                    <a>@{{post.node.creator}}</a>
                  </p>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content">
                    <span v-html="post.node.content"></span>
                  </div>
                </div>
                <footer class="card-footer">
                  <!-- <a class="card-footer-item" :href="/per-page/">详情</a> -->
                  <a class="card-footer-item">
                    <b-tooltip
                      :label="post.node.pubDate"
                      type="is-light"
                      position="is-bottom"
                      animated
                      square
                    >发布日期</b-tooltip>
                  </a>
                  <a class="card-footer-item">评论</a>
                  <a class="card-footer-item" :href="post.node.link" target="_blank">原文链接</a>
                </footer>
              </b-collapse>
            </section>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <article class="panel is-warning">
          <p class="panel-heading"><a :href="/project-info/">项目列表</a></p>
          <a class="panel-block is-active">星星优品</a>
          <a class="panel-block">微信小程序</a>
          <a class="panel-block">创新实践门户网站</a>
          <a class="panel-block">区块链</a>
        </article>
        <article class="panel is-success">
          <p class="panel-heading" href="#">最新讨论</p>
          <a class="panel-block is-active">问题1</a>
          <a class="panel-block">问题2</a>
          <a class="panel-block">问题3</a>
          <a class="panel-block">问题4</a>
        </article>
        <article class="panel is-info">
          <p class="panel-heading">
            <a :href="/member/">成员列表</a>
          </p>
          <div class="panel-block" v-for="(member, index) in $page.members.edges" :key="index">
            <span>{{member.node.name}}</span>
          </div>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allFreshRss(sortBy: "date", order: ASC) {
    edges {
      node {
          id
          title
          pubDate
          content
          creator
          link
      }
      previous {
          id
      }
    }
  }
  members: allMembersInfo {
    edges {
      node {
        studentID
        name
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      isOpen: 0
    };
  }
};
</script>

<style>
/* .tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-bottom: 0.5rem !important;
}
.title {
  color: #363636;
  font-size: 1.75rem;
  line-height: 0.875;
}
#banner {
  margin: 0.25em;
}
.banner-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 100;
  line-height: 0.875;
} */
</style>



