<template>
  <div class="d">
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>
<style>
</style>
<script>
  import TreeNode from './node.vue';
  import { deepCopy } from './assist.js';

  export default {
    name: 'Tree',
    components: { TreeNode },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      showCheckbox: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cloneData: [],
        currentIdArr: []
      }
    },
    created () {
      this.rebuildData();
    },
    watch: {
      data () {
        this.rebuildData();
      }
    },
    methods: {
      rebuildData () {
        this.cloneData = deepCopy(this.data);
      },
      getAllChecked (all) {
        all.forEach(ele => {
          if (ele.checked) {
            this.currentIdArr.push(ele.id)
          }
          if (ele.children !== undefined && ele.children.length > 0) {
            this.getAllChecked(ele.children)
          }
        });
      },
      emitEvent (eventName, data) {
        if (eventName === 'on-check-change') {
          this.currentIdArr = []
          let currentId = data.id
          this.$nextTick(() => {
            this.getAllChecked(this.cloneData)
            this.$emit(eventName, currentId, this.currentIdArr);
          })
        } else {
          this.$emit(eventName, data, this.cloneData);
        }
      }
    }
  }
</script>