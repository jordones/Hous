# BBHMR

## installing requirements

### Android studio
before running the app make sure react native is installed, follow instructions at https://blog.cloudboost.io/react-native-setup-on-macos-aedb1a44f527

make sure you have android studio installed - download @ https://developer.android.com/studio/
after its downloaded make sure that you download the android emulator and create an android device.
in the CLI you should be able to run `emulator -list-avds` and your android devices should be listed.

To list your AVDs use :
`./emulator -list-avds`

to run an emulator:
```
cd ~/Library/Android/sdk/tools
./emulator -avd {AVD_NAME}
```

## running the app
Install npm if you haven't already. https://www.npmjs.com/get-npm

* run `npm install`
* run your android emulator `./emulator -avd {AVD_NAME}`
* run `expo start`
* start the app on the emulator by pressing `Run on Android device/emulator` on the left hand pane of expo

