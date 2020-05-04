# For Windows
# http://stackoverflow.com/questions/1823762/sendkeys-for-python-3-1-on-windows
# https://stackoverflow.com/a/38888131

import win32api
import win32con
import win32gui
import win32ui
import time, sys

keyDelay = 0.1
# https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes
keymap = {
    "Up": 0x26, # win32con.VK_UP,
    "Left": win32con.VK_LEFT,
    "Down": win32con.VK_DOWN,
    "Right": win32con.VK_RIGHT,
    "b": 0x42, # ord("B"),
    "a": 0x41, # ord("A"),
    "y": 0x59, # ord("Y"),  # for DS
    "x": 0x58, # ord("X"),  # for DS
    "s": 0x53, # ord("S"),  # Start
    "e": 0x45, # ord("E"),  # Select
}

# this way has to keep window in focus
def sendKey(button):
    win32api.keybd_event(keymap[button], 0, 0, 0)
    time.sleep(keyDelay)
    win32api.keybd_event(keymap[button], 0, win32con.KEYEVENTF_KEYUP, 0)

def SimpleWindowCheck(windowname):
    window = None
    try:
        window = win32gui.FindWindow(windowName, None)
    except win32ui.error:
        try: 
            window = win32gui.FindWindow(None, windowName)
        except win32gui.error:
            return False
        else:
            return window
    else:
        return window

if __name__ == "__main__":
    windowName = sys.argv[1]
    key = sys.argv[2]

    winId = SimpleWindowCheck(windowName)
    
    if not (winId):
        windowList = []
        
        def enumHandler(hwnd, list):
            if windowName in win32gui.GetWindowText(hwnd):
                # print("window text: ", win32gui.GetWindowText(hwnd))
                list.append(hwnd)
        
        win32gui.EnumWindows(enumHandler, windowList)
        winId = windowList[0]
        # print("window id: ", winId)

    win32gui.ShowWindow(winId, win32con.SW_SHOWNORMAL)
    win32gui.SetForegroundWindow(winId)
    sendKey(key)