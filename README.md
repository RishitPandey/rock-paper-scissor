<div align='center'>
	<h1>Rock Paper Scissor Game Using Javascript</h1>
</div>

## Contents ##

- [File Structure](#file-structure)
- [How it's Made](#how-its-made)
- [Source](#source)

<a name='file-structure'></a>
## File Structure ##

The file consists of only three files the html, css and js files. The `index.html` file contains
the text and the emojis. The css file contains the styling and the js file contains all the logic
used to make this game.

<a name='how-its-made'></a>
## How it's Made ##

The logic behind this game is to play a game against the computer which randomly chooses among the
three available options namely, rock, paper and scissor. This is done using the Math random function.

```javascript
	var computerSelection = Math.random() * 3
```

The Math.random function creates random number between 0 and 1 and then it is multiplied by the number
of available options so to get the required index of the options array. But here the number returned
through the function is not an integer so,

```javascript
	var computerSelection = Math.floor(Math.random() * 3)
```

it is converted into an integer using floor function. Then it the computer selects it option as you
select your option.

So now whether you or computer wins a game then the score needs to be changed. For this, the score has
its span inside the div for the 'You' and the 'Computer' part. This contains a text as 0. Now to change
this we need to parse text as an integer to the javascript function, increment it and then return it
to the span innerText.

Challenge: So when I was making this project I tested it various times and for a long time, but I
 didn't get to win 3 times in a row. So a challenge for you is to win 3 times in a row against the computer.
 Can you do it? I don't think so.


<a name='source'></a>
## Source ##

So the inspiration for this game was from the web dev simplified guy or Kyle.
Thank You Kyle for helping in this game!

To get the emojis used here go to: [getemojis.com](https://getemojis.com)
