<!--
 * @FilePath     : \test-site\src\pages\ProjectInfo.vue
 * @Date         : 2020-05-31 19:30:34
 * @LastEditTime : 2020-06-17 17:17:51
 * @Description  : 小组详情界面
--> 
<template>
  <Layout>
    <nav class="breadcrumb is-medium" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="/">首页</a>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">项目列表</a>
        </li>
      </ul>
    </nav>
    <div class>
      <section>
        <div class="block">
          <b-checkbox v-model="checkboxGroup" native-value="class I" disabled>创新实践一</b-checkbox>
          <b-checkbox v-model="checkboxGroup" native-value="class II">创新实践二</b-checkbox>
          <b-checkbox v-model="checkboxGroup" native-value="class III">创新实践三</b-checkbox>
          <b-checkbox v-model="checkboxGroup" native-value="class IV">创新实践四</b-checkbox>
        </div>
        <p class="content">
          <b>已选择：</b>
          {{ checkboxGroup }}
        </p>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      checkboxGroup:[]
    };
  }
};
</script>

<style>
</style>