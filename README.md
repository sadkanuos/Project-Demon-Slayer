# Vue.js Project: Demon-Slayer

This project is a part of the UDEMY COURSE: Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React! by Academind.

This is a turn based click-only game without any in-game graphical assets.
It covers the core functionalities that can be seen in a turn based game.
## Description of the game:
+ The game has two participants: the player 1 and a demon. 
+ The amount of health points changed is kept random (for uncertainity).
+ The ranges of the random number however vary based on actions.
+ The first one to have 0 hp loses.
+ The health bar shows the health for both the players
+ When the game completes, it prompts for a new game.
## Screenshots

### Functionalities
The functionalities are:
+ An attack button
+ A special attack button
+ A heal button
+ A surrender button

#### Attack Button
It damages the target and reduces the health bar. The range of damage points being dealt is higher for demon than the player given the plethora of options.
Whenever the player chooses any action, the demon attacks.

#### Special Attack
It provides enhanced damage to the demon. This can be unlocked only after a certain number of moves are performed by the player and once used, it is disabled for same number of moves.

#### Heal
It provides added health points to the player. But the demon still attacks, so depending on the attack points dealt by demon, and the healing action may result in loss of health points.

#### Surrender
Player 1 loses the game and a new game begins immediately.

### Log:
All the events are logged inside the Battle log section

