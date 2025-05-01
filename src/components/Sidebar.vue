<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="logo">
      <div class="logo-icon">
        <i class="fas fa-chart-bar"></i>
      </div>
      <span>FinanceFlow</span>
    </div>

    <!-- Navigation Links -->
    <nav class="nav-links">
      <router-link to="/dashboard" class="nav-link">
        <i class="fas fa-th-large"></i>
        <span>Dashboard</span>
      </router-link>

      <router-link to="/income" class="nav-link">
        <i class="fas fa-wallet"></i>
        <span>Income</span>
      </router-link>

      <router-link to="/expenses" class="nav-link">
        <i class="fas fa-receipt"></i>
        <span>Expenses</span>
      </router-link>

      <router-link to="/bills" class="nav-link">
        <i class="fas fa-file-invoice"></i>
        <span>Bills</span>
      </router-link>

      <router-link to="/debt" class="nav-link">
        <i class="fas fa-credit-card"></i>
        <span>Debt</span>
      </router-link>

      <router-link to="/savings" class="nav-link">
        <i class="fas fa-piggy-bank"></i>
        <span>Savings</span>
      </router-link>

      <router-link to="/settings" class="nav-link">
        <i class="fas fa-cog"></i>
        <span>Settings</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  background-color: #1E293B;
  padding: 24px;
  position: fixed;
  left: 0;
  top: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  margin-bottom: 32px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: #2563EB;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo span {
  color: white;
  font-size: 18px;
  font-weight: 500;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  color: #94A3B8;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-link i {
  width: 20px;
  text-align: center;
}

.nav-link span {
  font-size: 14px;
}
</style> 