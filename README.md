# _Programming Language Selector_

#### _Takes a name and number and gives a rhyme with numbers up to the one inputed_

#### By _**Diego Serafico**_

**https://diegoserafico.github.io/robogers-neighborhood/**

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _JavaScript_

## Description

_In this page you enter your name and number and it gives a rhyme with numbers up to the one inputed. For any number including 1 it gives a Beep!, for 2 it gives a Boop! and for 3 it asks Won't you be my neighbor? with the inputed name added to it. For example if you give Diego 5 it will give "0 Beep! Boop! Won't you be my neighbor Diego?". Once this is done it will give the option to reverse the order._

## Setup/Installation Requirements

* _Clone this repository_
* _Navigate to the top level of the directory_
* _Open index.html_

## Known Bugs

* _N/A_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Diego Serafico

## Contact Information

_Diego Serafico **dseraficohernandez@gmail.com**_



Describe beepBoop()

Test: "It will check if its handed a number"
Code: beepBoop("hello");
Expected Output: NaN

Test: "It will return the numbers up to the inputed"
Code: beepBoop(10);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Test: "It will return the output with the word Beep! if the number includes a 1"
Code: beepBoop(10);
Expected Output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]

Test: "It will return the output with the question "Won't you be my neighbor?" if the number includes a 3"
Code: beepBoop(13);
Expected Output: [0, "Beep!", 2, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Won't you be my neighbor?"]

Test: "It will return the output with the word "Boop!" if the number includes a 2"
Code: beepBoop(13);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

Test "It will return the output with the inputer name at the end of the question for number 3 case"
Code: beepBoop("Diego", 3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor Diego?"]

Test "It will return the output in reversed order"
Code: beepBoop("Diego", 3).reverse();
Expected Output: ["Won't you be my neighbor Diego?", "Boop!", "Beep!", 0]

Test "It will return the output as a string with spaces"
Code: beepBoop("Diego", 3).join();
Expected Output: "0 Beep! Boop! Won't you be my neighbor Diego?"