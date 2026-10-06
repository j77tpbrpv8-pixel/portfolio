// PHOTO LIST. To add a photo: upload it to the "images" folder on GitHub,
// then add one line below in the right list and save ("Commit changes").
//   u = file path, c = caption (used for accessibility and the viewer)
//   r = width divided by height (Sports, Wildlife and Portraits only; e.g. 2/3 = 0.6667)
// The tiles on the homepage show the first 6 photos in each list.

var IMG=[
  {"u": "images/landscape-01.jpg", "c": "Limestone cliff at dusk"},
  {"u": "images/landscape-02.jpg", "c": "Climber on a rock face"},
  {"u": "images/landscape-03.jpg", "c": "Lone tree on a hillside"},
  {"u": "images/landscape-04.jpg", "c": "Walkers on a path beside a stone wall"},
  {"u": "images/landscape-05.jpg", "c": "Stone house on a hill"},
  {"u": "images/landscape-06.jpg", "c": "Road bend below a hillside"},
  {"u": "images/landscape-07.jpg", "c": "Boat on calm water at sunset"},
  {"u": "images/landscape-08.jpg", "c": "Cliff road in golden light"},
  {"u": "images/landscape-09.jpg", "c": "Snow-capped mountain peak"}
];
var WIMG=[
  {"u": "images/wildlife-01.jpg", "c": "Small bird with a white eye-ring on a branch", "r": 0.5976},
  {"u": "images/wildlife-02.jpg", "c": "Raptor in flight against a blue sky", "r": 0.997},
  {"u": "images/wildlife-03.jpg", "c": "Gull on a wall at dusk", "r": 0.6426},
  {"u": "images/wildlife-04.jpg", "c": "Owl perched among leaves", "r": 0.7049},
  {"u": "images/wildlife-05.jpg", "c": "Hawk looking up from a tree", "r": 0.7483},
  {"u": "images/wildlife-06.jpg", "c": "Finch eating seed at a feeder", "r": 0.5295},
  {"u": "images/wildlife-07.jpg", "c": "Heron taking off from the water", "r": 1.114}
];
var SIMG=[
  {"u": "images/sports-01.jpg", "c": "Coach holding a match ball on the touchline", "r": 0.7087},
  {"u": "images/sports-02.jpg", "c": "Player running across the pitch, seen from above", "r": 0.6604},
  {"u": "images/sports-03.jpg", "c": "Players watching the game from the sideline", "r": 0.6667},
  {"u": "images/sports-04.jpg", "c": "Player dribbling the ball under pressure", "r": 0.6259},
  {"u": "images/sports-05.jpg", "c": "Player with the ball, seen from behind at dusk", "r": 0.6122},
  {"u": "images/sports-06.jpg", "c": "Player in yellow looking down after the match", "r": 0.6155},
  {"u": "images/sports-07.jpg", "c": "Player smiling on the pitch", "r": 0.6667},
  {"u": "images/sports-08.jpg", "c": "Player jogging across the pitch", "r": 0.6201}
];
var PIMG=[
  {"u": "images/portraits-01.jpg", "c": "Boy in silhouette against a sunset sky", "r": 0.6657},
  {"u": "images/portraits-02.jpg", "c": "Father and son smiling among pink flowers", "r": 0.6666},
  {"u": "images/portraits-03.jpg", "c": "Person crouching at the water's edge at sunset", "r": 0.6527},
  {"u": "images/portraits-04.jpg", "c": "Grandmother and baby by the pool", "r": 0.6281},
  {"u": "images/portraits-05.jpg", "c": "Two people laughing on a leather sofa", "r": 0.7247},
  {"u": "images/portraits-06.jpg", "c": "Woman with a wine glass and a child at a fence", "r": 0.6657},
  {"u": "images/portraits-07.jpg", "c": "Four friends smiling outdoors", "r": 0.6657}
];

// PRESETS PAGE PHOTOS (before/after sliders and samples)
var PBASE="images/presets/dusk-before.jpg",PDUSK="images/presets/dusk-after.jpg";
var PFROST1="images/presets/frost-sample-1.jpg";
var PPRISM1="images/presets/prism-sample-1.jpg";
var PFROST2="images/presets/frost-sample-2.jpg";
var PFROSTO="images/presets/frost-before.jpg",PFROSTE="images/presets/frost-after.jpg";
var PDUSK2="images/presets/dusk-sample-2.jpg";
var PFROST3="images/presets/frost-sample-3.jpg";
var PDUSK3="images/presets/dusk-sample-3.jpg";
var PPRISMO="images/presets/prism-before.jpg",PPRISME="images/presets/prism-after.jpg";
var PPRISM2="images/presets/prism-sample-2.jpg";
var PPRISM3="images/presets/prism-sample-3.jpg";
