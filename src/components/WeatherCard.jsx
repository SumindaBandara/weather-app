function WeatherCard({ data }) {
    const { name, main, weather } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <div className="flex justify-center items-center my-4">
          <img src={iconUrl} alt={weather[0].description} className="w-20 h-20" />
        </div>
        <p className="text-4xl font-bold text-gray-800">{Math.round(main.temp)}°C</p>
        <p className="text-gray-600 capitalize">{weather[0].description}</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-500">Humidity</p>
            <p className="font-semibold">{main.humidity}%</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-500">Feels Like</p>
            <p className="font-semibold">{Math.round(main.feels_like)}°C</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>
    );
  }
  export default WeatherCard;