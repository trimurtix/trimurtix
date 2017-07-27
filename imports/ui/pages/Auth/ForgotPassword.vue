<template>
  <div class="new-password">
    <div class="auth-layout_inner">
      <el-card class="auth-layout_card card">
        <header class="auth-layout_card-header card-header">
          <img class="logo" src="/images/icon.png" width="60" height="60" alt="Logo" />
          <h2>Recuperar senha</h2>
        </header>
        <span class="divider"></span>
        <el-form
          :model="forgotPasswordForm"
          :rules="rules"
           ref="forgotPasswordForm"
           class="auth-layout_card-content card-content">
          <el-form-item
            prop="email"
            label="Email">
            <el-input
              v-model="forgotPasswordForm.email"
              auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="auth-layout_submit full-width"
              size="large"
              type="primary"
              @click.prevent="submitForm('forgotPasswordForm')"
              :loading="isLoading">
              Enviar
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <footer class="auth-layout_footer">
        <router-link :to="{ name: 'login'}">Voltar</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'auth-forgot-password',
    data: () => ({
      isLoading: false,
      forgotPasswordForm: {
        email: ''
      },
      rules: {
        email: [
          { required: true, message: 'Por favor insira o seu email', trigger: 'blur' },
          { type: 'email', message: 'Por favor insira um email válido', trigger: 'blur,change' }
        ]
      }
    }),
    methods: {
      submitForm(formName) {
        this.isLoading = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let dataForm = this.forgotPasswordForm
            let email = dataForm.email
            Accounts.forgotPassword({ email }, (err) => {
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
                  message: 'Enviamos um link para o seu email',
                  offset: 100
                })
                this.$router.push({name: 'login'})
              }
            })
          } else {
            this.$notify.error({
              title: 'Desculpe',
              message: 'O Campo de email é necessário',
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
