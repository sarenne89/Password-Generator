# Password-Generator

Week 5 Challenge - Advanced Javascript

## Description

In this weeks challenge, we have been tasked with creating a responsive page with a password generator. The password should include 8-128 characters from lowercase, uppercase, numeric and special characters chosen at random by the generator.
The method I chose for this challenge was to give the user a series of confirm/prompts, and to put the data from those decisions into an object. I then used that object to determine which arrays should be used to create the password, and put those selected arrays into a new array.
The program then generates the requested number of random characters from this array. In order to ensure that at least one character is chosen from each array, I have put in checks that test whether a character type has been selected, and if so a character from that array is spliced in at a specific index.
The new password array is then shuffled randomly before being joined into a new string and displayed for the user.

## Installation

Visit https://sarenne89.github.io/Password-Generator in your browser.

## Usage

[Screenshot showing the functioning password generator](assets/Screenshot%202024-01-07%20125452.png)

--

## Credits

edX Bootcamp instructors

## License

MIT License

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Features

Console logging of financial data that has been manipulated using Javascript.

## Tests

Code can be inspected via the Google Chrome 'Inspect' option and selecting the console when opening the HTML file.
