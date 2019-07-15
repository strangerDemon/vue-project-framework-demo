<template>
  <div class='second-sign-in'>
    <el-dialog title="Sign" :visible.sync="dialogVisible" width="30%" center :show-close="false">
      <span>sign page</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="signIn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'second-sign-in',
    directives: {},
    components: {},
    props: {
      signDialogVisible: Boolean
    },
    data() {
      return {
        dialogVisible: false
      }
    },
    computed: {},
    watch: {
      signDialogVisible(visible) {
        this.dialogVisible = visible;
      }
    },
    methods: {
      closeDialog(){
        let vm = this
        vm.dialogVisible = false;
        vm.$emit("signDialogVisible", vm.dialogVisible)
      },
      signIn() {
        let vm=this
        this.closeDialog();
        // to do sign in
      }
    },
    brforeCreate() {},
    created() {},
    mounted() {},
    beforeDestroy() {}
  }
</script>

<style lang='postcss'>
  .second-sign-in {}
</style>
