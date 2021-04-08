# AV_Accessibility_Research_Project

*Note: This is a part of the Flashback application but its own homework project.*

***NOTE for links below:** It might get you to login or sign up first. Login or sign up and then click the link here again*

**Audio Example**
[Live Audio Example](https://flashback.nategrift.com/media/watch/8)

**Video 1 Example**
[Live Movie Example](https://flashback.nategrift.com/media/watch/14)

**Video 2 Example**
[Live Tvshow Example](https://flashback.nategrift.com/media/watch/24)

**Video player source**
[Github .vue file](https://github.com/nategrift/Grift_N_Mellor_S_Roku_Flashback/blob/main/client/src/pages/MediaPlayer.vue)


## Research

After searching around the internet I found that one of the main things that was recommended and best for accessibility is:

  - Ability to adjust time
  - Easy way to play and pause
  - Key binds to play, pause, volume, and adjust time 
  - Ability to adjust speed
  - Captions

In addition to all this, I need to make sure it is mobile friendly.  Creating a mobile controls is very difficult.  Most mobile devices are already built for accessibility,and have an amazing built in video player. I made the default controls exist for mobile devices rather then my custom ones to better suit everyones needs.

## Implementation

1. Created a basic vue component that was a media player that could **play both video and audio**.

2. Add the ability to **adjust time, play, pause, and adjust volume**.

3. Add **keybinds** to the media player
    - `Up and Down Arrows` for volume
    - `Left and Right Arrows` for time
    - `Space bar` for play/pause

4. Add the ability to adjust speed.

5. Captions
    - Added captions to videos

6. Transcript
    - Added transcripts to videos and audio which can be found with the paper looking button on the right.

7. User Experience is clean and easy to see with large font.

### References

https://www.w3.org/2008/06/video-notes 

https://aoda.ca/web-accessibility-guidelines-for-videos/ 

https://www.w3.org/WAI/media/av/planning/

https://dequeuniversity.com/checklists/web/audiovideo 
