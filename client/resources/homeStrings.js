homeStrings = {
  whatIsBlume: {
    title: "The idea",
    "en": 'At Blume Microfarms, we are aiming to revolutionize the world of agriculture by allowing anyone and everyone to easily grow their own food. Whether you have a little space in the backyard, access to a roof, balcony or more, our "reimagined greenhouses" will provide a unique solution for your unique growing conditions. Not only will our growing systems provide you with an easy space to grow, but they will also provide you with a powerful set of tools which will allow you to control and monitor various aspects of your plants\' environment. This allows you to develop, perfect and capitalize on your own or other\'s growing techniques, allowing you to yield delicous and healthy plants.'
  },
  blumeForYou: {
    title: "How will Blume help YOU?"
  },
  gardener: {
    title: "Are you already a grower?",
    "en": "Have you ever wished you could have complete control over your plants' environment? Do you wish you could monitor many of the variables affecting your plants' well being? Do you wish it was less work for you to take care of your plants? Do you wish you could grow food year round? With our units, you can control the temperature at which you want your unit to either vent or heat as well as the time you would like to shade your plants. You will be able to monitor the temperature, pH level and the amount of nutrients left in the water. All of this is right here on our website! On top of all of that, you will be able to grow food year round with our highly insulated unit with a heater built in for those cold winter months!"
  },
  newbie: {
    title: "Are you considering growing your own food?",
    "en": "The powerful combination of our revolutionary growing systems and our convenient web app will take a lot of the load of growing and caring for your plants off your shoulders! You can let us know type of plant you are growing in an individual unit and if it is in our botanical library, we will automatically set the recommended settings for temperature and shading for you as well as let you know the proper nutrients that this plant needs to thrive. We will also monitor the pH level and the amount of nutrients in the water and let you know of any action that you need to take to ensure the best health for your plants. You can also just check out the recommended settings for a plant and control everything on your own!"
  },
  scale: {
    title: "Scale at your own pace.",
    "en": "Whether you only want to grow a few plants at a time or you want to grow as much food as you can in a traditional greenhouse but don't have enough space, our growing systems are the solution for you! Just grow a few plants in one unit or connect multiple units together and grow a the same amount of food you could in a traditional greenhouse in a fraction of the space AND a fraction of the cost!"
  },
  whatsInside: {
    title: "What's inside?",
    "en": 'Our growing systems are not only ideal for growing your own food on any scale you want and easy and convenient for any skill level, but they also have a "brain"! Our growing systems can monitor the temperature inside the unit and automatically vent or heat up whenever the temperature thresholds that you have set are reached, monitor the level of your water basin, the pH as well as the amount of nutrients in the water and automatically shade the plants with a shade cloth. All you have to do is connect your unit to a power source and plug our "magic" box into an ethernet port and you will immediately be able to start monitoring your growing system right here on our website!'
  },
  controlIt: {
    title: "Control it anywhere!",
    "en": "If you have access to the internet and a web browser like you are using right now, you can monitor the status of your growing system and your plants' environment as well as control your growing system's settings. Check out what this is like on this demo with live data!"
  }
};

// Make sure the strings don't get messed with
(function() {
  for (var obj in homeStrings) {

    for ( var prop in homeStrings[obj] ) {
      Object.defineProperty( homeStrings[obj], prop, { writable: false, configurable: false } );
    }

    if ( typeof homeStrings[obj] === "object" ) {
      Object.freeze(homeStrings[obj]);
    }
  }
  Object.freeze(homeStrings);
})();
