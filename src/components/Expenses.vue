<template>
  <div class="expenses-page">
    <!-- Header -->
    <div class="header">
      <h1>Expense Management</h1>
      <div class="header-actions">
        <button class="icon-btn">
          <i class="fas fa-cog"></i>
        </button>
        <button class="icon-btn">
          <i class="fas fa-user"></i>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total Monthly Expenses</div>
        <div class="stat-amount">$4,250.00</div>
        <div class="stat-trend positive">
          <i class="fas fa-arrow-up"></i>
          +12%
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Budget Remaining</div>
        <div class="stat-amount">$750.00</div>
        <div class="progress-bar">
          <div class="progress" style="width: 85%"></div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Largest Category</div>
        <div class="stat-amount">Housing</div>
        <div class="stat-detail">$1,500.00</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Categories Over Budget</div>
        <div class="stat-amount">2</div>
        <div class="warning-tag">Warning</div>
      </div>
    </div>

    <!-- Expenses Section -->
    <div class="expenses-section">
      <div class="section-header">
        <h2>Expenses by Category</h2>
        <button class="add-btn">
          <i class="fas fa-plus"></i>
          Add New Expense
        </button>
      </div>

      <!-- Categories -->
      <div class="categories">
        <div v-for="category in categories" :key="category.name" class="category">
          <div class="category-header" @click="category.isOpen = !category.isOpen">
            <div class="category-name">
              <i class="fas fa-chevron-down" :class="{ 'rotate': category.isOpen }"></i>
              {{ category.name }}
            </div>
            <div class="category-summary">
              <div class="budget-info">
                <span>Budget: ${{ category.budget }}</span>
                <span>Actual: <span :class="{ 'text-success': category.actual <= category.budget, 'text-danger': category.actual > category.budget }">
                  ${{ category.actual }}
                </span></span>
              </div>
              <div class="progress-bar" :class="{ 'over-budget': category.actual > category.budget }">
                <div class="progress" :style="{ width: getProgressWidth(category) }"></div>
              </div>
            </div>
          </div>

          <div class="category-items" v-show="category.isOpen">
            <div v-for="item in category.items" :key="item.name" class="expense-item">
              <div class="item-details">
                <span>{{ item.name }}</span>
                <span>${{ item.budget }}</span>
                <span>${{ item.actual }}</span>
                <span :class="{ 'text-success': item.remaining >= 0, 'text-danger': item.remaining < 0 }">
                  ${{ item.remaining }}
                </span>
              </div>
              <div class="item-actions">
                <button class="action-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Row -->
        <div class="totals-wrapper">
          <div class="totals-row">
            <div class="total-column">
              <div class="total-label">Total Budget</div>
              <div class="total-value">$5,000.00</div>
            </div>
            <div class="total-column">
              <div class="total-label">Total Actual</div>
              <div class="total-value actual">$4,250.00</div>
            </div>
            <div class="total-column">
              <div class="total-label">Remaining</div>
              <div class="total-value remaining">$750.00</div>
            </div>
          </div>
          <div class="total-progress-bar">
            <div class="progress" :style="{ width: '85%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpensesPage',
  data() {
    return {
      categories: [
        {
          name: 'Housing & Utilities',
          budget: 1775,
          actual: 1750,
          isOpen: true,
          items: [
            {
              name: 'Rent/Mortgage',
              budget: 1500,
              actual: 1500,
              remaining: 0
            },
            {
              name: 'Utilities',
              budget: 200,
              actual: 180,
              remaining: 20
            },
            {
              name: 'Internet',
              budget: 75,
              actual: 70,
              remaining: 5
            }
          ]
        },
        {
          name: 'Transportation',
          budget: 600,
          actual: 580,
          isOpen: false,
          items: [
            {
              name: 'Car Payment',
              budget: 400,
              actual: 400,
              remaining: 0
            },
            {
              name: 'Fuel',
              budget: 150,
              actual: 130,
              remaining: 20
            },
            {
              name: 'Maintenance',
              budget: 50,
              actual: 50,
              remaining: 0
            }
          ]
        },
        {
          name: 'Food & Groceries',
          budget: 800,
          actual: 920,
          isOpen: false,
          items: [
            {
              name: 'Groceries',
              budget: 500,
              actual: 580,
              remaining: -80
            },
            {
              name: 'Dining Out',
              budget: 200,
              actual: 240,
              remaining: -40
            },
            {
              name: 'Coffee & Snacks',
              budget: 100,
              actual: 100,
              remaining: 0
            }
          ]
        }
      ]
    }
  },
  computed: {
    totalBudget() {
      return this.categories.reduce((sum, cat) => sum + cat.budget, 0).toFixed(2)
    },
    totalActual() {
      return this.categories.reduce((sum, cat) => sum + cat.actual, 0).toFixed(2)
    },
    totalRemaining() {
      return (this.totalBudget - this.totalActual).toFixed(2)
    }
  },
  methods: {
    getProgressWidth(category) {
      const percentage = (category.actual / category.budget) * 100
      return `${Math.min(percentage, 100)}%`
    },
    getTotalProgressWidth() {
      const totalBudget = this.categories.reduce((sum, cat) => sum + cat.budget, 0)
      const totalActual = this.categories.reduce((sum, cat) => sum + cat.actual, 0)
      const percentage = (totalActual / totalBudget) * 100
      return `${Math.min(percentage, 100)}%`
    }
  }
}
</script>

<style scoped>
.expenses-page {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  background: white;
  color: #64748B;
  cursor: pointer;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-label {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 8px;
}

.stat-amount {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
}

.stat-detail {
  color: #64748B;
  font-size: 14px;
}

.warning-tag {
  display: inline-block;
  padding: 4px 8px;
  background: #FEF3C7;
  color: #D97706;
  border-radius: 4px;
  font-size: 12px;
}

.progress-bar {
  height: 8px;
  background: #E2E8F0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #A29BFE;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.over-budget .progress {
  background: #EF4444;
}

.expenses-section {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #1E293B;
}

.add-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #10B981;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.category {
  border-bottom: 1px solid #E2E8F0;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
}

.category-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.fa-chevron-down {
  transition: transform 0.3s ease;
}

.fa-chevron-down.rotate {
  transform: rotate(180deg);
}

.category-summary {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 300px;
}

.budget-info {
  display: flex;
  justify-content: space-between;
  color: #64748B;
  font-size: 14px;
}

.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  background: #F8FAFC;
  margin-bottom: 8px;
}

.item-details {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 24px;
  width: 100%;
}

.item-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px;
  background: none;
  border: none;
  color: #64748B;
  cursor: pointer;
}

.text-success {
  color: #10B981;
}

.text-danger {
  color: #EF4444;
}

.totals-wrapper {
  background: white;
  margin-top: 24px;
  padding: 24px;
  border-radius: 12px;
}

.totals-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.total-column {
  text-align: left;
}

.total-label {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 4px;
}

.total-value {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
}

.total-value.actual {
  color: #2ECC71;
}

.total-value.remaining {
  color: #F59E0B;
}

.total-progress-bar {
  height: 8px;
  background: #E2E8F0;
  border-radius: 4px;
  overflow: hidden;
}

.total-progress-bar .progress {
  background: #A29BFE;
}

@media (max-width: 768px) {
  .expenses-page {
    padding: 16px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .add-btn {
    width: 100%;
    justify-content: center;
  }

  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .category-summary {
    min-width: unset;
    width: 100%;
  }

  .totals-row {
    flex-direction: column;
    gap: 16px;
  }

  .total-column {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total-label {
    margin-bottom: 0;
  }

  .item-details {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .expense-item {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style> 