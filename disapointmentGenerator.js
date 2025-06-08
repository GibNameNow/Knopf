const disapointmnetStart = ['Im disapointet!', 'Your mom is disapointed!', 'You are a Disapointment!',
                            'Your disapointinimation is immesurable!', 'Your disapointment level is over XXXX Thousend!',
                            'Your Dog is disapointed!'];
const disapointmnetMid = ['You have to train another XXXX thousend years.','You got any other plans today?', 
                 'Do you want to try another XXXX thousend hours?','Are you even trying?', 'Just click me!'];
const disapointmnetFinal = ['Do IT!', 'Now or Never!', 'You can!'];

//0 to maxVal non decimal Val will be generated
const getRndValue = (maxVal) => {
    return Math.floor(Math.random() * maxVal);
}

const disapointmentFactory = () => {
    return {
        _disapointmentOne: '',
        _disapointmentTwo: '',
        _disapointmentThree: '',
        generateDisapointment(){
            let disapointmentOne = disapointmnetStart[getRndValue(disapointmnetStart.length)];
            let disapointmentTwo = disapointmnetMid[getRndValue(disapointmnetMid.length)];

            this._disapointmentOne = this.setDisapointmentLevel(disapointmentOne);
            this._disapointmentTwo = this.setDisapointmentLevel(disapointmentTwo);
            this._disapointmentThree = disapointmnetFinal[getRndValue(disapointmnetFinal.length)];
        },
        setDisapointmentLevel(str){
            const placeHolder = "XXXX";

            if(str.includes(placeHolder)){
                str = str.replace(placeHolder, getRndValue(10).toString());
            }
            return str;
        },
        makeNoise(){
            this.generateDisapointment();
            console.log(this._disapointmentOne + ' ' + this._disapointmentTwo + ' ' + this._disapointmentThree);
        }
    }

}

let dailyDisapointment = disapointmentFactory();
dailyDisapointment.makeNoise();
