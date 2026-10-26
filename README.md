# 🌍 WorldUniversity

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![REST API](https://img.shields.io/badge/API-countries.dev-008080?style=for-the-badge)](https://countries.dev/docs)

**WorldUniversity** is an interactive and responsive country explorer designed for students, researchers, and anyone curious about global data. Search, filter, and explore detailed insights about countries around the globe in a clean, intuitive interface.

---

## ✨ Features

- 🔍 **Smart Search & Filtering:** Search countries by name or filter by region, language, and independence status.
- 📊 **Detailed Insights:** Discover capitals, populations, geographical areas, currencies, languages, and national flags.
- 🗺️ **Direct Maps Integration:** Easily open any country's location directly in Google Maps.
- ℹ️ **About & Vision:** Explore the mission, vision, and project context on the dedicated About page.
- 📱 **Fully Responsive:** Smooth experience across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack & Data Source

- **Frontend:** React / JavaScript, HTML5, CSS3
- **State & Context:** React Context API
- **Data Source:** [countries.dev API](https://countries.dev/docs) *(Free public REST API, no API key required)*

---

## 📁 Project Structure

```text
src/
├── 🖼️ Assets/       # Logo and featured country images
├── 📄 Pages/        # Search, filter, detail, and About pages
├── 🧩 components1/  # Shared header, navigation, and home page sections
├── ⚙️ context/      # Shared country data & global state management
└── 🎨 styles/       # Stylesheets for pages and components
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and `npm` installed on your machine.

### Installation & Run

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/your-username/world-university.git
   cd world-university
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

> 🌐 **Note:** Since country data is fetched live from the [countries.dev API](https://countries.dev/docs) upon startup, an active internet connection is required for full functionality.

---

## 🧰 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode at `http://localhost:3000`. |
| `npm run build` | Builds the app for production to the `build` folder. |
| `npm test` | Launches the test runner in interactive watch mode. |

---

<p align="center">Made with ❤️ for global learners and explorers</p>