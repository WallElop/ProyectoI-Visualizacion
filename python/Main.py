from tkinter import * 
from Icicle import *
from Sunburst import *
window = Tk() 
window.title("Welcome to LikeGeeks app") 
window.geometry('350x200')
btn = Button(window, text="Radial", command=sunburst)
btn2 = Button(window, text="Adyacencia", command=icicleID)
btn.grid(column=1, row=0)
btn2.grid(column=2, row=0)
window.mainloop()