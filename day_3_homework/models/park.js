const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs
}

Park.prototype.addDinosaur = function(dinosaur) {
  return this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaurToRemove) {
  const dinosaurIndex = this.dinosaurs.indexOf(dinosaurToRemove)
  this.dinosaurs.splice(dinosaurIndex, 1)
}

Park.prototype.findPopularDinosaur = function() {
  let mostPopular = this.dinosaurs[0];
  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
      mostPopular = dinosaur
    }
  }
  return mostPopular
}

Park.prototype.findAllBySpecies = function(species) {
  let allBySpecies = []
  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      allBySpecies.push(dinosaur)
    }
  }
  return allBySpecies
}

Park.prototype.totalVisitorsPerDay = function() {
  let totalVisitorsPerDay = 0;
  for (const dinosaur of this.dinosaurs) {
    totalVisitorsPerDay += dinosaur.guestsAttractedPerDay
  }
  return totalVisitorsPerDay
}

// Extensions
Park.prototype.removeAllDinosaursBySpecies = function(species) {
  let dinosaursToKeep = []
  for (const dinosaur of this.dinosaurs) {
    if (species !== dinosaur.species) {
      dinosaursToKeep.push(dinosaur)
    }
  }
  return this.dinosaurs = dinosaursToKeep
}

Park.prototype.dinosaursByDietType = function() {
  let dietTypeObject = {
    herbivore: 0,
    omnivore: 0,
    carnivore: 0
  }
  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.diet === 'herbivore') {
      dietTypeObject.herbivore ++
    } else if (dinosaur.diet === 'omnivore') {
      dietTypeObject.omnivore ++
    } else if (dinosaur.diet === 'carnivore') {
      dietTypeObject.carnivore ++
    }
  }
  return dietTypeObject
}




module.exports = Park;