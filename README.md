# SIN Validator
**Rules:**<br/>
Has to be 9 digits
<br/>
121 212 <--- Invalid sin<br/>
121 212 121 <--- Invalid sin<br/>
046 454 286 <--- A fictitious, but valid, SIN.<br/>
<br/>
The way a SIN is then validated is by multiplying every second digit by 2

=== 0 4 6 4 5 4 2 8 6 <br/>
=== 0 8 6 8 5 8 2 16 6<br/>

then, add all of the digits together (note that 16 is treated as +1+6. NOT +16)

0 + 8 + 6 + 8 + 5 + 8 + 2 + 1+6 + 6 = 50<br/>

If divisible by 10, it's valid. **Return true**<br/>
Else it's invalid. **Return false**

<br/><br/><br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm start`
