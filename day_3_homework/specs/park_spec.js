const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let stegosaurus;
  let tricerotops;
  let velociraptor;

  beforeEach(function () {
    stegosaurus = new Dinosaur('stegosaurus', 'herbivore', 25)
    tricerotops = new Dinosaur('tricerotops', 'herbivore', 40)
    velociraptor = new Dinosaur('velociraptor', 'carnivore', 45)
    park = new Park('Jurrasic Park', 10, [stegosaurus, tricerotops, velociraptor])
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function() {
    pterodactyl = new Dinosaur('pterodactyl', 'omnivore', 30)
    park.addDinosaur(pterodactyl)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur to its collection', function() {
    park.removeDinosaur(velociraptor)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that atracts the most visitors', function() {
    const popularDinosaur = park.findPopularDinosaur()
    const actual = popularDinosaur.guestsAttractedPerDay
    assert.strictEqual(actual, 45);
  });

  it('should be able to find all dinosaurs for a specific species', function() {
    let listOfDinosaurs = park.findAllBySpecies("velociraptor")
    const actual = listOfDinosaurs.length
    assert.strictEqual(actual, 1);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 110);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    let dailyVisitors = park.totalVisitorsPerDay()
    const actual = (dailyVisitors * 260) // my park shuts at weekends
    assert.strictEqual(actual, 28600);
  });

  it('should be able to calculate total revenue for one year', function() {
    let dailyVisitors = park.totalVisitorsPerDay()
    const annualVisitors = (dailyVisitors * 260) 
    const actual = (annualVisitors * 10)
    assert.strictEqual(actual, 286000);
  });

  // Extensions
  it('should be able to remove all dinosaurs of a specific species', function() {
    park.removeAllDinosaursBySpecies("tricerotops")
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 2);
  });

  it('should be able to provide an object containing each of the diet types and number of dinosaurs matching the diet type', function() {
    const dietObject =  park.dinosaursByDietType()
    const actual = dietObject.herbivore
    assert.strictEqual(actual, 2);
  });

});







