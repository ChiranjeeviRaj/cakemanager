package uk.waracle.cakemanager;

public class CakeNotFoundException extends RuntimeException {

    public CakeNotFoundException(String exe) { super(exe); }
}
