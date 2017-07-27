<template>
  <div class="login">
    <div class="auth-layout_inner">
      <el-card class="auth-layout_card card">
        <header class="auth-layout_card-header card-header">
          <img class="logo" src="/images/icon.png" width="60" height="60" alt="Logo" />
          <h2>Fazer login</h2>
        </header>
        <span class="divider"></span>
        <el-form
          :model="loginForm"
          :rules="rules"
           ref="loginForm"
           class="auth-layout_card-content card-content">
          <el-form-item
            prop="email"
            label="Email">
            <el-input
              v-model="loginForm.email"
              @keyup.enter="submitForm('loginForm')"
              auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="Senha">
            <el-input
              type="password"
              v-model="loginForm.password"
              v-on:keyup.enter="submitForm('loginForm')"
              auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="auth-layout_submit full-width"
              size="large"
              type="primary"
              @click="submitForm('loginForm')"
              :loading="isLoading">
              Entrar
            </el-button>
          </el-form-item>
          <el-form-item class="item-forgot-password">
            <router-link :to="{ name: 'forgot-password'}">Perdeu a senha?</router-link>
          </el-form-item>
        </el-form>
      </el-card>
      <footer class="auth-layout_footer">
        Não tem conta?
        <router-link :to="{ name: 'register'}">Cadastre-se</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'auth-login',
    data: () => ({
      isLoading: false,
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Por favor insira o seu email', trigger: 'blur' },
          { type: 'email', message: 'Por favor insira um email válido', trigger: 'blur,change' }
        ],
        password: [
          { required: true, message: 'Por favor insira a sua senha', trigger: 'blur' },
        ],
      }
    }),
    methods: {
      submitForm(formName) {
        this.isLoading = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const dataForm = this.loginForm
            const email = dataForm.email,
                  password = dataForm.password
            Meteor.loginWithPassword(email, password, (err) => {
  						if (err) {
                this.$notify.error({
                  title: 'Desculpe',
                  message: err.reason,
                  offset: 100
                })
                this.isLoading = false
  						} else {
                this.$router.push({ name: 'admin-dashboard' })
                this.$notify.success({
                  title: 'Bem vindo',
                  message: `Que bom te ver novamente!`,
                  offset: 100
                })
  						}
  					})
          } else {
            this.$notify.error({
              title: 'Desculpe',
              message: 'É necessário preencher todos os campos',
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
