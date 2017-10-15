package com.wadiapp;

import android.app.Activity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by manjeet on 15/10/17.
 */

public class CustomModule extends ReactContextBaseJavaModule {

    public CustomModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomModule";
    }

    /*
    * call this method to go back to previos activity
    * */
    @ReactMethod
    public void finish() {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            activity.finish();
        }
    }
}
