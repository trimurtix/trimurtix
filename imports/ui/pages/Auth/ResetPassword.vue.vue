<template>
  <div class="reset-password">
    <div class="auth-layout_inner">
      <el-card class="auth-layout_card card">
        <header class="auth-layout_card-header card-header">
          <img class="logo" src="/images/icon.png" width="60" height="60" alt="Logo" />
          <h2>Resetar senha</h2>
        </header>
        <span class="divider"></span>
        <el-form 
          :model="resetPasswordForm" 
          :rules="rules" 
          ref="resetPasswordForm"
          class="auth-layout_card-content card-content">
          <el-form-item label="Nova senha" prop="new_password">
            <el-input type="password" v-model="resetPasswordForm.new_password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button 
              class="auth-layout_submit full-width"
              size="large" 
              type="primary" 
              @click="submitForm('resetPasswordForm')"
              :loading="isLoading">
              Confirmar
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'auth-reset-password',
    data: () => ({
      isLoading: false,
      resetPasswordForm: {
        new_password: ''
      },
      rules: {
        new_password: [
          { required: true, message: 'Por favor insira a sua nova senha', trigger: 'blur' }
        ]
      }
    }),
    methods: {
      submitForm(formName) {
        this.isLoading = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const dataForm = this.resetPasswordForm;
            const new_password = dataForm.new_password;
            const token = this.$route.params.token
            Accounts.resetPassword(token, new_password, (err) => {
              if (err) {
                this.$notify.error({
                  title: 'Desculpe',
                  message: err.reason,
                  offset: 100
                })
                this.isLoading = false
              } else {
                this.$notify.success({
                  title: 'Sucesso',
                  message: 'Senha resetada!',
                  offset: 100
                })
                this.$router.push({name: 'login'})
              }
            })
          } else {
            this.$notify.error({
              title: 'Desculpe',
              message: 'É necessário preencher o campo.',
              offset: 100
            })
            this.isLoading = false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
