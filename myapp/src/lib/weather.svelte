<script>
    let weather = {
        temp: 29,
        description: "Cloudy",
        city: "Boston",
        icon: "04d"
    };

    const API_KEY = ""; // <-- Add OpenWeatherMap API key if available
    const CITY = "Boston";

    async function fetchWeather() {
        if (!API_KEY) return;

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
            if (!res.ok) throw new Error("Weather fetch failed");

            const data = await res.json();
            weather = {
                temp: Math.round(data.main.temp),
                description: data.weather[0].description,
                city: data.name,
                icon: data.weather[0].icon
            };
        } catch (e) {
            console.warn("Using fallback weather data:", e.message);
        }
    }

    fetchWeather();
</script>

<div style="
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: linear-gradient(to right, #eceff1, #f8f9fa);
    border-radius: 1rem;
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
    max-width: 400px;
    margin-top: 1rem;
">
    <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} style="width: 60px; height: 60px;" />
    <div>
        <p style="margin: 0; font-size: 1.1rem; font-weight: 600;">{weather.city}</p>
        <p style="margin: 0.2rem 0 0; font-size: 1rem; color: #333;">{weather.temp}°C – {weather.description}</p>
    </div>
</div>
