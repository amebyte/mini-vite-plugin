<template>
  <img alt="Vue logo" :src="logo" />
  <div :class="$style.logo"></div>
  <a href="###">cobyte</a>
  <input placeholder="请输入姓名" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <label>{{ t("language") }}</label>
  <select v-model="locale">
    <option value="en">en</option>
    <option value="zh">zh</option>
  </select>
  <p>{{ t("hello") }}</p>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, computed } from "vue";
import HelloWorld from "comps/HelloWorld.vue";
import logo from "@/assets/logo.png";
import "./App.module.css";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    // 获取组件实例
    const ins = getCurrentInstance();

    function useI18n() {
      const locale = ref("zh");
      // 获取资源信息
      const i18n = ins!.type!.i18n;
      const t = (msg: string) => {
        return computed(() => i18n[locale.value][msg]).value;
      };
      return { locale, t };
    }

    const { locale, t } = useI18n();

    fetch("/api-dev/user/list")
      .then((res) => res.json())
      .then((r) => console.log(r));
    return {
      logo,
      locale,
      t,
    };
  },
});
</script>

<i18n>
{
    "en": {
        "language": "Language",
        "hello": "hello, world !"
    },
    "zh": {
        "language": "语言",
        "hello": "你好，世界！"
    }
}
</i18n>

<style module>
.logo {
  background-image: url(@/assets/logo.png);
  width: 200px;
  height: 200px;
}
</style>
<style scoped lang="scss">
$link-color: red;
a {
  color: $link-color;
}
::placeholder {
  color: $link-color;
}
</style>
