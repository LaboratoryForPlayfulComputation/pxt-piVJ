//% color=#ab86f9 weight=5 icon="\uf167"
namespace vj {

    /**
     * Play youtube video
     */
    //% weight=90
    //% blockId=youtube_play block="play video" blockGap=8
    export function play(): void {
        serial.writeLine("play");
    }

    /**
     * Pause youtube video
     */
    //% weight=90
    //% blockId=youtube_pause block="pause video" blockGap=8
    export function pause(): void {
        serial.writeLine("pause");
    }

    /**
     * Stop youtube video
     */
    //% weight=90
    //% blockId=youtube_stop block="stop video" blockGap=8
    export function stop(): void {
        serial.writeLine("stop");
    }

    /**
     * Mute youtube video
     */
    //% weight=90
    //% blockId=youtube_mute block="mute video" blockGap=8
    export function mute(): void {
        serial.writeLine("mute 1");
    }

    /**
     * Unmute youtube video
     */
    //% weight=90
    //% blockId=youtube_unmute block="unmute video" blockGap=8
    export function unmute(): void {
        serial.writeLine("mute 0");
    }    
  
    /**
     * Set youtube video by id
     */
    //% weight=90
    //% blockId=youtube_setvideo block="set video by id %id" blockGap=8
    export function setVideoById(id: string): void {
        let command = "id " + id;
        serial.writeLine(command);
    }    

    /**
     * Set playback rate
     * @param speed the playback rate of the video between ``0`` and ``200``, eg: 100
     */
    //% weight=90
    //% blockId=youtube_setrate block="set playback rate %speed| %" blockGap=8
    //% speed.min=0 speed.max=200
    export function setPlaybackRate(speed: number): void {
        let command = "scaledspeed " + speed;
        serial.writeLine(command);
    }  

    /**
     * Seek to
     */
    //% weight=90
    //% blockId=youtube_seekto block="seek to %hour| : %minute| : %second" blockGap=8
    export function seekTo(hour: number, minute: number, second: number): void {
        let hoursToSeconds = hour * 60 * 60;
        let minutesToSeconds = minute * 60;
        let time = hour + minute + second; 
        let command = "seek " + time;
        serial.writeLine(command);
    }  

    /**
     * Set volume
     */
    //% weight=90
    //% blockId=youtube_setvolume block="set volume %volume" blockGap=8
    export function setVolume(volume: number): void {
        let command = "volume " + volume;
        serial.writeLine(command);
    }  

}