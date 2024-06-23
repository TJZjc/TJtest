
<template>
  <div class="common-layout" style="display: flex;height: 98vh;">
    <el-container>
      <!--        头部-->
      <el-header style="display: flex;align-items: center;height: 40px;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!--        底部-->
      <el-container style="margin: 10px;height: 97vh;background-color: white;border-radius:10px;">
        <!--          侧边栏-->
        <el-aside width="300px" style="border-radius:inherit;border-right: 1px solid var(--el-menu-border-color)">
          <el-container>
            <el-header style="height: 102px;display: flex;align-items: center;justify-content: center">
              <img style="width: 38px; height: 38px" src="@/assets/mylogo.png">
              <el-text style="padding-left: 10px;font-family: math;font-size: larger">TJTest</el-text>
            </el-header>
            <el-main>
              <el-menu
                  default-active="1-2"
                  class="el-menu-vertical-demo"
                  style="display: flex;flex-wrap: wrap;border-right: 0"
                  @select="handleSelect"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <span style="font-size: large">作业测试</span>
                  </template>
                  <el-menu-item-group>
                     <el-menu-item index="1-1">判断三角形类型</el-menu-item>
                    <el-menu-item index="1-2">万年历问题</el-menu-item>
                    <el-menu-item index="1-3">电脑销售问题</el-menu-item>
                    <el-menu-item index="1-4">电信收费问题</el-menu-item>
                    <el-menu-item index="1-5">程序图构建</el-menu-item>
                    <el-menu-item index="1-6">佣金值计算</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="2">
                  <template #title>
                    <span style="font-size: large">Navigator One</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </el-main>
          </el-container>
        </el-aside>
        <!--          主体-->
        <el-main>
          <el-container>
            <!--              主体头部-->
            <el-header class="my-el-header">
              <el-text style="font-size: 37px;margin-left: 10px">TJTest</el-text>
            </el-header>
            <!--              主体内容-->
            <el-main>
              <el-row>
                <!--                  左侧-->
                <el-col :span="10">
                  <el-space direction="vertical" size="large">
                    <el-card>
                      <template #header>
                        <span style="font-size: larger;">
                          万年历问题
                        </span>
                      </template>
                      输入年月日，通过年月日判断当天是星期几。通过边界值分析法来设计测试用例进行测试。
                    </el-card>
                    <el-card class="card-width">
                      <template #header>
                        <span style="font-size: larger;">
                          测试用例
                        </span>
                      </template>
                      介绍内容
                    </el-card>
                  </el-space>
                </el-col>
                <!--                  右侧-->
                <el-col :span="14" style="display: flex;justify-content: center">
                  <el-card style="width: 50vh;margin: 1vh">
                    <template #header>
                      <div class="card-header" style="font-size: larger;">
                        <span>练习内容</span>
                      </div>
                    </template>
                    <el-form
                        label-width="auto"
                        style="max-width: 600px"
                        label-position="top"
                    >
                      <el-form-item label="年份">
                        <el-input v-model.number="form.side1"/>
                      </el-form-item>
                      <el-form-item label="月份">
                        <el-input v-model.number="form.side2"/>
                      </el-form-item>
                      <el-form-item label="日期">
                        <el-input v-model.number="form.side3"/>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <el-form
                          label-width="auto"
                          style="max-width: 600px"
                          label-position="top"
                      >
                        <el-form-item label="这天是周几">
                          <el-input v-model="WeekofDay" readonly/>
                        </el-form-item>
                         <el-button type="primary"  @click="submitForm">Submit</el-button>
                      </el-form>
                    </template>
                  </el-card>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'ExTwo',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        side1: '',
        side2: '',
        side3: ''
      },
      WeekofDay: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('year', this.form.side1);
        formData.append('month', this.form.side2);
        formData.append('day', this.form.side3);
        const response = await axios.post('http://8.130.47.29:8000/Calendar/', formData,{
           headers: {
          'Content-Type': 'multipart/form-data'
        }
        });
        console.log('Response data:', response.data);
        this.WeekofDay = response.data.result; // 假设API返回的三角形类型字段是type
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-sub-menu {
  width: -webkit-fill-available;
}
.el-menu-item{
  width: -webkit-fill-available;
  display: flex;
}
.el-aside .el-main{
  padding: 0;
}
.el-menu-item-group {
  width: -webkit-fill-available;
}
.el-menu-item-group .el-menu-item{
  font-size:larger;
}
.my-el-header {
  box-shadow: 4px 1px 6px rgba(0,21,41,.35);
  display: flex;
  height: 100px !important;
  align-items: center;
}
.el-space{
  width: -webkit-fill-available ;
}

/deep/ .el-space__item{
  width: -webkit-fill-available;
  margin: 1vh;
}



</style>
