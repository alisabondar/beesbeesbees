var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

foragerBee = new ForagerBee();
foragerBee.forage('pollen');
foragerBee.forage('flowers');
foragerBee.forage('gold');
console.log(foragerBee.treasureChest.length);
