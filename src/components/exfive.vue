
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
                  default-active="2"
                  class="el-menu-vertical-demo"
                  style="display: flex;flex-wrap: wrap;border-right: 0"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <span style="font-size: large">Navigator One</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                    <el-menu-item index="1-3">item two</el-menu-item>
                    <el-menu-item index="1-4">item two</el-menu-item>
                    <el-menu-item index="1-5">item two</el-menu-item>
                    <el-menu-item index="1-6">item two</el-menu-item>
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
                          程序图构建
                        </span>
                      </template>
                        <div class="common-layout">
                          <el-container>
                            <el-main style="padding: 0;">
                              <CodeDisplay :code="code" language="c" />
                            </el-main>
                          </el-container>
                        </div>
                    </el-card>
                  </el-space>
                </el-col>
                <!--                  右侧-->
                <el-col :span="14" style="display: flex;justify-content: center">
                  <el-card style="width: 50vh;margin: 1vh">
                    <template #header>
                      <div class="card-header" style="font-size: larger;">
                        <span>程序图</span>
                      </div>
                    </template>
                    <img style="visibility: ;width: -webkit-fill-available;height: -webkit-fill-available;" src="@/assets/graph.png">
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
import CodeDisplay from "@/components/code.vue";

export default {
  name: 'ExFive',
  components: {CodeDisplay},
  data(){
    return {
      code: `void ModuleX(int x, int y, int Wid, char* Str)
{
\tunsigned  Zcode, Bcode;
\tint  i, j, k, Rec, Color;
\tlong Len;
\tchar Buf[72];
\twhile (*Str)
\t{
\t\tif ((*Str & 0x80) && (*(Str + 1) & 0x80))
\t\t{
\t\t\tZcode = (*Str - 0xa1) & 0x07f;
\t\t\tBcode = (*(Str + 1) - 0xa1) & 0x07f;
\t\t\tRec = Zcode * 94 + Bcode;
\t\t\tLen = Rec * 72L;
\t\t\tfseek(fp, Len, SEEK_SET);
\t\t\tfread(Buf, 1, 72, fp);
\t\t\tfor (i = 0; i < 24; i++)
\t\t\t\tfor (j = 0; j < 3; j++)
\t\t\t\t\tfor (k = 0; k < 8; k++)
\t\t\t\t\t\tif (Buf[i * 3 + j] >> (7 - k) & 1)
\t\t\t\t\t\t{
\t\t\t\t\t\t\tColor = y + j * 8 + k - 46;
\t\t\t\t\t\t\tPutPoint(x + i, y + j * 8 + k, Color);
\t\t\t\t\t\t}
\t\t\tx = x + 24 + Wid;
\t\t\tStr += 2;
\t\t}
\t}
\treturn;
}
      `,
    }
  },
  props: {
    msg: String
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

.el-container::--webit-scrollbar{
  width: 0;
  background: transparent;
}

.el-container {
  -ms-overflow-style: none;
}


</style>
