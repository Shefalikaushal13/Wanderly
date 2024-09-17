export const selectTravelers=[
    {
        id:1,
        title:'Me,Myself and I',
        desc:'Solo ride untill I die',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'Me and My Bae',
        desc:'Grab your passport and my hand',
        icon:'🥂',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'New places, same crew, endless memories!',
        icon:'🏠',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friendgroup',
        desc:'The one where the trip finally makes it out of group chat',
        icon:'🏘️',
        people:'5 to 10 people'
    },
]

export const selectBudget=[
    {
        id:1,
        title:'Cheap',
        desc:'I am conscious of costs',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Not my #1 concern',
        icon:'💰'
    },
    {
        id:3,
        title:'Luxurious',
        desc:'You only live once',
        icon:'💸'
    },
]

export const AI_prompt= 'Generate travel plan for Location:{location}, for {totalDays} Days for {travelers} with a {budget} budget Give me hotels options list with hotel name, address, price, hotel image url, geocoordinates, rating, description and suggest itinerary with place name, place details, place image url, geocoordinates, rating, ticket pricing, travel time to each location for {totalDays} days with each day planned with best time to visit in JSON format'