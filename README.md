# Netflix Clone with API Integration

This is a Netflix Clone built with **Vite** and **React**, featuring movie data dynamically fetched from an API. It replicates the user interface of Netflix, displaying movies and details in a grid format.

## Demo
Check out the live demo: [Netflix Clone](https://nexflix-clone-with-api-integration.onrender.com/)

## Features
- Dynamic movie data fetching using APIs.
- Fully responsive design for mobile and desktop devices.
- Interactive UI inspired by Netflix.
- Organized and scalable codebase with React components.

## Technologies Used
- **Vite**: For fast build and development.
- **React**: For building the user interface.
- **CSS/SCSS**: For styling.
- **Movie API**: For fetching dynamic movie data.

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/JoseMarioCarranza/NetflixCloneApiIntegration
   ```

2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## API Integration
This project uses a movie API to fetch data dynamically. Replace the placeholder API key in the project with your own:

1. Sign up for an API key (e.g., TMDB or another movie API).
2. Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_api_key_here
   ```
3. Restart the development server.

## Project Structure
```
src/
├── components/       # Reusable React components
├── pages/            # Main pages of the application
├── assets/           # Static assets like images
├── styles/           # Global and component-specific styles
├── services/         # API integration logic
└── App.jsx           # Main application entry point
```

## Contributing
Contributions are welcome! If you have suggestions or find any bugs, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author
- José Mario Rivera Carranza  
  [Check my github profile](https://github.com/JoseMarioCarranza)
  [Check my personal page](https://www.ingjosemario.com)
