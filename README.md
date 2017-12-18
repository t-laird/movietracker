[![Waffle.io - Columns and their card count](https://badge.waffle.io/Cache123/movie-tracker-2.0.png?columns=all)](https://waffle.io/Cache123/movie-tracker-2.0?utm_source=badge)


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Move Tracker
## Thomas Laird, Sam Singer & David Ryan

### Movie Tracker was build using React, Redux, SCSS. Its testing environment uses Enzyme & Jest. I am happy to answer any further questions about the project or how to get a working version set up via email LairdThomasR@gmail.com. The timeframe for project completion was 12/1/17-12/8/17.


#### Instructions for using this application: 

##### Installing the backend:
1. Clone down the repo hosted [here](https://github.com/t-laird/mtracker-backend) or by running the command `git clone https://github.com/t-laird/mtracker-backend.git`
2. `cd` into the directory.
3. Run `npm install`.
4. Create the database using the command `psql -f ./database/users.sql`.
  * If you don't have ruby, install it via the command 
  
      `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`
  * If you don't have postgresql, install it via the command
    `brew install postgresql`
  * If you don't have homebrew, it can be installed via the command

    `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

5. Build the backend using the command `npm run build`.

6. Start up the server using `npm start`.

##### Installing the frontend: 
1. Clone down the repo via the link above or via the command `git clone https://github.com/t-laird/movietracker.git`.

2. `cd` into the directory and run `npm install`.

3. Start up the server by running `npm start`.

4. The frontend should be running on `localhost:3001` or a different port depending on your configuration.





