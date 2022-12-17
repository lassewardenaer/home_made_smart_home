import argparse
from gtts import gTTS 
import os
from pygame import mixer

#v---------- sayText ---------- #
def sayText(text, fileName="temp.mp3"):
    tts = gTTS(line)
    tts.save(fileName)

    mixer.init()
    mixer.music.load(filename)
    mixer.music.play()

    seconds = 0
    while mixer.music.get_busy() == 1:
        time.sleep(0.25)
        seconds += 0.25
    mixer.quit()
    os.remove(fileName)

#v---------- getText ---------- #
def getText(textFile):
    with open(textFile) as f:
        lines = f.readlines()
    
    for line in lines:
       sayText(line)
    
    f.close()

#v---------- main ---------- #
def main():
    tts = gTTS('hello')


if __name__ == '__main__':
    main()