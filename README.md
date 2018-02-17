Flappy bird for p5.play

[p5.js reference](https://p5js.org/reference/)

[p5.play reference](http://p5play.molleindustria.org/docs/classes/p5.play.html)

[p5.play Sprite reference](http://p5play.molleindustria.org/docs/classes/Sprite.html)


# Step 1

Add single bird animation and sprite.

# Step 2

Add cloud images, and a single cloud sprite.
Add cloud movement logic: once cloud leaves screen, move it to the right,
and select new random image, speed and y position

Challenge: add hills.

# Step 3

Add bird movement. Add `start` state variable.

Challenge: use `keyWentDown()` and `mouseWentDown()` to set `bird.velocity` to
implement jumping instead of flying up.

# Step 4

Add bird bouncing, animate bird only when flying.

# Step 5

Add death when bird goes out of the screen using the new `dead` state variable.

# Step 6

Add pipe. Add collision detetction between bird and pipe.

Challenges:
* make pipe reappear like clouds
* make vertical position variable

# Step 7

Change state handling based on functions and a single state variable.

Challenges:
* Show score (see text() function in p5.js reference)
* Show title (eg. "Flappy bird") at the beginning
* Show "Game over" message at the end

Pro challenges:
* Improve collider (see setCollider() in p5.play Sprite reference)
* Add more pipes (eg. at top)
* Make game restartable
* Add background, parallax scroll
* Add moving Sun and Moon (maybe also day/night cycle)
