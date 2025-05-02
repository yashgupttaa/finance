<template>
  <div class="dashboard">
    <!-- Header with Date Range and Currency -->
    <div class="header">
      <div class="date-selector">
        <button class="date-btn">
          <span>September 2023</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="settings">
        <div class="date-range">
          <span>Start Date</span>
          <span class="date">Sept 1, 2023</span>
          <span>End Date</span>
          <span class="date">Sept 30, 2023</span>
        </div>
        <div class="currency">
          <span>Currency</span>
          <span class="selected">USD</span>
        </div>
        <button class="refresh-btn">
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Income</h3>
        <div class="amount">$8,750.00</div>
        <div class="trend positive">
          +12% vs last month
        </div>
      </div>

      <div class="stat-card">
        <h3>Total Expenses</h3>
        <div class="amount">$5,280.00</div>
        <div class="trend negative">
          -3% vs last month
        </div>
      </div>

      <div class="stat-card">
        <h3>Total Savings</h3>
        <div class="amount">$2,470.00</div>
        <div class="trend positive">
          +8% vs last month
        </div>
      </div>

      <div class="stat-card">
        <h3>Leftover</h3>
        <div class="amount">$1,000.00</div>
        <div class="trend positive">
          +15% vs last month
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="charts-grid">
      <!-- Spending Categories -->
      <div class="chart-card">
        <h3>Spending Categories</h3>
        <div class="chart-container">
          <Doughnut :data="doughnutData" :options="doughnutOptions" />
        </div>
        <div class="chart-legend">
          <div v-for="(item, index) in spendingCategories" :key="index" class="legend-item">
            <div class="legend-color" :style="{ backgroundColor: item.color }"></div>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>

      <!-- Budget vs Actual -->
      <div class="chart-card">
        <h3>Budget vs Actual</h3>
        <div class="chart-container">
          <Bar :data="barData" :options="barOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      spendingCategories: [
        { label: 'Housing', color: '#4F46E5' },
        { label: 'Transportation', color: '#06B6D4' },
        { label: 'Food', color: '#10B981' },
        { label: 'Utilities', color: '#F59E0B' },
        { label: 'Entertainment', color: '#8B5CF6' },
        { label: 'Others', color: '#EC4899' }
      ],
      doughnutData: {
        labels: ['Housing', 'Transportation', 'Food', 'Utilities', 'Entertainment', 'Others'],
        datasets: [{
          data: [35, 20, 15, 10, 12, 8],
          backgroundColor: ['#4F46E5', '#06B6D4', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899']
        }]
      },
      doughnutOptions: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
          legend: {
            display: false
          }
        }
      },
      barData: {
        labels: ['Housing', 'Transport', 'Food', 'Entertainment'],
        datasets: [
          {
            label: 'Budget',
            data: [3000, 800, 1500, 800],
            backgroundColor: '#4F46E5'
          },
          {
            label: 'Actual',
            data: [2800, 750, 1450, 780],
            backgroundColor: '#06B6D4'
          }
        ]
      },
      barOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: '#E2E8F0'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.date-selector {
  display: flex;
  align-items: center;
}

.date-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-weight: 500;
}

.settings {
  display: flex;
  align-items: center;
  gap: 24px;
}

.date-range, .currency {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748B;
}

.date, .selected {
  color: #1E293B;
  font-weight: 500;
}

.refresh-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  background: white;
  color: #64748B;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  color: #64748B;
  font-size: 14px;
  margin-bottom: 8px;
}

.amount {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
}

.trend {
  font-size: 14px;
}

.trend.positive {
  color: #10B981;
}

.trend.negative {
  color: #EF4444;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.chart-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.chart-card h3 {
  color: #1E293B;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
}

.chart-container {
  height: 300px;
  position: relative;
}

.chart-legend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748B;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .dashboard {
    padding: 16px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .settings {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .date-range, .currency {
    width: 100%;
    justify-content: space-between;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .charts-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .chart-card {
    padding: 16px;
  }

  .chart-container {
    height: 250px;
  }

  .chart-legend {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .chart-legend {
    grid-template-columns: 1fr;
  }
}
</style> 