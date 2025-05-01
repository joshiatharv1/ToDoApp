# 📋 FocusBoard – Productivity Dashboard for Students

**FocusBoard** is a sleek SvelteKit-based productivity app designed with students in mind.  
It includes a to-do list, Pomodoro timer, motivational quotes, live weather widget, class countdown, and a focus streak tracker — all in a visually modern layout.

---

## 🚀 Features

### ✅ Task Manager (To-Do List)
- Add, update, delete, and mark tasks as done  
- Stylish UI with animations  
- Focus streak counter for motivation  

### ⏳ Pomodoro Timer
- 25/5-minute Pomodoro sessions  
- Start/Pause/Reset with countdown animation  

### 🌤️ Weather Widget
- Fetches current weather of Boston using OpenWeatherMap API  
- Fallback: 29°C & Cloudy if API key fails  
- Modern rectangular design with weather icon and temperature  

### 🕒 Class Countdown
- Countdown to your next class or event  
- Motivational quote after countdown ends  

### 🔥 Daily Motivation
- New random quote shown each day to keep you inspired  

---

## 🖼️ Screenshots

> *(Add screenshots here after deployment for visual appeal, e.g., dark/light mode, responsive layout)*

---

## 🛠️ Technologies Used

- [SvelteKit](https://kit.svelte.dev/)  
- Vanilla CSS (custom styles)  
- [OpenWeatherMap API](https://openweathermap.org/api)  
- [Type.fit Quote API](https://type.fit/api/quotes)  

---

## 📦 Setup & Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/focusboard.git
cd focusboard

# 2. Install dependencies
npm install

# 3. Optional: Set up weather API
# Get an API key from https://openweathermap.org/api
# Paste it into `weather.svelte` as the API_KEY

# 4. Start development server
npm run dev
