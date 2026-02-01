# AutoKarya 🚗⚡

**AutoKarya** is an intelligent, AI-powered workshop management platform designed to streamline operations for automotive service centers. It goes beyond traditional ERP systems by integrating **Agentic AI** to optimize decisions, forecast inventory needs, and manage staff efficiency.

![AutoKarya Dashboard](https://via.placeholder.com/800x400?text=AutoKarya+Dashboard+Preview)

## 🚀 Key Features

- **🧠 Intelligent Decision Engine**:
  - **Bottleneck Detection**: Uses Machine Learning (`IsolationForest`) to identify stuck tasks or inefficient workflows in real-time.
  - **Smart Supplier Ranking**: Automatically scores and suggests the best suppliers based on price, delivery speed, and reliability (`RandomForest`).
  - **Inventory Forecasting**: Predicts future stock requirements to prevent stockouts using `Prophet`.

- **🛠️ Comprehensive Workshop Ops**:
  - **Inventory Management**: Real-time tracking of parts, categorization, and low-stock alerts.
  - **Service & Booking**: Manage customer appointments, service status, and job cards.
  - **Sales & Billing**: Integrated point-of-sale and invoice generation.
  - **Staff Management**: Track availability, performance, and assign tasks dynamically.

- **📊 Interactive Dashboard**:
  - Visual analytics for sales, bookings, and inventory health.
  - One-click "AI Assistant" for actionable insights.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS** (Styling)
- **Recharts** (Data Visualization)
- **Lucide React** (Icons)

### Backend
- **Node.js & Express**
- **Prisma ORM** (Database Management)
- **PostgreSQL** (Data Persistence)
- **Passport.js** (Google OAuth Authentication)

### AI Agent Service
- **Python** (FastAPI)
- **Scikit-learn** (Machine Learning Models)
- **Prophet** (Forecasting)
- **Structlog** (Structured Logging)

---

## 🏗️ Getting Started

### Prerequisites
- **Node.js** (v18+)
- **Python** (v3.9+)
- **PostgreSQL**
- **Docker** (Optional, for containerized run)

### 🔧 Installation (Manual)

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Jadu07/JADU_MSME.git
    cd AutoKarya
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    npm install
    cp .env.example .env
    # Update .env with your Database and Google Auth credentials
    npx prisma generate
    npx prisma db push
    npm run dev
    ```

3.  **Frontend Setup**
    ```bash
    cd ../frontend
    npm install
    cp .env.example .env
    npm run dev
    ```

4.  **AI Agent Setup**
    ```bash
    cd ../agent
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    python main.py
    ```

### 🐳 Installation (Docker - Recommended)

For a production-ready setup, use the provided script:

```bash
chmod +x start.sh
./start.sh
```

This will:
- Spin up PostgreSQL, Backend, Frontend, and Agent containers.
- Run database migrations.
- Expose the app on `http://localhost`.

---

## 🔑 Environment Configuration

Create a `.env` file in the `backend/` and `frontend/` directories.

**Backend `.env` Example:**
```env
DATABASE_URL="postgresql://user:pass@host:5432/db"
GOOGLE_CLIENT_ID="your_client_id"
GOOGLE_CLIENT_SECRET="your_client_secret"
GOOGLE_CALLBACK_URL="http://localhost:3000/auth/google/callback"
OPENAI_API_KEY="your_openai_key"
```

**Frontend `.env` Example:**
```env
VITE_API_URL="http://localhost:3000"
VITE_GOOGLE_CLIENT_ID="your_client_id"
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature enhancements or bug fixes.

## 📄 License

This project is licensed under the ISC License.
