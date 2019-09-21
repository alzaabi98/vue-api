<template>
  <div class="profile">
    <nav id="sidebar">
      <ul class="list-group p-3">
        <li class="list-group-item">
          <a href="#">General Information</a>
        </li>
        <li class="list-group-item mt-2">
          <a href="#">Paymnets</a>
        </li>
      </ul>
    </nav>

    <div id="content">
      <div class="row mt-5">
        <div class="col-md-6 offset-md-1">
          <div class="form">
            Name
            <input type="text" class="form-control" v-model="user.name" />
            Email
            <input type="text" class="form-control" v-model="user.email" />

            <button class="btn btn-primary mt-2" @click.prevent="updateProfile">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.get_user;
    }
  },
  methods: {
    updateProfile() {
      this.$store
        .dispatch("updateUserProfileAction", {
          name: this.user.name,
          email: this.user.email
        })
        .then(res => {
          console.log("profile was update");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.profile {
  min-height: 100%;
  width: 100%;
  position: relative;
  display: inline-block;
}

#sidebar {
  width: 20%;
  top: 0px;
  left: 0px;
  bottom: 0px;
  height: 100vh;
  position: absolute;
  background-color: rgb(39, 41, 41);
}
#content {
  min-height: 500px;
  width: 80%;
  position: relative;
  float: right;
}
</style>