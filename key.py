# For Windows
# http://stackoverflow.com/questions/1823762/sendkeys-for-python-3-1-on-windows
# https://stackoverflow.com/a/38888131

import win32con
import win32gui
import time, sys
import pydirectinput

# https://github.com/learncodebygaming/pydirectinput/blob/a585d044aed678576fefd24e7ad0c5945ab52366/pydirectinput/__init__.py#L48
# The keys on the left are keys as defined in config.js, the keys on the right are the inputs to be sent
keymap = {
    "Up": 'up',
    "Left": 'left',
    "Down": 'down',
    "Right": 'right',
    "b": 'b',
    "a": 'a',
    "y": 'y', # for DS
    "x": 'x', # for DS
    "s": 's', # Start
    "e": 'e', # Select
}

def SimpleWindowCheck(windowname):
    window = None
    try:
        window = win32gui.FindWindow(windowName, None)
    except win32gui.error:
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
    # winId = None

    if not (winId):
        windowList = []
        
        def enumHandler(hwnd, list):
            if windowName in win32gui.GetWindowText(hwnd):
                list.append(hwnd)
        
        win32gui.EnumWindows(enumHandler, windowList)
        # only the first id, may need to try the others
        winId = windowList[0]

        # can check with this
        for hwnd in windowList:
            hwndChild = win32gui.GetWindow(hwnd, win32con.GW_CHILD)
            # print("window title/id/child id: ", win32gui.GetWindowText(hwnd), "/", hwnd, "/", hwndChild)

    win32gui.ShowWindow(winId, win32con.SW_SHOWNORMAL)
    win32gui.SetForegroundWindow(winId)
		
		# this way has to keep window in focus
    pydirectinput.press(keymap[key])