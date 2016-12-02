package com.sag.sum.Calculator;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class Calculator extends CordovaPlugin {
    operationTask otObject = new operationTask();
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        System.out.println("action :"+action+" , args :"+args+" , callbackContext :"+callbackContext);
        int first = args.getInt(0);
        int second = args.getInt(1);
        System.out.println("first : "+first+" ,second : "+second);

           if (action.equals("add")) {
               int res = otObject.add(first, second);
               String strI = Integer.toString(res);
               System.out.println("res : " + strI);
               callbackContext.success(strI);

           }else if(action.equals("sub")){
               int res = otObject.sub(first, second);
               String strI = Integer.toString(res);
               System.out.println("res : " + strI);
               callbackContext.success(strI);
           }else if(action.equals("mul")){
               int res = otObject.mul(first, second);
               String strI = Integer.toString(res);
               System.out.println("res : " + strI);
               callbackContext.success(strI);
           }else if(action.equals("div")){
               int res = otObject.div(first, second);
               String strI = Integer.toString(res);
               System.out.println("res : " + strI);
               callbackContext.success(strI);
           }

        return false;
    }
    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }



}