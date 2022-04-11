var artistName = document.querySelector("#artistName");
var musicName = document.querySelector("#musicName");
var playMusic = document.querySelector("#playBtn");
var pauseMusic = document.querySelector("#pauseBtn")
var forward = document.querySelector("#forward");
var backward = document.querySelector("#backward");

let songNumber = 0;
let audio,song;


const title = {
	name: ['FelixThe1st','Domas.MOG','Rihanna','Ed Sheeran','Tiësto & Ava Max'],
	title: ['Own Brand Freestyle','Cukrus Citrinoj','Where Have You Been', 'Bad Habits', 'The Motto']
}





/* Functions begining! */

const nextSong = () => {
	if(title.name.length > songNumber + 1){
		songNumber++;
		
	}
	else {
		songNumber = 0;
	}
	audio.pause();
	play();
}
const previousSong = () => {
	audio.pause();
	songNumber--;
	play();
}
const displaySong = () => {
	console.log(songNumber);
	artistName.innerHTML = title.name.at(songNumber);
	musicName.innerHTML = title.title[songNumber];
}
function play() {
	song = '/songs/song' + songNumber + '.mp3';
	audio= new Audio(song);
	audio.play();
	pauseMusic.style.display = "inline";
    playMusic.style.display = "none";
	displaySong();
	return song;
}
function pause() {
	audio.pause();
	pauseMusic.style.display = "none";
    playMusic.style.display = "inline";
}
const downloadSong = () => {
	var link = document.createElement("a");
    link.setAttribute('download', '');
    link.href = song;
    document.body.appendChild(link);
    link.click();
    link.remove();
}





/* Event Listener! */
playMusic.addEventListener("click", play);
pauseMusic.addEventListener("click", pause);
forward.addEventListener("click", nextSong);
backward.addEventListener("click", previousSong);


