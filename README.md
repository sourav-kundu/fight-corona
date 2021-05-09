# Real-Time Alerts for available Vaccine Slots near you for 18+

This utility uses browser automation using Playwright to search for available vaccine slots near your specified pincodes in the `pincode.json` file. Follow the steps below to install the required dependencies and use this utility to generate strong alerts in your Laptop/PC within 5 seconds of real-time availability of slots near you.

## How to use this utility?

1. You need to [install nodeJS](https://nodejs.org/en/download/){:target="_blank"} in your laptop/PC (if not already installed).
2. Clone this repository using `git clone https://github.com/sourav-kundu/fight-corona` (if you have git installed). You can also download the code using the download code option in GitHub.
3. Once you have the code and have installed nodeJS, run `npm install` from within the directory using command prompt / terminal.
4. The next step is to configure the PINCODE(s) near you where you think you will be able to get vaccinated. You need to edit the file `pincode.json` with your required pincodes.
5. You're all set. Run the utility using `npm start` and you will see a browser open up and keep checking the availability non-stop in real-time. 
6. Once a slots becomes available, the alert sound `foo.mp3` will start playing on your laptop/PC and the PINCODE where the slot is available, will be printed on the console, so that you can quickly login to Cowin website and book your slot.
7. Once you are done using this utility, just press `Ctrl+C` in your keyboard. The utility will gracefully exit.

Use this utility to book a slot for 18-44 adults anywhere in India. Go get vaccinated!

## Contributions

If you want to improve this utility, you can send PRs along with a short explanation regarding why you think the change is necessary.s
