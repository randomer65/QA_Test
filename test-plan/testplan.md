## Overview
The web page contains an Increment button, a Decrement button and counter initialized to 0.
The counter should display positive numbers only, it should increment and decrement when pressed accordingly.

## Test Framework
The e2e testing framework is cypress and the tests can be run on https://github.com/randomer65/QA_Test.
Select Actions, the most recent passing test, and re-run all jobs.
To run locally, 
npx http-server -p 3000 & 
npx cypress run

## Tests
- Smoke test: Open the web page, press Increment and verify the counter shows 1.
- Happy path: Open the web page, Increment several times, decrement, check values.
- Several increments: Open the web page, press Increment several hundred times and check the value after each increment.
- Single decrement: Open the web page, decrement once. This test currently fails as the counter shows -1, therefore this test is skipped. 
- Several increments and decrements: Increment say 200 times, then decrement 200 times and check the counter values.
 
## Ideas for Further Tests
- Random walk: Increment/Decrement repeatedly at random and check the counter never shows a negative value.
- Localization: Check the text on the buttons/counter.
- Performance/stress test: Increment several thousand times, check time taken etc.
