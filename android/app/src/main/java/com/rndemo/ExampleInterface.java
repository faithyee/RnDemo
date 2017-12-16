package com.rndemo;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.rndemo.utils.LogUtils;

import static android.app.Activity.RESULT_OK;

/**
 * Created by faith_yee on 2017/12/13.
 */

public class ExampleInterface extends ReactContextBaseJavaModule{

    private static final String TAG = "ExampleInterface";
    private ReactApplicationContext mContext;
    private ActivityEventListener mActivityEventListener = new BaseActivityEventListener(){
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            super.onActivityResult(activity, requestCode, resultCode, data);
            if(requestCode != 1 || resultCode != RESULT_OK) return;
            Uri contactData = data.getData();
            Cursor cursor = activity.managedQuery(contactData, null, null, null, null);
            cursor.moveToFirst();
            String toRnMessage = getContactInfo(cursor);
            sendMessage(toRnMessage);
            if(toRnMessage != null)interfacePromise.resolve(toRnMessage);

        }




    };

    private Promise interfacePromise;



    public ExampleInterface(ReactApplicationContext reactContext) {

        super(reactContext);
        mContext = reactContext;
        reactContext.addActivityEventListener(mActivityEventListener);
    }



    @Override
    public String getName() {
        return "ExampleInterface";//在ReactNative侧使用这个名字来调用原生代码模块提供的其他函数。
    }

    /**
     * 接收Rn发来的消息。
     * 原生代码处理消息的函数，注意这些函数不能有返回值
     * @param aMessage
     */
    @ReactMethod
    public void HandlerMessage(String aMessage){
//        LogUtils.i(TAG, "receive msg from rn: " + aMessage);
//        Toast.makeText(mContext, "receive msg from rn: " + aMessage, Toast.LENGTH_SHORT).show();

        //读取联系人号码，并发送给RN
        Intent intent = new Intent(Intent.ACTION_PICK);
        Bundle b = new Bundle();
        intent.setType(ContactsContract.Contacts.CONTENT_TYPE);
        mContext.startActivityForResult(intent, 1, b);
    }

    /**
     * 使用promise机制通信
     * @return
     */
    @ReactMethod
    public void HandlerPromiseMessage(String aMessage, Promise aPromise){
        interfacePromise = aPromise;//将收到的Promise变量保存备用

        //读取联系人号码，并发送给RN
        Intent intent = new Intent(Intent.ACTION_PICK);
        Bundle b = new Bundle();
        intent.setType(ContactsContract.Contacts.CONTENT_TYPE);
        mContext.startActivityForResult(intent, 1, b);
    }




    //getContactInfo函数取出用户选择的联系人的姓名与电话号码，按某规则生成结果字符串
    private String getContactInfo(Cursor cursor){

        try {
//            int makeException = 2/0;  //如果打开注释，会制造一个异常，触发reject操作
            String name = "";
            String phoneNun = "";
            int idColumn = cursor.getColumnIndex(ContactsContract.Contacts._ID);
            String contactId = cursor.getString(idColumn);
            String queryString = ContactsContract.CommonDataKinds.Phone.CONTACT_ID + "=" + contactId;
            Uri uri = ContactsContract.CommonDataKinds.Phone.CONTENT_URI;
            Cursor phone = mContext.getContentResolver().query(uri, null, queryString, null, null);
            String dn = ContactsContract.Contacts.DISPLAY_NAME;
            String pn = ContactsContract.CommonDataKinds.Phone.NUMBER;

            if(phone.moveToFirst()){
                for(; !phone.isAfterLast(); phone.moveToNext()){
                    dn = name = cursor.getString(cursor.getColumnIndex(dn));

                    phoneNun = phone.getString(phone.getColumnIndex(pn));
                }
                phone.close();
            }
            String result = "{ \"msgType\":\"pickContactResult\", \"displayName\":\""+name+"\", \"peerNumber\":\""+phoneNun+"\"}";
            return result;
        }catch (Exception e){
            interfacePromise.reject("error while get contact", e);
        }

        return null;

    }


    /**
     * 此函数用来向Rn侧发送消息，"AndroidToRnMessage"需要和Rn里定义的一致
     * @param aMessage
     */
    public void sendMessage(String aMessage){

        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("AndroidToRnMessage", aMessage);

    }




}
