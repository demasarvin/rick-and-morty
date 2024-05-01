# Rick and Morty Character Explorer

## Overview
This project is a web application that allows users to explore characters from the "Rick and Morty" series. It utilizes the REST API provided by The Rick and Morty API for fetching data.

## Features

### Characters List Page (https://rick-and-morty-mostrans.vercel.app)
- Displays a list of characters from the "Rick and Morty" series.
- Clicking on a character redirects to the Detail Character page.

### Detail Character Page (https://rick-and-morty-mostrans.vercel.app/:id)
- Shows detailed information about the selected character including name, status, and other attributes.
- Users can assign the character to a unique location.

### Location Page (https://rick-and-morty-mostrans.vercel.app/locations)
- This page displays a list of location that has been assigned by on the Detail Character Page

### Character By Location Page (https://rick-and-morty-mostrans.vercel.app/locations/location-name)
- This page will dynamically fill up with displays a list of characters that are in a specific location.
- Clicking on a character redirects to the Detail Character page.

## Data Source
- Primary data is fetched using the REST API endpoint: `https://rickandmortyapi.com/api`.

## Getting Started
To run this project locally, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/demasarvin/rick-and-morty.git
```
2. Navigate to the project directory:
```bash
cd rick-and-morty
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```

## About
This project was created with ReactJS and Bootstrap
