###POMODORO CLOCK LOGIC

User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
User Story: I can reset the clock for my next pomodoro.
User Story: I can customize the length of each pomodoro.

- We take the respective numbers of session-length and break-length and turn them into a variable with parseInt().
- After that we want to turn those minutes into seconds so its easier to work with the countdown.
- Next we want to give funcionality to the "-" and "+" buttons, so everytime we press it we take the value and reduce/raise it by one minute. They will only work when the pomodoro is paused.
- When we click the circle the logic starts. 
-	We create a function called pomodoro() which repeats itself every second with setInterval.	
- When the session is over, I activate breakTime and proceed to repeat the same interaction, only with the value of the break length given by the user.
