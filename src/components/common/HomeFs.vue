<template>
  <div id="fs_m">
    <sidebar/>
    <rotation/>
    <fs-col/>
  </div>
</template>

<script>
  import Sidebar from "./fs/Sidebar";
  import Rotation from "./fs/Rotation";
  import FsCol from "./fs/FsCol";
  export default {
    name: "HomeFs",
    components: {FsCol, Rotation, Sidebar}
  }
</script>

<style lang="less" scoped>
  #fs_m {
    display: flex;
    justify-content: space-between;
  }
</style>
