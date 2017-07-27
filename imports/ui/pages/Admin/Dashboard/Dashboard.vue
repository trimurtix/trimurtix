<template>
  <admin-content>
    <admin-sidebar></admin-sidebar>
    <div class="admin-content_main">
      <el-row class="list-api-items_count" :gutter="20">
        <el-col :span="6">
          <el-card>
            <strong class="label">Usuários</strong>
            <h2 class="count">{{ users.length }}</h2>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </admin-content>
</template>

<script>
  import AdminSidebar from '../../../components/Admin/AdminSidebar'
  import AdminContent from '../../../components/Admin/AdminContent'
  export default {
  	name: 'admin-dashboard',
    data: () => ({
      users: [],
    }),
    components: {
      AdminSidebar,
      AdminContent
    },
    meteor: {
      subscribe: {
        'users': []
      },
      users() {
        return Meteor.users.find({})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list-api-items
    &_count
      .label
        text-transform uppercase
      .count
        font-size 28px
        margin-top 10px
        color var(--color-primary)
</style>
