<template>
  <div>
    <!-- Mobile Menu Button -->
    <button @click="toggleSidebar" class="mobile-menu-btn">
      <i class="fas" :class="isOpen ? 'fa-times' : 'fa-bars'"></i>
    </button>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
      <!-- Logo -->
      <div class="logo">
        <div class="logo-icon">
          <i class="fas fa-chart-bar"></i>
        </div>
        <span>FinanceFlow</span>
      </div>

      <!-- Navigation Links -->
      <nav class="nav-links">
        <router-link to="/dashboard" class="nav-link" @click="closeSidebarOnMobile">
          <i class="fas fa-th-large"></i>
          <span>Dashboard</span>
        </router-link>

        <router-link to="/income" class="nav-link" @click="closeSidebarOnMobile">
          <i class="fas fa-wallet"></i>
          <span>Income</span>
        </router-link>

        <router-link to="/expenses" class="nav-link" @click="closeSidebarOnMobile">
          <i class="fas fa-receipt"></i>
          <span>Expenses</span>
        </router-link>

        <router-link to="/bills" class="nav-link" @click="closeSidebarOnMobile">
          <i class="fas fa-file-invoice"></i>
          <span>Bills</span>
        </router-link>

        <router-link to="/debt" class="nav-link" @click="closeSidebarOnMobile">
          <i class="fas fa-credit-card"></i>
          <span>Debt</span>
        </router-link>

        <router-link to="/savings" class="nav-link" @click="closeSidebarOnMobile">
          <i class="fas fa-piggy-bank"></i>
          <span>Savings</span>
        </router-link>

        <router-link to="/settings" class="nav-link" @click="closeSidebarOnMobile">
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </router-link>
      </nav>
    </div>

    <!-- Overlay for mobile -->
    <div 
      v-if="isOpen" 
      class="sidebar-overlay"
      @click="closeSidebarOnMobile"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
    closeSidebarOnMobile() {
      if (window.innerWidth <= 768) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style scoped>
.mobile-menu-btn {
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1000;
  padding: 8px;
  background: #1E293B;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.sidebar {
  width: 280px;
  height: 100%;
  background-color: #1E293B;
  padding: 24px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: transform 0.3s ease;
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

.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    display: block;
  }
}
</style> 