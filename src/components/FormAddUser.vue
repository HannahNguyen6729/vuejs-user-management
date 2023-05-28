<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent class="forms-sample">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            v-model.number="age"
            type="number"
            class="form-control"
            id="age"
            placeholder="Age"
          />
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input
            v-model="avatar"
            type="text"
            class="form-control"
            id="avatar"
            placeholder="avatar"
          />
        </div>
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="programmingLanguage"
                  value="Javascript"
                  type="checkbox"
                  class="form-check-input" />
                JavaScript <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="programmingLanguage"
                  value="Java"
                  type="checkbox"
                  class="form-check-input" />
                Java <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="programmingLanguage"
                  value="PHP"
                  type="checkbox"
                  class="form-check-input" />
                PHP <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="programmingLanguage"
                  value="Python"
                  type="checkbox"
                  class="form-check-input" />
                Python <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="programmingLanguage"
                  value="C#"
                  type="checkbox"
                  class="form-check-input" />
                C# <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="programmingLanguage"
                  value="C/C++"
                  type="checkbox"
                  class="form-check-input" />
                C/C++ <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  v-model="gender"
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="male" />
                Male<i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  v-model="gender"
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="female" />
                Female<i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  v-model="gender"
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="other" />
                Other <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label"> User types: </label>
          <div class="col-sm-9">
            <select v-model="type" class="form-control">
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            v-model="description"
            class="form-control"
            id="description"
            rows="4"
          ></textarea>
        </div>
        <button
          @click="handleSubmit"
          type="submit"
          class="btn btn-gradient-primary mr-2"
        >
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: 0,
      avatar: "",
      gender: "male",
      programmingLanguage: [],
      type: "CLIENT",
      description: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(
        this.name,
        this.age,
        this.avatar,
        this.gender,
        this.programmingLanguage,
        this.type,
        this.description
      );
    },
  },
};
</script>

<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
