# [toy robot 2.0] make JS vanilla project using es6
- import, export in Node
- toy robot using es6 classes
- "make a callback in the robot to notify that did move... "

# Extras Challenges:

## Improving existing code:
1. [] Add n x n board size.
2. [] Make the board accept 2 robots. Both robots can't be in the same spot at the same time. add the rules to avoid this.
3. [] Write about hoe SOLID principles are applied to this challenge.
4. [] Add notes in the code

## refactoring how to run the commands.
1. Add a `Play({commands})` that accepts an array of commands like `[place, move, report]` and run different sequences of commands passed.

## Challenge: board.
1. 3d board.

## Challenge: Inheritance.
1. make a specialized `Battle droids` class that inherits from Robot.
2. Use this `Battle droids` class to paly the game. (1 robot only)
3. Add another `Battle droids` class to play the game (2 cyborgs)

## Challenge: Add a new Type of player.
1. Add a type of `Human` to the players.

## Challenge: change the Class inheritance to Composition.
1. Create a type of Cyborg that has behaviour from Robot and Human.

## Challenge: USE SETTIMEOUT AND set interval to the board
1. Use this functions for added functionality.
2. use let in a for loop (block scope)

```
const compose = (...functionsArray) => functionsArray.reduce((f, g) => (x) => f(g(x)) );

const getComposedReportAsEmail = compose(basicEmailReport, getFirstBattle);
```