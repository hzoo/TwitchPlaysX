# For Windows
# http://stackoverflow.com/questions/1823762/sendkeys-for-python-3-1-on-windows

import win32api
import win32con
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

import win32gui
# hwndMain = win32gui.FindWindow("Notepad", None)
# hwndChild = win32gui.GetWindow(hwndMain, win32con.GW_CHILD)
# temp = win32api.PostMessage(hwndChild, win32con.WM_CHAR, 0x44, 0)

def sendKey(button):
    win32api.keybd_event(keymap[button], 0, 0, 0)
    time.sleep(keyDelay)
    win32api.keybd_event(keymap[button], 0, win32con.KEYEVENTF_KEYUP, 0)

if __name__ == "__main__":
    # win = win32ui.FindWindow(None, sys.argv[1])
    # win.SetForegroundWindow()
    # win.SetFocus()
    # sendKey(sys.argv[2])
    
    # win2 = win32gui.FindWindow(sys.argv[1], None)
    win2 = win32gui.FindWindow("VisualBoyAdvance-M", None)
    # hwndChild = win32gui.GetWindow(win2, win32con.GW_CHILD)
    # temp = win32api.PostMessage(hwndChild, win32con.WM_CHAR, 0x42, 0)
    temp = win32api.PostMessage(win2, win32con.WM_CHAR, 0x42, 0)

# https://stackoverflow.com/a/38888131