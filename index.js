const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors({
    origin : "*"
}));

app.get("/movie/get-movies", (req, res) => {
  res.json([
    {
      _id: "6703d95f72875f399d5d1aa3",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/vettaiyan-et00379391-1727938465.jpg",
      title: "Vettaiyan",
      director: "T.J. Gnanavel",
      description:
        "A sought-after supercop gets caught in a series of unexpected events in a criminal case. Amidst his struggle to justify the act, he must confront his moral compass while fighting corrupt, larger-than-life forces. Vettaiyan explores the underbelly of crime investigations with one man`s fight against a world, where justice is a rare commodity.",
      year: 2024,
      genre: "Action,Drama,Thriller",
      shows: {
        "2024-10-15": [
          {
            time: "07:00 AM",
            seats: 16,
            id: "show_20241015_1",
            bookings: [
              {
                name: "Sanjai Kannan G",
                email: "sanjaikannang@gmail.com",
                phoneNumber: 9345725595,
                seats: 10,
              },
              {
                name: "Sanjai Kannan G",
                email: "sanjaikannang@gmail.com",
                phoneNumber: 9345725595,
                seats: 30,
              },
              {
                name: "Sanjai Kannan G",
                email: "sanjaikannang@gmail.com",
                phoneNumber: 9345725595,
                seats: 10,
              },
              {
                name: "vasanth",
                email: "vasanth@gmail.com",
                phoneNumber: "988787877",
                seats: 2,
              },
              {
                name: "sad",
                email: "asd",
                phoneNumber: "334",
                seats: 2,
              },
            ],
          },
        ],
        "2024-10-16": [
          {
            time: "05:00 PM",
            seats: 130,
            id: "show_20241016_1",
          },
          {
            time: "08:00 PM",
            seats: 40,
            id: "show_20241016_2",
            bookings: [
              {
                name: "sanjai",
                email: "sanjai@gmail.com",
                phoneNumber: 9345725595,
                seats: 15,
              },
              {
                name: "Gokul",
                email: "gokul@gmail.com",
                phoneNumber: 1234567890,
                seats: 5,
              },
            ],
          },
        ],
        "2024-10-17": [
          {
            time: "05:00 PM",
            seats: 130,
            id: "show_20241017_1",
          },
          {
            time: "08:00 PM",
            seats: 60,
            id: "show_20241017_2",
          },
        ],
        "2024-10-18": [
          {
            time: "05:00 PM",
            seats: 130,
            id: "show_20241018_1",
          },
          {
            time: "08:00 PM",
            seats: 60,
            id: "show_20241018_2",
          },
        ],
        "2024-10-19": [
          {
            time: "05:00 PM",
            seats: 130,
            id: "show_20241019_1",
          },
          {
            time: "08:00 PM",
            seats: 60,
            id: "show_20241019_2",
          },
        ],
        "2024-10-20": [
          {
            time: "05:00 PM",
            seats: 130,
            id: "show_20241020_1",
          },
          {
            time: "08:00 PM",
            seats: 60,
            id: "show_20241020_2",
          },
        ],
      },
    },
    {
      _id: "6704bed708b5c5629eb8661b",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/sattam-en-kayil-et00412489-1726743894.jpg",
      title: "Sattam En Kayil",
      director: "Chachi",
      description:
        "Gowtham hides a body in his car after an accident, but when he`s arrested for drunk driving, the car is taken to the police station, unnoticed. This sets off a series of twists and turns that complicate his situation. How does he overcome this increasingly dire predicament?",
      year: 2024,
      genre: "Action,Drama,Thriller",
      shows: {
        "2024-10-15": [
          {
            time: "07:00 AM",
            seats: 88,
            id: "show_20241015_1",
            bookings: [
              {
                name: "Sanjai Kannan G",
                email: "sanjaikannang@gmail.com",
                phoneNumber: 9345725595,
                seats: 12,
              },
            ],
          },
          {
            time: "10:00 AM",
            seats: 50,
            id: "show_20241015_2",
          },
        ],
        "2024-10-16": [
          {
            time: "03:00 PM",
            seats: 130,
            id: "show_20241016_1",
          },
          {
            time: "06:00 PM",
            seats: 60,
            id: "show_20241016_2",
          },
        ],
        "2024-10-17": [
          {
            time: "10:00 PM",
            seats: 130,
            id: "show_20241017_1",
          },
          {
            time: "01:00 PM",
            seats: 60,
            id: "show_20241017_2",
          },
        ],
        "2024-10-18": [
          {
            time: "07:00 PM",
            seats: 130,
            id: "show_20241018_1",
          },
          {
            time: "11:00 PM",
            seats: 60,
            id: "show_20241018_2",
          },
        ],
        "2024-10-19": [
          {
            time: "04:00 PM",
            seats: 130,
            id: "show_20241019_1",
          },
          {
            time: "07:00 PM",
            seats: 60,
            id: "show_20241019_2",
          },
        ],
        "2024-10-20": [
          {
            time: "02:00 PM",
            seats: 130,
            id: "show_20241020_1",
          },
          {
            time: "05:00 PM",
            seats: 60,
            id: "show_20241020_2",
          },
        ],
      },
    },
  ]);
});

app.get("movie/:id",(req,res) => {

});

app.post("/book-ticket",(req,res) => {

});

app.listen(8000);
