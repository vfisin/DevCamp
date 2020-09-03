var movie = [
    {
        name: "Martix",
        rating: 5,
        watched: true
    },
    {
        name: "Lunar",
        rating: 4.5,
        watched: true
    },
    {
        name: "Lord of the rings",
        rating: 3,
        watched: false
    },
    {
        name: "Neverending",
        rating: 2,
        watched: true
    }
]

movie.forEach(function(arg) {
    if (arg.watched) {
        console.log("You have watched " + arg.name + " - " + arg.rating + " Stars");
    }
    else { console.log("You have not seen " + arg.name + " - " + arg.rating + " Stars");
    }
}
)

