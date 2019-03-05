<template>
  <div class="about">
    <div class="wrapper">
      <div class="left">
        <div class="name text">徐含景</div>
        <div class="hr text">--------</div>
        <div class="text">平面设计师</div>
        <br />
        <div class="text">1992年生，现居中国杭州</div>
        <div class="text">2015年毕业于杭州师范大学美术学院，视觉传达设计专业</div>
        <br />
        <br />
        <div class="text italic">奖项</div>
        <div class="hr text">--------</div>
        <div class="text">第二届亚洲平面设计双年展入选作品</div>
        <div class="text">第二届中国大学计算机设计大赛杭州赛区一等奖</div>
        <div class="text">第二届中国大学计算机设计大赛云南赛区二等奖</div>
        <div class="text">检察机关廉政公益海报大赛特等奖</div>
        <div class="text">第五届全国大学生广告艺术大赛动画组二等奖</div>
        <div class="text">第三届中国（国际）大学生艺术作品展优秀奖</div>
        <div class="text">第八届设计之都（中国深圳）公益广告大赛三等奖</div>
        <div class="text">中国杭州大学生旅游节“杭州元素”主题设计大赛一等奖</div>
        <div class="text">浙江省第二届广告设计竞赛二等奖</div>
        <br />
        <br />

        <div class="letter italic">Contact</div>
        <div class="hr text">--------</div>
        <div class="letter">E-mail: xhj45@163.com</div>
        <br />

        <div class="letter italic">WeChat</div>
        <div class="hr text">--------</div>
        <div class="code-wrap">
          <img :src="xcode" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="letter">Xu Hanjing</div>
        <div class="hr text">--------</div>
        <div class="letter italic">Graphic Designer</div>
        <br />
        <div class="letter">Born in 1992, now living in Hangzhou, China</div>
        <div class="letter">
          Graduated from Academy of Fine Arts, Hangzhou Normal University in 2015,
        </div>
        <div class="letter">majoring in Visual Communication Design</div>
        <br />

        <div class="letter italic">Award</div>
        <div class="hr text">--------</div>
        <div class="letter">
          Selected Works of the Second Asian Biennial Graphic Design Exhibition
        </div>
        <div class="letter">
          The 2nd China University Computer Design Competition Hangzhou First
          Prize
        </div>
        <div class="letter">
          Second Prize of Yunnan Competition Area in the 2nd China University
          Computer Design Competition
        </div>
        <div class="letter">
          Public Welfare Poster Competition for Integrity of Procuratorial Organs
        </div>
        <div class="letter">
          Second Prize of Animation Group in the Fifth National College Students
          Advertising Art Competition
        </div>
        <div class="letter">
          Excellent Award of the Third China (International) University Student
          Art Exhibition
        </div>
        <div class="letter">
          Third Prize of the 8th Design Capital (Shenzhen, China) Public Service
          Advertising Competition
        </div>
        <div class="letter">
          First Prize of “Hangzhou Elements” Theme Design Competition in Hangzhou
          University Tourism Festival, China
        </div>
        <div class="letter">
          Second Prize of Zhejiang Second Advertising Design Competition
        </div>
      </div>
    </div>
    <div class="copyright">Copyright © Tsui. All rights reserved.</div>
  </div>
</template>
<script>
import xcode from '@/source/xcode.svg'
export default {
  data () {
    return {
      xcode: xcode
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  font-size: 14px;
  .left {
    width: 560px;

    .code-wrap {
      width: 60px;
      
      img {
        width: 100%;
      }
    }
  }

  .text,
  .letter {
    line-height: 2;
  }

  .italic {
    font-style: italic;
  }
}
.copyright {
  margin: 100px 0 40px;
  font-size: 12px;
  color: rgb(167, 167, 167);
}
</style>
