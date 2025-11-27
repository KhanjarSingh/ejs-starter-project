const express = require('express')
let ejs = require('ejs')
const app = express()

let movies = [{
        title: "Inception",
        releaseYear: 2010,
        rating: 8.8,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        image:'https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8'
    },{
        title: "R... Rajkumar",
        releaseYear: 2013,
        rating: 5.3,
        actors: ["Shahid Kapoor", "Sonakshi Sinha", "Elliot Page"],
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOS0mCY-fUCRnZLSM-z-wUqBK5mOcuXqlIIg&s'

    },{
        title: "Hum Sath Sath Hai",
        releaseYear: 1999,
        rating: 6.4,
        actors: ["Salman Khan", "Saif Ali-Khan", "Sonali Bendre"],
        image:'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p68519_p_v8_ac.jpg'
    },{
        title: "Kuch Kuch Hota Hai",
        releaseYear: 1998,
        rating: 7.5,
        actors: ["Sharukh Khan", "Kajol ", "Rani Mukharji"],
        image:'https://m.media-amazon.com/images/M/MV5BMmQ0ZjliZTgtMjQ3NC00N2NiLTkxNjktY2VkOTQ2N2QyODNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    }]

app.set('view engine', 'ejs');

app.get('/movie', (req, res) => {
    res.render('movie', {
        title: "Inception",
        releaseYear: 2010,
        rating: 8.8,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        image:'https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8'
    })
})

app.get('/movie-with-image',(req,res)=>{
    res.render('layout',{movies})
})


app.listen(3000, () => {
    console.log(`server running at http://localhost:3000`)
})