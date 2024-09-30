<template>
  <header>
    <nav>
      <RouterLink to="/">D & F</RouterLink>
      <RouterLink to="/information">Information</RouterLink>
      <RouterLink to="/register">RSVP</RouterLink>
      <RouterLink to="/gifts">Wishlist</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  z-index: 999;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 10px;
  margin-bottom: 40px;
}

nav {
  display: flex;
  gap: 20px;
}

router-link {
  text-decoration: none;
  color: #000;
}

router-link:hover {
  color: #007bff;
}
.logo {
}
</style>
