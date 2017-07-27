<template>
  <admin-content>
    <admin-sidebar></admin-sidebar>
    <div class="admin-content_main">
      <header class="admin-content_main-header is-back-button">
        <back-button></back-button>
        <h2 class="title">Editar usuário <small>- {{ editUser.firstName }} {{ editUser.lastName }}</small></h2>
      </header> 
      <div class="admin-content_main-form">
        <el-card class="box-card">
          <el-form :model="editUser" :rules="rules" ref="editUser" class="form-model">
            <el-row :gutter="10">
              <el-col :lg="12">
                <el-form-item prop="email">
                  <el-input placeholder="Your first email" size="large" v-model="editUser.email" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12">
                <el-form-item prop="firstName">
                  <el-input placeholder="Your first name" size="large" v-model="editUser.firstName" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12">
                <el-form-item prop="lastName">
                  <el-input placeholder="Your last name" size="large" v-model="editUser.lastName" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-button size="large" type="success" @click="handleSubmitForm('editUser')" class="submit-button full-width">Salvar</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </div>
    </div>
  </admin-content>
</template>

<script>
  import AdminSidebar from '../../../components/Admin/AdminSidebar.vue';
  import AdminContent from '../../../components/Admin/AdminContent.vue';
  import BackButton from '../../../components/BackButton/BackButton.vue';
  export default {
    name: 'admin-users-edit',
    data: () => ({
      users: [],
      editUser: {
        firstName: '',
        lastName: '',
        email: '',
        verifyEmail: false
      },
      rules: {
        firstName: [
          { required: true, message: 'Por favor insira o seu primeiro nome', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Por favor insira o seu sobrenome', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Por favor insira o seu email', trigger: 'blur' },
        ]
      },
    }),
    async mounted () {
      this.renderData()
    },
    methods: {
      renderData () {
        this.editUser.firstName = this.users[0].profile.firstName
        this.editUser.lastName = this.users[0].profile.lastName
        this.editUser.email = this.users[0].emails[0].address
        this.editUser.verifyEmail = this.users[0].emails[0].verified
      },
      handleSubmitForm (formName) {
        this.$refs[formName].validate((valid) => {
          try {
            if (valid) {
              let dataForm = this.editUser
              let user = this.users[0]
              Meteor.callPromise('Users.methods.update', {
                _id: user._id,
                services: {
                  password: user.services.password
                },
                profile: {
                  firstName: dataForm.firstName,
                  lastName: dataForm.lastName,
                  phone: user.profile.phone
                },
                emails: [{
                  address: dataForm.email,
                  verified: this.editUser.verifyEmail
                }],
                roles: [user.roles[0]],
                updatedAt: new Date()
              })
              this.$message({
                type: 'info',
                message: `Usuário atualizado com sucesso!`
              })
              this.$refs[formName].resetFields()
              this.$router.push({ name: 'admin-users' })
            }
          } catch (error) {
            this.$message({
              type: 'error',
              message: error
            })
          }
        })
      }
    },
    meteor: {
      subscribe: {
        'users': [],
      },
      users() {
        return Meteor.users.find({
          _id: this.$route.params.userId
        });
      },
    },
    components: {
      AdminSidebar,
      AdminContent,
      BackButton
    }
  }
</script>
