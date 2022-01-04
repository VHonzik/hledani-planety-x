# Hledání Planety X (Czech for Search for Planet X)

This repo contains source code for unofficial Czech version of companion web-app for the board game [Search For Planet X](https://boardgamegeek.com/boardgame/279537/search-planet-x) by [Foxtrot Games](https://foxtrotgames.com/planetx/), published by [Renegade Game Studios](https://renegadegamestudios.com/the-search-for-planet-x/). I am not affiliated with Foxtrot Games or Renegade Game Studios in any way. You will need to purchase the board game Search For Planet X in order to play. This is a work of passion for the excellent board game but I repeat this web-app is not officially supported or endorsed by the game authors or publisher. Use at your own risk!

~~You can find the companion web-app live [here](https://hledani-planety-x.herokuapp.com/)~~ (WIP)

## Development

The project is using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

Note that all the games are stored as JSON files, where the file name is the game code. Due to the nature of git and also size concerns, I have chosen to compress them into `public\maps.7z` instead of committing them individually to this repo. You will need to extract them in place before you can run the server locally. The expected file structure is `public\maps\*.json`.



