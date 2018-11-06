class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }
  engageWarpDrive(){
    if (this.position == 'pilot' && this.currentShip != 'Looking for a Rig'){
      this.currentShip.warpDrive = 'engaged'
    } else {
      return 'had no effect'
    }
  }
  setsInvisibility(){
    if (this.position == 'Defender' && this.currentShip != 'Looking for a Rig'){
      this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }
  chargePhasers(){
    if (this.position == 'gunner' && this.currentShip != 'Looking for a Rig'){
      this.currentShip.phasersCharge = 'charged'
    } else {
      return 'had no effect'
    }
  }

}

const crewMember1 = new CrewMember('Pilot')
const crewMember2 = new CrewMember('Defender')
// console.log( new CrewMember('Pilot'))
