<template>
  <div id="app">
    <Tree 
    :data="msg" 
    @on-check-change="check"
    :showCheckbox="true"></Tree>
  </div>
</template>

<script>
import Tree from './components/tree.vue';
export default {
  components: {
    Tree
  },
  methods: {
    check(currentId,checkedArr) {
      console.log(currentId)
      console.log(checkedArr)
    }
  },
  name: 'app',
  data () {
    return {
      msg: [
        {
          title: 'parent 1',
          expand: true,
          id: '1',
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              id: '2',
              children: [
                {
                  id: '3',
                  title: 'leaf 1-1-1'
                },
                {
                  id: '4',
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: '11111',
              id: '5',
            }
          ]
        }
      ],
      msg2: [
        {
          title: 'parent 1',
          expand: true,
          id: '1'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  
}
</style>
