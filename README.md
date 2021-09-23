# testing-android-app-bundle-with-appium
- This repo includes sample code for demonstration on [Testing Android App Bundle with Appium](https://confengine.com/conferences/appium-conf-2021/proposal/15671/testing-android-app-bundle-with-appium), Appium Conf 2021.
- [The slide](https://www.slideshare.net/MasayukiWakizaka/testing-android-app-bundle-with-appium)
- [The movie](https://www.youtube.com/watch?v=zJqr94fTFJk)

## Preparation
1. Prepare `npm` and `node`
    - In my case
        ```
        $ node -v
        > v12.13.1
        $ npm -v
        > 6.12.1
        ```
2. `npm install`

## How to kick sample test scirpt
1. Start an Android emulator (in my case API 29)
2. Generate an APK Set archive file
    ```
    java -jar bundletool.jar build-apks --bundle app-release.aab --output app.apks --ks sign --ks-key-alias key0 --ks-pass pass:mwakizaka
    ```
3. Add path to `bundletool` to your PATH environment variable
    ```
    export PATH=$PATH:<path/to/bundletool>
    ```
4. Start an appium server
    ```
    ./node_modules/.bin/appium
    ```
5. Launch another terminal, and change the following line of `test_aab.js`
    ```
    app: "<path/to/app.apks>"
    ```

6. Start a test script
    ```
    node test_aab.js
    ```

