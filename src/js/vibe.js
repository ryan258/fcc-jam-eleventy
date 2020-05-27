const vibes = [
    'You\'re a towel!',
    'Wanna get high?',
    'I have no idea what\'s going on...',
    'That\'s the melody to Funky Town.'
]

// choose a random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

// display a good vibe
document.querySelector('.vibe').append(vibe)