# SIN Validator
**Rules:**
Has to be 9 digits

121 212 <--- Invalid sin
121 212 121 <--- Invalid sin
046 454 286 <--- A fictitious, but valid, SIN.

The way a SIN is then validated is by multiplying every second digit by 2

=== 0 4 6 4 5 4 2 8 6
=== 0 8 6 8 5 8 2 16 6

then, add all of the digits together (note that 16 is treated as +1+6. NOT +16)

0 + 8 + 6 + 8 + 5 + 8 + 2 + 1+6 + 6 = 50

If divisible by 10, it's valid. **Return** **true**
Else it's invalid. **Return false**



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm start`
