var elements = UIATarget.localTarget().frontMostApp().mainWindow().elements();
for (var i = 0; i < elements.length; i++) {
        var el1 = elements[i];
        var el2 = elements[i];
        var equals = (el1 == el2);
        UIALogger.logMessage(el1.label() + " is equal to " + el2.label() + " ? " + equals);
}