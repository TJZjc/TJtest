
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
                  default-active="1-6"
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
                          销售系统佣金值计算
                        </span>
                      </template>
                      16.一销售系统，如果销售员的年销售额大于200万RMB且请假天数不超过10天的情况下，现金到帐大于等于60%，则佣金（提成）系数为7，即佣金值为销售额除以佣金系数；现金到帐小于60%，佣金不予计算。所有其他情况且现金到帐小于等于85%，则按佣金系数均为6计算佣金，现金到账大于85%，佣金系数按5处理。
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
                      <el-form-item label="年销售额">
                        <el-input v-model.number="form.side1"/>
                      </el-form-item>
                      <el-form-item label="请假天数">
                        <el-input v-model.number="form.side2"/>
                      </el-form-item>
                      <el-form-item label="现金到账">
                        <el-input v-model.number="form.side3"/>
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <el-form
                          label-width="auto"
                          style="max-width: 600px"
                          label-position="top"
                      >
                        <el-form-item label="佣金系数">
                          <el-input v-model="factor" readonly/>
                        </el-form-item>
                        <el-form-item label="佣金值">
                          <el-input v-model="salary" readonly/>
                        </el-form-item>
                        <el-button type="warning"  @click="submitForm" plain>Submit</el-button>
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
import { ElMessage } from 'element-plus';
export default {
  name: 'ExSix',
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
      factor: '',
      salary:''
    };
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('total', this.form.side1);
        formData.append('day', this.form.side2);
        formData.append('arriveMoney', this.form.side3);
        const response = await axios.post('http://8.130.47.29:8000/Commission/', formData,{
           headers: {
          'Content-Type': 'multipart/form-data'
        }
        });
        console.log('Response data:', response.data);
        this.factor = response.data.factor;
        this.salary = response.data.salary;
        const message = response.data.message;
        const result = parseFloat(response.data.salary)
        if(result<0)
        {
          ElMessage.warning(message)
        }else {
          ElMessage.success(message);
        }
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
