<template>
	<div class="admin-content">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'admin-content'
	}
</script>

<style lang="stylus">
.admin-content
  padding-left 300px
  position relative
  .is-back-button
    padding-left 60px
  &_main
    padding 20px
    &-form
      .el-col
        margin-bottom 10px
  &_main-table
    border-radius 6px
    .el-col
      > div
        padding 0
  &_main-header
    position relative
    align-items center
    justify-content space-between 
    display flex
    padding 10px 0
    .el-button
      &:hover
        .icon
          fill var(--color-primary)
      > span
        display flex
        justify-content center
        align-items cente
      .icon
        margin-right 5px
      span
        font-weight 600
        font-size 14px
        line-height 18px
  	.title
      font-size 42px
      padding 0
      text-align left
      font-weight 300
      letter-spacing -0.05em
      small
        font-size 16px
        font-weight 400
        letter-spacing -0.03em
        color #999
</style>