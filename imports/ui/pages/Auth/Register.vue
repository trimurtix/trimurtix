<template>
  <div class="register">
    <div class="auth-layout_inner">
      <el-card class="auth-layout_card card">
        <header class="auth-layout_card-header card-header">
          <img class="logo" src="/images/icon.png" width="60" height="60" alt="Logo" />
          <h2>Criar uma conta</h2>
        </header>
        <span class="divider"></span>
        <el-form
          :model="registerForm"
          :rules="rules"
          ref="registerForm"
          class="auth-layout_card-content card-content">
          <el-row :gutter="20" class="form-row-item">
            <el-col :span="12">
              <el-form-item
                prop="firstName"
                label="First Name">
                <el-input
                  v-model="registerForm.firstName"
                  auto-complete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                prop="lastName"
                label="Last Name">
                <el-input
                  v-model="registerForm.lastName"
                  auto-complete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="form-row-item">
            <el-col :span="12">
              <el-form-item
                prop="email"
                label="Email">
                <el-input
                  v-model="registerForm.email"
                  auto-complete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item
                prop="phone"
                label="Callphone">
                <el-input
                  v-model="registerForm.phone"
                  auto-complete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0" class="form-row-item">
            <el-form-item
              label="Password"
              prop="password">
              <el-input
                type="password"
                v-model="registerForm.password"
                auto-complete="off"></el-input>
            </el-form-item>
          </el-row>
          <el-row :gutter="0" class="form-row-item">
            <el-form-item>
              <el-button
                class="auth-layout_submit full-width"
                size="large"
                type="primary"
                :loading="isLoading"
                @click="submitForm('registerForm')">
                Cadastrar
              </el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </el-card>
      <footer class="auth-layout_footer">
        Já possui uma conta?
        <router-link :to="{ name: 'login'}">Fazer login</router-link>
      </footer>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'auth-register',
    data: () => ({
      isLoading: false,
      registerForm: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
      },
      rules: {
        email: [
          { required: true, message: 'Por favor insira o seu email', trigger: 'blur' },
          { type: 'email', message: 'Por favor insira um email válido', trigger: 'blur,change' }
        ],
        password: [
          { required: true, message: 'Por favor insira sua senha', trigger: 'blur' }
        ],
        firstName: [
          { required: true, message: 'Por favor insira o seu primeiro nome', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Por favor insira o seu sobrenome', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Por favor insira o seu número de celular', trigger: 'blur' }
        ]
      }
    }),
    methods: {
      submitForm(formName) {
        this.isLoading = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let dataForm = this.registerForm
            let userData = {
              createdAt: new Date(),
              password: dataForm.password,
        			email: dataForm.email,
        			profile: {
        				firstName: dataForm.firstName,
        				lastName: dataForm.lastName,
        				phone: dataForm.phone
        			}
        		}
            Accounts.createUser(userData, (err) => {
        			if(err){
                this.$notify.error({
                  title: 'Desculpe',
                  message: err.reason,
                  offset: 100
                })
                this.isLoading = false
        			} else {
                this.$notify.success({
                  title: 'Sucesso',
                  message: 'Usuário criado!',
                  offset: 100
                })
                this.isLoading = true
                this.$router.push({ name: 'login' })
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

<style lang="stylus" scoped>
.register
  width 600px
</style>