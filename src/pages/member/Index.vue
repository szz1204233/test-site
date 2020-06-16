<!--
 * @FilePath     : \test-site\src\pages\member\Index.vue
 * @Date         : 2020-05-31 20:43:03
 * @LastEditTime : 2020-06-16 20:51:12
 * @Description  : 成员详情页面，包括所有成员的信息、简介及任务分工等
-->
<template>
  <Layout>
    <nav class="breadcrumb is-medium" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="/" aria-current="page">首页</a>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">成员信息</a>
        </li>
      </ul>
    </nav>
    <b-table :data="data" :columns="columns"></b-table>
    <!-- <div v-for="(post, index) in $page.members.edges" :key="index">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <g-link :to="'/member/' + post.node.studentID">
                <strong>{{ post.node.name }}</strong>
              </g-link>

              <br />
              <br />
            </p>
          </div>

          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>学习经历</strong>
                  <br />Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> ·
                    <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>

              <article class="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.
              </article>

              <article class="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.
              </article>
            </div>
          </article>

          <article class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Kayli Eunice</strong>
                  <br />Sed convallis scelerisque mauris, non pulvinar nunc
                  mattis vel. Maecenas varius felis sit amet magna vestibulum
                  euismod malesuada cursus libero. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> ·
                    <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
    </div>-->
  </Layout>
</template>

<page-query>
query {
    members: allMembersInfo(sortBy:"studentID", order:ASC) {
        edges {
            node {
                studentID
                name
                gender
                grade
                project
            }
        }
    }
}
</page-query>

<script>
export default {
  //created钩子用来在一个实例被创建之后执行代码
  created() {
    var queryData = [];
    var edges = this.$page.members.edges;
    for (var index in edges) {
      queryData[index] = {
        studentID: edges[index].node.studentID,
        name: edges[index].node.name,
        gender: edges[index].node.gender,
        grade: edges[index].node.grade,
        project: edges[index].node.project
      };
    }
    //在创建data后更改data内容
    this.data = queryData;
    console.log(this.$page.members.edges);
  },
  data() {
    return {
      data: [
        {
          studentID: 17051024,
          name: "testName",
          gender: "null",
          grade: "创五",
          project: "创新实践网站项目"
        }
      ],
      columns: [
        {
          field: "studentID",
          label: "学号"
          // numeric: true
        },
        {
          field: "name",
          label: "姓名"
        },
        {
          field: "gender",
          label: "性别"
        },
        {
          field: "grade",
          label: "年级"
        },
        {
          field: "project",
          label: "项目"
        }
      ]
    };
  }
};
</script>

<style></style>
