<!--
 * @FilePath     : \test-site\src\pages\member\17052023.vue
 * @Date         : 2020-05-31 20:46:13
 * @LastEditTime : 2020-06-17 17:11:18
 * @Description  : 示例成员页面
-->
<template>
  <Layout>
    <nav class="breadcrumb is-medium" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="/">首页</a>
        </li>
        <li>
          <a href="/member/">成员信息</a>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">{{$page.members.edges[0].node.name}}</a>
        </li>
      </ul>
    </nav>
  </Layout>
</template>

<page-query>
query {
  members: allMembersInfo(filter:{studentID:{eq:"17052023"}}) {
      edges {
          node {
              id
              studentID
              name
              gender
          }
      }
  }
}
</page-query>

<script>
export default {};
</script>

<style></style>
