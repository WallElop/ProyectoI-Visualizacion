import plotly.express as px
import pandas as pd
import numpy as np

def sunburst():
    df = pd.read_csv("C:\\Users\\wEDOw\\Documents\\GitHub\\ProyectoI-Visualizacion\\Exports-2019---Click-to-Select-a-Product.csv")
    df = df.assign(centro="Exportanciones")
    fig = px.sunburst(
        df,
        path = ['centro','Section','HS2','HS4', 'TradeValue'],
        values = 'TradeValue', 
        maxdepth = 3,
        title ="Exportaciones, Costa Rica, 2019",
        color ='TradeValue',
        color_continuous_scale='blugrn',
    )
    fig.update_layout(
        margin = dict(t=50, l=25, r=25, b=25),
        font_family= 'Arial',
        font_size = 20,
        title_font_color = 'BLACK' ,
        title_xanchor='auto',
    )
    fig.show()

