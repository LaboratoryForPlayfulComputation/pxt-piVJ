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
  

}