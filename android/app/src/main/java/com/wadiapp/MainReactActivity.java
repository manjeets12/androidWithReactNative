package com.wadiapp;

import android.app.Activity;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nullable;

public class MainReactActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */


    @Override
    protected String getMainComponentName() {
        return "wadiApp";
    }


    public static class TestActivityDelegate extends ReactActivityDelegate {
        private static final String CITY_NAME = "CITY_NAME";
        private Bundle mInitialProps = null;
        private final @Nullable Activity mActivity;

        public TestActivityDelegate(Activity activity, String mainComponentName) {
            super(activity, mainComponentName);
            this.mActivity = activity;
        }

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            Bundle bundle = mActivity.getIntent().getExtras();
            if (bundle != null && bundle.containsKey(CITY_NAME)) {
                mInitialProps = new Bundle();
                mInitialProps.putString(CITY_NAME, bundle.getString(CITY_NAME));
            }
            super.onCreate(savedInstanceState);
        }

        @Nullable
        @Override
        protected Bundle getLaunchOptions() {
            return mInitialProps;
        }
    }
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new TestActivityDelegate(this, getMainComponentName());
    }
}
