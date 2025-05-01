<template>
  <div class="container">
    <!-- Left Side -->
    <div class="left-side">
      <!-- Logo -->
      <div class="logo">
        <i class="fas fa-chart-bar"></i>
        <span>FinanceFlow</span>
      </div>

      <!-- Heading -->
      <h1>Create Your Free Account</h1>
      <p class="subtitle">Start tracking your income, expenses, savings, and debt today.</p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Full Name</label>
          <input
            type="text"
            v-model="formData.fullName"
            placeholder="Enter your full name"
          />
        </div>

        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            v-model="formData.email"
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="formData.password"
              placeholder="Create a password"
            />
            <button type="button" @click="showPassword = !showPassword">
              <i class="far" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
            </button>
          </div>
        </div>

        <div class="form-group">
          <label>Confirm Password</label>
          <div class="password-input">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="formData.confirmPassword"
              placeholder="Confirm your password"
            />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword">
              <i class="far" :class="showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
            </button>
          </div>
        </div>

        <button type="submit" class="signup-btn">Sign Up</button>

        <div class="divider">or continue with</div>

        <div class="social-buttons">
          <button type="button" class="social-btn">
            <i class="fab fa-google"></i>
            Google
          </button>
          <button type="button" class="social-btn">
            <i class="fab fa-apple"></i>
            Apple
          </button>
        </div>

        <div class="login-link">
          Already have an account? 
          <router-link to="/" class="text-blue-600 font-medium">Log in</router-link>
        </div>
      </form>
    </div>

    <!-- Right Side -->
    <div class="right-side">
      <!-- Background Pattern -->
      <div class="pattern">
        <div v-for="n in 16" :key="n" class="dot"></div>
      </div>

      <!-- Stats Card -->
      <div class="stats-card">
        <!-- Chart -->
        <div class="chart">
          <div v-for="height in [60, 85, 45, 95, 55, 75]" 
               :key="height" 
               class="bar"
               :style="{ height: `${height}%` }">
          </div>
        </div>

        <!-- Stats -->
        <div class="stats">
          <div class="balance-stats">
            <div class="stat-row">
              <span>Total Balance</span>
              <span class="amount">$12,875.00</span>
            </div>
            <div class="stat-row">
              <span>Monthly Savings</span>
              <span class="amount">$2,450.00</span>
            </div>
          </div>

          <div class="percentage-stats">
            <div>
              <span>Income</span>
              <div class="positive">+15.3%</div>
            </div>
            <div>
              <span>Expenses</span>
              <div class="negative">-8.2%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      formData: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData)
    },
    navigateToLogin() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
}

.left-side {
  width: 50%;
  padding: 108px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
}

.logo i {
  color: #2563EB;
  font-size: 24px;
}

h1 {
  font-size: 28px;
  color: #1E293B;
  margin-bottom: 8px;
  font-weight: 600;
}

.subtitle {
  color: #64748B;
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
}

.password-input {
  position: relative;
}

.password-input button {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748B;
  cursor: pointer;
}

.signup-btn {
  width: 100%;
  padding: 12px;
  background: #2563EB;
  color: white;
  border: none;
  border-radius: 8px;
  margin: 24px 0;
  cursor: pointer;
}

.divider {
  text-align: center;
  color: #64748B;
  font-size: 14px;
  margin: 16px 0;
}

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 16px 0;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
}

.login-link {
  text-align: center;
  font-size: 14px;
}

.login-link a {
  color: #2563EB;
  text-decoration: none;
  font-weight: 500;
}

/* Right Side */
.right-side {
  width: 50%;
  background: #F8FAFC;
  padding: 48px;
  position: relative;
}

.pattern {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 32px;
}

.dot {
  background: #E2E8F0;
  border-radius: 50%;
  aspect-ratio: 1;
}

.stats-card {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  margin: 128px auto 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.chart {
  height: 192px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 32px;
}

.bar {
  flex: 1;
  background: #2563EB;
  border-radius: 4px 4px 0 0;
  transition: height 0.3s;
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.balance-stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-row span:first-child {
  color: #64748B;
}

.amount {
  font-size: 24px;
  font-weight: 600;
}

.percentage-stats {
  display: flex;
  justify-content: space-between;
}

.percentage-stats span {
  color: #64748B;
  display: block;
}

.positive {
  color: #22C55E;
}

.negative {
  color: #EF4444;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .left-side, .right-side {
    width: 100%;
  }
  
  .right-side {
    display: none;
  }
}
</style> 