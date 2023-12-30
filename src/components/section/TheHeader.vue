<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Web</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/users" class="nav-link" href="#">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Posts" class="nav-link" href="#">Posts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
</script>

<style scoped>
header {
  background-color: rgb(254, 241, 241);
}
.router-link-active {
  border-bottom:black 2px solid;
}
</style>