class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew =  crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.crew.length == 0 ? (this.docked = true) : (this.docked = false)
    this.phasersCharge = 'uncharged'
    this.associateCrewMember()
  }
  associateCrewMember(){
    this.crew.forEach(function(member){
      member.currentShip = this
    }.bind(this));
  }
}

const grandmasFunc = ( grandma => 2 * 2 )

grandmasFunc(2)
