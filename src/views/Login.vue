<template>
  <div class="login">
    <div class>
      <div class="col-md-6 offset-md-3">
        <h2 class="display-4 text-center mt-5">Login Form</h2>

        <form action="#">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="email" class="form-control" />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-info btn-block" @click.prevent="performLogin">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    performLogin() {
      console.log("perfom login");
      //this.$router.push("/profile");
    }
  }
};
</script>

<style>
</style>