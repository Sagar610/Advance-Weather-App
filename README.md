# Beginner Weather App

This is a simple React application that allows users to search for current weather information by entering a city name. It fetches data from the OpenWeather API and displays it in an easy-to-read format.

## Features

- Search weather by city name
- Displays current temperature, "feels like" temperature, and weather description
- User-friendly interface with responsive design

## Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS (for styling)
- OpenWeather API

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sagar610/Advance-Weather-App.git
   cd Advance-Weather-App
   ```

2. **Install dependencies**

   Ensure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   This will start the app on `http://localhost:3000`.

4. **Environment Variable Setup**

   Replace the `apiKey` variable in `App.js` with your own OpenWeather API key:

   ```javascript
   const apiKey = `YOUR_API_KEY_HERE`;
   ```

   You can get a free API key from [OpenWeather](https://openweathermap.org/api).

## File Structure

```
.
├── src
│   ├── App.js      # Main application component
│   ├── App.css     # Styling for the application
│   └── index.js    # Entry point for the React app
├── public
│   ├── index.html  # HTML template
│   └── favicon.ico # App icon
└── package.json    # Project dependencies and scripts
```

## How to Use

1. Open the application in your browser.
2. Enter a city name in the input field.
3. Click the **Get Weather** button.
4. View the weather information for the entered city.

## Example Screenshots

### Input Section
![Input Section Screenshot](#)

### Weather Display Section
![Weather Display Screenshot](#)

_Replace `#` with links to your screenshots._

## Known Issues

- Ensure valid city names are entered; otherwise, you may see an error message.
- No support for advanced search features (e.g., ZIP code or coordinates).

## Future Enhancements

- Add support for displaying more detailed weather information (e.g., humidity, wind speed).
- Include error handling for network issues.
- Enhance the UI/UX with additional styling.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute by submitting issues or pull requests!
